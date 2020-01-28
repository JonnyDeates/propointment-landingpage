import React, {Component} from 'react';
import './Home.css'
import Page from "../Page/Page";
class Home extends  Component {
    render() {
        return (<main className={'home-component'}>
            <div className='place-holder'>{this.props.page.header}</div>
            <Page page={this.props.page} />
        </main>)
    }
}
export default Home;