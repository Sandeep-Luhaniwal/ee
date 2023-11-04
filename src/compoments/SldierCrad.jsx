import React from 'react'
import { Col } from 'react-bootstrap';
import Slider from "react-slick";
import ampl from "../assets/img/webp/smpl.png";
import { CirclesliderIcon, PopupIcon } from './Icon';



const SldierCrad = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            <Slider {...settings} className='mt-5 pt-2 w-100'>
                <div className='px-3'>
                    <div className='d-flex flex-column flex-md-row justify-content-lg-evenly justify-content-between me-0 w-100'>
                        <Col md={6} xs={12} lg={4} className='d-flex justify-content-center'>
                            <div className="cardSlider position-relative">
                                <img src={ampl} alt="" className='amplImg position-absolute d-none d-lg-block' />
                                <div className="z-1 position-relative">
                                    <div className="bulerCircle"></div>
                                    <div className="bulerCircle1"></div>
                                    <div className="z-2 position-relative">
                                        <button className='padding11_12 cardbutton ff_primary fw_regular fs_xs color_white'>Innovation</button>
                                        <div className="d-flex justify-content-center">
                                            <CirclesliderIcon />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white'>Projected Yield (APY)</p>
                                            <p className='mb-0 ff_tertiary fw_bold color_Blue fs_sm'>7,777,777%</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-3 pb-2">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white opacity-50'>Projected Yield (APY)</p>
                                            <p className='mb-0 ff_tertiary fw_medium color_white fs_sm'>0.00 AMPL</p>
                                        </div>
                                        <div className='line'></div>
                                        <div className="d-flex justify-content-between pt-3 pb-2">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white opacity-50'>Max Capacity</p>
                                            <p className='mb-0 ff_tertiary fw_medium color_white fs_sm'>0.00 AMPL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col md={5} xs={12} lg={4} className='d-flex flex-column justify-content-center pt-4 ps-lg-3 '>
                            <h2 className='color_white ff_nenu fs_2md fw_regular mb-0 mb-md-2 pb-0 pb-md-1'>Elastic Vault</h2>
                            <h3 className='color_white ff_primary fs_md fw_medium mb-0 py-4'>Deposit Token <PopupIcon /></h3>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-1'>$AMPL</p>
                            <h3 className='color_white ff_primary fs_md fw_medium mb-0 py-3'>Flagship Hedging Strategy</h3>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-0 pt-1'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-0 pt-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                        </Col>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='d-flex flex-column flex-md-row justify-content-lg-evenly justify-content-between me-0 w-100'>
                        <Col md={6} xs={12} lg={4} className='d-flex justify-content-center'>
                            <div className="cardSlider position-relative">
                                <img src={ampl} alt="" className='amplImg position-absolute d-none d-lg-block' />
                                <div className="z-1 position-relative">
                                    <div className="bulerCircle"></div>
                                    <div className="bulerCircle1"></div>
                                    <div className="z-2 position-relative">
                                        <button className='padding11_12 cardbutton ff_primary fw_regular fs_xs color_white'>Innovation</button>
                                        <div className="d-flex justify-content-center">
                                            <CirclesliderIcon />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white'>Projected Yield (APY)</p>
                                            <p className='mb-0 ff_tertiary fw_bold color_Blue fs_sm'>7,777,777%</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-3 pb-2">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white opacity-50'>Projected Yield (APY)</p>
                                            <p className='mb-0 ff_tertiary fw_medium color_white fs_sm'>0.00 AMPL</p>
                                        </div>
                                        <div className='line'></div>
                                        <div className="d-flex justify-content-between pt-3 pb-2">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white opacity-50'>Max Capacity</p>
                                            <p className='mb-0 ff_tertiary fw_medium color_white fs_sm'>0.00 AMPL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col md={5} xs={12} lg={4} className='d-flex flex-column justify-content-center pt-4 ps-lg-3 '>
                            <h2 className='color_white ff_nenu fs_2md fw_regular mb-0 mb-md-2 pb-0 pb-md-1'>Elastic Vault</h2>
                            <h3 className='color_white ff_primary fs_md fw_medium mb-0 py-4'>Deposit Token <PopupIcon /></h3>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-1'>$AMPL</p>
                            <h3 className='color_white ff_primary fs_md fw_medium mb-0 py-3'>Flagship Hedging Strategy</h3>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-0 pt-1'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-0 pt-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                        </Col>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='d-flex flex-column flex-md-row justify-content-lg-evenly justify-content-between me-0 w-100'>
                        <Col md={6} xs={12} lg={4} className='d-flex justify-content-center'>
                            <div className="cardSlider position-relative">
                                <img src={ampl} alt="" className='amplImg position-absolute d-none d-lg-block' />
                                <div className="z-1 position-relative">
                                    <div className="bulerCircle"></div>
                                    <div className="bulerCircle1"></div>
                                    <div className="z-2 position-relative">
                                        <button className='padding11_12 cardbutton ff_primary fw_regular fs_xs color_white'>Innovation</button>
                                        <div className="d-flex justify-content-center">
                                            <CirclesliderIcon />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white'>Projected Yield (APY)</p>
                                            <p className='mb-0 ff_tertiary fw_bold color_Blue fs_sm'>7,777,777%</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-3 pb-2">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white opacity-50'>Projected Yield (APY)</p>
                                            <p className='mb-0 ff_tertiary fw_medium color_white fs_sm'>0.00 AMPL</p>
                                        </div>
                                        <div className='line'></div>
                                        <div className="d-flex justify-content-between pt-3 pb-2">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white opacity-50'>Max Capacity</p>
                                            <p className='mb-0 ff_tertiary fw_medium color_white fs_sm'>0.00 AMPL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col md={5} xs={12} lg={4} className='d-flex flex-column justify-content-center pt-4 ps-lg-3 '>
                            <h2 className='color_white ff_nenu fs_2md fw_regular mb-0 mb-md-2 pb-0 pb-md-1'>Elastic Vault</h2>
                            <h3 className='color_white ff_primary fs_md fw_medium mb-0 py-4'>Deposit Token <PopupIcon /></h3>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-1'>$AMPL</p>
                            <h3 className='color_white ff_primary fs_md fw_medium mb-0 py-3'>Flagship Hedging Strategy</h3>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-0 pt-1'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-0 pt-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                        </Col>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='d-flex flex-column flex-md-row justify-content-lg-evenly justify-content-between me-0 w-100'>
                        <Col md={6} xs={12} lg={4} className='d-flex justify-content-center'>
                            <div className="cardSlider position-relative">
                                <img src={ampl} alt="" className='amplImg position-absolute d-none d-lg-block' />
                                <div className="z-1 position-relative">
                                    <div className="bulerCircle"></div>
                                    <div className="bulerCircle1"></div>
                                    <div className="z-2 position-relative">
                                        <button className='padding11_12 cardbutton ff_primary fw_regular fs_xs color_white'>Innovation</button>
                                        <div className="d-flex justify-content-center">
                                            <CirclesliderIcon />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white'>Projected Yield (APY)</p>
                                            <p className='mb-0 ff_tertiary fw_bold color_Blue fs_sm'>7,777,777%</p>
                                        </div>
                                        <div className="d-flex justify-content-between pt-3 pb-2">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white opacity-50'>Projected Yield (APY)</p>
                                            <p className='mb-0 ff_tertiary fw_medium color_white fs_sm'>0.00 AMPL</p>
                                        </div>
                                        <div className='line'></div>
                                        <div className="d-flex justify-content-between pt-3 pb-2">
                                            <p className='mb-0 ff_primary fw_regular fs_sm color_white opacity-50'>Max Capacity</p>
                                            <p className='mb-0 ff_tertiary fw_medium color_white fs_sm'>0.00 AMPL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col md={5} xs={12} lg={4} className='d-flex flex-column justify-content-center pt-4 ps-lg-3 '>
                            <h2 className='color_white ff_nenu fs_2md fw_regular mb-0 mb-md-2 pb-0 pb-md-1'>Elastic Vault</h2>
                            <h3 className='color_white ff_primary fs_md fw_medium mb-0 py-4'>Deposit Token <PopupIcon /></h3>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-1'>$AMPL</p>
                            <h3 className='color_white ff_primary fs_md fw_medium mb-0 py-3'>Flagship Hedging Strategy</h3>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-0 pt-1'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                            <p className='ff_primary fs_sm fw_regular color_white opacity-75 mb-0 pt-3'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                        </Col>
                    </div>
                </div>

            </Slider>
        </>
    )
}


export default SldierCrad