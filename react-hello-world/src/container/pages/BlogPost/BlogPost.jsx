import React, { Component, Fragment } from 'react';

import Post from '../../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
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
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
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

        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }

        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            //console.log('value obj formBlogPost', this.state.formBlogPost);
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })

    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    handleSubmit = () => {

        if (this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }

    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
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
                                <input type="text" value={this.state.formBlogPost.title} name="title" className="form-control" placeholder="title" onChange={this.handleFormChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label className="formGroupExampleInput">Deskripsi</label>
                                <textarea type="text" value={this.state.formBlogPost.body} name="body" placeholder="desc" className="form-control" rows="3" onChange={this.handleFormChange}></textarea>
                            </div>
                        </div>
                        <button className="btn btn-success mt-4" onClick={this.handleSubmit}>Simpan</button>
                    </div>
                </div>
                <div className="row mb-2 mt-4">
                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                        })
                    }
                </div>
            </Fragment >
        )
    }
}

export default BlogPost;