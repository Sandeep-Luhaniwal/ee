import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img1 from '../assets/img/svg/yield.svg'
import img2 from '../assets/img/svg/value.svg'
import img3 from '../assets/img/svg/index.svg'
import img4 from '../assets/img/svg/social.svg'
import img5 from '../assets/img/svg/unity.svg'

const Eefe = () => {
    return (
        <>
            <section className="bg-color">
                <div className="mycontainer overflow-hidden">
                    <Row className='justify-content-between py-176'>
                        <Col md={6} lg={5} className='bg_white pb-5 pb-md-0'>
                            <h3 className="ff_nenu fw_bold fs_lg color_black">EEFI Tokenomics</h3>
                            <p className="pt-3 ff_primary fs_sm fw_regular pb-1 color_black ">EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
                            <button className="p-3 color_white bg_primary border-0 mt-4 ff_primary fs_sm fw_medium mb-0">View Contract Address</button>
                            <h3 className="ff_nenu fw_bold fs_mmd color_black pt-5 lineh mb-0">IBO TOKENOMICS</h3>
                            <h4 className="fw_bold ff_primary fs_2sm lineh pt-30 mb-0">IBO Round 1 Price</h4>
                            <p className='fw_semiBold ff_primary fs_sm color_primary mb-0 lineh pt-3'>1 EEFI = $12</p>
                            <h4 className="fw_bold ff_primary fs_2sm lineh pt-4 mb-0">IBO Round 2 Price</h4>
                            <p className='fw_semiBold ff_primary fs_sm color_primary mb-0 lineh pt-3'>2 EEFI = $18</p>
                            <h4 className="fw_bold ff_primary fs_2sm lineh pt-4 mb-0">IBO Round 3 Price</h4>
                            <p className='fw_semiBold ff_primary fs_sm color_primary mb-0 lineh pt-3'>3 EEFI = $26</p>
                            <h4 className="fw_bold ff_primary fs_2sm lineh pt-4 mb-0">TOTAL SUPPLY</h4>
                            <p className='fw_semiBold ff_primary fs_sm color_black mb-0 lineh pt-3'>170,000</p>
                        </Col>
                        <Col  md={6} lg={5} className='bg_primary pt-5 pt-md-0'>
                            <div className="d-flex align-items-center">
                                <img src={img1} alt="yield" className="imgCard1" />
                                <div className='ps-1'>
                                    <h3 className="mb-0 ff_nenu fs_mmd fw_blod color_white">Decentralized Yield</h3>
                                    <p className="pt-3 ff_primary fw_regular color_white fs_sm mb-0 opacity-75">Protocol’s native utility | rewards token</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-30">
                                <img src={img2} alt="value" className="imgCard1" />
                                <div className='ps-1'>
                                    <h3 className="mb-0 ff_nenu fs_mmd fw_blod color_white">Extra Value</h3>
                                    <p className="pt-3 ff_primary fw_regular color_white fs_sm mb-0 opacity-75">Can be highly deflationary during market uptrends</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-30">
                                <img src={img3} alt="value" className="imgCard1" />
                                <div className='ps-1'>
                                    <h3 className="mb-0 ff_nenu fs_mmd fw_blod color_white">Smart Index</h3>
                                    <p className="pt-3 ff_primary fw_regular color_white fs_sm mb-0 opacity-75">Token can be viewed as an index of all strategy performance on the protocol</p>
                                </div>
                            </div>
                            <div className="d-flex  pt-30">
                                <img src={img4} alt="value" className="imgCard1" />
                                <div className='ps-1'>
                                    <h3 className="mb-0 ff_nenu fs_mmd fw_blod color_white">Social Coordination (E,E)</h3>
                                    <p className="pt-3 ff_primary fw_regular color_white fs_sm mb-0 opacity-75">Promotes hyper social coordination around all strategies on the protocol (E,E) (makes hedging fun and working together produces more benefits to all vault users)</p>
                                </div>
                            </div>
                            <div className="d-flex  pt-30">
                                <img src={img5} alt="value" className="imgCard1" />
                                <div className='ps-1'>
                                    <h3 className="mb-0 ff_nenu fs_mmd fw_blod color_white">Expansive Utility Dimensions</h3>
                                    <p className="pt-3 ff_primary fw_regular color_white fs_sm mb-0 opacity-75">EEFI’s utility will expand as more strategies are added to the protocol.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Eefe