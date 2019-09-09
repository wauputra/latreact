import React from 'react';
import DetailPost from '../../container/pages/DetailPost/DetailPost';

const Post = (props) => {
    return (
        <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-650">
                <div className="card-body d-flex flex-column align-items-start">
                    <h3 className="mb-0">
                        <a className="text-dark" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</a>
                    </h3>
                    <p className="card-text mb-auto">{props.data.body}</p>
                    <button className="btn btn-danger" onClick={() => props.remove(props.data.id)} > Remove</button>
                    <button className="btn btn-info mt-2" onClick={() => props.update(props.data)} > Update</button>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" src="https://placeimg.com/200/250/tech" alt="Card image cap"></img>
            </div>
        </div >
    )
}

export default Post;