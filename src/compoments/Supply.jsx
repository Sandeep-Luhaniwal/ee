import React from 'react'

const Supply = () => {
    return (
        <>
            <section className="py-5 bg-roadmap">
                <div className="mycontainer position-relative z-3 max-w-853 py-lg-5">
                    <h2 className="mb-0 text-center color_white fw_bold ff_secondary fs_2lg">170k Total Starting Supply</h2>
                    <p className="text-center color_white fs_sm fw_medium ff_primary mb-0 pt-4">Initial BONDing Offering (IBO)* Phases</p>
                    <div className="webkit-scrollbar-hidden overflow-auto pt-lg-5 pt-4 mt-2 mt-lg-0">
                        <div className='max-w-700'>
                            <div className="d-flex justify-content-between pt-4 pb-3">
                                <p className='color_white ff_primary fs_2sm fw_regular mb-0 lineh'>Round 1</p>
                                <p className='color_white ff_primary fs_3sm fw_medium mb-0 lineh'>10,000 EEFI Bonds</p>
                                <p className='color_white ff_primary fs_2sm fw_regular mb-0 lineh'>@ <span className="fs_2mmd">$12</span></p>
                            </div>
                            <div className='border_top'>
                                <p className='color_white fs_sm fw_regular mb-0 ff_secondary text-end pt-2'>Vested (locked) for 1 Year</p>
                            </div>
                            <div className="d-flex justify-content-between mt-3 pt-4 pb-3">
                                <p className='color_white ff_primary fs_2sm fw_regular mb-0 lineh'>Round 2</p>
                                <p className='color_white ff_primary fs_3sm fw_medium mb-0 lineh'>12,777 EEFI Bonds</p>
                                <p className='color_white ff_primary fs_2sm fw_regular mb-0 lineh'>@ <span className="fs_2mmd">$18</span></p>
                            </div>
                            <div className='border_top'>
                                <p className='color_white fs_sm fw_regular mb-0 ff_secondary text-end pt-2'>Vested (locked) for six months</p>
                            </div>
                            <div className="d-flex justify-content-between mt-3 pt-4 pb-3">
                                <p className='color_white ff_primary fs_2sm fw_regular mb-0 lineh'>Round 3</p>
                                <p className='color_white ff_primary fs_3sm fw_medium mb-0 lineh'>25,000  EEFI Bonds</p>
                                <p className='color_white ff_primary fs_2sm fw_regular mb-0 lineh'>@ <span className="fs_2mmd">$26</span></p>
                            </div>
                            <div className='border_top'>
                                <p className='color_white fs_sm fw_regular mb-0 ff_secondary text-end pt-2'>No vesting or lock up periods. Available at launch.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <p className='color_white text-center ff_primary fw_regular fs_3sm mb-2 pt-lg-5'><span className="underline position-relative">(47,777 or around</span>
                            <span className="fs_2mmd"> <u>28%</u> </span>
                            <span className="underline position-relative">of total starting supply is up for IBO)</span>
                        </p>
                        <p className="fs_xs color_white fw_regular ff_primary opacity-75 text-center">Individuals who hold $EEFI will also receive an airdrop of the protocol's
                            <span className="d-lg-block">
                                governance token $EFT ...learn more
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Supply