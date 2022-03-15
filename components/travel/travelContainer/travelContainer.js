import { Row } from 'react-bootstrap';
import TravelItem from './travelItem';

const TravelContainer = ({ destinations }) => {
    return (
        <Row className='flex pt-16 md:pt-14 lg:pt-14'>
            {destinations.map((destination) => (
                <Row className={`mb-16 p-0`} key={destination.sys.id}>
                    <TravelItem
                        url={destination.featuredImage.url}
                        city={destination.headline}
                        country={destination.country}
                        description={destination.featuredImage.description}
                        slug={destination.slug}
                    />
                </Row>
            ))}
            <div className='flex justify-center md:px-8 lg:px-28 pb-16 md:pb-14 lg:pb-20'>
                <button className='mt-5 w-52 md:w-64 button text-sm font-regular hover:opacity-80'>
                    see more
                </button>
            </div>
        </Row>
    );
};

export default TravelContainer;
