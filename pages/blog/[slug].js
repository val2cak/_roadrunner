import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
// Components
import Header from '../../components/header/header';
import BlogDetail from '../../components/blog/postInfo/postInfo';
import Footer from '../../components/footer/footer';
// SEO
import SEO from '../../data/next-seo.config';
// API
import { getBlogBySlug, getBlogSlugs } from '../../lib/dataSourceAPI';

const BlogDetailPage = ({ blog }) => {
    return (
        <>
            <NextSeo title={`${SEO.title} - post`} />
            <Container fluid className={'no-gutters'}>
                <Header />
                <BlogDetail blogPost={blog} />
                <Footer />
            </Container>
        </>
    );
};

export default BlogDetailPage;

export async function getStaticProps({ params }) {
    const blog = await getBlogBySlug(params.slug);
    blog.mdxSource = await serialize(blog.subheadline);
    delete blog.subheadline;
    return {
        props: {
            blog,
        },
    };
}

export async function getStaticPaths() {
    const slugs = await getBlogSlugs();
    const paths = slugs.map(({ slug }) => ({
        params: {
            slug,
        },
    }));
    return {
        paths,
        fallback: false,
    };
}
