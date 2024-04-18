import './Waiting.css'

const Waiting = () => {
  return (
    <div className='waiting'>
      <div className="waiting-container">
        <div className="left">
          <h2>What are you waiting for?</h2>
          <p>Explore <a href="#">Swipe</a> now, or create an account and start accepting <br />payments today! If you need a custom package for your <br /> business, let's chat today.</p>
          <a className='left-btn'>Start now <img src="/assets/arrow-right-light.svg" alt="" /></a>
        </div>
        <div className="right">
          <div>
            <img src="/assets/shield-icon.png" alt="" />
            <h2>Always know what you pay</h2>
            <p>integrated per-transaction pricing with <br />no hidden fees.</p>
            <a className='right-btn'>Pricing details <img src="/assets/arrow-right-purple.svg" alt="" /></a>
          </div>
          <div>
            <img src="/assets/bars-icon.png" alt="" />
            <h2>Start your integration</h2>
            <p>Get up and running with Stripe in as <br />little as 10 minutes.</p>
            <a className='right-btn'>API reference <img src="/assets/arrow-right-purple.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Waiting