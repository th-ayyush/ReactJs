import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const data = useLoaderData();
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/th-ayyush')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[]);

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github {data.followers}
        <img src={data.avatar_url} alt="" /></div>
    )
}

export default Github;

export const githubInfoLoader = async () =>{
    const response =await fetch('https://api.github.com/users/th_ayyush')
    return response.json();
}