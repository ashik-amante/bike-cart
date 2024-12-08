import bg from '../../assets/bg.jpg'

const Banner = () => {
    return (
        <div className="md:flex mt-20 p-4 gap-6">
            <div className='flex items-center mb-2  p-2'>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            <div>
                <img className='w-[700px] rounded' src={bg} alt="" />
            </div>
        </div>
    );
};

export default Banner;