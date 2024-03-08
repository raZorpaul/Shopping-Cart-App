import React, { useEffect,useState } from "react";

export default function Fetch({url, stateFunction}) {
    //take url and retrieve products 
    fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            stateFunction((data) => {[data]})
        })
        .catch((error) => console.log('there was an error', error))

}