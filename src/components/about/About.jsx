import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./about.css"
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <div about_main>
     <Container>
        <Row>
            <Col lg={6}>
             <h1 className='taha123'>Tahapan Pembelian Properti yang Mudah dan Cepat</h1>
            </Col>
        </Row>
         
       <Row>
        <Col lg={4}>
         <div className='box1'> 
         <h5 className='pilih'>Pilih Properti</h5> <a href="" className='number'>01</a>
         <p className='carl'>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
         <h5 className='baca'>Baca lebih Lanjut  <FaArrowRightLong /></h5>
         </div>
        </Col>
        <Col lg={4}>
         <div className='box1'> 
         <h5 className='pilih'>Proses Booking</h5> <a href="" className='number1'>02</a>
         <p className='carl1'>Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan unit properti tertentu.</p>
         <h5 className='baca1'>Baca lebih Lanjut  <FaArrowRightLong /></h5>
         </div>
        </Col>
        <Col lg={4}>
         <div className='box1'> 
         <h5 className='pilih'>KPR dan Sertifikasi</h5> <a href="" className='number2'>03</a>
         <p className='carl'>Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika diperlukan dan dilanjutkan proses sertifkasi HGB.</p>
         <h5 className='baca'>Baca lebih Lanjut  <FaArrowRightLong /></h5>
         </div>
        </Col>
       </Row>

     </Container>

    </div>
  )
}

export default About