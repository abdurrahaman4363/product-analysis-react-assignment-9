import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const DeshBoard = () => {
    const [datas,setDatas]=useState([])
    // console.log(datas)

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    return (
        
        <div>
            <h1 style={{textAlign:'left'}}>Month vs Revenue</h1>
            <LineChart width={800} height={400} data={datas}>
            <Line dataKey="revenue"></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>

        <h1 style={{textAlign:'left'}}>Month vs Investment</h1>
        <BarChart width={800} height={400} data={datas}>
            <Bar dataKey="investment"></Bar>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        
        </BarChart>
        </div>
    );
};

export default DeshBoard;