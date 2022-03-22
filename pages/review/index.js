import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
// Components
import Header from '../../components/header/header';
import ReviewContainer from '../../components/review/reviewContainer';
import Footer from '../../components/footer/footer';
// SEO
import SEO from '../../data/next-seo.config';
// API
import { getReviewPosts } from '../../lib/dataSourceAPI';
import ReviewsInfo from '../../components/review/reviewsInfo';

const Review = ({ posts }) => {
    return (
        <>
            <NextSeo title={`${SEO.title} - review`} />
            <Container fluid className={'no-gutters p-0'}>
                <Header classes='h-30' />
                <Row className='flex justify-center'>
                    <div className='flex pl-5 md:justify-center font-bold text-3xl leading-10 font-regular text-hci-general-dark md:text-5xl pt-16 md:pt-20'>
                        review
                    </div>
                </Row>
                <ReviewsInfo />
                <ReviewContainer posts={posts} />
                <Footer />
            </Container>
        </>
    );
};

export default Review;

export async function getStaticProps() {
    const posts = await getReviewPosts();
    return {
        props: {
            posts,
        },
    };
}
