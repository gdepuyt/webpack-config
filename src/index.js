import "./styles/index.css";

const elevenShieldRecipe = {
    leatherStrips : 2,
    ironIngot : 1,
    refinedMoostone : 4
};

const elevenGauntletsRecipe = {
    ...elevenShieldRecipe,
    leather : 1,
    refinedMoostone : 4
};

console.log(elevenShieldRecipe);

console.log(elevenGauntletsRecipe);

