import React, { Component } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
// import LifeCycleComp from '../../component/LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
            <hr></hr>
            <YoutubeComp 
                time="8.13" 
                title="Episode 1 : Jalan Jalan" 
                desc="Episode pertama ini hanya jalan jalan cuk"/>
            <YoutubeComp 
                time="7.12" 
                title="Episode 2 : Kesasar" 
                desc="Diperjalanan kita nyasar dan kebingungan"/>
            <YoutubeComp 
                time="6.22" 
                title="Episode 3 : Nyampe juga" 
                desc="Akhirnya di vlog ini nyampe juga"/>
            <YoutubeComp 
                time="2.19" 
                title="Episode 4 : ketinggalan pesawat" 
                desc="Saat udah sampe, malah ketinggalanan pesawat" />
            <YoutubeComp /> */}

                <div className="container">
                    <header className="blog-header py-3">
                        <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col-4 pt-1">
                                <a className="text-muted" href="#">Subscribe</a>
                            </div>
                            <div className="col-4 text-center">
                                <a className="blog-header-logo text-dark" href="#">LatReact get API</a>
                            </div>
                            <div className="col-4 d-flex justify-content-end align-items-center">
                                <a className="text-muted" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                                </a>
                                <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                            </div>
                        </div>
                    </header>

                    <BlogPost />

                </div>
            </div>
        )
    }
}

export default Home;