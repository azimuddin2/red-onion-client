import React, { useState } from 'react';
import './Foods.css';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodTab from '../FoodTab/FoodTab';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';

const Foods = () => {
    const categories = ['breakfast', 'lunch', 'dinner'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const { data: foods, isLoading, error } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/foods');
            const data = await res.json();
            return data;
        }
    });

    const breakfast = foods?.filter(food => food.category_id === 'breakfast');
    const lunch = foods?.filter(food => food.category_id === 'lunch');
    const dinner = foods?.filter(food => food.category_id === 'dinner');

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <p style={{ color: '#f91944', textAlign: 'center' }}>error: {error.message}</p>
    }

    return (
        <section>
            <div className='background-img'>
                <input
                    type="text"
                    class="input-field"
                    placeholder="Search food items"
                />
                <button class="search-btn">Search</button>
            </div>
            <div className="container my-5">
                <Tabs defaultIndex={1} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Breakfast</Tab>
                        <Tab>Lunch</Tab>
                        <Tab>Dinner</Tab>
                    </TabList>
                    <TabPanel>
                        <FoodTab items={breakfast}></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={lunch}></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={dinner}></FoodTab>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Foods;