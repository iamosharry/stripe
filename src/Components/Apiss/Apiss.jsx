import './Apiss.css'

const Apiss = () => {
  return (
    <div className='apiss'>
      <div className="apiss-container">
        <div className="left">
          <span>Designed For Engineers</span>
          <h2>The world's best and most <br />intuitive APIs</h2>
          <p>We abstract the hard stuff away so your team dont focus on <br />building good technology, instead of spending time and money <br />reinventing the wheel</p>
          <button className='first-btn'>Start now <span><img src="/assets/arrow-right-dark.svg" alt="" /></span></button>

          <div className='inner-flex'>
            <div className="l2">
              <img src="/assets/tools-icon.png" alt="" />
              <h4>Tools for all stacks</h4>
              <p>We offer front end and back end <br />libraries in some of the most widely <br />used technologies, old and new.</p>
              <button>Explore partners <span><img src="src/assets/arrow-right-blue.svg" alt="" /></span></button>
            </div>
            <div className="r2">
              <img src="/assets/cube-icon.png" alt="" />
              <h4>Custom Integrations</h4>
              <p>Use integrations for systems like <br />Shopify, WooCommerce, NetSuite, and <br />more</p>
              <button>Explore partners <span><img src="src/assets/arrow-right-blue.svg" alt="" /></span></button>
            </div>

          </div>
        </div>
        <div className="right">
          <div>
            <img src="/assets/api-code.png" alt="" />
          </div>
          <div>
            <img src="/assets/terminal-code.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apiss