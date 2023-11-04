import React from 'react'
import blurImg from '../assets/img/webp/bluerImg.png'
import SldierCrad from './SldierCrad'

const Core = () => {
    return (
        <>
            <div className=" position-relative">
                <img src={blurImg} alt="" className='coludImg position-absolute z-2 ' />
           </div>
            <section className="bg-core position-relative z-1 overflow-hidden mt-30">
                <div className="mycontainer py176_100">
                    <h3 className='text-center ff_nenu fw_bold fs_lg color_white mb-0'>Core Strategies</h3>
                    <p className="pt-4 mb-0 ff_primary fs_sm fw_regular color_white text-center px-sm-3 px-lg-0">Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate cutting-
                        <span className="d-lg-block">
                            edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for
                            <span className="d-lg-block">
                                our native protocol token $EEFI. Check them out!'
                            </span>
                        </span>
                    </p>
                    <SldierCrad />
                </div>
            </section>
        </>
    )
}

export default Core