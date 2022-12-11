import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ContainerContact, TitleSection, SubTitleSection, ContainerContent, ContainerDesc, ContainerForm, BtnForm } from './contact_styled';


const Contact = () => {
  return (
    <ContainerContact id="contact">
        <TitleSection>Get in touch!</TitleSection>
        <SubTitleSection>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
        </SubTitleSection>

        <ContainerContent>
            <ContainerDesc>
                <TitleSection>Lets talk about a project</TitleSection>
                <SubTitleSection>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde repellendus delectus facilis quia consequatur maxime perferendis! Sequi, modi consequatur.
                </SubTitleSection>
            </ContainerDesc>
            <ContainerForm>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    </Form.Group>
                   
                    <BtnForm type="submit">
                        Submit
                    </BtnForm>
                </Form>
            </ContainerForm>
        </ContainerContent>

    </ContainerContact>
  )
}

export default Contact;