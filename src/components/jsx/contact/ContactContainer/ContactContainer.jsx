import React from 'react';
import ContactForm from 'src/components/jsx/contact/ContactForm/ContactForm';
import SocialLinks from 'src/components/jsx/contact/SocialLinks/SocialLinks';
import { Container, Title, Description } from './ContactContainer.styles';

const ContactContainer = () => {
	return (
		<Container>
			<Title>Get in Touch</Title>
			<Description>
				Feel free to reach out using the form below or connect with me
				on social media.
			</Description>

			<ContactForm />
			<SocialLinks />
		</Container>
	);
};

export default ContactContainer;
