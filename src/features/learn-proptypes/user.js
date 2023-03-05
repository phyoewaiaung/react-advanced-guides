import React, { Component } from 'react'
import UserTemplate  from './user_template';

export default class User extends Component {

    state = {
        name:'phyoe',
        age:'23',
    }
  render() {
    return (
      <UserTemplate {...this.state}/>
    )
  }
}
