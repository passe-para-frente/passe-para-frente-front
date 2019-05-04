import React from 'react';
import Header from './components/header/header';
import './app.scss';
import SectionHome from './components/section-home/section';
import { About } from './components/about/about';

class App extends React.Component{
    render(){
        return(
            <main>
                <Header/>
                <SectionHome/>
                <About />
            </main>
        )
    }
}

export default App;