import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(35, 55, 255, 0.1);
  }
`;

const TextArea = styled.textarea`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(35, 55, 255, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: var(--accent);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    background-color: var(--accent-dark);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(35, 55, 255, 0.1);
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
      window.alert('Sorry, there was an error sending your message. Please try again later.');
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="contact-form">
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            name="subject"
            id="subject"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            name="message"
            id="message"
            rows="6"
            required
          />
        </FormGroup>

        <SubmitButton type="submit">
          Send Message
        </SubmitButton>
      </Form>
    );
  }
} 