import React, { useState } from 'react'
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

  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const [isOpenn, setIsOpenn] = useState(false)
  const handleOpenn = () => {
    setIsOpenn(true)
  }
  const handleClosen = () => {
    setIsOpenn(false)
  }

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
        {/* <br /> */}

        {/* <h5 className='pim'><a target='parent' href={Policy}>Privacy policy</a></h5> */}
        {/* {/* <h5 className='pim'><a  target='pa`rent' href={Terms}>Terms & Conditions</a></h5> */}
        {/* <br /><br /> */}
        <div id="priv">
          <button onClick={handleOpen}>Privacy Policy </button>
          <button onClick={handleOpenn}>Terms & Conditions </button>
          {isOpen && (
            <div className="popup">
              <h3>PRIVACY POLICY FOR WEBSITE</h3>
              <h5>Effective date: December 12, 2024</h5>
              <h5>Applicable to:</h5>
              <h4>1. DEFINITIONS</h4>
              <p>"Data Controller" means the publisher and owner of the Website and the party
                also
                responsible for the collection of data.
                "Data Processing Officer" means the party responsible for overseeing data
                protection strategy
                and implementation to ensure compliance.
                "Content" means any content, writing, images, audiovisual content, or other
                information
                published on this Website.
                "Parties" means both You (the user of the Service) and the Data Controller:
                Votecity Limited,
                Tajudeen Khabab.
                "Personal Data" means any personal information collected for You in relation to
                your use of
                this service which is capable of identifying You.
                "Service" means the Website, known as <a href=""> www.votecity.ng</a>, including all pages,
                subpages, blogs,
                forums, and other connected internet content whatsoever.
                "Third Party Service Provider" means a party or parties contracted by the owner/
                data
                controller to process the personal data of the user.
                "You, Yours" The user of this Website.</p>
              <h4>2. INTRODUCTION</h4>
              <p>This Privacy Policy is designed to inform You about the Personal Data we
                collect, how we
                collect this data, the uses of the data, and Your rights relating to the
                Personal Data when You
                use this Service.
                We are committed to protecting your Personal Data while You use this Website.
                By continuing to use our Website, You acknowledge that You have reviewed the
                Privacy Policy
                and agree to its terms. This also means that You have consented to the use of
                Your Personal
                Data and have accepted the applicable disclosures.</p>
              <h4>3. CONTACT</h4>
              <p>The operator who is also the party responsible for the collection of data is
                as
                follows: <br />
                Votecity
                Limited and can be contacted as follows: <br />
                Lekki Lagos, Nigeria <br />
                +234 9139265486 <br />
                support@votecity.ng <br />
                The Data Protection Officer is as follows: <br />
                Tajudeen Khabab and can be contacted
                as follows: <br />
                Surulere Lagos, Nigeria <br />
                +234 7010409001 <br />
                tajudeenkhabab2@gmail.com</p>
              <h4>4. THE PERSONAL DATA WE COLLECT FROM YOU</h4>
              <p>We collect various information to enable us to provide good service to all
                our
                users. Depending
                on how our service will be used, the different types of Personal Data we collect
                are as follows:
                A. All users: We will collect passive information from all users. This
                information includes
                cookies, IP address information, location information, and certain browser
                information.
                B. User experience: From time to time, we may also request certain Personal Data
                that
                may be necessary to improve our Service.</p>
              <h4>5. THE PERSONAL DATA WE COLLECT AS YOU USE OUR SERVICE</h4>
              <p>We use the following to collect Personal Data from You:
                Cookies: We use the data collected by the cookies to offer You the best
                experience on our
                Website. Cookies are information stored on Your browser when You visit our
                Website or use a
                social network with Your PC, Smartphone, or Tablet. They contain various data,
                including the
                name of the server from which it comes, the numeric identifier, etc. The types
                of cookies we use
                are as follows:
                Technical cookies: These cookies are essential for the correct functioning of
                our Website and
                are required to provide the Service required to our users.
                Support in configuring your browser: You can manage these cookies through the
                settings of
                Your browser on Your device. However, deleting cookies from Your browser may
                remove the
                preferences You have set for this Website.
                Log Data: We also use log files which store automatic information collected whe
                users visit
                this Website. The log data which may be collected includes: <br />
                (i) The domain and host from which You access the Website <br />
                (ii) Name of the Internet Service Provider (ISP) <br />
                (iii) Date and time of visit <br />
                (iv) Your computer operating system and browser software <br />
                (v) Web pages visited, the duration, and frequency of visits <br />
                (vi) Your Internet Protocol (IP) address</p>
              <h4>6. THIRD PARTIES</h4>
              <p>We may utilize third party service providers, from time to time, to help in
                processing Your
                Personal Data and help us with our Website.
                We share Your Personal Data with third parties in order to protect our rights,
                properties, and
                safety, and for the safety of users of this Website.</p>
              <h4>7. PURPOSE OF PROCESSING PERSONAL DATA</h4>
              <p>We collect and use Your Personal Data for the following reasons: <br />
                (i) To provide our Service and to maintain and make improvements to the Service
                we
                provide to You <br />
                (ii) To provide personalized Service to You, including making recommendations and
                providing personalized content <br />
                (iii) To provide You with updates on the Website and related items <br />
                (iv) To provide analytics to understand how our Service is used.</p> <br />
              <h4>8. STORAGE OF PERSONAL DATA</h4>
              <p>We take the security of the Personal Data we collect very seriously, and we
                take
                reasonable
                measures to reduce the risk of accidental destruction, loss, or unauthorized
                access to such
                information. However, please note that no system involving the transmission of
                information via
                electronic storage systems or the internet is completely secure.
                The Personal Data and any other information we have about You may be stored for
                such period
                as we may determine until You withdraw Your consent.
                Note that You can withdraw Your consent to store Your Personal Data at any time.
                Once this is
                done, all Personal Data and information we have about You will be deleted.</p>
              <h4>9. PROTECTION OF PERSONAL DATA</h4>
              <p>Our Service is built with strong security features that continuously protect
                Your Personal Data.
                Our security features help us detect and block security threats. If we detect
                any security risk, we
                may inform You and guide You through steps to stay protected.</p>
              <h4>10. DISCLOSURE OF PERSONAL DATA</h4>
              <p>We do not disclose Your Personal Data except for any of the following reasons: <br />
                (i) If You have granted us the permission to do so: We will disclose Your
                Personal Data
                where we have received Your unequivocal consent and permission to do so. However,
                such consent may be withdrawn at any time. <br />
                (ii) For the purposes of processing Your Personal Data: We may disclose Your
                Personal <br />
                Data to trusted businesses or persons for the purpose of processing Your
                Personal Data
                for us, based on our instruction and in compliance with our Privacy Policy.<br />
                (iii) For any other reason that may be necessary for the operation of our Website.
              </p>
              <h4>11. LINKS TO THIRD PARTY SITES/SERVICES</h4>
              <p>The website may contain links to other websites which we believe may offer
                useful information.
                These linked websites are not under our control and this Privacy Policy does not
                apply to these
                websites. We suggest that You contact those websites directly for information on
                their privacy
                policy, security, data collection, and distribution policies.</p>
              <h4>12. ACCESSING, MODIFYING AND DELETING YOUR PERSONAL DATA</h4>
              <p>If you wish to access, review, or modify any information we have about You,
                You
                may do so by
                simply contacting us at the following email address: support@votecity.ng. You
                may also request
                that we delete any information belonging to You that we have stored.</p>

              <h4>13. YOUR RIGHTS</h4>
              <p>Your rights in relation to Your Personal Data are as follows: <br />
                (i) The right to have access to Your Personal Data. <br />
                (ii) The right to be informed about the processing of Your Personal Data. <br />
                (iii) The right to rectify any inaccurate Personal Data or any information about
                You. <br />
                (iv) The right to review, modify or erase Your Personal Data and any other
                information we
                have about You. <br />
                (v) The right to restrict the processing of Your Personal Data. <br />
                (vi) The right to block Personal Data processing in violation of any law. <br />
                (vii) The right to be informed about any rectification or erasure of Personal
                Data or
                restriction of any processing carried out. <br />
                (viii) The right to the portability of Your Personal Data. <br />
                (ix) The right to lodge a complaint with a supervisory authority within Nigeria.</p>
              <h4>14. CONTACT INFORMATION</h4>
              <p>If You have any questions regarding this Privacy Policy or the Personal Data we
                collect, or if
                You wish to make any comments or complaints about anything related to this
                Privacy Policy,
                please contact us at the following email address: support@votecity.ng.</p>
              <button className='btn' onClick={handleClose}>close</button>
            </div>

          )}
          {isOpenn && (
            <div className="popup">
              <h3>WEBSITE TERMS AND CONDITIONS</h3>
              <h5>Effective date: December 12, 2024</h5>
              <p> These terms and conditions apply to You, the user of this website (including any sub-domains,
                unless expressly excluded by their own terms and conditions), and Votecity Limited, the owner
                and operator of the following website: votecity.ng(the "Website"), with the following URL web
                address: <a href=""> www.votecity.ng</a></p> <br />
              <h5>PLEASE READ THE TERMS AND CONDITIONS CAREFULLY as they affect Your legal rights.</h5>
              <h4>1. Definitions</h4>
              <p>"Parties" means Both You (the user of the Service) and the Owner of this Service.
                "Content" means any content, writing, images, audiovisual content, or other information
                published on this Service.
                "Materials" means any materials, information, or documentation that we may provide to You in
                connection with Your use of the Products, including documentation, data, information developed
                for any use, and other materials that may assist in Your use of the Goods or Service.
                "Terms" means these terms and conditions.
                "Service" means the website, including all pages, subpages, all blogs, forums, and other
                connected internet content whatsoever.</p>
              <h4>2. About this Website</h4>
              <p>This Website is comprised of various web pages operated by Votecity Limited.
                This Service is offered to You upon Your acceptance of the Terms, conditions, and notices
                hereinafter contained. Your use of this Service constitutes Your agreement to all the Terms
                contained herein.</p>
              <h4>3. Agreement</h4>
              <p>a. By using this Website, You acknowledge that You have reviewed and considered the Terms
                of this Agreement, understand them, and agree to be bound by them. If You do not agree with
                these Terms or do not intend to be bound by them, You must quit the use of this Website
                immediately. In addition, when using this Service, You shall be subject to any posted guidelines
                or rules applicable to such services. Accordingly, any participation in this Service shall constitute
                acceptance of this Agreement.</p>
              <h4>4. Acceptable Use</h4>
              <p>a. We hereby grant You the license to use our Service for Your personal, non-commercial use
                to retrieve, display, and view the Content on a computer screen.</p>
              <p>b. The license created under these Terms is limited, non-exclusive, non-transferable, and
                revocable.</p>
              <p>c. You agree that You will not use the Contents or Materials for any other purpose which may be
                contrary to your license to use this Service.</p>
              <p>d. Any unauthorized use by You shall terminate the permission or license granted by this
                Website.</p>
              <button className='btn' onClick={handleClosen}>close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks