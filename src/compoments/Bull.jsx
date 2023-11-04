import React from 'react'
import bgImg from '../assets/img/webp/bull_img.png'

const Bull = () => {
    return (
        <>
            <h2 className="ff_secondary fs_2lg color_white text-center bg_black mb-0 fw_extraBold pt-4 pb-sm-4 px-3">Amplify and <span className='mb-0 text-uppercase'>stretch gains</span></h2>
            <section className=' position-relative bg_black bg-sm-transparent h-100'>
                <img src={bgImg} alt="bgImg" className='bullImg position-absolute d-none d-sm-block' />
                <img src={bgImg} alt="bgImg" className='w-100 d-sm-none' />
                <div className="mycontainer position-relative z-1 py-3 pt-sm-0">
                    <p className='ff_primary fs_xs fw_regular color_white text-center pt-300 pt-lg-310'>
                        We take a different balanced approach to finding and creating yield opportunities in
                        <span className="d-md-block">the everchanging crypto market. Our yield strategies help users stay protected and </span>
                        hedged during bear markets and amplify yield during bull markets without
                        <span className="d-md-block">
                            resorting to leverage or other dangerous techniques.
                        </span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Bull