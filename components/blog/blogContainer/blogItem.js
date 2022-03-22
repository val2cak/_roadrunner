import React from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

const BlogItem = (props) => {
    const { url, title, description, slug } = props;
    return (
        <>
            <Link href={`/blog/${slug}`} className='pt-10' passHref>
                <a className='relative no-anchor-decoration no-underline text-black hover:text-black p-0'>
                    <Image
                        fluid
                        src={url}
                        alt={description}
                        className='w-full hover:opacity-80'
                    />
                    <div className='absolute flex text-center justify-center font-regular text-white w-full top-[30%] 2xl:top-[40%]'>
                        <p className='lowercase text-xl md:text-5xl lg:text-7xl'>
                            {title}
                        </p>
                    </div>
                </a>
            </Link>
        </>
    );
};

export default BlogItem;
