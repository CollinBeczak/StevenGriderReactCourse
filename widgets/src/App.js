import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Jeff?',
        content: 'His name is jeff'
    },
    {
        title: 'I like turtles',
        content: 'This is a quote from a popular meme.'
    }
];

export default () => {
    return <div>
        <Accordion items={items} />
    </div>
};

