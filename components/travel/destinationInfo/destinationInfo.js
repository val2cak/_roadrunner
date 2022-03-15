import { Row, Image } from 'react-bootstrap';

const DestinationInfo = ({ destination }) => {
    return (
        <Row className='px-0 flex justify-center'>
            <Row className='p-0 relative'>
                <Image
                    src={destination.desktopImage.url}
                    layout='responsive'
                    objectFit='cover'
                    alt='Hero image'
                    className='p-0'
                />
                <div className='absolute flex flex-col text-center justify-center font-regular text-white w-full top-[30%] md:top-[40%]'>
                    <p className='lowercase text-xl md:text-5xl lg:text-7xl'>
                        {destination.headline}
                    </p>
                    <p className='uppercase text-md md:text-xl lg:text-2xl'>
                        {destination.country}
                    </p>
                </div>
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
