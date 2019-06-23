import React, { Component } from 'react';
import { Timezone } from '../common/timezone';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timezone: Timezone
		};
	}

  render() {
    return (
      <div className="appMain">

       </div>
    )
  }
}

export default Profile;