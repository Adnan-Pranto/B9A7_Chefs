import { CgProfile } from "react-icons/cg";
import PropTypes from 'prop-types';
const Navbar = () => {
    return (
        <section className='mx-10 w-auto my-10 p-5'>
            <div className="navbar bg-base-100 flex">
                <div className="flex-1 flex">
                    <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
                    <div className="">
                        <ul className=" flex ml-20 text-gray-600 w-full p-3 gap-16">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a> </li>
                            <li><a>About</a> </li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                </div>

                {/* search Bar & Image section  */}
                <div className="flex items-center gap-6">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered rounded-2xl p-3 bg-slate-200 w-24 md:w-auto" />
                    </div>
                    <button ><CgProfile className="h-12 w-full bg-green-400 rounded-full"></CgProfile></button>
                </div>
            </div>
        </section>
    );
};
Navbar.propTypes = {
    Navbar: PropTypes.object.isRequired,
}


export default Navbar;