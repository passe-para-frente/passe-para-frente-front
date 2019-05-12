import React, {Fragment} from 'react';
import Header from './components/header/header';
import './app.scss';
import SectionHome from './components/section-home/section';
import About from './components/about/about';
import Footer from './components/footer/footer';
import DonationSection from './components/donations/donation';
import HowToDonate from './components/donate/donate';

class App extends React.Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <SectionHome/>
                <About />
                <DonationSection>
                    <HowToDonate />
                </DonationSection>
                <Footer />
            </Fragment>
        )
    }
}

export default App;