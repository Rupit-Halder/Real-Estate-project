import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./residin.css"
import house1 from "../../assets/house1.jpg"
import house2 from "../../assets/house2.jpg"
import { BsFillTelephoneFill } from "react-icons/bs";

const Residin = () => {
  return (
    <div className='residin_main'>
      <Container>
        <Row>
            <Col lg={6}>
             <h6 className='poppo'>Pilihan konsumen</h6>
             <h1 className='fav'>Residen Favorit</h1>
            </Col>
        </Row>
        <Row>
            <Col lg={6}>
             <div className='home1'>
                <img src={house1} alt="" className=' house1'/>
                <div className='home2'>
               <img src={house2} alt="" className=' house2' />
                </div>
             </div>
            </Col>
            <Col lg={6}> 
             <h1 className='yang'> Bangunan yang dirancang oleh Aristektur Handal</h1>
             <p className='tanpa'>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
             <a href="" className='kami'> <BsFillTelephoneFill  className='tele_icon'/>  Hubungi Kami</a>    <a href="" className='explore'>Explore lebih banyak</a>
            </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Residin