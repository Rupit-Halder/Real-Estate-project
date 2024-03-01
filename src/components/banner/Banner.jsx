import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./banner.css"
import banner_pic from "../../assets/banner.png"
import { FaLocationDot } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='banner_main'>
     <Container>
        <Row>
            <Col lg={8}>
                <h1 className='temu'>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
                <p className='hun'>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
               <div className='input_123'>
                <input type="text" placeholder='Search location, properties, residental group' className='input_main'/>
                <div className='input_icon'> <FaLocationDot className='loca'/> </div>
                <div className='search123'> <a href="" className='search'>Search</a> </div>
                </div>
                
                </Col>
            <Col lg={4} > 
              <img src={banner_pic} alt=""  className=' bannr_pic w-100'/>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default Banner