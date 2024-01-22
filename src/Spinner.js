import React, { Component } from 'react'
import PackMan from './PackMan.gif'
import './index.css'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center aligns'>
                <img src={PackMan} alt="......." />
            </div>
        )
    }
}
