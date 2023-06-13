import React, { useEffect, useState } from 'react';
import './Foods.css';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodTab from '../FoodTab/FoodTab';

const Foods = () => {
    const categories = ['breakfast', 'lunch', 'dinner'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const breakfast = foods.filter(food => food.category_id === 'breakfast');
    const lunch = foods.filter(food => food.category_id === 'lunch');
    const dinner = foods.filter(food => food.category_id === 'dinner');

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
            <div className="container mt-5">
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