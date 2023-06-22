import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";

const Login = () => {
    const nevigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const { Login, googleLogin, githubLogin, setUser } = useContext(UserContext);

    const [error, setError] = useState("")

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        setError('');
        Login(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                event.target.reset()
                nevigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                setUser(result.user)
                nevigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                nevigate(from, { replace: true })
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col  w-6/12">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <button href="#" className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {error && <label className="label">
                                <p href="#" className="label-text-alt text-error">{error}</p>
                            </label>}
                            <p className="text-center my-4">OR</p>
                            <div className="text-center">
                                <button className="btn mx-2" onClick={handleGoogleLogin}>Google</button>
                                <button className="btn mx-2" onClick={handleGithubLogin}>Github</button>
                            </div>
                        </form>
                    </div>
                    <label className="label">
                        New here?
                        <Link className="btn-link ml-1" to="/register">Register</Link>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;