import { Row, Image } from 'react-bootstrap';

const PostInfo = ({ blogPost }) => {
    return (
        <Row className='px-0 flex justify-center'>
            <Row className='flex justify-center pb-5'>
                <div className='flex pl-5 md:justify-center font-bold text-3xl leading-10 font-regular text-hci-general-dark md:text-5xl pt-16 md:pt-20'>
                    post
                </div>
            </Row>
            <Row className='p-0 relative'>
                <Image
                    src={blogPost.desktopImage.url}
                    layout='responsive'
                    objectFit='cover'
                    alt='Hero image'
                    className='p-0'
                />
                <div className='absolute flex flex-col text-center justify-center font-regular text-white w-full top-[30%] md:top-[40%]'>
                    <p className='lowercase text-xl md:text-5xl lg:text-7xl'>
                        {blogPost.headline}
                    </p>
                </div>
            </Row>
            <Row className='text-black flex items-center justify-center leading-10 font-regular text-sm md:text-sm lg:text-md py-12 md:py-16 lg:py-24 px-5'>
                {blogPost.descriptionBox}
            </Row>
        </Row>
    );
};

export default PostInfo;
