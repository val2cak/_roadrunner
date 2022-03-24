import React from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

const BlogItem = (props) => {
    const { url, title, description, slug } = props;
    return (
        <>
            <Link href={`/blog/${slug}`} className='pt-10' passHref>
                <a className='relative no-anchor-decoration no-underline text-black hover:text-black p-0'>
                    <figure>
                        <Image
                            fluid
                            src={url}
                            alt={description}
                            className='w-full hover:opacity-80'
                        />
                        <figcaption>
                            <div className='absolute flex text-center justify-center font-regular text-white w-full top-[30%] 2xl:top-[40%]'>
                                <p className='lowercase text-xl md:text-5xl lg:text-7xl'>
                                    {title}
                                </p>
                            </div>
                        </figcaption>
                    </figure>
                </a>
            </Link>
        </>
    );
};

export default BlogItem;
