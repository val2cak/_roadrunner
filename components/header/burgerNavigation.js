import NavBar from './navbar';

const BurgerNavigation = ({ isOpen, menuItems, setIsOpen }) => {
    return (
        <main
            className={`${
                !isOpen ? 'translate-x-full' : 'translate-x-0'
            } top-0 transform translate fixed left-0 m-0 p-0 bg-hci-header text-white md:hidden w-screen transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-40`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <NavBar
                menuItems={menuItems}
                classes="flex flex-col h-full w-full justify-center items-center text-white"
            />
        </main>
    );
};

export default BurgerNavigation;
