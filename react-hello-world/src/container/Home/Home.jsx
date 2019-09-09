// library
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Pages
import YoutubePage from '../pages/Youtube/YoutubePage';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/DetailPost/DetailPost';
import '../pages/BlogPost/Blogpost.css';

class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to="/" className="navbar-brand">Latihan React</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link to="/" className="nav-item nav-link">Blog Post</Link>
                                    <Link to="/youtube" className="nav-item nav-link">Youtube Comp</Link>
                                </div>
                            </div>
                        </nav>

                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:id" component={DetailPost} />
                        <Route path="/youtube" component={YoutubePage} />
                    </div>
                </Fragment>
            </Router >
        )
    }
}

export default Home;