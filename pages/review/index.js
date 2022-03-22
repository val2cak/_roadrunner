import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
// Components
import Header from '../../components/header/header';
import ReviewContainer from '../../components/review/reviewContainer/reviewContainer';
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
