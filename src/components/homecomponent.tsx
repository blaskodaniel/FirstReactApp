import { Component } from 'react'
import * as React from 'react';
import { connect } from 'react-redux';
import { Actions } from '@sensenet/redux';

interface Props{
    getContent: Function;
}

export class HomeComponent extends Component<Props> {
    constructor(props:Props){
        super(props);
    }

    async componentDidMount(){
        let getdatas = await this.props.getContent('/Root/Sites/rorweb/Companies/Company1/CRM/Contacts/Personer', {
            select : ['DisplayName', 'Id'],
            query: 'TypeIs:RorWebCRMContact', 
        });
        console.log(getdatas);
    }

    render() {
        var divStyle = {
            height: '100px'
        };

        var divStyle2 = {
            width: '120px'
        };
        return (
            <div>
                <div className="d-flex justify-content-center p-1 bg-success mb-2">
                    <div className="border p-2 mr-1">Flex item</div>
                    <div className="border p-2 mr-1">Flex item</div>
                    <div className="border p-2">Flex item</div>
                </div>
                <div className="d-flex justify-content-between p-1 bg-success mb-2">
                    <div className="border p-2 mr-1">Flex item</div>
                    <div className="border p-2 mr-1">Flex item</div>
                    <div className="border p-2">Flex item</div>
                </div>
                <div className="d-flex align-items-center justify-content-center p-1 bg-success mb-2" style={divStyle}>
                    <div className="border p-2 mr-1">Flex item</div>
                    <div className="border p-2 mr-1">Flex item</div>
                    <div className="border p-2">Flex item</div>
                </div>
                <div className="bg-dark clearfix">
                    <button type="button" className="btn btn-secondary float-right">Right button</button>
                    <button type="button" className="btn btn-secondary float-left">left button</button>
                </div>
                <div className="text-nowrap bg-danger mt-2 p-2" style={divStyle2}>
                    This text should overflow the parent.
                </div>
                <div className="container d-flex h-100">
                    <div className="row align-self-center w-100">
                        <div className="col-6 mx-auto">
                            <div className="jumbotron">
                                <h1 className="display-4">Jumbotron</h1>
                                <p className="lead">This is a simple hero unit.</p>
                                <p className="lead">
                                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            One of three columns
                        </div>
                        <div className="col">
                            One of three columns
                        </div>
                        <div className="col">
                            One of three columns
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col">
                            One of three columns
                        </div>
                        <div className="col">
                            One of three columns
                        </div>
                        <div className="col">
                            One of three columns
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col">
                            One of three columns
                        </div>
                        <div className="col">
                            One of three columns
                        </div>
                        <div className="col">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
getContent: (path: string, options: any) => dispatch(Actions.requestContent( path, options ))
    })
    
)(HomeComponent as any);