import React from 'react';
import Image from 'next/image';
import { Row } from 'react-bootstrap';
// Assets
import arrowDown from '../../../public/assets/icons/arrow_down.svg';
import urlImg from '../../../public/assets/home/home.png';

const Cover = () => {
    return (
        <Row className=''>
            <figure className='hidden md:block z--1 w-full justify-between items-center p-0 m-0'>
                <div className='absolute 2xl:top-[550px] 2xl:left-[1250px] xl:top-[500px] xl:left-[1000px] lg:top-[400px] lg:left-[800px] md:top-[300px] md:left-[600px] tracking-wide z-10 row text-white font-bold font-regular'>
                    <div className='hidden lg:block flex items-center hover:text-hci-footer-light'>
                        <p className='inline-block'>
                            <Image
                                src={arrowDown}
                                height='75px'
                                width='50px'
                                alt='arrow down'
                            />
                        </p>
                        <p className='text-lg leading-tight inline-block pl-3 pt-3'>
                            START <br /> JOURNEY
                        </p>
                    </div>
                </div>
                <Image
                    src={urlImg}
                    layout='responsive'
                    objectFit='cover'
                    //height="750px"
                    alt='Hero image'
                    className='brightness-75'
                />
                <figcaption>
                    <div
                        className='absolute pl-20 2xl:top-[520px] xl:top-[500px] lg:top-[400px] md:top-[320px] tracking-wide z-10 hidden md:block font-regular md:text-7xl 2xl:text-8xl font-bold text-white'
                        dangerouslySetInnerHTML={{
                            __html: `adventure.`,
                        }}
                    />
                    <div
                        className='absolute pl-20 2xl:top-[500px] xl:top-[480px] lg:top-[380px] md:top-[300px] tracking-wide z-10 hidden md:block font-satisfy md:text-5xl 2xl:text-6xl text-hci-cursive font-light'
                        dangerouslySetInnerHTML={{
                            __html: `chase the`,
                        }}
                    />
                </figcaption>
            </figure>
        </Row>
    );
};

export default Cover;
