import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes";
import Navber from "../Navber/Navber";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto min-w-[30%]">
            <Navber></Navber>
            <Banner></Banner>
            
            <h1></h1>
            <div className="grid grid-cols-4">
                <div className="grid col-span-3 border mt-10 ">
                <Bikes></Bikes>
                </div>
                <div className="grid col-span-1">

                </div>

            </div>
        </div>
    );
};

export default Home;