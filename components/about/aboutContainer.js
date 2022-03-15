import { Row, Col } from 'react-bootstrap';
const AboutContainer = () => {
    return (
        <>
            <Row className='bg-gradient-to-b from-hci-general-dark to-hci-general-light'>
                <Row className='flex justify-center'>
                    <div className='flex pl-5 md:justify-center font-bold text-3xl leading-10 font-regular text-white md:text-5xl pt-16 md:pt-20'>
                        about
                    </div>
                </Row>
                <Col sm={12} md={7} className='pl-5 pr-3.5 md:pl-16'>
                    <h2 className='text-4xl lg:text-5xl leading-10 font-satisfy text-hci-cursive mt-5 md:mt-2'>
                        meet our
                    </h2>
                    <h2 className='text-white font-bold text-4xl lg:text-5xl leading-10 font-regular md:mt-2 pb-3'>
                        family.
                    </h2>
                </Col>
                <Col>
                    <p className='text-sm lg:text-base font-regular py-16 pr-3 text-white'>
                        It all started as a university project of two young women. As
                        the time passed by and an idea grew stronger, our agency was
                        born.
                        <br></br>
                        What started as a simple school obligation, ended up to be
                        our biggest love and passion.
                        <br></br>
                        We are inviting you to be a part of our adventure. We promise
                        to keep you safe.
                    </p>
                </Col>
            </Row>
            <Row className='bg-gradient-to-b from-hci-general-light to-white pb-10'>
                <Col sm={12} md={7} className='pl-5 pr-3.5 md:pl-16'>
                    <h2 className='text-4xl lg:text-5xl leading-10 font-satisfy text-hci-cursive mt-5 md:mt-2'>
                        send us a
                    </h2>
                    <h2 className='text-white font-bold text-4xl lg:text-5xl leading-10 font-regular md:mt-2 pb-3'>
                        message.
                    </h2>
                </Col>
                <Col>
                    <textarea
                        className={`mt-5 mb-5 italic text-black `}
                        type='text'
                        placeholder='start writing...'
                        rows='10'
                        cols='60'
                    />
                    <br />
                    <div className='pt-1.5 md:pt-1 pointer w-32 md:w-48 button text-center bg-hci-general-dark text-white text-sm md:text-base font-regular hover:opacity-80'>
                        send
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default AboutContainer;
