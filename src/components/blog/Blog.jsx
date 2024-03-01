import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./blog.css"
import image1 from "../../assets/image 5.jpg"
import image2 from "../../assets/image 6.png"
import image3 from "../../assets/image 7.jpg"

export const Blog = () => {
  return (
    <div className='blog_main'>
        <Container>
            <Row>
                <Col lg={5}>
                 <h6 className='audi'>Pilihan Auditor</h6>
                 <h1 className='ress22'>Residen Berbagai Kota</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                 <img src={image1} alt="" className='w-100 image'/>
                 <h5 className='mmmm mt-3'>Magnolia Surabaya</h5>
                 <p className='gggg'>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                </Col>
                <Col lg={4}>
                 <img src={image2} alt="" className='w-100 image'/>
                 <h5 className='mmmm mt-3'>Pinang Residences</h5>
                 <p className='gggg'>Jl. Deplu Raya No.16 RT.5, RW.003
                     Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
                </Col>
                <Col lg={4}>
                 <img src={image3} alt="" className='w-100 image'/>
                 <h5 className='mmmm mt-3'>South Grove</h5>
                 <p className='gggg'>1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
