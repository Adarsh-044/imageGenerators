import React, { useState } from 'react'
import { Form, Button, Input, Row, Col, Label } from "reactstrap"

const SearchBar = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  const inputBox = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value)
    setValue('');
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="row-cols-lg-auto d-flex justify-content-center g-2 align-items-center">
          <Col className='w-25 m-3'>
            <Label
              className="visually-hidden"
              for="searchTerm"
            >
            </Label>
            <Input
              id="searchTerm"
              name="term"
              placeholder="Enter the keyword for images"
              type="text"
              value={value}
              onChange={inputBox}
            />

          </Col>

          <Col className='m-1'>
            <Button
              type="submit"
              color="secondary"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default SearchBar
