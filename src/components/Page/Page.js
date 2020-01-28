import React, {Component} from 'react';
import PageSection from './PageSection/PageSection';
import './Page.css'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            sections: []
        }
    }
    componentDidMount() {

        const header = !!(this.props.page.header) ? <h2>{this.props.page.header}</h2> : '';
        const sections = !!(this.props.page.sections) ? this.props.page.sections : [];
        this.setState({header, sections});
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState !== this.state){
            this.forceUpdate()
        }
    }

    getSection(section, i) {
        const header = !!(section.header) ? section.header : null;
        const description = !!(section.description) ? section.description : null;
        const externalLink = !!(section.externalLink) ? section.externalLink : null;
        if (!!header && !!description && !!externalLink) {
            return <PageSection key={i} header={header} description={description} externalLink={externalLink}/>
        } else if (!!header && !!description && !(!!externalLink)) {
            return <PageSection key={i} header={header} description={description}/>
        } else if (!!header && !(!!description) && !!externalLink) {
            return <PageSection key={i} header={header} externalLink={externalLink}/>
        } else if (!(!!header) && !!description && !!externalLink) {
            return <PageSection key={i} description={description} externalLink={externalLink}/>
        } else if (!(!!header) && !(!!description) && !!externalLink) {
            return <PageSection key={i}  externalLink={externalLink}/>
        } else if (!(!!header) && !!description && !(!!externalLink)) {
            return <PageSection key={i} description={description}/>
        } else if (!(!!header) && !(!!description) && !!externalLink) {
            return <PageSection key={i} externalLink={externalLink}/>
        } else if (!!header && !(!!description) && !(!!externalLink)) {
            return <PageSection key={i} header={header}/>
        } else {
            return ''
        }
    }

    render() {

        return (<main className={'page-component'}>
            {this.state.header}
            {this.state.sections.map((section, i)=> this.getSection(section, i))}
            {this.state.conclusion}
        </main>)
    }
}

export default Page;