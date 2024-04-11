import './Session.css'

const Session = () => {
  return (
    <div className='session'>
      <div className="session-container">
        <div className="left-session">
          <span>Virtual events</span>
          <h2>Check out Sessions now!</h2>
          <p>Swipe Session is our annual conference - it's now available to <br />watch on demand! Check it out and became an "internet <br /> economy" genius, and see how swipe can transform the way <br />you do business online.</p>
          <a href="#">Start now <span><img src="src/assets/arrow-right-light.svg" alt="" /></span></a>
        </div>
        <div className="right-session">
          <div>
            <img src="src/assets/swipe-sessions.png" alt="" />
            <img className='session-avatar1' src="src/assets/avatar1.png" alt="" />
            <img className='session-avatar2' src="src/assets/avatar2.png" alt="" />
            <div className='tbb'>
              <h3>Keynote</h3>
              <p>Everything you need to know <br />about the internet economy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Session