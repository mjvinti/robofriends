import React from 'react'
import Card from './Card';

const CardList = ({ robots }) => {
    console.log('CardList');

    return (
        <div>
            {
                robots.map(({ id, name, email }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            email={email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;