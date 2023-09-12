import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import ActiveLink from "../PrivateRoute/ActiveLink";

const Navbar = () => {

    const { user, Logout, setUser } = useContext(UserContext);

    const handleLogout = () => {
        Logout()
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="navbar bg-[#222222] px-8">
                <div className="navbar-start">
                    <Link className="btn btn-ghost normal-case text-xl" to="/">
                        <h1 className="text-white">Dish World</h1>
                    </Link>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-4 space-x-3">
                        <li className="text-white">
                            <ActiveLink className="mx-2 font-semibold " to="/">Home</ActiveLink>
                        </li>
                        <li className="text-white">
                            <ActiveLink className="mx-2 font-semibold " to="/blog">Blog</ActiveLink>
                        </li>
                        <li className="text-white">
                            <ActiveLink className="mx-2 font-semibold " to="/about">About</ActiveLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="avatar">
                            <button onClick={handleLogout} className="btn btn-primary">Log out</button>
                            <div className="w-12 rounded-xl mx-3">
                                <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" />
                            </div>
                        </div> :
                        <Link className="btn btn-primary" to="/login">Log in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;