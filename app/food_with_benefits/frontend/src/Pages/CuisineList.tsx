import CuisineCard from "../Components/CuisineItems";
import React from 'react';

const CuisineList: React.FC = () => {
    const cuisines = [
        {
            name: 'Italian',
            imageUrl: 'https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Fresh pasta way better than how Ayush makes his pasta'
        },
        {
            name: 'Indian',
            imageUrl: 'https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'Indian Food also way better than what Ayush can make'
        },
        {
            name: 'Japanese',
            imageUrl: 'https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'I dont think Ayush makes Sushi'
        },
        {
            name: 'Fast Food',
            imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'YUMMM Burgers!!'
        },
        {
            name: 'Chinese',
            imageUrl: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: "MMM Noodles, Prithvi doesn't like"
        },

    ];

    return (
        <div className = 'p-6'>
            <h1 className="text-2x1 font-bond mb-4">Explore Cuisines</h1>
            <div className="grid gap-6 grid cols-1 sm:grid cols-2 md:grid-cols-3">
                {cuisines.map((cuisines, index) => (
                    <CuisineCard
                    key = {index}
                    name = {cuisines.name}
                    imageUrl= {cuisines.imageUrl}
                    description={cuisines.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default CuisineList