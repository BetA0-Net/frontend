import React from 'react'
import { images } from '../../constants'
import './About.css'
const About = () => {
    return (
        <>
            <section className='about--section'>
                <div className='custom--container'>
                    <div className='about--wrapperbox'>
                        <div className='section--titlebox'>
                            <h2 className='section--title'><span className='colorText'>About A0BET</span></h2>
                        </div>
                        <div className='about--contentbox'>
                            <p className='top--description'>
                                A0BET.net is a decentralized gaming DApp platform built on Aleph Zero Blockchain. Our core principles are Transparency and Fairness. Our game is similar with Dice Game on Wink platform, which is the largest gaming platform on Tron Network. The purpose of this dapp is to give you some funs and also test the speed of Aleph Zero Network, thus we set the limit for each bet to 10 AZERO only (this can be changed later).

                            </p>
                            <div className='about--cardcontItems-box'>
                              <div className='about-contentcard'>
                                  <img className='card-img' src={images.cardIcon1} alt='cardIcon'/>
                                  <p className='desc'>
                                  Every time you play, we reward you with our BET token. Feel free to "mine" as many BET as you want. Our objectives are to bring BET to CEX or DEX and also to share platform profit to all BET holders.
                                  </p>
                              </div>
                            {/* ==== */}
                              <div className='about-contentcard'>
                                  <img className='card-img' src={images.cardIcon2} alt='cardIcon'/>
                                  <p className='desc'>
                                  All A0BET transactions are executed through our smart contracts on the Aleph Zero network. This ensures that all data is fair and transparent.
                                  Our random number is generated inside the smart contract with Seed provided by the player.

                                  </p>
                              </div>
                            </div>
                            <p className='top--description'>

                            <br/><br/>Join our Telegram Group: <span><a  style={{color: "#00E5ED"}} href="https://t.me/a0bet" target="_blank">https://t.me/a0bet</a></span>
                            <br/>Follow our Twitter: <span><a style={{color: "#00E5ED"}} href="https://twitter.com/a0bet" target="_blank">https://twitter.com/a0bet</a></span>
                            </p>
                        </div>

                        <div className='bottom-textbox'>
                           <h6 className='title-text'>
                           Copyright @ 2022 - A0BET.net
                           </h6>
                           <p className='desc'>
                           </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
