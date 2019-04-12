import React from 'react';
import Header from './components/header/header';
import './app.scss';
import SectionHome from './components/section-home/section';

class App extends React.Component{
    render(){
        return(
            <main>
                <Header/>
                <SectionHome/>
            </main>
        )
    }
}

export default App;