import { useEffect, useState } from "react";
import Chef from "./Chef";


const Chefs = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://dish-server-faisalahmednour.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div>
            <div className="pb-20">
                <h2 className="text-center text-5xl text-black font-semibold my-5">Meet the Chefs</h2>
                <div className="grid grid-cols-2 gap-4">
                    {
                        chefs.map(chef => <Chef key={chef._id} chef={chef}></Chef>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chefs;