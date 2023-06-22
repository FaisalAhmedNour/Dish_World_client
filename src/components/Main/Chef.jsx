import { Link } from "react-router-dom";

const Chef = (props) => {

    const { _id, chefPicture, chefName, likes, numberOfRecipes, yearsOfExperience } = props.chef;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/2"><img src={chefPicture} alt="chef" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chefName}</h2>
                <p>Experience: <span>{yearsOfExperience} year</span></p>
                <p>Total Recipe: <span>{numberOfRecipes}</span></p>
                <div className="">
                    <button className="btn btn-sm"><Link to={`chefDetails/${_id}`}>VIEW RECIPES</Link></button>
                    <span className="ml-3 mr-1">{likes}</span>
                    <i className="fa-solid fa-thumbs-up"></i>
                </div>
            </div>
        </div>
    );
};

export default Chef;