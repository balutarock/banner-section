import './index.css'
// Write your code here.
const BannerCardItem = props => {
  const {bannerCardData} = props
  const {headerText, description, className} = bannerCardData
  return (
    <div className={`card ${className}`}>
      <div className="detailsContainer">
        <h1 className="main-heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
