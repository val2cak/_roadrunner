import { Container, Row } from 'react-bootstrap';
import Footer from '../../components/footer/footer';
import { NextSeo } from 'next-seo';
import SEO from '../../data/next-seo.config';
import { getDestinationBySlug, getDestinationSlugs } from '../../lib/dataSourceAPI';
import DestinationInfo from '../../components/destinationInfo/destinationInfo';
import Header from '../../components/header/header';
import { PDestination } from '../../components/blogDetail/text';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Ol, Li } from '../../components/blogDetail/list';
import { H2Destination } from '../../components/blogDetail/heading';
const components = {
    p: PDestination,
    ol: Ol,
    li: Li,
    h2: H2Destination,
};

const TravelDetailPage = ({ destination }) => {
    return (
        <>
            <NextSeo title={`${SEO.title} - destination`} />
            <Container fluid className={'no-gutters'}>
                <Header />
                <DestinationInfo destination={destination} />
                <Footer />
            </Container>
        </>
    );
};

export default TravelDetailPage;

export async function getStaticProps({ params }) {
    const destination = await getDestinationBySlug(params.slug);
    destination.mdxSource = await serialize(destination.destinationInfo);
    delete destination.destinationInfo;
    return {
        props: {
            destination,
        },
    };
}

export async function getStaticPaths() {
    const slugs = await getDestinationSlugs();
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
