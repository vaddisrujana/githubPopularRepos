import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, onClicked} = props
  const {id, language} = languageFiltersData
  const languageClicked = () => {
    onClicked(id)
  }
  return (
    <li className="list1">
      <button className="button" type="button" onClick={languageClicked}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
