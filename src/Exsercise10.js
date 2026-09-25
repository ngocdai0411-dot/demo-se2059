import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function HeaderBanner() {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center bg-dark pe-3'>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Pizza House</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className='d-flex align-items-center'>
          <input type='text' className='form-control me-2' />
          <span className='input-group-text bg-danger text-white me-2'>
            <CiSearch />
          </span>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img src="https://cdn.babyseo.ai/images/foodshot.ai/pizza-shop-photos/pizza-shop-photos-styling-behind-the-scenes-hero.webp"
              alt="First side"
              className="d-block w-100"
              style={{height: '400px', objectFit: 'cover'}}
              />

          <Carousel.Caption>
            <h3>Neapolitan Pizza</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

function Exsercise10({pizza}) {
  if(!pizza) return null;
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.image} style={{height: '200px', objectFit: 'cover'}}/>
      <Card.Body>
        <Container className='text-center'>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          ${pizza.cost}
        </Card.Text>
        </Container>
        <Button variant="dark" className='w-100 mt-2'>Buy</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Exsercise10;