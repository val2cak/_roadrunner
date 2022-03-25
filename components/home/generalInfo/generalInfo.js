import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const GeneralInfo = () => {
    return (
        <Row className='flex items-center bg-gradient-to-b from-hci-general-dark to-hci-general-light'>
            <Col sm={12} lg={6} className='py-20 flex justify-center'>
                <Image
                    src={`/assets/home/whychooseus.png`}
                    layout='fixed'
                    width={300}
                    height={450}
                    objectFit='cover'
                    priority
                    alt='Hero image'
                    className={`rounded-lg`}
                />
            </Col>
            <Col
                sm={12}
                lg={6}
                className='pr-5 lg:pr-72 items-baseline md:align-center pl-10 lg:pl-5'
            >
                <h1 className='-mb-10 text-4xl lg:text-4xl leading-10 font-satisfy text-hci-cursive mt-5 md:mt-2 pl-5'>
                    why
                </h1>
                <h1 className='text-white font-bold text-4xl lg:text-4xl leading-10 font-regular md:mt-2 pb-3 pl-5'>
                    choose us?
                </h1>
                <p className='text-sm text-white lg:text-md font-regular mb-2 md:mb-5 flex items-center pl-5'>
                    Do you ever feel like all travel agencies out there only see you
                    as a sales statistic? You feel like you don’t really matter as an
                    individual. There’s always something hidden, that you find out
                    when it’s already too late.
                    <br /> <br />
                    With Roadrunner Adventures, YOU matter. We promise to always
                    treat you like a friend. With our offers, you get what you see.
                    No hidden expenses, no extra charges.
                    <br /> <br />
                    So just sit back, scroll through our offers and find something
                    for yourself. We have a good number of travel destinations. Take
                    your time and find the perfect one for you. Enjoy your next trip,
                    we will take care of the rest.
                </p>
            </Col>
        </Row>
    );
};

export default GeneralInfo;
