import React from 'react';
import { Ingredients } from './Ingredients';

export const RecipeComponent = (recipe) => {
    return (

        <div style={{
            padding: '1em', margin: '1em', display: 'inline-block', marginRight: '0', minWidth: '45vw', height: '750px', backgroundColor: 'rgba(210,210,210)', borderRadius: '15px'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <div>
                    <img src={recipe.recipe.recipe.image} alt="" />
                </div>

                <div>
                    <h2>{recipe.recipe.recipe.label}</h2>
                </div>
                <div>
                    <p>Calories:{parseInt(recipe.recipe.recipe.calories)}</p>
                    <p>{recipe.recipe.recipe.cuisineType}</p>
                </div>
                <div >
                    {recipe.recipe.recipe.ingredients.map((item, index) => (<Ingredients key={index} item={item} />))}
                </div>

                <a target="_blank" href={recipe.recipe.recipe.url}>Full Link to cooking directions</a>
            </div>
        </div >
    )
}
