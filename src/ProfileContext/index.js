import React from 'react'

const ProfileContext = React.createContext({
  username: '',
  repo: '',
  //   activeTabId: '',
  //   setActiveTabId: () => {},
  changeProfileName: () => {},
  changeRepoName: () => {},
})

export default ProfileContext
