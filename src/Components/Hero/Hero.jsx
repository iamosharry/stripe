import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="left">
            <h1>Payments <br />infrastructure <br />for the world</h1>
            <p>Tons of compaines all over the world use Swipe's seamless platform to manage their entire business's entire financial transaction infrastructure online.</p>
            <a className='sn' href="#">Start now &rarr;</a>
            <a className='cs' href="#">Contact sales</a>
          </div>
          <div className="right">
            <img src="/assets/hero-phone.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero