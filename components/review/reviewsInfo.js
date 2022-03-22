import { Row, Col } from 'react-bootstrap';

const ReviewsInfo = () => {
    return (
        <Row className='flex items-center bg-hci-general-dark border-b-4'>
            <Col className='pr-5 lg:pr-72 items-baseline'>
                <h1 className='-mb-10 text-4xl lg:text-4xl leading-10 font-satisfy text-hci-cursive mt-5 md:mt-2'>
                    help us
                </h1>
                <h1 className='text-white font-bold text-4xl lg:text-4xl leading-10 font-regular md:mt-2 pb-3'>
                    grow.
                </h1>
            </Col>
            <Col sm={12} lg={6} className='pr-5 lg:pr-72 items-baseline'>
                <p className='text-sm text-white lg:text-md font-regular mb-5 sm:mb-2 flex items-center'>
                    We really value your opinion. Whether it is good or bad, we want
                    to hear your experience. We want to be better. Tell us how.
                </p>
            </Col>
        </Row>
    );
};

export default ReviewsInfo;
