import { Row } from 'react-bootstrap';
import BlogItem from './blogItem';

const TravelContainer = ({ posts }) => {
    return (
        <Row className='flex pt-16 md:pt-14 lg:pt-14'>
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
                <div className='pt-1.5 md:pt-1 pointer mt-5 w-52 md:w-64 loginButton text-sm text-center justify-center text-white font-regular hover:opacity-80'>
                    see more
                </div>
            </div>
        </Row>
    );
};

export default TravelContainer;
