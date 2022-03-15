import React from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

const ListItem = (props) => {
    const { url, city, country, description, slug } = props;
    return (
        <Link href={`/travel/${slug}`} passHref>
            <a className='relative no-anchor-decoration no-underline text-black hover:text-black p-0'>
                <Image
                    fluid
                    src={url}
                    alt={description}
                    className='w-full hover:opacity-80'
                />
                <div className='absolute flex flex-col text-center justify-center font-regular text-white w-full top-[30%] md:top-[40%]'>
                    <p className='lowercase text-xl md:text-5xl lg:text-7xl'>
                        {city}
                    </p>
                    <p className='uppercase text-md md:text-xl lg:text-2xl'>
                        {country}
                    </p>
                </div>
            </a>
        </Link>
    );
};

export default ListItem;
