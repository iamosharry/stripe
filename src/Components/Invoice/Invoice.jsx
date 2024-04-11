import './Invoice.css'

const Invoice = () => {
  return (
    <div className='invoice'>
      <div className="invoice-container">
        <div className="first-col">
          <div>
            <img src="src/assets/credit-card.png" alt="" />
          </div>
          <div>
            <img src="src/assets/phone.png" alt="" />
          </div>
        </div>
        <div className="second-col">
          <div>
            <img src="src/assets/slack-invoice.png" alt="" />
          </div>
          <div>
            <img src="src/assets/dash.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice