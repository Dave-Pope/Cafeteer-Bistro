import React, { useState, useEffect } from 'react';

const Section = () => {
    // ! Initial state + localStorage upload ! //
    {
        const [items, setItems] = useState([
            {
                id: 0,
                name: 'Food',
                icon: require('../assets/icons/foodIcon.png'),
                item: ['First Item Food', 'Second Item Food', 'Third Item Food'],
                description:
                    'Lorem ipsum dolor sit amet.'
            },
            {
                id: 1,
                name: 'Drink',
                icon: require('../assets/icons/drinkIcon.png'),
                item: ['First Item Drink', 'Second Item Drink', 'Third Item Drink'],
                description:
                    'Lorem ipsum dolor sit amet consectetur.'
            },
            {
                id: 2,
                name: 'Sweet',
                icon: require('../assets/icons/sweetIcon.png'),
                item: ['First Item Sweet', 'Second Item Sweet', 'Third Item Sweet'],
                description:
                    'Dolorum accusamus molestias.'
            }
        ]);
        useEffect(() => {
            localStorage.setItem('itemList', JSON.stringify(items));
        }, []);
    }
    // ! ---------------------------------- ! //

    const itemList = JSON.parse(localStorage.getItem('itemList'));

    return (
        <h4 className='Section'>
            {itemList ? itemList.map((itm, idx) => (
                <section key={idx}>
                    <div className='item-tab'>
                        <img src={itm.icon} alt='' />
                    </div>

                    <h4 className='details'>
                        <h4>{itm.name}</h4>
                        <p>{itm.description}</p>

                        <div>
                            <ul>
                                {itm.item.map((i, idx2) => (
                                    <li key={idx2}>{i}</li>
                                ))}
                            </ul>
                        </div>
                    </h4>
                </section>
            )) :''}
        </h4>
    );
};

export default Section;
