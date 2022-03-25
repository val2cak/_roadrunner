import NavBar from './navbar';

const BurgerNavigation = ({ isOpen, navigationItems, setIsOpen }) => {
    return (
        <main
            className={`${
                !isOpen ? 'translate-x-full' : 'translate-x-0'
            } top-0 transform translate fixed left-0 m-0 p-0 bg-hci-general-dark lg:hidden w-screen transition duration-300 ease-in-out flex-col justify-center items-center h-screen z-40`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className='pl-16 no-underline text-white font-regular font-bold text-lg pt-32'>
                <div className='pl-10 text-3xl text-white'>roadrunner</div>
                <NavBar navigationItems={navigationItems} />
            </div>
        </main>
    );
};

export default BurgerNavigation;
