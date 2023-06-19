import React,{useState,useEffect} from "react";


const Compant = () => {
    const [data,setData]=useState([]);

    const datas = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        setData(await response.json());
        console.log(data);
    }

    useEffect(()=>{
        datas();
    }
    ,[])

    return(
        <>
           
            {
                data.map((curElem)=>{
                    return(
                        <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl bg-white rounded-lg shadow">
                            <div className="flex flex-col items-center justify-center w-full h-24 bg-gray-800 rounded-t-lg">
                                <h1 className="text-2xl font-bold text-white">Api</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-full p-4">
                                <h1 className="text-2xl font-bold text-gray-800">Name : {curElem.name}</h1>
                                <h1 className="text-2xl font-bold text-gray-800">Email : {curElem.email}</h1>
                                <h1 className="text-2xl font-bold text-gray-800">Phone : {curElem.phone}</h1>
                                <h1 className="text-2xl font-bold text-gray-800">Website : {curElem.website}</h1>
                                <h1 className="text-2xl font-bold text-gray-800">Company : {curElem.company.name}</h1>
                            </div>
                        </div>
                    )
                }
                )
            }
        </>
            
            
    );
};

export default Compant;

