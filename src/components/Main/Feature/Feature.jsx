
const Feature = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-5xl mb-5 text-black font-semibold">Top selling items</h1>
            <div className="flex gap-5">
                <div >
                    <img  className="rounded-lg" src="https://res.cloudinary.com/dkegwuqcf/image/upload/v1683206470/220428140436-04-classic-american-hamburgers_lgsbof.png" alt="Burger" />
                </div>
                <div >
                    <img  className="rounded-lg" src="https://res.cloudinary.com/dkegwuqcf/image/upload/v1683206804/220428140436-04-classic-american-hamburgers_3_gahilb.png" alt="Burger" />
                </div>
                <div >
                    <img  className="rounded-lg" src="https://res.cloudinary.com/dkegwuqcf/image/upload/v1683206675/220428140436-04-classic-american-hamburgers_2_wfcigo.png" alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default Feature;