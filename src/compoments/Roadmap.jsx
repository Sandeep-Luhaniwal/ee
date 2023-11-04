import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Roadmap = () => {
    return (
        <>
            <section className="bg-roadmap pb-4 overflow-hidden">
                <div className="mycontainer max-w-1030 position-relative z-3 py-150">
                    <h2 className="mb-0 ff_nenu fs_lg fw_bold color_white text-center">Roadmap</h2>
                    <div className='pt-115'>
                        <div>
                            <Row className="lineroadmap justify-content-center position-relative" >
                            <Col sm={8} xs={10} md={6} lg={5}>
                                <div className="roadmapCard me-md-4 ms-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>2022</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Ideation of Elastic Protocol </li>
                                        <ul className='ps-4 mb-0'>
                                            <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Elastic Protocol GitBook</li>
                                            <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Full Code development of Elastic Vault Strategy</li>
                                            <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Audit</li>
                                        </ul>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Complete Alpha Testing </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                            <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                    <div className="roadmap-right ms-md-4 me-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>2023 Beginning</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Olympus Partnership Beginning</li>
                                        <ul className='ps-4 mb-0'>
                                            <li className='mb-0 ff_primary fs_sm fw_regular color_white'>$25k Grant 2023 </li>
                                            <li className='mb-0 ff_primary fs_sm fw_regular color_white'>$150k Total seeded Liquidity sought from Olympus DAO</li>
                                            <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Third Party Partner Intros</li>
                                        </ul>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Elastic Vault Strategy Updates + Olympus $OHM Integrations</li>
                                    </ul>
                                </div>
                            </Col>
                                <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                <div className="roadmapCard me-md-4 ms-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>Q3 2023</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Partner launched KOLs Marketing Campaign | Rally larger community base </li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Balancer $EEFI Pools launch </li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Launch of Elastic Vault Strategy (flagship) + $EEFI</li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Elastic IBO Fundraising Event [Rounds Begin] </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                                <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                    <div className="roadmap-right ms-md-4 me-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>Q4 2023</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Front End upgrade</li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>INO [Initial NFT Offering]: Social Elastic NFT campaign </li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Initial Olympus econOHMy Vaults:</li>
                                        <ul className='list ps-4'>
                                            <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Elastic | FRAXBP LP Vault </li>
                                            <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Olympus | Uniswap LP Vault </li>
                                        </ul>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Elastic Community Engagement: Onboard contributors to drive protocol development, partnerships, community development and begin governance activities</li>
                                    </ul>
                                </div>
                            </Col>
                                <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                <div className="roadmapCard me-md-4 ms-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>Q1 2024</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Elastic Research and Development: Explore additional vault strategies and develop risk and due-diligence procedures associated with strategy development and implementation </li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Elastic Vault (Sub-Vaults): Begin exploring additional tokens to add to core Elastic Vault strategy</li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Arbitrum Layer 2 yield strategy considerations </li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Begin developing comprehensive tokenomics for $EFT (Elastic Protocol governance token) </li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>First $EEFI Bonds Program [Bond Protocol] (beta): treasury bolster fundraise </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                                <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                    <div className="roadmap-right ms-md-4 me-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>Q2 2024</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Gearbox | OHM [Perp-Leverage] Vault</li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Bond Protocol (Bonding) Vault</li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Future Strategy (vote): Real Yield GMX | GPL Vault</li>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Future Strategy (vote): Elastic Options Vault (sub-vault)</li>
                                    </ul>
                                </div>
                            </Col>
                                <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                <div className="roadmapCard me-md-4 ms-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>Q3 2024</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Establish DAO to govern Elastic Finance and fully decentralize protocol</li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Elastic Yield Alliance (Strategic Yield Strategy Partners): begin governance vote for Multi-chain yield strategies</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                                <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                    <div className="roadmap-right ms-md-4 me-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>Q4 2024</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Community voted Yield Strategy 1 (governance)</li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>$EEFI Borrowing and Lending Partnership</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                <div className="roadmapCard me-md-4 ms-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>Q1 2025</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Community voted Yield Strategy 2 (governance)</li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Olympus RBS-OHM Real Yield Vault (strategy) </li>
                                        <li className='mb-0 pt-2 ff_primary fs_sm fw_regular color_white'>Launch EFT governance token Airdrop</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                            <Col sm={8} xs={10} md={6} lg={7}></Col>
                                <Col sm={8} xs={10} md={6} lg={5} className='pt-4 pt-md-0'>
                                    <div className="roadmap-right ms-md-4 me-md-2 mx-lg-0">
                                    <h3 className='mb-0 color_white fw_medium fs_3sm ff_secondary'>Q2 2025</h3>
                                    <ul className='list pt-3 mb-0 ps-4'>
                                        <li className='mb-0 ff_primary fs_sm fw_regular color_white'>Hand over Elastic Finance DAO to Community: Complete decentralization of Elastic Finance DAO, its treasury, its yield strategies and community governance</li>
                                    </ul>
                                </div>
                            </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Roadmap