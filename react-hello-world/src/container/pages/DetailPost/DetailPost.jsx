import React, { Component } from 'react';
import Axios from 'axios';

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        Axios.get(`http://localhost:3004/posts/${id}`)
            .then((res) => {
                console.log(res);
                let post = res.data;
                this.setState({
                    post: {
                        title: post.title,
                        body: post.body
                    }
                })
            })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.state.post.title}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{this.state.post.body}</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default DetailPost;