
const Navbar = () => {
    return (
      <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-blue-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex items-center">
                <img src="../../../public/Logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Brisa d´Mindel</span>
            </a>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#header" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    );
  };
  
  export default Navbar;
                                     