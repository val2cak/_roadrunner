import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

import Img from '../../public/assets/footer.png';

const legalLinks = [
    { label: 'home', url: '/' },
    { label: 'travel', url: '/travel' },
    { label: 'blog', url: '/blog' },
    { label: 'about', url: '/about' },
    { label: 'login', url: '/login' },
];

const renderLegalLinks = () =>
    legalLinks.map((link) => (
        <Col className='flex justify-center' key={link.url}>
            <div className='mb-2'>
                <Link href={link.url}>
                    <a className='no-underline text-footer-light hover:text-white'>
                        {link.label}
                    </a>
                </Link>
            </div>
        </Col>
    ));

const Footer = () => {
    return (
        <Row className='bg-hci-footer-dark text-hci-footer-light font-regular flex justify-center'>
            <Row className='hidden md:block p-0'>
                <Image
                    src={Img}
                    layout='responsive'
                    objectFit='cover'
                    sizes='100%'
                    height={400}
                    alt='Footer image'
                />
            </Row>
            <Col sm={12} md={8}>
                <Row className='flex justify-center pt-4 text-xs sm:text-sm md:text-lg'>
                    {renderLegalLinks()}
                </Row>

                <div className={`mt-4 mb-2 flex justify-center`}>
                    <a
                        href={`https://www.instagram.com/`}
                        target={'_blank'}
                        rel='noreferrer'
                    >
                        <span className='pr-11'>
                            <img
                                src='/assets/icons/instagram.svg'
                                className='w-9 h-9'
                                alt='instagram'
                            />
                        </span>
                    </a>
                    <a
                        href={`https://www.linkedin.com//`}
                        target={'_blank'}
                        rel='noreferrer'
                    >
                        <span>
                            <img
                                src='/assets/icons/linkedin.svg'
                                className='w-9 h-9'
                                alt='linkedin'
                            />
                        </span>
                    </a>
                    <a
                        href={`https://www.facebook.com/`}
                        target={'_blank'}
                        rel='noreferrer'
                    >
                        <span className='pr-11'>
                            <img
                                src='/assets/icons/facebook.svg'
                                className='w-9 h-9'
                                alt='facebook'
                            />
                        </span>
                    </a>
                    <a
                        href={`https://www.twitter.com/`}
                        target={'_blank'}
                        rel='noreferrer'
                    >
                        <span>
                            <img
                                src='/assets/icons/twitter.svg'
                                className='w-9 h-9'
                                alt='twitter'
                            />
                        </span>
                    </a>
                </div>

                <div className={`flex justify-center text-xs font-extralight pb-1`}>
                    All rights reserved ©roadrunner
                </div>
            </Col>
        </Row>
    );
};

export default Footer;
