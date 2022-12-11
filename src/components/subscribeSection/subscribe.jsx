import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ContainerSubscribe, TitleSection, SubTitleSection, ContainerTitle, ContainerInput } from './subscribe_styled';

const Subscribe = () => {
  return (
    <ContainerSubscribe id="subscribe">
        <ContainerTitle>
            <TitleSection>Get latest updates!</TitleSection>
            <SubTitleSection>We never spam your email</SubTitleSection>
        </ContainerTitle>
        <ContainerInput>
            <InputGroup className="mb-3">
                <Form.Control className='w-20'
                placeholder="Enter your email"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Subscribe
                </Button>
            </InputGroup>
      </ContainerInput>
    </ContainerSubscribe>
  )
}

export default Subscribe;