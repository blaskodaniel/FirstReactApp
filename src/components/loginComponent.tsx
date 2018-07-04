import { Component } from 'react'
import * as React from 'react';

interface Props {
    formSubmit: Function;
}

export default class LoginComponent extends Component<Props, any> {
    InputUsername: HTMLInputElement;
    InputPassword: HTMLInputElement;

    constructor (props:any) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e: any) {
        e.preventDefault();
        const user = {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value
        }
        this.props.formSubmit(e, user.username, user.password);
        console.log(JSON.stringify(user));
    }

    render() {
        return (
            <div>
                <div className="d-flex align-items-center justify-content-center p-1 mb-2">
                    <form className="loginform mx-auto" onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <div className="col-sm-10">
                            <input 
                                type="text" 
                                ref={(input) => this.InputUsername = input as HTMLInputElement}
                                className="form-control" 
                                name="username" 
                                placeholder="Username" 
                            />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <input 
                                    type="password" 
                                    ref={(input) => this.InputPassword = input as HTMLInputElement}
                                    className="form-control" 
                                    name="password" 
                                    placeholder="Password" 
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary w-100">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
} 