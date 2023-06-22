
const Contacts = () => {
    return (
        <div>
            <section className="mb-32 text-gray-800">
                <h1 className="text-center text-4xl font-bold my-6 ">Get in Touch</h1>
                <div className="relative overflow-hidden bg-no-repeat bg-cover"
                >
                </div>
                <div className="container text-gray-800 px-4 md:px-12">

                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-3/4 mx-auto  px-3 lg:px-6 mb-12 xl:mb-0">
                            <form>
                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name" />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                        placeholder="Email address" />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group form-check text-center mb-6">
                                    <input type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                        id="exampleCheck87" checked />
                                    <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
                                        message</label>
                                </div>
                                <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
                            </form>
                        </div>

                    </div>
                </div>


            </section>
        </div>
    );
};

export default Contacts;