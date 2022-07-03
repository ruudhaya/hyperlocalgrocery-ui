import React from 'react'
import { FormControl, InputGroup, Button, Form } from 'react-bootstrap'

const SearchBox = (props) => {
  // const [ updateFilter ] = props
  const submitHandler = () => {

  }
  return (
    <>
      <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup className="col-3">
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => { props.updateFilter(e.target.value) }}
          placeholder="Search Products"
          aria-label="Search Products"
          aria-describedby="search_product"
        ></FormControl>
        <Button variant="outline-primary" type="submit" id="search_product">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
    </>
  )
}

export default SearchBox