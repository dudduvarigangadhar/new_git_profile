import {useEffect, useState, useContext} from 'react'
import Loader from 'react-loader-spinner'
import {HiOutlineSearch} from 'react-icons/hi'
import {RiBuildingLine} from 'react-icons/ri'
import {IoMdLink} from 'react-icons/io'
import {IoLocationOutline} from 'react-icons/io5'
import Header from '../Header'
import ProfileContext from '../../ProfileContext/index'

import './index.css'

const apiConstantStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component{
    state = {
        apiStatus: apiConstantStatus.initial,
        errorMsg: '',
        userData:'',

    }

    getUserDetails = async () => {
    this.setState({ apiStatus: apiConstantStatus.inProgress})
    const options = {
      method: 'GET',
    }
    // api url
    const apiUrl = `https://apis2.ccbp.in/gpv/profile-details/${username}?api_key=`
    try{
        const response = await fetch(apiUrl, options)
        if (response.ok === true) {
        const fetchedData = await response.json()
        const updatedData = {
            avatarUrl: fetchedData.avatar_url,
            bio: fetchedData.bio,
            blog: fetchedData.blog,
            company: fetchedData.company,
            createdAt: fetchedData.created_at,
            email: fetchedData.email,
            eventsUrl: fetchedData.events_url,
            followers: fetchedData.followers,
            followersUrl: fetchedData.followers_url,
            following: fetchedData.following,
            gistsUrl: fetchedData.gists_url,
            gravatarId: fetchedData.gravatar_id,
            hireable: fetchedData.hireable,
            htmlUrl: fetchedData.html_url,
            id: fetchedData.id,
            location: fetchedData.location,
            login: fetchedData.login,
            name: fetchedData.login,
            nodeId: fetchedData.node_id,
            organizationsUrl: fetchedData.organizations_url,
            publicGists: fetchedData.public_gists,
            publicRepos: fetchedData.public_repos,
            receivedEventsUrl: fetchedData.received_events_url,
            reposUrl: fetchedData.repos_url,
            siteAdmin: fetchedData.site_admin,
            starredUrl: fetchedData.starred_url,
            subscriptionsUrl: fetchedData.subscriptions_url,
            twitterUsername: fetchedData.twitter_username,
            type: fetchedData.type,
            updatedAt: fetchedData.updated_at,
            url: fetchedData.url,
        }
        this.setState({userData:updatedData, apiStatus: apiConstantStatus.success})
    } else if (response.status === 400) {
        apiStatus: apiConstantStatus.inValidView
    }
    }catch(error){
        this.setState({
            errorMsg: 'Something went wrong. Please try again later.',
            apiStatus: apiConstantStatus.failure,

        })
    }
    
  }




   changeUsername = event => {
    changeProfileName(event.target.value)
  }

   loadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
    </div>
  )

   userFailureView = () => (
    <div className="visualizer-container">
      <div className="heading-text-container">
        <h2>Github Profile Visualizer</h2>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1725551907/Frame_8830_hdd3sz.png"
          alt="failure view"
          className="group-search-image"
        />
        <p>Something went wrong. Please try again</p>
        <button type="button" className="try-again-button" alt="try again">
          Try again
        </button>
      </div>
    </div>
  )

   userSuccessView = () => (
    <div className="user-view">
      <div className="user-details-view">
        <img
          src={userData.avatarUrl}
          alt="profile"
          className="user-profile-img"
        />
        <h1 className="user-name">{userData.name}</h1>
        <p className="user-company">{userData.twitterUsername}</p>
        <p className="user-bio">{userData.bio}</p>
      </div>
      <div className="website-details-view">
        <div className="followers-container">
          <div className="followers following-view-container">
            <p className="followers-headings-followers">{userData.followers}</p>
            <p className="following-result">FOLLOWERS</p>
          </div>
          <div className="following following-view-container">
            <p className="followers-headings-followers">{userData.following}</p>
            <p className="following-result">FOLLOWING</p>
          </div>
          <div className="public-repos following-view-container">
            <p className="followers-headings-followers">
              {userData.publicRepos}
            </p>
            <p className="following-result">PUBLIC REPOS</p>
          </div>
        </div>
        <div className="company-container">
          <div className="sm-company-container">
            <div className="view-container">
              <p className="followers-headings">Company</p>
              <div className="icon-container">
                {/* <img
                  src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1725554753/Line_zjk9pb.png"
                  alt="company"
                  className="about-icon"
                /> */}
                <RiBuildingLine className="about-icon" />
                <p className="home-footer-section-about">{userData.company}</p>
              </div>
            </div>
            <div className="view-container">
              <p className="followers-headings">Location</p>
              <div className="icon-container">
                {/* <img
                  src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1725554753/location_on_walrja.png"
                  alt="location"
                  className="about-icon"
                /> */}
                <IoLocationOutline className="about-icon" />
                <p className="home-footer-section-about">{userData.location}</p>
              </div>
            </div>
          </div>
          <div className="view-container">
            <p className="followers-headings">Company Url</p>
            <div className="icon-container">
              {/* <img
                src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1725554753/link_uxjdr8.png"
                alt="company url"
                className="about-icon"
              /> */}
              <IoMdLink className="about-icon" />
              <p className="home-footer-section-about">
                {userData.organizationsUrl}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

   userInitialView = () => (
    <div className="visualizer-container">
      <h1 className="heading-text-container">Github Profile Visualizer</h1>
      <img
        src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1725521736/Group_2_hzliq1.png"
        alt="gitHub profile visualizer home page"
        className="group-search-image"
      />
    </div>
  )

  //   const inValidUserView = () => console.log('invalid view')

 
   onClickSearch = () => {
    
  }

  useEffect(() => {
    if (search) {
      getUserDetails()
      setSearch(false)
    }
  }, [search])

   renderUserViews = () => {
    switch (apiStatus) {
      case apiConstantStatus.initial:
        return userInitialView()

      case apiConstantStatus.success:
        return userSuccessView()

      case apiConstantStatus.failure:
        return userFailureView()

      case apiConstantStatus.inProgress:
        return loadingView()

      default:
        return null
    }
  }
  console.log(userData.length)

  return (
    <div className="background-container" data-testid="home">
      <>
        <div className="home-header-container">
          {userData.length === 0 ? '' : <Header />}
        </div>
        <div className="home-lg-header-container">
          <Header />
        </div>

        <div>
          <div className="InputContainer">
            <input
              placeholder="Enter github username"
              className="input-name-container"
              // onChange={onChangeUsername}
              onChange={changeUsername}
              type="search"
            />
            <button
              type="button"
              className="search-icon-container"
              data-testid="searchButton"
              onClick={this.onClickSearch}
            >
              {/* <img
                src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1725519424/search-sm_krndiq.png"
                className="search-icon"
                alt="search-icon"
                onClick={onClickSearch}
              /> */}
              <HiOutlineSearch className="search-icon" alt="search-icon" />
            </button>
          </div>
          {/* {error && (
            <p className="error-msg">Enter the valid github username</p>
          )} */}
        </div>
        <div>{this.renderUserViews(apiStatus)}</div>
      </>
      )
    </div>
  )
}

export default Home
