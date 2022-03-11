import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BlogContainer from '../../components/blogContainer/blogContainer';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SearchInput from '../../components/searchInput/searchInput';
import { NextSeo } from 'next-seo';
import SEO from '../../data/next-seo.config';
import { getBlogPosts } from '../../lib/dataSourceAPI';

const Blog = ({ posts }) => {
    return (
        <>
            <NextSeo title={`${SEO.title} - blog`} />
            <Container fluid className={'no-gutters'}>
                <Header classes="h-30" />
                <Row className="flex justify-center">
                    <div className="flex pl-5 md:justify-center font-bold text-3xl leading-10 font-regular text-hci-general-dark md:text-5xl pt-16 md:pt-20">
                        blog
                    </div>
                </Row>
                <SearchInput />
                <BlogContainer posts={posts} />
                <Footer />
            </Container>
        </>
    );
};

export default Blog;

export async function getStaticProps() {
    const posts = await getBlogPosts();
    return {
        props: {
            posts,
        },
    };
}
