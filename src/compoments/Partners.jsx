import React from 'react'
import img1 from '../assets/img/webp/olympu.png'
import img2 from '../assets/img/webp/bond.png'
import img3 from '../assets/img/webp/fjo.png'
import img4 from '../assets/img/webp/balancer.png'
import img5 from '../assets/img/webp/grebox.png'
import img6 from '../assets/img/webp/unisar.png'
import { Col, Row } from 'react-bootstrap'

const Partners = () => {
    return (
        <>
            <section className="py-5">
                <div className="mycontainer max-w-1030 py-lg-5">
                    <h3 className='text-center mb-0 mb-md-3'>Ecosystem Partners</h3>
                    <Row className='pt-5'>
                        <Col lg={4} sm={6} className='justify-content-center d-flex'>
                            <div className='partnerBox d-flex justify-content-center align-items-center'>
                                <img src={img1} alt="img" className='px-md-3 px-lg-0' />
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='pt-4 pt-sm-0 justify-content-center d-flex'>
                            <div className='partnerBox d-flex justify-content-center align-items-center'>
                                <img src={img2} alt="img" />
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='pt-4 pt-lg-0 justify-content-center d-flex'>
                            <div className='partnerBox d-flex justify-content-center align-items-center'>
                                <img src={img3} alt="img" />
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='pt-lg-5 pt-4  justify-content-center d-flex'>
                            <div className='partnerBox d-flex justify-content-center align-items-center'>
                                <img src={img4} alt="img" />
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='pt-lg-5 pt-4  justify-content-center d-flex'>
                            <div className='partnerBox d-flex justify-content-center align-items-center'>
                                <img src={img5} alt="img" />
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='pt-lg-5 pt-4 justify-content-center d-flex'>
                            <div className='partnerBox d-flex justify-content-center align-items-center'>
                                <img src={img6} alt="img" />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center pt-5 mt-md-4">
                        <button className='ff_primary fs_sm fw_semiBold color_primary bg-transparent inline_btn'>More To Be Announced</button>
                   </div>
                </div>
            </section>
        </>
    )
}

export default Partners