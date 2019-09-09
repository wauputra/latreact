import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubePage extends Component {
    render() {
        return (
            <Fragment>
                <YoutubeComp
                    time="8.13"
                    title="Episode 1 : Jalan Jalan"
                    desc="Episode pertama ini hanya jalan jalan cuk" />
                <YoutubeComp
                    time="7.12"
                    title="Episode 2 : Kesasar"
                    desc="Diperjalanan kita nyasar dan kebingungan" />
                <YoutubeComp
                    time="6.22"
                    title="Episode 3 : Nyampe juga"
                    desc="Akhirnya di vlog ini nyampe juga" />
                <YoutubeComp
                    time="2.19"
                    title="Episode 4 : ketinggalan pesawat"
                    desc="Saat udah sampe, malah ketinggalanan pesawat" />
                <YoutubeComp />
            </Fragment>
        )
    }
}

export default YoutubePage;
