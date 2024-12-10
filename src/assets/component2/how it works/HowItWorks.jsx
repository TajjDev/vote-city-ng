import React from 'react'
import "./howitworks.css"
// import Button from '../join/Button'
import Btn from './btn'
import home from "/src/assets/home.png"
import welcome from "/src/assets/welcome.png"
import google from '/src/assets/google.png'
import apple from '/src/assets/apple.png'
import phone from '/src/assets/phone-call.png'
import inst from '/src/assets/instagram.png'
import twitter from '/src/assets/twitter.png'
import envelope from '/src/assets/instagram.png'
import facebook from '/src/assets/facebook.png'
import Pages from './Pages'
import Policy from "/src/assets/VotecityWebPrivacyPolicy.pdf"
import Terms from "/src/assets/VotecityWebTermsCondition.pdf"
// import Terms from "src/assets/VotecityWebTermsCondition.pdf"
const HowItWorks = () => {
  return (
    <div id='work'>
      <div id="carry">
        <h3>How it <span>Works</span></h3>
        <p>VoteCity is easy to use! Here’s how you can start making a difference in your community:</p>
        <div id='step1'>
          <p><span>Step 1:</span> Download App <br /> "Available on both Andriod and IOS."</p>
          <div id="body">
            <Btn idd={"idd"} fon=
              {'none'} the={"rgba(224, 224, 224, 1)"} bod={"1px solid rgba(224, 224, 224, 1)"} href={"/#"} id={"id"} img={apple} text={"Download"}></Btn>
            <Btn img={google} idd={"idd"} bod={"1px solid rgba(224, 224, 224, 1)"} fon=
              {'none'} the={"rgba(224, 224, 224, 1)"} href={"/#"}
              text={"Download"}></Btn>
          </div>
        </div>
        <Pages pp={"p"} step={"Step 2"} textSt={"Create Your Account  "} ttt={"Sign up in minutes"} img={welcome} />
        <Pages pp={"p"} step={"Step 3"} textSt={"Explore and Engage"} ttt={"“Join polls, donate, register for events,"} img={home} />
        <div id="body">
          <h2>
            Get Vote<span>City</span> on Your
            Phone
          </h2>
          <p id='ne'>"Download on App store" and Get it on
            Google play</p>
          <Btn idd={"idd"} fon=
            {'none'} the={"rgba(224, 224, 224, 1)"} bod={"1px solid rgba(224, 224, 224, 1)"} href={"/#"} id={"id"} img={apple} text={"Download"}></Btn>
          <Btn img={google} idd={"idd"} bod={"1px solid rgba(224, 224, 224, 1)"} fon=
            {'none'} the={"rgba(224, 224, 224, 1)"} href={"/#"}
            text={"Download"}></Btn>
        </div>
      </div>
      <div id="news">
        <p id='nnn'>Newsletter <span>Signup:</span></p>
        <div id="sub">
          <input type="email" name="" id="" />
          <p> <span>subscribe</span></p>
        </div>
        <h3 id="yy">Contact Information</h3>
        <p id='ip'> <img src={envelope} alt="" />: Votecityng@gemail.com</p>
        <p id='ip'><img src={facebook} alt="" />: votecityng</p>
        <p id="ip"><img src={twitter} alt="" />: votecityng</p>
        <p id="ip"><img src={inst} alt="" />: votecityng</p>
        <p id="ip"><img src={phone} alt="" />: +234 9139265486</p>
        <p id="ipp">Optional form to capture emails for updates.</p>
        <br />
        <h5 className='pim'><a target='parent' href={Policy}>Privacy policy</a></h5>
        <h5 className='pim'><a  target='parent' href={Terms}>Terms & Conditions</a></h5>
        <br /><br />
      </div>
    </div>
  )
}

export default HowItWorks