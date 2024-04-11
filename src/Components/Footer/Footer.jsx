import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="swipe">
          <img className='swipe-logo' src="src/assets/logo-dark.svg" alt="" />
          <p> <img src="src/assets/location-icon.png" alt="" />United States</p>
          <p> <img src="src/assets/comment-icon.png" alt="" />English(United States)</p>
        </div>
        <div className='footer-flex'>
          <div>
            <h2>Products</h2>
            <p>Atlas</p>
            <p>Billing</p>
            <p>Invoicing</p>
            <p>Payment</p>
            <p>Checkout</p>
            <p>Identity</p>
          </div>
          <div>
            <h2>Use Cases</h2>
            <p>eCommerce</p>
            <p>SaaS</p>
            <p>Marketplace</p>
            <p>Embedded Finance</p>
            <p>Crypto</p>
            <p>Creator Economy</p>
          </div>
          <div>
            <h2>Resources</h2>
            <p>Support Center</p>
            <p>Guides</p>
            <p>Blog</p>
            <p>Licenses</p>
            <p>Privacy &nTerms</p>
            <p>Cookie Settings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer