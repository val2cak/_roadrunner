import Link from 'next/link';
import { Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
// SEO
import SEO from '../../data/next-seo.config';

const Error = () => {
    return (
        <>
            <NextSeo title={`${SEO.title} - error`} />
            <Container fluid className='p-0'>
                <div className='z--1 px-0'>
                    <Image
                        src={'/assets/404.jpg'}
                        className={`resposive z--1 px-0`}
                        layout='fill'
                        objectFit='cover'
                        priority
                        alt='Background image on Not Found Page'
                    />
                </div>
                <Row className='z-10 flex text-center pt-44 m-0'>
                    <h1 className='z-10 font-regular text-4xl md:text-6xl font-bold text-hci-general-dark'>
                        Oh no!
                    </h1>
                    <p className='z-10 font-regular font-light text-xl md:text-4xl pt-2.5 text-hci-general-dark'>
                        You seem lost...
                    </p>
                    <Link href='/'>
                        <a className='z-10 font-regular text-base mt-24 text-hci-general-dark hover:text-hci-general-middle'>
                            Take me home!
                        </a>
                    </Link>
                </Row>
            </Container>
        </>
    );
};

export default Error;
