import React, { Component } from 'react'
import './tourlist.scss'
import Tour from '../Tour'

export default class TourList extends Component {
    render() {
        return (
            <div>
                <h2>Hello from Tourlist</h2>
                <Tour></Tour>
            </div>
        )
    }
}
