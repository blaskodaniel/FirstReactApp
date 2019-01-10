import { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as React from 'react';
import { AppProps } from '../interfaces/AppProps';
import { connect } from 'react-redux';
import { Reducers, Actions } from '@sensenet/redux';

export class NavigationComponent extends Component<AppProps,any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">FirstReact {this.props.loginState} - {this.props.userName}</Link>
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

// Amit kapunk a store-ból
const mapStateToProps = (state: any, match: any) => {
    return {
      loginState: Reducers.getAuthenticationStatus(state.sensenet),
      userName: state.sensenet.session.user.userName,
    };
};

export default withRouter(connect(
    mapStateToProps,
    (dispatch) => ({
      // Amit beküldünk a store-ba (mapDispatchToProps)
      login: (username: string, password: string) => dispatch(Actions.userLogin(username, password)),
    })
  )(NavigationComponent as any));