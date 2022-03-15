import { Row, Image } from 'react-bootstrap';

const DestinationInfo = ({ destination }) => {
    return (
        <Row className='px-0 flex justify-center'>
            <Row className='p-0'>
                <Image
                    src={destination.desktopImage.url}
                    layout='responsive'
                    objectFit='cover'
                    alt='Hero image'
                    className='p-0'
                />
            </Row>

            <Row>
                <h1 className='flex items-center justify-center font-bold leading-10 font-regular text-lg md:text-xl lg:text-3xl py-12 md:py-16 lg:py-24'>
                    {destination.headline}
                </h1>
            </Row>

            <Row>
                <h1 className='uppercase flex items-center justify-center font-bold leading-10 font-regular text-lg md:text-xl lg:text-2xl'>
                    {destination.country}
                </h1>
            </Row>

            <Row
                sm={12}
                lg={6}
                className='flex items-center justify-center leading-10 font-regular text-sm md:text-sm lg:text-md py-12 md:py-16 lg:py-24 px-5'
            >
                {destination.destinationContainer}
            </Row>
        </Row>
    );
};

export default DestinationInfo;
