import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Exsercise10, {HeaderBanner} from './Exsercise10'
import img4 from "./image/p1.jpg"
import img5 from "./image/p2.jpg"
import img6 from "./image/p3.avif"
import img7 from "./image/p4.jpg"
import { Button, Form, Container, Col, Row } from 'react-bootstrap';

function App() {
const menu = [
  {id: 1, name: "Margherita Pizza", cost: "25.00", badge: "Sale", image: img4},
  {id: 2, name: "Mushroom Pizza", cost: "35.00", badge: "Null", image: img5},
  {id: 3, name: "Hawaiian Pizza", cost: "30.00", badge: "New", image: img6},
  {id: 4, name: "Pesto Pizza", cost: "45.00", badge: "Sale", image: img7}
]

  return (
    <div className='bg-dark min-vh-100 pb-5'>
      <HeaderBanner/>

      <Container>
        <h2 className='mt-3 mb-4 text-white'>Our menu</h2>
        <Row>
          {menu.map((pizza) => (
           <Col md={3} key={pizza.id} className="mb-4">
              <Exsercise10 pizza={pizza}/>
           </Col>
        ))}
        </Row>
      </Container>

      <Container>
        <h2 className='text-white mt-3 mb-4 text-center'>Book Your Table</h2>
        <form>
          <Row className='mb-3'>
            <Col md={4}>
            <Form.Control type="text" placeholder="Your name..."/>
            </Col>
            <Col md={4}>
            <Form.Control type="text" placeholder="Your name..."/>
            </Col>
            <Col md={4}>
            <Form.Select defaultValue = "Select a Service">
              <option value="Select a Service">Please select a service</option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3+ Persons</option>
            </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
              <Form.Control as="textarea" rows={5} placeholder="Please write your"/>
            </Col>
          </Row>
          <Button variant="warning" type="submit" className="text-white px-4 fw-bold">Send Message</Button>
        </form>
      </Container>
    </div>
  )
}

export default App