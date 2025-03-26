import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CuisineCard from "../Components/CuisineItems";

const CuisineList: React.FC = () => {
    const [cuisines, setCuisines] = useState([
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
    ]);

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;

        const items = Array.from(cuisines);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setCuisines(items);
    };

    return (
        <div className='p-6'>
            <h1 className="text-2xl font-bold mb-4">Explore Cuisines</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="cuisines" direction="vertical">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                        >
                            {cuisines.map((cuisine, index) => (
                                <Draggable key={cuisine.name} draggableId={cuisine.name} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <CuisineCard
                                                name={cuisine.name}
                                                imageUrl={cuisine.imageUrl}
                                                description={cuisine.description}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default CuisineList;