import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import HouseCard from '../HouseCard';




const AllHouses = () => {

const houseDatas = [
  {
    id: 1,
    title: "Modern City Apartment",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    price: "$300,000",
    location: {
      city: "Metropolis",
      state: "ExampleState",
      zipcode: "12345",
    },
    images: [
      "https://github.com/nhhasib/House-Hunter/assets/114354524/2be3d97a-aefa-460b-8a95-cacb4c3e9f6d",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/6b280ed7-3f97-4bf9-96f6-b3a05a59b103",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/908f4775-241f-4d57-aec7-7b548fa9606f",
    ],
    description:
      "A stylish and modern apartment in the heart of the city, with breathtaking views of the skyline.",
    amenities: ["Balcony", "Gym", "Parking"],
  },
  {
    id: 2,
    title: "Suburban Family Home",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    price: "$450,000",
    location: {
      city: "Suburbia",
      state: "ExampleState",
      zipcode: "54321",
    },
    images: [
      "https://github.com/nhhasib/House-Hunter/assets/114354524/f221dac6-e784-45b2-902c-a34167f3fbbc",
      "(https://github.com/nhhasib/House-Hunter/assets/114354524/a9798856-32e2-416f-b0dd-66a3d4012bd6",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/9ca1fe33-8045-46a7-97de-4929050d84bf",
    ],
    description:
      "A charming family home with a spacious backyard, perfect for kids and pets.",
    amenities: ["Backyard", "Fireplace", "Walk-in Closet"],
  },
  {
    id: 3,
    title: "Cozy Downtown Studio",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    price: "$200,000",
    location: {
      city: "Downtown",
      state: "ExampleState",
      zipcode: "67890",
    },
    images: [
      "https://github.com/nhhasib/House-Hunter/assets/114354524/e07e0b69-6826-4ce5-9589-e0d0b72a28bb",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/26be0d91-e9a4-4498-a3e7-6c37f0ce1138",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/d22ef1b3-c5e6-4a99-a374-a1cfcf55d6c1",
    ],
    description:
      "A charming studio apartment with a prime downtown location, perfect for urban living.",
    amenities: ["City Views", "Laundry Facilities", "Security System"],
  },
  {
    id: 4,
    title: "Spacious Riverside Loft",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    price: "$600,000",
    location: {
      city: "Riverfront",
      state: "ExampleState",
      zipcode: "13579",
    },
    images: [
      "https://github.com/nhhasib/House-Hunter/assets/114354524/bfc2016f-d306-44ea-9905-eaa243a69265",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/bd8ba241-c477-40fd-a741-c00440f155aa",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/99a0b256-2212-4db8-bd5d-64091b969856",
    ],
    description:
      "An elegant loft apartment with stunning views of the river, offering a luxurious living experience.",
    amenities: ["Loft Space", "Riverside Views", "Fitness Center"],
  },
  {
    id: 5,
    title: "Sunlit Corner Penthouse",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    price: "$750,000",
    location: {
      city: "Skyline Heights",
      state: "ExampleState",
      zipcode: "24680",
    },
    images: [
      "https://github.com/nhhasib/House-Hunter/assets/114354524/99a0b256-2212-4db8-bd5d-64091b969856",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/1151d8e1-1a4a-40cd-8cc0-3ead42b98c43",
      "https://github.com/nhhasib/House-Hunter/assets/114354524/e8f25fd2-89f5-4314-af93-b786a7506fd0",
    ],
    description:
      "A stunning penthouse with abundant natural light and panoramic views of the city skyline.",
    amenities: ["Penthouse Level", "Skyline Views", "Private Terrace"],
  },
];

    return <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto my-10'>{houseDatas.map(data=>
        <HouseCard data={data}></HouseCard>
    )}</div>;
};

export default AllHouses;