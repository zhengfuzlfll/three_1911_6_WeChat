import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="box">
                <header className="header">购物车</header>
                <div className="content">购物车</div>
            </div>
        )
    }
}