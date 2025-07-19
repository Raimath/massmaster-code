import React from 'react'
import profile from "../images/Profile.jpg"

export const About = () => {
  return (
    <>
      <div></div>

      <div className='section about-section'>
        <div className='container about-container flex'>
          <h3>About Us</h3>
          <div className='profile flex'>

            <img src={profile} alt='profile' />
            <b>Mr. Shanth kumar</b>
            <p className='para-light'>Cinematographer | Owner, MassMaster</p>
          </div>
          <div className='about-content flex'>

            <p>At MassMaster, photography is not just our profession it’s our passion. We specialize in capturing life’s most precious moments and turning them into timeless memories. Whether it’s the emotional journey of a wedding, the creative expressions of a pre-wedding shoot, or the glamour of a commercial ad, we deliver visuals that speak louder than words.</p>
            <p>With years of experience and a dedicated, creative team, we offer:</p>
            <ul className='about-li flex'>

              <li>Wedding & Pre-Wedding Photography:  Candid, traditional, and cinematic coverage that reflects love and emotion.</li>
              <li>Event Coverage: From birthdays to corporate events, we ensure every detail is captured.</li>
              <li>Ad Films & Brand Shoots: Creative, high-quality visuals for ads, products, fashion, and promos.</li>
              <li>Professional Editing: Our in-house editors craft flawless photos and videos with cinematic cuts and color grading.</li>
              <li>Drone Photography: Stunning aerial shots that add a unique perspective to your visuals.</li>
            </ul>

            <p>We use high-end DSLR and mirrorless cameras, professional lighting, stabilizers, and drones to deliver crisp, vibrant, and cinematic output. Every shoot is planned with attention to detail, creativity, and a deep understanding of our clients’ needs.</p>
            <p>Whether you're a couple preparing for your big day, a brand looking for sharp ad visuals, or someone planning a special event, MassMaster is here to make it unforgettable.</p>
            <p><b>Let’s create something beautiful together.</b> </p>
          </div>
        </div>
      </div></>
  )
}
