import './index.css'

const RepositoryItem = props => {
  const {repositoryList} = props
  const {avatarUrl, starsCount, forksCount, issuesCount, name} = repositoryList
  return (
    <li className="list">
      <div className="back">
        <img src={avatarUrl} className="image" alt={name} />
        <p className="para1">{name}</p>
        <div className="back1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon"
          />
          <p className="para">{starsCount}</p>
        </div>
        <div className="back1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon"
          />
          <p className="para">{forksCount}</p>
        </div>
        <div className="back1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon"
          />
          <p className="para">{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
