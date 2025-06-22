import React from 'react';
import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const Form = styled.form`
	max-width: 600px;
	margin: 0 auto;
`;

const FormGroup = styled.div`
	margin-bottom: 1.5rem;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-weight: 500;
	color: ${COLORS.white};
`;

const Input = styled.input`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid ${getRgbaColor(COLORS.grayLight)};
	border-radius: 0.375rem;
	background: ${COLORS.offWhite};
	color: ${COLORS.black};
	font-size: 1rem;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${COLORS.semiSurfacePrimary};
		box-shadow: 0 0 0 6px ${getRgbaColor(COLORS.semiSurfacePrimary, 0.2)};
	}

	&::placeholder {
		color: ${COLORS.gray};
	}
`;

const TextArea = styled.textarea`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid ${getRgbaColor(COLORS.grayLight)};
	border-radius: 0.375rem;
	background: ${COLORS.offWhite};
	color: ${COLORS.black};
	font-size: 1rem;
	min-height: 150px;
	resize: vertical;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${COLORS.semiSurfacePrimary};
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.semiSurfacePrimary, 0.2)};
	}

	&::placeholder {
		color: ${COLORS.gray};
	}
`;

const SubmitButton = styled.button`
	padding: 0.75rem 1.5rem;
	background: ${COLORS.cardSurfaceBackground};
	color: ${COLORS.white};
	border: none;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${COLORS.surfaceBlend1};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.semiSurfacePrimary, 0.2)};
	}

	&:disabled {
		background: ${getRgbaColor(COLORS.semiSurfacePrimary)};
		cursor: not-allowed;
	}
`;

export default class ContactForm extends React.Component {
	handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new window.FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		try {
			// Here you would typically send the form data to your backend
			// For now, we'll just log it and show a success message
			console.log('Form data:', data);
			window.alert('Thank you for your message! I will get back to you soon.');
			e.target.reset();
		} catch (error) {
			console.error('Error submitting form:', error);
			window.alert(
				'Sorry, there was an error sending your message. Please try again later.'
			);
		}
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit} id="contact-form">
				<FormGroup>
					<Label htmlFor="name">Name</Label>
					<Input type="text" name="name" id="name" required />
				</FormGroup>

				<FormGroup>
					<Label htmlFor="email">Email</Label>
					<Input type="email" name="email" id="email" required />
				</FormGroup>

				<FormGroup>
					<Label htmlFor="subject">Subject</Label>
					<Input type="text" name="subject" id="subject" required />
				</FormGroup>

				<FormGroup>
					<Label htmlFor="message">Message</Label>
					<TextArea name="message" id="message" rows="6" required />
				</FormGroup>

				<SubmitButton type="submit">Send Message</SubmitButton>
			</Form>
		);
	}
}
