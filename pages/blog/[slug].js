import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
// Components
import Header from '../../components/header/header';
import BlogDetail from '../../components/blog/blogDetail/blogDetail';
import { PBlog } from '../../components/blog/blogDetail/text';
import { Ol, Li } from '../../components/blog/blogDetail/list';
import { H2 } from '../../components/blog/blogDetail/heading';
import Footer from '../../components/footer/footer';
// SEO
import SEO from '../../data/next-seo.config';
// API
import { getBlogBySlug, getBlogSlugs } from '../../lib/dataSourceAPI';

const components = {
    p: PBlog,
    h2: H2,
    ol: Ol,
    li: Li,
};
const BlogDetailPage = ({ blog }) => {
    return (
        <>
            <NextSeo title={`${SEO.title} - blog detail`} />
            <Container fluid className={'no-gutters'}>
                <Header />
                <BlogDetail blogPost={blog} />
                <Row>
                    <MDXRemote {...blog.mdxSource} components={components} />
                </Row>

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
