import React, { useEffect, useState } from 'react';
import HouseCard from '../HouseCard';
import axios from 'axios';




const AllHouses = () => {
  const [housesData,setHousesData]=useState([])

  useEffect(() => {
    axios.get('https://house-hunter-server-3sx7dwkpi-nhhasib.vercel.app/allhouses')
        .then(data => setHousesData(data.data))
    .catch(error=>console.log(error))
}, [])

    return <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto my-10'>{housesData.map(data=>
        <HouseCard data={data}></HouseCard>
    )}</div>;
};

export default AllHouses;