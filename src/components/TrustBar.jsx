import './TrustBar.css'

function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-item"><span className="trust-num tn1">4+</span><span className="trust-label">Products Shipped</span></div>
      <div className="trust-item"><span className="trust-num tn2">3</span><span className="trust-label">AI-Powered Tools</span></div>
      <div className="trust-item"><span className="trust-num tn3">10+</span><span className="trust-label">Technologies Used</span></div>
      <div className="trust-item"><span className="trust-num tn4">100%</span><span className="trust-label">Self Deployed</span></div>
    </div>
  )
}

export default TrustBar