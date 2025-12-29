import React from 'react';
import {
	Form,
	FormGroup,
	Label,
	Input,
	TextArea,
	SubmitButton,
} from './ContactForm.styles';

export default class ContactForm extends React.Component {
	handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new window.FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		try {
			console.log('Form data:', data);
			window.alert(
				'Thank you for your message! I will get back to you soon.'
			);
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
