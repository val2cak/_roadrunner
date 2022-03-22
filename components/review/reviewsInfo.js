import { Row, Col } from 'react-bootstrap';

const ReviewsInfo = () => {
    return (
        <Row className='flex items-center justify-between bg-hci-general-dark border-b-4'>
            <Row className='flex justify-center'>
                <div className='flex pl-5 justify-center font-bold text-3xl leading-10 font-regular text-white md:text-5xl pt-16 md:pt-20'>
                    review
                </div>
            </Row>

            <Row sm={12} lg={8} className='flex justify-center'>
                <p className='text-sm text-white lg:text-md font-regular m-5 sm:m-2 flex items-center justify-center'>
                    We really value your opinion. Whether it is good or bad, we want
                    to hear your experience. We want to be better. Tell us how.
                </p>
            </Row>
        </Row>
    );
};

export default ReviewsInfo;
