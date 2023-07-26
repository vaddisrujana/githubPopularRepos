import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    repositoryList: [],
    fetchedList: languageFiltersData[0],
    display: true,
    isLoading: true,
  }

  componentDidMount() {
    this.getRepoData()
  }

  onClicked = id => {
    this.setState({fetchedList: id}, this.getRepoData)
  }

  getRepoData = async () => {
    const {fetchedList} = this.state
    console.log(fetchedList)
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${fetchedList}`,
    )
    const data = await response.json()
    console.log(data)
    const statusCode = await response.statusCode
    console.log(response.ok)
    if (response.ok) {
      const formattedData = data.popular_repos.map(each => ({
        id: each.id,
        name: each.name,
        forksCount: each.forks_count,
        issuesCount: each.issues_count,
        avatarUrl: each.avatar_url,
        starsCount: each.stars_count,
      }))
      this.setState({
        repositoryList: formattedData,
        display: response.ok,
        isLoading: false,
      })
    }
  }

  renderDisplay = () => {
    const {display, repositoryList} = this.state

    if (display) {
      return (
        <ul>
          <div className="background2">
            {repositoryList.map(each => (
              <RepositoryItem repositoryList={each} key={each.id} />
            ))}
          </div>
        </ul>
      )
    }
    return (
      <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" />
    )
  }

  render() {
    const {repositoryList, display, isLoading} = this.state
    console.log(repositoryList)
    return (
      <div className="background">
        <h1 className="head">Popular</h1>
        <ul>
          <div className="background1">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                languageFiltersData={each}
                key={each.id}
                onClicked={this.onClicked}
              />
            ))}
          </div>
        </ul>
        {isLoading ? (
          <Loader
            type="ThreeDots"
            color="#0284c7"
            height={80}
            width={80}
            data-testid="loader"
          />
        ) : (
          this.renderDisplay()
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
