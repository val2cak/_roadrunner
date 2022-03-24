import { Row } from 'react-bootstrap';
import ReviewItem from './reviewItem';

const ReviewContainer = ({ posts }) => {
    return (
        <section className='flex flex-col pb-16 md:pb-14 lg:pb-14'>
            {posts.map((post) => (
                <Row className={`p-0`} key={post.sys.id}>
                    <ReviewItem
                        url={post.featuredImage.url}
                        title={post.headline}
                        description={post.featuredImage.description}
                        slug={post.slug}
                        text={post.descriptionBox}
                    />
                </Row>
            ))}
            <div className='flex justify-center pb-16 md:pb-14 lg:pb-20'>
                <button className='mt-5 w-52 md:w-64 button text-sm font-regular hover:opacity-80'>
                    see more
                </button>
            </div>
        </section>
    );
};

export default ReviewContainer;
