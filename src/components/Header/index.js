import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import ProfileContext from '../../ProfileContext'

class Header extends Component {
  state = {activeStatus: false}

  onClickMenu = () => {
    const {activeStatus} = this.state
    this.setState({activeStatus: !activeStatus})
  }

  render() {
    const {activeStatus} = this.state
    const currentPath = window.location.pathname

    return (
      <div className="container">
        <div data-testid="header" className="repo-item">
          <nav className="header-container">
            <Link to="/" className="heading-nav-link">
              <h1 className="header-heading">Github Profile Visualizer</h1>
            </Link>
            <button
              className="menu-button"
              type="button"
              onClick={this.onClickMenu}
            >
              <img
                src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1731912175/menu_bdafjs.png"
                alt="menu"
                className="menuSize"
              />
            </button>

            <ul className={`items-nav ${activeStatus ? 'active' : ''}`}>
              <li>
                <Link
                  to="/"
                  className={
                    currentPath === '/'
                      ? 'active-link item-nav-link'
                      : 'item-nav-link'
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/repositories"
                  className={
                    currentPath === '/repositories'
                      ? 'active-link item-nav-link'
                      : 'item-nav-link'
                  }
                >
                  Repositories
                </Link>
              </li>
              <li>
                <Link
                  to="/analysis"
                  className={
                    currentPath === '/analysis'
                      ? 'active-link item-nav-link'
                      : 'item-nav-link'
                  }
                >
                  Analysis
                </Link>
              </li>
            </ul>
          </nav>
          {activeStatus && (
            <nav>
              <ul className="nav-items-container active">
                <li>
                  <Link
                    to="/"
                    className={
                      currentPath === '/'
                        ? 'active-link item-link'
                        : 'item-link'
                    }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/repositories"
                    className={
                      currentPath === '/repositories'
                        ? 'active-link item-link'
                        : 'item-link'
                    }
                  >
                    Repositories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/analysis"
                    className={
                      currentPath === '/analysis'
                        ? 'active-link item-link'
                        : 'item-link'
                    }
                  >
                    Analysis
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    )
    // return (
    //   <ProfileContext.Consumer>
    //     {value => {
    //       const {activeTabId, setActiveTabId} = value
    //       return (
    //         <div className="headerDivContainer">
    //           <div className="sm-device-container">
    //             <nav className="sm-sr-heading-container">
    //               <Link to="/" className="link-to-headingRoute">
    //                 <h1 className="headingRoute">GitHub Profile Visualizer</h1>
    //               </Link>
    //               <div className="menu-container">
    //                 <button
    //                   type="button"
    //                   className="menu-button"
    //                   onClick={this.onClickMenu}
    //                 >
    //                   <img
    //                     src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1731912175/menu_bdafjs.png"
    //                     alt="menu"
    //                   />
    //                 </button>
    //               </div>
    //             </nav>
    //             {activeStatus && (
    //               <nav className="menu-list-container">
    //                 <ul className="list-container">
    //                   <Link to="/" className="list-item-link">
    //                     <li>Home</li>
    //                   </Link>
    //                   <Link to="/repositories" className="list-item-link">
    //                     <li>Repositories</li>
    //                   </Link>
    //                   <Link to="/analysis" className="list-item-link">
    //                     <li>Analysis</li>
    //                   </Link>
    //                 </ul>
    //               </nav>
    //             )}
    //           </div>
    //           <div className="lg-nav-items">
    //             <nav className="lg-nav-items-container">
    //               <Link to="/" className="link-to-headingRoute">
    //                 <h1 className="headingRoute">GitHub Profile Visualizer</h1>
    //               </Link>
    //               <ul className="categories">
    //                 <Link to="/" className="list-item-link">
    //                   <li>Home</li>
    //                 </Link>
    //                 <Link to="/repositories" className="list-item-link">
    //                   <li>Repositories</li>
    //                 </Link>
    //                 <Link to="/analysis" className="list-item-link">
    //                   <li>Analysis</li>
    //                 </Link>
    //               </ul>
    //             </nav>
    //           </div>
    //         </div>
    //       )
    //     }}
    //   </ProfileContext.Consumer>
    // )
  }
}

export default Header
