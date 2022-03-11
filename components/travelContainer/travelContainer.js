import { Col, Row } from 'react-bootstrap';
import TravelItem from './travelItem';

const TravelContainer = ({ destinations }) => {
    return (
        <Row className="flex pt-16 md:pt-14 lg:pt-14">
            {destinations.map((destination) => (
                <Row className={`mb-16 p-0`} key={destination.sys.id}>
                    <TravelItem
                        url={destination.featuredImage.url}
                        title={destination.headline}
                        description={destination.featuredImage.description}
                        slug={destination.slug}
                    />
                </Row>
            ))}
            <div className="flex justify-center md:px-8 lg:px-28 pb-16 md:pb-14 lg:pb-20">
                <div className="pt-1.5 md:pt-1 pointer mt-5 w-52 md:w-64 loginButton text-sm text-center justify-center text-white font-regular hover:opacity-80">
                    see more
                </div>
            </div>
        </Row>
    );
};

export default TravelContainer;
