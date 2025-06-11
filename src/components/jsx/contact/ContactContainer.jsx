import React from 'react';
import styled from '@emotion/styled';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const Container = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
`;

const ContactContainer = () => {
    return (
        <Container>
            <Title>Get in Touch</Title>
            <Description>
                Feel free to reach out using the form below or connect with me on social media.
            </Description>

            <ContactForm />
            <SocialLinks />
        </Container>
    );
};

export default ContactContainer; 