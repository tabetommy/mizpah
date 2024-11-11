
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

const SERVICE_ID = "service_pocvf9l";
const TEMPLATE_ID = "template_1bsizph";
const PUBLIC_KEY = "7z-0h1DpdEQ__bPll";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  // 
  //   setValidated(true);
  };
  const scrollRef= useRef(null);
  return (
    <div>
      <Header />
      <ParticlesBackground />
      
      <div className="home-main-container">
        <div className="home-contents">
         <h1 className="contact-title">Get in Touch</h1>
         <p className='page-para'>
         Do you have questions about our Products and/or Services? Would you like to arrange a non-binding consultation? Do you have general questions?<br />
         Please use our contact form. We look forward to hearing from you!
         </p>
        </div>
      </div>
      <ScrollComponent scrollreference={scrollRef}/>
      
      <Container className='contact-form-main'>
        <Row>
          <Col>
          <form class="formContainer" onSubmit={handleOnSubmit}>
              <h2>Send me a message. Let's have a chat!</h2>
              <div class="formElement">
                  <label for="from_name">Name</label>
                  <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
              </div>
          
              <div class="formElement">
                  <label>E-mail</label>
                  <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
              </div>
          
              <div class="formElement">
                  <label for="message">Message</label>
                  <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
              </div>
              <button type='submit' className='formButton'>Submit</button>
          </form>
            {/* <Form onSubmit={handleOnSubmit}>
            
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Salutation</Form.Label>
                <Form.Control type="text" placeholder="Enter salutation (eg. Mr./Mrs./ Dr.)" />
              </Form.Group> 
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email" />
              </Form.Group> 
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>How can we help you?</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button> 
            </Form> */}
          </Col>
        </Row>
        <Row className='my-5'>
          <Col>You can alternatively make use of our Contact Infos</Col>
        </Row>
        <Row className='my-5'>
          <Col>
            <p>Phone Numbers</p>
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
          </Col>
          <Col>
           <p>Emails</p>
           <div className='my-3 contact-item'>
            <i className="bi bi-envelope-at-fill" style={{fontSize: "1.5rem"}}></i>
            <a href='mailto:sales@mizpahgh.com' className='contact-link'>sales@mizpahgh.com</a>
           </div>
           <div className='my-3 contact-item'>
             <i className="bi bi-envelope-at-fill" style={{fontSize: "1.5rem"}}></i>
             <a href='mailto:info@mizpahgh.com' className='contact-link'>info@mizpahgh.com</a>
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
