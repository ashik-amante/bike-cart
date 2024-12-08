import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";


const Bikes = () => {
    const [bikes, setBikes] = useState([])
    console.log(bikes);
    useEffect(() => {
        fetch('bike.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl text-center font-bold mb-10">Bike You Must Like </h1>
            <div className="grid grid-cols-2 gap-4">
                {
                    bikes.map(bike => <div className="border rounded space-y-4" key={bike.id}>
                        <div>
                            <div className="flex items-center justify-center mt-2">
                                <img className="w-[250px] h-[300px]" src={bike.image} alt="" />
                            </div>
                        </div>
                        <p className="px-4 font-bold text-2xl ">{bike.bikeName}</p>
                        <div className="px-4 flex justify-between">
                            <p>Price : {bike.price}</p>
                            <span className="text-2xl"><FaCartArrowDown /></span>
                        </div>
                        <div className="p-4">
                            <button className="bg-blue-600 w-full p-2 rounded text-white font-bold">View Details</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Bikes;