import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	Title,
	SkillsContainer,
	SkillsTrack,
	SkillBubble,
} from './SkillsSection.styles';
import { useScrollAnimation } from './Hooks/useScrollAnimation';

export default function SkillsSection({ skills }) {
	const [isMobile, setIsMobile] = useState(false);
	const {
		firstTrackRef,
		secondTrackRef,
		handlePointerDown,
		handlePointerMove,
		endDrag,
	} = useScrollAnimation(isMobile);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 600);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const allSkills = Object.values(skills).flat();
	const duplicatedSkills = [...allSkills, ...allSkills];

	const half = Math.ceil(allSkills.length / 2);
	const firstHalf = allSkills.slice(0, half);
	const secondHalf = allSkills.slice(half);

	const duplicatedFirstHalf = [...firstHalf, ...firstHalf];
	const duplicatedSecondHalf = [...secondHalf, ...secondHalf];

	const buildKeyed = (items, prefix) => {
		const countsByLabel = new Map();
		return items.map((label) => {
			const nextCount = (countsByLabel.get(label) || 0) + 1;
			countsByLabel.set(label, nextCount);
			return { key: `${prefix}-${label}-${nextCount}`, label };
		});
	};

	const firstTrackItems = isMobile
		? buildKeyed(duplicatedFirstHalf, 'first-mobile')
		: buildKeyed(duplicatedSkills, 'first-desktop');

	const secondTrackItems = buildKeyed(duplicatedSecondHalf, 'second-mobile');

	return (
		<Section>
			<Title>Technologies & Skills</Title>
			<SkillsContainer>
				<SkillsTrack
					ref={firstTrackRef}
					onPointerDown={(e) => handlePointerDown(e, 'first')}
					onPointerMove={handlePointerMove}
					onPointerUp={endDrag}
					onPointerCancel={endDrag}
					onPointerLeave={endDrag}
				>
					{firstTrackItems.map((item) => (
						<SkillBubble key={item.key}>{item.label}</SkillBubble>
					))}
				</SkillsTrack>
				{isMobile && (
					<SkillsTrack
						reverse
						ref={secondTrackRef}
						onPointerDown={(e) => handlePointerDown(e, 'second')}
						onPointerMove={handlePointerMove}
						onPointerUp={endDrag}
						onPointerCancel={endDrag}
						onPointerLeave={endDrag}
					>
						{secondTrackItems.map((item) => (
							<SkillBubble key={item.key}>{item.label}</SkillBubble>
						))}
					</SkillsTrack>
				)}
			</SkillsContainer>
		</Section>
	);
}

SkillsSection.propTypes = {
	skills: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
