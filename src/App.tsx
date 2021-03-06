import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions, Reducers } from '@sensenet/redux';
import Firstcomponent from './components/firstcomponent';
import AddFormComponent from './components/addpostComponent';
import LoginComponent from './components/loginComponent';
import NavigationComponent from './components/navigationComponent';
import HomeComponent from './components/homecomponent';
import { AppProps } from '../src/interfaces/AppProps';
import './App.css';

interface State {
  isvalami: boolean;
}

class App extends React.Component<AppProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isvalami: false
    };
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e: Event, email: string, password: string) {
    console.log(`email:${email} and pass:${password}`);
    this.props.login(email, password);
  }

  isAuthenticate(): boolean {
    const token = sessionStorage.getItem('sn-https://rorweb-access');
    if (token) {
      console.log(`Authenticate: ${this.props.userName}`);
      return true;
    } else {
      console.log('Unauthenticated');
      return false;
    }
  }

  getTeams = async () => {
    let teams = await this.props.getItem('/Root/Sites/rorweb/Companies/Company1/CRM/Contacts/Personer/Candida Champkins', {
      select: ['Name', 'DisplayName']
    });
    if (teams != null) {
      console.log(teams);
    }
  }

  componentDidMount() {
    if (this.isAuthenticate()) {
      this.getTeams();
    }
  }

  public render() {

    return (
      <div>
        <NavigationComponent />
        <div className="container mt-3 h-100">
          {this.props.loginState}
          <Switch>
            <Route path="/addpost" component={AddFormComponent} />
            <Route path="/postlist" component={Firstcomponent} />
            <Route path="/login" render={() => { return (<LoginComponent formSubmit={this.formSubmit} />); }} />
            <Route path="/" component={HomeComponent} />
          </Switch>
        </div>
      </div>
    );
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
    getItem: (path: string, options: any) => dispatch(Actions.loadContent(path, options))
  })
)(App as any));