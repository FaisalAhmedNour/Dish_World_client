import Chefs from "../Main/Chefs";
import Feature from "../Main/Feature/Feature";
import Contacts from "../contacts/Contacts";

const Home = () => {
    return (
        <div>
            <div id="slide1" className="carousel-item relative w-full max-h-screen">
                <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className="w-9/12 mx-auto pr-32">
                        <h1 className="text-6xl font-semibold text-[#222222]">Heaven of Test</h1>
                        <p className="text-lg my-8 text-black font-bold">The speciality of a best recipe lies in its ability to delight the senses and leave a lasting impression. It captures the perfect balance of flavors, textures, and aromas.</p>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div>
            <div className="mx-12">
                <Feature></Feature>
                <Chefs></Chefs>
                <Contacts></Contacts>
            </div>
        </div>
    );
};

export default Home;