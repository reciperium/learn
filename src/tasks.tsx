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
    contentMd: "goodby",
    validation: (recipe: Recipe) => true,
    defaultRecipe: "oo",
    title: "",
  },
  {
    contentMd: "mama",
    validation: (recipe: Recipe) => true,
    defaultRecipe: "hello",
    title: "",
  },
];

export default exercises;
