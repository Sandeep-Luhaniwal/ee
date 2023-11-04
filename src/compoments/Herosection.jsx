import React, { useState } from 'react'
import mainLogo from '../assets/img/webp/main-logo.png'
import heroImg from '../assets/img/webp/Header_img.png'
import heroImg1 from '../assets/img/webp/herosmscreen.png'
import bgImg from '../assets/img/webp/bg_header_img.png'
import bgImg2 from '../assets/img/webp/bg_header_img2.png'
import { Col, Row, NavLink } from 'react-bootstrap'
import { CrossIcon, MenuIcon } from './Icon'

const Herosection = () => {
    const [menu, setMenu] = useState(false);
    if (menu === true) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    };
    return (
        <>
            <section className='pb-5 pb-lg-0 position-relative overflow-hidden'>
                <div className="d-flex justify-content-end d-none d-lg-block">
                    <img src={bgImg2} alt="bgImg" className='bgImgheader2 position-absolute' />
                </div>
                <img src={bgImg} alt="bgImg" className='bgImgheader position-absolute' />
                <div className='position-absolute circleposition d-none d-xl-block'>
                    <ul className='ps-0 mb-0 d-flex flex-column gap-4'>
                        <li className='circleHeader'></li>
                        <li className='circleHeader'></li>
                        <li className='circleHeader'></li>
                        <li className='circleHeader'></li>
                    </ul>
                </div>
                <div className='mycontainer d-flex flex-column min-vh-100 position-relative z-1'>
                    <div className='d-flex justify-content-between align-items-center pt-1'>
                        <div className='d-flex align-items-center'>
                            <img src={mainLogo} alt="mainlogo" className='w-100' />
                        </div>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='d-lg-none crossIconset'
                                onClick={() => setMenu(false)}>
                                <NavLink>
                                    <CrossIcon />
                                </NavLink>
                            </div>
                            <div className='d-flex align-items-center navActive gap-4'>
                                <NavLink onClick={() => setMenu(false)} className='ff_primary fw_medium fs_sm color_white transition'>About</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='ff_primary fw_medium fs_sm color_white transition'>IBO Event</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='ff_primary fw_medium fs_sm color_white transition'>EEFI Tokenomics</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='ff_primary fw_medium fs_sm color_white transition'>Team</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='ff_primary fw_medium fs_sm color_white transition'>Partners</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='ff_primary fw_medium fs_sm color_white transition'>Roadmap</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='ff_primary fw_medium fs_sm color_white transition'>More</NavLink>
                                <button onClick={() => setMenu(false)} className='ff_primary d-sm-none fw_medium fs_sm nav-btn bg-white color_primary p16_31'>
                                    Enter App
                                </button>
                            </div>

                        </div>
                        <button onClick={() => setMenu(false)} className='ff_primary d-none d-md-block fw_medium fs_sm nav-btn bg-transparent color_primary p16_31'>
                            Enter App
                        </button>
                        <div className='d-lg-none d-flex align-items-center gap-2'>
                            <NavLink onClick={() => setMenu(true)}>
                                <MenuIcon />
                            </NavLink>
                            <button onClick={() => setMenu(false)} className='ff_primary ms-1 d-none d-sm-block d-md-none fw_medium fs_sm nav-btn bg-transparent color_primary p16_31'>
                                Enter App
                            </button>
                        </div>
                    </div>
                    <div className='flex-grow-1 d-flex justify-content-center align-items-center'>
                        <Row className=' align-items-center'>
                            <Col lg={6} className='pt-72 pt-132 pt-lg-0'>
                                <h1 className='ff_nenu mb-0 text-center text-lg-start fs_xl text-uppercase color_white fw_medium'>Building elastic Protocol</h1>
                                <p className='ff_primary px-3 px-sm-0 mb-4 text-center text-lg-start fs_sm fw_medium color_white text-capitalize'>An ecosystem of unique yield strategies that help you earn yield,
                                    <span className="d-md-block">amplify, and stretch it across all market conditions</span>
                                </p>
                                <p className='ff_primary mb-0 text-center text-xl-start fs_sm fw_bold color_white text-decoration-underline'>Audited by Omniscia</p>
                            </Col>
                            <Col lg={6} className='z-n1 pt-4 pt-lg-0'>
                                <img src={heroImg} alt="heroImg" className='heroImg d-none d-lg-block' />
                                <img src={heroImg1} alt="heroImg" className='heroImg1 d-lg-none' />
                            </Col>
                        </Row>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Herosection