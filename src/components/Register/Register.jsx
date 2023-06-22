import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";

const Register = () => {

    const [error, setError] = useState("")

    const { createUser } = useContext(UserContext);

    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        setError("");
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                event.target.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col  w-6/12">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL: </span>
                                </label>
                                <input type="text" name="photo" placeholder="Paste you photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {error && <label className="label">
                                    <button href="#" className="label-text-alt text-error">{error}</button>
                                </label>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <label className="label">
                        Already have an account?
                        <Link className="btn-link ml-1" to="/login">Log in</Link>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Register;