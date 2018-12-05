import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';

class Settings extends Component {
  
  state = {
    profile: {
      name: "Nikochu"
    },
    target: {
      location: "Richmond, UK"
    },
    notifications: "All",
    account: "Banking Details"
  }
  render() {
    const { profile, target, notifications, account } = this.state 
    return (
      <div className="grid">
        <div className="box">
          <Icon color="purple" name="pencil"/>
          <h4>Profile</h4>
          <p>{profile.name}</p>
        </div>
        <div className="box">
          <Icon color="purple" name="heart"/>
          <h4>Target</h4>
          <p>{target.location}</p>
        </div>
        <div className="box">
          <Icon color="purple" name="bell"/>
          <h4>Notifications</h4>
          <p>{notifications}</p>
        </div>
        <div className="box">
          <Icon color="purple" name="cog"/>
          <h4>Account Details</h4>
          <p>{account}</p>
        </div>
        <div className="stretch"></div>
      </div>
    )
  }
}

export default Settings
