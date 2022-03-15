import React from 'react';
import { Container } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import SEO from '../data/next-seo.config';

import Header from '../components/header/header';
import AboutContainer from '../components/about/aboutContainer';
import Footer from '../components/footer/footer';

const About = () => {
    return (
        <>
            <NextSeo title={`${SEO.title} - about`} />
            <Container fluid className={'no-gutters'}>
                <Header />
                <AboutContainer />
                <Footer />
            </Container>
        </>
    );
};

export default About;
