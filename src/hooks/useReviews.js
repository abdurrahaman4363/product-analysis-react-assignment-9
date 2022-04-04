const { useState, useEffect } = require("react")

const useReviews =()=>{
    const [data,setData]=useState([])
    // console.log(data);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return [data,setData];
}
export default useReviews;