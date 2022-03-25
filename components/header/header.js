import React from 'react';
import { Row } from 'react-bootstrap';
import Link from 'next/link';
import NavBar from './navbar';
import BurgerNavigation from './burgerNavigation';
import { navigationItems } from '../../data/navbarList';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (isClicked) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    }, [isClicked]);

    return (
        <Row className='pr-0'>
            <header className='pl-5 lg:pl-10 pt-4 relative flex flex-col bg-hci-general-dark lg:bg-transparent sm:h-28'>
                <div className='z-10 flex justify-between items-center'>
                    <Link href='/' className='hidden lg:block'>
                        <a className='no-underline z-10 pb-6 items-center text-hci-general-dark text-3xl font-regular font-bold hover:text-hci-general-middle'>
                            roadrunner
                        </a>
                    </Link>
                    <Link href='/' className='lg:hidden'>
                        <a className='no-underline z-10 pb-6 items-center text-white text-3xl font-regular font-bold hover:text-hci-general-middle'>
                            roadrunner
                        </a>
                    </Link>
                    <div className='pb-6 md:pl-[500px] flex items-center lg:hidden'>
                        <BurgerNavigation
                            navigationItems={navigationItems}
                            isOpen={isClicked}
                            setIsOpen={setIsClicked}
                        />
                        <div className='w-8' />
                        <img
                            onClick={() => setIsClicked(!isClicked)}
                            className={`h-7 transform scale-75 cursor-pointer z-50 transition-all ease-linear duration-500 ${
                                isClicked ? 'transform rotate-90' : ''
                            }`}
                            src={'/hamburger.svg'}
                            alt='Menu'
                        />
                    </div>
                    <div className='flex justify-end'>
                        <NavBar navigationItems={navigationItems} />
                    </div>
                </div>
            </header>
        </Row>
    );
};

export default Header;
