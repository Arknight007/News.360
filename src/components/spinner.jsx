import React, { Component } from 'react'
import loading from './loading.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className=" img-fluid">  
      <div className="text-center">
            <div className="spinner-border" role="status">
            <img src={loading} alt={loading} />
            </div>
        </div>
        </div>
      
    )
  }
}
