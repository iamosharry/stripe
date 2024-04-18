import './Global.css'

const Global = () => {
  return (
    <div className='global'>
      <div className="container-global">
        <span>Global scale</span>
        <h2>A structure for global <br /> businesses</h2>
        <p>Swipe makes moving money simple, borderless, and programmable - <br />just like the rest of the internet. We have teams all over the world and <br />we process billions and billions of dollars yearly for <a className='global-link' href="#">startups, Fortune <br />500s, and everything in between</a></p>
        <img src="/assets/global-graphic.png" alt="" />
        <div className="api-div">
          <div>
            <span>250M+</span>
            <p>API requests each day, peaking at <br />15,000 requests a second.</p>
          </div>
          <div>
            <span>97%</span>
            <p>of US adults have bought from <br />businesses that use Swipe</p>
          </div>
          <div>
            <span>135+</span>
            <p>currencies and payment methods <br />supported</p>
          </div>
          <div>
            <span>35+</span>
            <p>countries with local, acquiring, <br />optimizing acceptance rates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Global