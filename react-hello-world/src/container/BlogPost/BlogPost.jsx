import React, { Component, Fragment } from 'react';
import './Blogpost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((result) => {
                //console.log(res);
                this.setState({
                    post: result.data
                })
            })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
        }, (err) => {
            console.log('error : ', err);
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getPostAPI()
        })
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target);
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timestamp = new Date().getTime();
        formBlogPostNew['id'] = timestamp;
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            //console.log('value obj formBlogPost', this.state.formBlogPost);
        })
    }

    handleSubmit = () => {
        //console.log(this.state.formBlogPost);
        this.postDataToAPI();
    }

    componentDidMount() {
        /*  fetch('https://jsonplaceholder.typicode.com/posts')
             .then(response => response.json())
             .then(json => {
                 this.setState({
                     post: json
                 })
             }) */

        //menggunakan axios
        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <h5 className="text-info">Form Tambah Post</h5>
                        <div className="form-row">
                            <div className="col">
                                <label className="formGroupExampleInput">Judul</label>
                                <input type="text" name="title" className="form-control" placeholder="title" onChange={this.handleFormChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label className="formGroupExampleInput">Deskripsi</label>
                                <textarea type="text" name="body" placeholder="desc" className="form-control" rows="3" onChange={this.handleFormChange}></textarea>
                            </div>
                        </div>
                        <button className="btn btn-success mt-4" onClick={this.handleSubmit}>Simpan</button>
                    </div>
                </div>
                <div className="row mb-2 mt-4">
                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} />
                        })
                    }
                </div>
            </Fragment >
        )
    }
}

export default BlogPost;