import React from 'react';
import { Image, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';

const ReviewItem = (props) => {
    const { url, title, description, text } = props;
    return (
        <section className='flex flex-row no-anchor-decoration no-underline text-black hover:text-black p-3 bg-gradient-to-b from-hci-general-dark to-hci-general-middle'>
            <Col
                sm={12}
                lg={4}
                className='py-20 hidden lg:block flex justify-center'
            >
                <Image
                    src={url}
                    alt={description}
                    layout='fixed'
                    width={450}
                    height={450}
                    priority
                    className='p-3'
                />
            </Col>
            <div className='flex flex-col text-center justify-center font-regular text-white'>
                <p className='text-xl md:text-2xl lg:text-3xl'>{title}</p>
                <p className='flex justify-center text-hci-cursive text-3xl py-3'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </p>
                <p className='text-md md:text-lg lg:text-xl px-5'>{text}</p>
            </div>
        </section>
    );
};

export default ReviewItem;
