import React from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

const ListItem = (props) => {
    const { url, title, description, slug } = props;
    return (
        <Link href={`/travel/${slug}`} passHref>
            <a className='no-anchor-decoration no-underline text-black hover:text-black pr-0 w-full'>
                <Image
                    fluid
                    src={url}
                    alt={description}
                    className='w-100 hover:opacity-80'
                />
                <p className='font-regular mt-1 text-sm md:text-lg hover:opacity-80 w-full'>
                    {title}
                </p>
            </a>
        </Link>
    );
};

export default ListItem;
