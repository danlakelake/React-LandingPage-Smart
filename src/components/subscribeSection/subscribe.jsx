import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ContainerSubscribe, TitleSection, SubTitleSection, ContainerTitle, ContainerInput, BtnForm} from './subscribe_styled';

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
                <BtnForm type="submit">
                Subscribe
                </BtnForm>
            </InputGroup>
      </ContainerInput>
    </ContainerSubscribe>
  )
}

export default Subscribe;