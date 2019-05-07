import React, {Fragment} from 'react';
import Header from './components/header/header';
import './app.scss';
import SectionHome from './components/section-home/section';
import About from './components/about/about';

class App extends React.Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <SectionHome/>
                <About />
            </Fragment>
        )
    }
}

export default App;