import { Container } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
// Components
import Header from '../../components/header/header';
import DestinationInfo from '../../components/travel/destinationInfo/destinationInfo';
import Footer from '../../components/footer/footer';
// SEO
import SEO from '../../data/next-seo.config';
// API
import { getDestinationBySlug, getDestinationSlugs } from '../../lib/dataSourceAPI';

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
