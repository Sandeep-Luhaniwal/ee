import React from 'react'
import team1 from '../assets/img/webp/team1.png'
import team2 from '../assets/img/webp/team2.png'
import team3 from '../assets/img/webp/team3.png'
import { Col, Row } from 'react-bootstrap'
import { Discrod, Indeed, LineIcon, Twitter } from './Icon'

export const Team = () => {
    return (
        <>
            <section className='bg-bull'>
                <div className="mycontainer max-w-1030 pt-lg-132 pt-md-60 pt-40 pb-5 pb-lg-4">
                    <h2 className='ff_nenu fw_bold color_white fs_lg text-center mb-0'>our Team</h2>
                    <Row className=' pt-5 mt-lg-4 justify-content-center'>
                        <Col md={4} sm={6} className='d-flex justify-content-center justify-content-lg-start'>
                            <div className="p-12 bg_white teamCard">
                                <img src={team1} alt="" className='teamImg' />
                                <p className="pt-3 mb-0 color_black ff_primary fw_medium fs_mmd text-center">Davoice</p>
                                <p className="mb-0 pt-2 color_black ff_primary text-center fs_sm fw_regular">co-founder</p>
                                <div className='d-flex justify-content-center align-items-center gap-3 pt-3'>
                                   <a href="https://twitter.com/"> <Twitter /></a>
                                    <LineIcon />
                                   <a href="https://discrod.com"> <Discrod /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} className='d-flex justify-content-center pt-4 pt-sm-0'>
                            <div className="p-12 bg_white teamCard">
                                <img src={team2} alt="" className='teamImg' />
                                <p className="pt-3 mb-0 color_black ff_primary fw_medium fs_mmd text-center">Davoice</p>
                                <p className="mb-0 pt-2 color_black ff_primary text-center fs_sm fw_regular">co-founder</p>
                                <div className='d-flex justify-content-center align-items-center gap-3 pt-3'>
                                   <a href="https://twitter.com/"> <Twitter /></a>
                                    <LineIcon />
                                   <a href="https://discrod.com"> <Discrod /></a>
                                    <LineIcon />
                                    <a href="https:indeed.com"><Indeed /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} className='d-flex justify-content-center justify-content-lg-end pt-4 pt-md-0'>
                            <div className="p-12 bg_white teamCard">
                                <img src={team3} alt="" className='teamImg' />
                                <p className="pt-3 mb-0 color_black ff_primary fw_medium fs_mmd text-center">Davoice</p>
                                <p className="mb-0 pt-2 color_black ff_primary text-center fs_sm fw_regular">co-founder</p>
                                <div className='d-flex justify-content-center align-items-center gap-3 pt-3'>
                                   <a href="https://twitter.com/"> <Twitter /></a>
                                    <LineIcon />
                                   <a href="https://discrod.com"> <Discrod /></a>
                                    <LineIcon />
                                    <a href="https:indeed.com"><Indeed /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
