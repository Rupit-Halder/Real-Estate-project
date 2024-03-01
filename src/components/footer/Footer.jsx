import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import image5 from "../../assets/image 8.png"
import "./footer.css"
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer123'>
    <Container>
        <Row>
            <Col lg={3}>
              <h1 className='awdaw'>Hubungi Kami</h1>
            </Col>
        </Row>
        <Row>
            <Col lg={3}>
            <div className='contact1 mt-3'>
             <h6 className='call'> <BsFillTelephoneFill className='call_icon'/> Call</h6>
             <h6 className='number123'>+6281232936733</h6>
              <a href="" className='now'>Call Now</a>
             </div>
            </Col>
            <Col lg={3}>
            <div className='contact2 mt-3'>
            <h6 className='call'> <BsFillTelephoneFill className='call_icon'/> Call</h6>
             <h6  className='number123'>+6281232936733</h6>
              <a href="" className='now'>Call Now</a>
             </div>
            </Col>
            <Col lg={5} lg={{offset:3}}>
              <h1 className='pena'>Penghargaan</h1>
              <img src={image5} alt=""/>
            </Col>
        </Row>
    </Container>

    </div>
  )
}

export default Footer