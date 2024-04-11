import './Approach.css'

const Approach = () => {
  return (
    <div className='approach'>
      <div className="approach-container">
        <span>Why Swipe</span>
        <h2>A tech-first approach to finance</h2>
        <div className="approaches">
          <div className="one">
            <img src="src/assets/cloud-icon.png" alt="" />
            <h4>Efficient Always</h4>
            <p>We've optimized every level of the finance stack, from integreations to prebuilt checkout flows - no detail has been spared.</p>
          </div>
          <div className="two">
            <img src="src/assets/cycle-icon.png" alt="" />
            <h4>Fast-Improving</h4>
            <p>We make constant updates and improvements to help you stay on the cutting edge of your industry, developing to production around 20X per day! </p>
          </div>
          <div className="three">
            <img src="src/assets/shield-icon.png" alt="" />
            <h4>Tried and true</h4>
            <p>Our systems operate with 100% uptime, with scalability and uptime as a guarantee. Swipe is super duper certified so dont worry </p>
          </div>
          <div className="four">
            <img src="src/assets/bars-icon.png" alt="" />
            <h4>Crazy Optimized</h4>
            <p>We use machine learning trained on billions of data points to help optimize all products, from fraud to revenue recovery and more.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approach