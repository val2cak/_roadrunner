import { Container } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import SEO from '../data/next-seo.config';

import Header from '../components/header/header';
import LoginContainer from '../components/login/loginContainer';
import Footer from '../components/footer/footer';

const Login = () => {
    return (
        <>
            <NextSeo title={`${SEO.title} - login`} />
            <Container fluid className={'no-gutters'}>
                <Header />
                <LoginContainer />
                <Footer />
            </Container>
        </>
    );
};

export default Login;
