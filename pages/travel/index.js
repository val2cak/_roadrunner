import React from 'react';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { Container, Row } from 'react-bootstrap';
// Components
import Header from '../../components/header/header';
import TravelContainer from '../../components/travel/travelContainer/travelContainer';
import { FilterTag } from '../../components/travel/travelContainer/tags';
import Footer from '../../components/footer/footer';
// SEO
import SEO from '../../data/next-seo.config';
// API
import { getDestinations } from '../../lib/dataSourceAPI';

const Travel = ({ destinations, tags }) => {
    const [activeTags, setActiveTags] = useState([]);
    const toggleActive = (text) =>
        setActiveTags((activeTags) => {
            if (activeTags.includes(text)) {
                return activeTags.filter((tag) => tag !== text);
            }
            return [...activeTags, text];
        });

    const filteredDestinations = !activeTags.length
        ? destinations
        : destinations.filter(
              (destination) =>
                  !!destination.tags.filter((tag) => activeTags.includes(tag)).length
          );

    return (
        <>
            <NextSeo title={`${SEO.title} - travel`} />
            <Container fluid className={'no-gutters'}>
                <Header classes='h-30' />
                <Row className='flex justify-center'>
                    <div className='flex pl-5 justify-center font-bold text-3xl leading-10 font-regular text-hci-general-dark md:text-5xl pt-16 md:pt-20'>
                        travel
                    </div>
                </Row>
                <Row className='pl-2 md:px-8 lg:px-28'>
                    <p
                        onClick={() => setActiveTags([])}
                        className={`text-gray-700 mb-1 pt-4 pb-2 sm:mb-2 sm:py-4 text-xl font-regular cursor-pointer ${
                            activeTags.length ? 'hover:text-black' : ''
                        }`}
                    >
                        {activeTags.length
                            ? 'reset filters \u2002 \u2715'
                            : 'filter by tag'}
                    </p>
                    <ul className='flex overflow-x-auto sm:flex-wrap sm:overflow-x-hidden'>
                        {tags.sort().map((tag) => (
                            <FilterTag
                                key={tag}
                                text={tag}
                                active={activeTags.includes(tag)}
                                toggleActive={toggleActive}
                            />
                        ))}
                    </ul>
                </Row>
                <TravelContainer destinations={filteredDestinations} />
                <Footer />
            </Container>
        </>
    );
};

export default Travel;

export async function getStaticProps() {
    const destinations = await getDestinations();

    const unionOfTags = destinations.reduce((tags, destination) => {
        return [...tags, ...destination.tags];
    }, []);
    const tags = Array.from(new Set(unionOfTags));

    return {
        props: {
            destinations,
            tags,
        },
    };
}
