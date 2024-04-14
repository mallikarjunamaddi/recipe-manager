import React from 'react';
import './RecipeTitle.css';

// TODO: Create RecipeTitle component
function RecipeTitle(props) {
    const recipe = props.recipe;
    return (
        <section>
            <h2>{recipe.title}</h2>
            <h3 className={recipe.rating <= 3.5 ? 'red' : 'green'}>
                {recipe.feedback.rating} from {recipe.feedback.reviews} reviews
            </h3>
        </section>
    );
}

export default RecipeTitle;
