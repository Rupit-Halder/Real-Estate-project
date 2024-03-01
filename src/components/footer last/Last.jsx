import React from 'react'
import "./last.css"
import footer from "../../assets/footer.png"
import {Container,Row,Col} from "react-bootstrap"
import { FaInstagram,FaFacebook,FaLinkedin} from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";

const Last = () => {
  return (
    <div className='last_main'>
        <Container>
            <Row>
                <Col lg={1} xs={6}>
                 <img src={footer} alt="" className='footerlogo'/>
                </Col>
                <Col lg={5} lg={{offset:5}} xs={6}>
                  <div className='footer_icon'> 
                  <div>
                  <FaInstagram  className='foter-icon'/>
                  </div>
                  <div>
                  <FaFacebook  className='foter-icon'/>
                  </div>
                  <div>
                  <CgTwitter  className='foter-icon'/>
                  </div>
                  <div>
                  <FaLinkedin  className='foter-icon'/>
                  </div>
                  
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Last