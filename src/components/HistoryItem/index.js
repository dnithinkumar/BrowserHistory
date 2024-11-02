import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteHistory = () => {
    onDelete(id)
  }

  return (
    <li>
      <div className="history-item">
        <p className="time">{timeAccessed}</p>
        <div className="domain-delete-container">
          <div className="domain">
            <img src={logoUrl} alt="domain logo" className="domain-logo" />
            <p className="domain-name">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button
            className="delete-button"
            onClick={deleteHistory}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
