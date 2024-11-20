
import { useState, useRef } from 'react';
import Footer from "../components/Footer";
import Header from "../routeComponents/Header";
import ParticlesBackground from "../components/Particles/Particles.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollComponent from "./scrollcomponent/scroll";

import emailjs from 'emailjs-com';
import WhereWeOperate from './WhereWeOperate';




const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert('Opps! Something went wrong')
  };


  const scrollRef= useRef(null);
  return (
    <div>
      <Header />
      <ParticlesBackground />
      
      <WhereWeOperate/>
      {/* <div className="home-main-container">
        <div className="home-contents">
         <h1 className="">Get in Touch</h1>
         <p className='page-para'>
         Do you have questions about our Products and/or Services? Would you like to arrange a non-binding consultation? Do you have general questions?<br />
         Please use our contact form. We look forward to hearing from you!
         </p>
        </div>
      </div> */}
      
      <Container className='contact-form-main'>
        <Row>
          <Col md={8}>
          <p style={{fontSize:"24px"}} className='px-2 pb-2'>SEND US A MESSAGE</p>
          <Container>
            <Form noValidate>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Salutation</Form.Label>
                    <Form.Control type="text" placeholder="Enter salutation (eg. Mr./Mrs./ Dr.)" />
                  </Form.Group> 
                </Col>
                <Col md={9}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group> 
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email" />
                  </Form.Group> 
                </Col>
              </Row>
           
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>How can we help you?</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <button className="btn btn-outline-light mt-1" onClick={handleOnSubmit}>
                Submit
              </button> 
            </Form> 
          </Container>
          </Col>
          <Col md={4}>
          <div className="px-md-5 py-sm-5 con-info-box">
            <p style={{fontSize:"24px", fontWeight:"600"}}>CONTACT INFORMATION</p>
            <div className='my-3 contact-item'>
              <i class="bi bi-telephone-outbound-fill" style={{fontSize: "1.3rem"}}></i>
              <a href='tel:+233(0)322499410' className='contact-link'>+233(0)322499410</a>
            </div>
            <div className='my-3 contact-item'>
              <i class="bi bi-telephone-outbound-fill" style={{fontSize: "1.3rem"}}></i>
              <a href='tel:+233(0)541383614' className='contact-link'>+233(0)541383614</a>
            </div>
            <div className='my-3 contact-item'>
              <i class="bi bi-telephone-outbound-fill" style={{fontSize: "1.3rem"}}></i>
              <a href='tel:+233(0)595381829' className='contact-link'>+233(0)595381829</a>
            </div>
            <div className='my-3 contact-item'>
            <i className="bi bi-envelope-at-fill" style={{fontSize: "1.5rem"}}></i>
            <a href='mailto:sales@mizpahgh.com' className='contact-link'>sales@mizpahgh.com</a>
           </div>
           <div className='my-3 contact-item'>
             <i className="bi bi-envelope-at-fill" style={{fontSize: "1.5rem"}}></i>
             <a href='mailto:info@mizpahgh.com' className='contact-link'>info@mizpahgh.com</a>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
      <div className='margin-to-footer'>
        fdfd
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
