import NavBar from './navbar';
import Link from 'next/link';

const BurgerNavigation = ({ isOpen, navigationItems, setIsOpen }) => {
    return (
        <main
            className={`${
                !isOpen ? 'translate-x-full' : 'translate-x-0'
            } top-0 transform translate fixed left-0 m-0 p-0 bg-hci-header text-white lg:hidden w-screen transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-40`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className='pl-16 no-underline text-white font-regular font-bold text-lg pt-32'>
                <div className='pl-10 text-3xl text-white'>
                    <Link href='/'>
                        <a className='no-underline z-10 pb-6 items-center text-white text-3xl md:text-2xl lg:text-3xl font-regular font-bold hover:text-hci-general-middle'>
                            roadrunner
                        </a>
                    </Link>
                </div>
                <NavBar
                    navigationItems={navigationItems}
                    classes='flex flex-col h-full w-full justify-center items-center'
                />
            </div>
        </main>
    );
};

export default BurgerNavigation;
