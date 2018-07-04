import { Component } from 'react'
import * as React from 'react';
import Post from '../interfaces/Post';

export default class PostItemComponent extends Component<Post, any> {
  constructor(props: Post) {
    super(props);
  }
  render() {
    return (
      <div className="card mb-2">
        <div className="card-body">
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}