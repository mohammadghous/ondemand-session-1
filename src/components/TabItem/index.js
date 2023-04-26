import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickActiveTab = () => {
    onClickTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
