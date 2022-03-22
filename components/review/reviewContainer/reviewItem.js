import React from 'react';
import { Image } from 'react-bootstrap';

const ReviewItem = (props) => {
    const { url, title, description, text } = props;
    return (
        <section className='flex flex-row no-anchor-decoration no-underline text-black hover:text-black p-0 bg-gradient-to-b from-hci-general-dark to-hci-general-middle'>
            <Image fluid src={url} alt={description} className='p-3' />
            <div className='flex flex-col text-center justify-center font-regular text-white'>
                <p className='text-xl md:text-2xl lg:text-3xl border-b-1'>{title}</p>
                <p className='text-md md:text-lg lg:text-xl pt-10'>{text}</p>
            </div>
        </section>
    );
};

export default ReviewItem;
