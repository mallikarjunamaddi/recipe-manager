# Recipe Manager

Recipe Manager is a simple React application that allows users to view different recipes. 

## Features

- Displays the title of the recipe
- Lists all the ingredients required for the recipe
- Provides step-by-step preparation instructions

## Components

- `RecipeTitle`: This component displays the title of the recipe.
- `IngredientsList`: This component lists all the ingredients required for the recipe.
- `PreparationSteps`: This component provides the step-by-step preparation instructions.

## Usage

To use this application, simply import the `App` component and render it in your application.

```jsx
import App from './App';

function MyApp() {
    return (
        <div>
            <App />
        </div>
    );
}

export default MyApp;
```

## Code Snippet

Here is a snippet from the `App` component:

```jsx
return (
    <article>
        <h1>Recipe Manager</h1>

        {/* RecipeTitle component */}
        <RecipeTitle recipe={recipe} />

        {/* IngredientList component */}
        <IngredientsList ingredients={recipe.ingredients} />

        <PreparationSteps steps={recipe.steps} />
    </article>
)
```