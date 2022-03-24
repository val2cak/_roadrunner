import { Row } from 'react-bootstrap';
import BlogItem from './blogItem';

const BlogContainer = ({ posts }) => {
    return (
        <>
            <section className='flex flex-col pt-16 md:pt-14 lg:pt-14'>
                {posts.map((post) => (
                    <Row className={`mb-16 p-0`} key={post.sys.id}>
                        <BlogItem
                            url={post.featuredImage.url}
                            title={post.headline}
                            description={post.featuredImage.description}
                            slug={post.slug}
                        />
                    </Row>
                ))}
                <div className='flex justify-center md:px-8 lg:px-28 pb-16 md:pb-14 lg:pb-20'>
                    <button className='mt-5 w-52 md:w-64 button text-sm font-regular hover:opacity-80'>
                        see more
                    </button>
                </div>
            </section>
        </>
    );
};

export default BlogContainer;
