import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DataCard } from './Helper'

const Cases = () => {
    return (
        <>
            <section className='py-5'>
                <div className="mycontainer py-lg-5">
                    <h2 className='ff_nenu fw_bold fs_lg mb-1 color_primary text-center'>Future Use Cases (Strategies)</h2>
                    <p className="color_black ff_primary fw_regular text-center mb-0 pt-3">
                        Elastic Protocol will continue to pioneer an expanding ecosystem of yield strategies that will cater to DeFi users across a
                        <span className="d-lg-block">range of blockchains, communities, and interests. Each will help in generating sustainable yield and expanding the </span>
                        utility of the native utility token $EEFI. Here is some of what we are planning and looking into:
                    </p>
                    <Row className='pt-4 mt-md-3'>
                        {DataCard.map((team) => {
                            return (
                                <Col md={6} lg={4} className='pt-4 mt-md-3 d-flex justify-content-center'>
                                    <div className="position-relative imgmapCard1 overflow-hidden">
                                        <div className=' position-relative'>
                                            <img src={team.img} alt="Img" className='imgmapCard' />
                                            <div className="z-1 position-absolute position-relative top-0 p-20 w-100">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <button className='card-btn ff_primary fs_xs fw_medium color_white'>{team.para}</button>
                                                    </div>
                                                    <div className='logoBorder'>
                                                        <img src={team.btnimg} alt="img" className='logo_img' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom-0 position-absolute p-20 z-1">
                                                <p className='mb-0 ff_nenu fs_3sm fw_bold color_white'>{team.para}</p>
                                                <p className="mb-0 pt-2 ff_primary fw_medium fs_sm opacity-75 color_white">24NFTs</p>
                                                <button className='card-inlinebtn mt-3'>
                                                    <img src={team.btnimg} alt="imgcircle" className='circleImg' />
                                                    <span className='ps-2 ff_primary fw_medium fs_sm color_white'>{team.link}</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='bg-hover position-absolute imgsl'>
                                            <div className="p-3">
                                                <img src={team.img1} alt="team" className='w-100 monkeyImg' />
                                                <h3 className='mb-0 ff_nenu fs_mmd fw_bold color_white pt-3 pt-lg-2 pt-xl-3'>{team.heading}</h3>
                                                <p className="mb-0 ff_primary fw_regular fs_sm color_white opacity-75 pe-3 pe-md-0 pe-xl-3">{team.paragrah}</p>
                                                <h4 className='mb-0 pt-4 pt-lg-1 pt-xl-4 ff_primary fs_3sm fw_semiBold color_white'>{team.subheading}</h4>
                                                <div className="d-flex justify-content-between pt-2">
                                                    <img src={team.img2} alt="img2" className='imgCard'/>
                                                    <img src={team.img3} alt="img3" className='imgCard'/>
                                                    <img src={team.img4} alt="img4" className='imgCard'/>
                                                    <img src={team.img5} alt="img5" className='imgCard'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Cases