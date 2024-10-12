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

type ExerciseType = {
  contentMd: string;
  validation: (recipe: Recipe) => boolean;
  defaultRecipe: string;
  title: string;
  alias?: string[];
};

const exercises: ExerciseType[] = [
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
    defaultRecipe: ind`Mix flour with water.`,
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
    defaultRecipe: ind`Mix {flour} with {water}.`,
    title: "Adding Quantity and Units",
    alias: ["quantity-and-units"],
  },
  {
    contentMd: ind`Great job adding quantity and units!

    Now let's introduce materials. Materials are the tools or equipment needed for your recipe.

    **Task**

    Add a material: Use the ampersand symbol (\`&\`) followed by curly braces to define a material: \`&{}\`.

    **Examples**

    \`\`\`
    &{pan}
    &{blender}
    &{proofing basket}
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
    title: "Adding timers",
    contentMd: ind`Now let's add timers to your recipe.
    Timers are used to indicate the time needed for a specific step in your recipe.

    **Task**

    Add a timer: Add the letter \`t\` followed by curly braces to define a timer: \`t{}\`.

    **Example**

    \`\`\`
    t{1 minute}
    \`\`\`

    **Remember**: Timers are used to indicate the time needed for a specific step in your recipe.
    `,
    validation: (recipe: Recipe) => {
      return recipe.timers.length > 0;
    },
    defaultRecipe: ind`Mix {flour}(125 gr) with {water}(300 ml).
      Cook in a &{pan} for 1 minute.
    `,
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
      Cook in a &{pan} for t{1 minute}.
    `,
    title: "Adding Recipe References",
  },
  {
    contentMd: ind`Now let's add tags to your recipe. Tags are keywords that help categorize your recipe.

    **Task**

    Add tags: **At the beginning of the recipe**, add \`>>\` followed by \`tags: \` and a space and a comma-separated list of tags.

    **Example**

    \`\`\`
    >> tags: breakfast, vegan, gluten-free
    \`\`\`

    **Remember**: Tags should be descriptive and relevant to your recipe's content.

    **Hint**: What are some possible tags for a pancake recipe? Consider the ingredients, dietary restrictions, or cooking methods
    `,
    validation: (recipe: Recipe) => {
      const tags =
        recipe.metadata
          ?.get("tags")
          ?.split(",")
          .filter((v) => !!v) || [];
      return tags.length > 0;
    },
    title: "Adding Tags",
    defaultRecipe: ind`Mix {flour}(125 gr) with @{woile/oat-milk}.
      Cook in a &{pan} for t{1 minute}.
    `,
  },
];

const maxExercises = exercises.length;

export { maxExercises };

export default exercises;
