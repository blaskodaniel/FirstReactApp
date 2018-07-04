import { Component } from 'react'
import HttpService from '../services/httpService';
import * as React from 'react';
import PostItemComponent from './postItemComponent';
import Post from '../interfaces/Post';

const httpservice = new HttpService();

export default class Firstcomponent extends Component<{}, { posts: Post[], isToggle: boolean, valami: string }> {

    constructor(props: string) {
        super(props);
        this.state = {
            posts: [],
            isToggle: true,
            valami: 'semmi'
        };
        this.loadPosts = this.loadPosts.bind(this);
        this.loadPosts();
    }

    loadPosts = async () => {
        try {
            let downloadPosts = await httpservice.getPosts();
            this.setState({ posts: downloadPosts });
            this.setState({ valami: 'Ez már más' });
        } catch (err) {
            console.log(err);
        }
    }

    simpleFunction = () => {
        this.setState({ isToggle: !this.state.isToggle });
        console.log(`${this.state.isToggle}`);
    }

    render() {
        let fullname = this.state.valami;
        return (
            <div>
                <button className="btn btn-sm btn-default" onClick={this.simpleFunction}>{fullname}</button>
                <hr />
                <div className="row">
                    {this.state.posts.map((post, i) => {
                        // Return the element. Also pass key     
                        return (<div key={post.id}><PostItemComponent title={post.title} body={post.body} /></div>)
                    })}
                </div>
            </div>
        )
    }
}