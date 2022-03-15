import { Row, Col } from 'react-bootstrap';

const SignInContainer = () => {
    return (
        <Row>
            <Col className='pt-20 bg-gradient-to-b from-hci-general-dark to-white'>
                <h1 className='flex justify-center font-bold text-white text-3xl md:text-5xl leading-10 font-regular pb-16'>
                    login
                </h1>
                <div className='pt-3 flex justify-center'>
                    <input
                        className={`loginForm w-96 p-1 font-regular italic text-vhci-cursive`}
                        type='username'
                        placeholder='username'
                    />
                </div>
                <div className='pt-4 flex justify-center'>
                    <input
                        className={`loginForm w-96 p-1 font-regular italic text-hci-cursive`}
                        type='password'
                        placeholder='password'
                    />
                </div>
                <div className='flex justify-center'>
                    <span className='mt-2 pt-1 mb-10 font-regular italic linkPass text-xs'>
                        forgot password?
                    </span>
                </div>
                <div className='flex justify-center pb-3'>
                    <button className='mt-5 w-52 md:w-64 button text-sm flex text-center justify-center text-white font-regular hover:opacity-80'>
                        sign in
                    </button>
                </div>
                <div className='flex justify-center'>
                    <span className='mb-1 font-regular italic linkPass text-xs'>
                        don't have an account yet?
                    </span>
                </div>
                <div className='mb-16 flex justify-center'>
                    <button className='w-52 md:w-64 registerButton text-sm flex text-center justify-center text-white font-regular hover:opacity-80'>
                        register here.
                    </button>
                </div>
            </Col>
        </Row>
    );
};

export default SignInContainer;
