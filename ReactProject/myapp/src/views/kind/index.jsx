import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="box">
                <header className="header">分类</header>
                <div className="content">分类</div>
            </div>
        )
    }
}