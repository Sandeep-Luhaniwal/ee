import React from 'react'
import logo from '../assets/img/webp/logo.png'
import { AuIcon, DiscrodIcon, MailIcon, MaxIocn, PasteIcon, SendIcon, ServerIcon, TwitterIcon, YoutubeIcon } from './Icon'

const Footer = () => {
    return (
        <>
            <section className="bg_white py-lg-4">
                <div className="mycontainer py-5">
                    <div className="d-flex flex-column align-items-center">
                        <img src={logo} alt="logo" />
                        <p className='mb-1 pt-3 ff_primary fw_regular color_primary fs_sm'>Join Our Community</p>
                        <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 py-3">
                            <ul className='ps-0 mb-0 d-flex justify-content-center gap-3 gap-sm-4'>
                                <li><a href="#" className='mb-0 ff_primary fw_regular color_black fs_sm'>About</a></li>
                                <li><a href="#" className='mb-0 ff_primary fw_regular color_black fs_sm'>IBO Event</a></li>
                                <li><a href="#" className='mb-0 ff_primary fw_regular color_black fs_sm'>EEFI Tokenomics</a></li>
                            </ul>
                            <ul className='ps-0 mb-0 d-flex justify-content-center gap-3 gap-sm-4'>
                                <li className=''><a href="#" className='mb-0 ff_primary fw_regular color_black fs_sm'>Team</a></li>
                                <li className=''><a href="#" className='mb-0 ff_primary fw_regular color_black fs_sm'>Roadmap</a></li>
                                <li className=''><a href="#" className='mb-0 ff_primary fw_regular color_black fs_sm'>Partners</a></li>
                                <li className=''><a href="#" className='mb-0 ff_primary fw_regular color_black fs_sm'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 py-3">
                            <ul className='ps-0 mb-0 d-flex justify-content-center gap-3 gap-sm-4'>
                                <li><a href="#" className='mb-0'><YoutubeIcon /></a></li>
                                <li><a href="#" className='mb-0'><ServerIcon /></a></li>
                                <li><a href="#" className='mb-0'><TwitterIcon /></a></li>
                                <li><a href="#" className='mb-0'><AuIcon /></a></li>
                                <li><a href="#" className='mb-0'><DiscrodIcon /></a></li>
                            </ul>
                            <ul className='ps-0 mb-0 d-flex justify-content-center gap-3 gap-sm-4'>
                                <li className=''><a href="#" className='mb-0'><MaxIocn /></a></li>
                                <li className=''><a href="#" className='mb-0'><MailIcon /></a></li>
                                <li className=''><a href="#" className='mb-0'><SendIcon /></a></li>
                                <li className=''><a href="#" className='mb-0'><PasteIcon /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-footer'>
                <div className="mycontainer py-2">
                    <div className="d-flex justify-content-between my-1">
                        <p className='ff_primary fw_regular fs_xs color_black opacity-75 mb-0'>@Copyright 2023</p>
                        <p className='ff_primary fw_regular fs_xs color_black opacity-75 mb-0'>Privacy policy</p>
                    </div>
               </div>
            </section>
        </>
    )
}

export default Footer