import React from 'react';
import './IngredientsList.css';

function IngredientsList(props) {
    const ingredients = props.ingredients;
    return (
        <ul>
            {
                ingredients.map((ingredient, index) => {
                    return (
                        <li className={ingredient.prepared ? 'prepared' : ''} key={index}>
                            {ingredient.name}
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default IngredientsList;