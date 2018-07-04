import { Component } from 'react'
import { Link } from 'react-router-dom';
import * as React from 'react';

export default class NavigationComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">FirstReact</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/postlist">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/addpost">Add <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}