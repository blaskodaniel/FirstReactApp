import * as React from 'react';
import Post from '../interfaces/Post';

interface State {
    post: Post
}

export default class AddFormComponent extends React.Component<{}, State>{

    TitleInput: HTMLInputElement;
    BodyInput: HTMLInputElement;

    constructor(props: string) {
        super(props);
        this.state = {
            post: { title: '', body: '' }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e: any) {
        this.setState({ post: { title: this.TitleInput.value, body: this.BodyInput.value } });
    }

    onSubmit(e: any) {
        e.preventDefault();
        const post = {
            title: this.state.post.title,
            body: this.state.post.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(x => x.json()).then(y => console.log(y))
    }

    render() {
        return (
            <div>
                <h1>Add new post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            ref={(input) => this.TitleInput = input as HTMLInputElement}
                            name="title"
                            onChange={this.onChange}
                            value={this.state.post.title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Body:</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="body"
                            ref={(input) => this.BodyInput = input as HTMLInputElement}
                            onChange={this.onChange}
                            value={this.state.post.body}
                        />
                    </div>
                    <div>
                        <button className="btn btn-sm btn-success" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}