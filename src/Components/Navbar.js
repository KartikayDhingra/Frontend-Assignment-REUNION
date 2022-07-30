import { BsFillBookmarkDashFill } from 'react-icons/bs';

const Navbar = () => {
    return <nav className="px-20 py-6 flex items-center gap-x-20 bg-white border-b border-gray-200">
        <div className="text-2xl text-purple-800 flex items-center font-semibold">
        <BsFillBookmarkDashFill className="text-2xl mr-2 text-purple-600" />
        Estatery</div>
        <div className="w-1/3 font-medium">
            <ul className="flex justify-between items-center tracking-wide">
                <li className="px-3 py-1 bg-purple-200 text-purple-700 rounded-sm"><a href="/" className="">Rent</a></li>
                <li className="px-3 py-1 rounded-sm"><a href="/">Buy</a></li>
                <li className="px-3 py-1 rounded-sm"><a href="/">Sell</a></li>
                <li className="px-3 py-1 rounded-sm">
                    <select className="bg-transparent focus:outline-none">
                        <option>Manage Property</option>
                    </select>
                </li>
            </ul>
        </div>
        <div className="w-1/6 flex justify-between items-center ml-auto">
            <a href="/" className="px-5 py-2 text-purple-700 border-2 border-gray-200 rounded-md font-medium">Login</a>
            <a href="/" className="px-5 py-2 border-2 border-transparent text-white bg-purple-500 rounded-md font-medium">Sign up</a>
        </div>
    </nav>
}

export default Navbar;