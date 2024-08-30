import { Recipe } from "@reciperium/recipe-parser-wasm";

/**
 * Takes a TemplateStringsArray and returns a concatenated string with trimmed lines.
 *
 * @param strings - The TemplateStringsArray to process.
 * @returns The concatenated string with trimmed lines.
 */
function ind(strings: TemplateStringsArray) {
  return strings
    .map((s) =>
      s
        .split("\n")
        .map((s) => s.trim())
        .join("\n")
    )
    .join("");
}

const exercises = [
  {
    contentMd: ind`This interactive tutorial will guide you through creating your own recipes using a simple and intuitive language.

        Let's start by learning how to add ingredients to your recipe.

        **Task**

        Create an ingredient: Wrap the word "flour" in curly braces: \`{}\`.

        **Example**

        \`\`\`
        {flour}
        \`\`\`

        **Remember**: Curly braces are used to define ingredients in Reciperium.

        Let's get started! Write your first ingredient in the text box.

        **Extra challenge**: if you see any other ingredient, also wrap it in curly braces.
        `,
    validation: (recipe: Recipe) => {
      return recipe.ingredients.find((v) => v.name === "flour") !== undefined;
    },
    defaultRecipe: ind`Mix flour with water.
      Cook in a pan.
    `,
    title: "Your First Ingredient: A Tutorial",
  },
  {
    contentMd: ind`Congratulations on creating your first ingredient!

      Now let's add more detail to your recipe by specifying the quantity and unit of each ingredient.

      **Task**

      Add quantity and unit: After the curly braces, add parentheses containing the quantity and unit.

      **Example**

      \`\`\`
      {flour}(125 gr)
      \`\`\`

      **Remember**: The quantity is the numerical value, and the unit is the unit of measurement (e.g., gr, cups, tbps).

      **Extra challenge**: if you see any other ingredient, also add the amount and quantity.
    `,
    validation: (recipe: Recipe) => {
      return (
        recipe.ingredients.find(
          (v) => v.quantity !== undefined && v.unit !== undefined
        ) !== undefined
      );
    },
    defaultRecipe: ind`Mix {flour} with {water}.
      Cook in a pan.
    `,
    title: "Adding Amounts and Quantities",
  },
  {
    contentMd: ind`Great job adding amounts and quantities!

    Now let's introduce materials. Materials are the tools or equipment needed for your recipe.

    **Task**

    Add a material: Use the ampersand symbol (\`&\`) followed by curly braces to define a material: \`&{}\`.

    **Example**

    \`\`\`
    &{pan}
    \`\`\`
    `,
    validation: (recipe: Recipe) => {
      return recipe.materials.length > 0;
    },
    defaultRecipe: ind`Mix {flour}(125 gr) with {water}(300 ml).
      Cook in a pan.
    `,
    title: "Adding Materials",
  },
  {
    contentMd: ind`Well done adding materials!

    Now let's add a recipe reference. Recipe references are links to other recipes that you can use in your recipe.

    **Task**

    Add a recipe reference: Use the at symbol (\`@\`) followed by curly braces to define: \`@{}\`.

    **Example**

    \`\`\`
    @{woile/oat-milk}
    \`\`\`

    **Remember**: Recipe references are used to refer to other recipes in Reciperium, and they work just like ingredients,
    so you can add amounts and quantities to them as well.
    `,
    validation: (recipe: Recipe) => {
      return recipe.recipes_refs.length > 0;
    },
    defaultRecipe: ind`Mix {flour}(125 gr) with woile/oat-milk.
      Cook in a pan.
    `,
    title: "Adding Recipe References",
  },
];

const maxExercises = exercises.length;

export { maxExercises };

export default exercises;
