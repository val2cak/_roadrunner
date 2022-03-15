import { Container } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import SEO from '../data/next-seo.config';

import Header from '../components/header/header';
import Cover from '../components/home/cover/cover';
import GeneralInfo from '../components/home/generalInfo/generalInfo';
import Testimonials from '../components/home/testimonials/testimonials';
import Footer from '../components/footer/footer';

const Home = () => {
    return (
        <>
            <NextSeo title={SEO.title} />
            <Container fluid className={'no-gutters p-0'}>
                <Header classes='h-30' />
                <Cover />
                <GeneralInfo />
                <Testimonials />
                <Footer />
            </Container>
        </>
    );
};

export default Home;
