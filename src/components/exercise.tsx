import { parse, Recipe, WasmParserError } from "@reciperium/recipe-parser-wasm";
import { Suspense, useEffect, useState } from "react";
import Markdown from "react-markdown";

import { CircleCheckBig, CirclePlus } from "lucide-react";
import { MainNav } from "./main-nav";
import { Footer } from "./footer";
import Editor from "./editor";
import RecipeCard from "./recipe-card";
import Delayed from "./delayed";

type ExerciseProps = {
  title: string;
  contentMd: string;
  validation: (recipe: Recipe) => boolean;
  defaultRecipe: string;
  exerciseId: number;
};

export function Exercise({
  title,
  contentMd,
  validation,
  defaultRecipe,
  exerciseId,
}: ExerciseProps) {
  const [recipe, setCurrentRecipe] = useState(defaultRecipe);
  const [parsedRecipe, setParsedRecipe] = useState({} as Recipe);
  const [error, setError] = useState({} as WasmParserError | null);

  useEffect(() => {
    setCurrentRecipe(defaultRecipe);
  }, [defaultRecipe]);

  useEffect(() => {
    try {
      const parsed: Recipe = parse(recipe);
      setParsedRecipe(parsed);
      setError(null);
    } catch (err) {
      const error = err as WasmParserError;
      console.error(error);
      setError(error);
    }
  }, [recipe]);

  return (
    <div className="w-screen h-screen antialiased grid grid-cols-1 md:grid-cols-2">
      <div className="border-r">
        <div className="relative h-full whitespace-pre text-wrap">
          <MainNav />
          <div className="py-4 px-2 mb-16 overflow-x-auto">
            <h1 className="text-lg mb-4 font-semibold">{title}</h1>
            <Markdown>{contentMd}</Markdown>
          </div>
          <Footer
            className="absolute inset-x-0 bottom-0"
            exerciseId={exerciseId}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        <div className="h-1/2 md:h-1/3 min-h-64 border-b bg-cyan-50 dark:bg-cyan-800">
          <div className="flex flex-col h-full items-center justify-center p-6 pt-0">
            <span className="text-sm py-1 text-secondary-foreground">
              editor
            </span>
            <Suspense>
              <Editor
                error={error}
                className="w-full h-full font-sans border rounded-sm bg-background"
                recipe={recipe}
                onChange={(value: string) => {
                  setCurrentRecipe(value);
                }}
              />
            </Suspense>
          </div>
        </div>
        <div>
          <div className="relative w-full p-6">
            <RecipeCard parsedRecipe={parsedRecipe} rawRecipe={recipe} />
          </div>
          {error ? (
            <Delayed waitBeforeShow={4000}>
              <div className="sticky md:absolute bottom-0 right-0 bg-gray-900 dark:bg-gray-100 animate-in fade-in duration-300">
                <div className="flex items-center justify-center p-4 ">
                  <div>
                    <span className="flex flex-wrap gap-2 text-red-500 dark:text-red-600 items-center">
                      Something went wrong!{" "}
                      <CirclePlus className="rotate-45" size={16} />
                    </span>
                    <span className="text-muted whitespace-pre font-mono text-sm">
                      {error?.message || "Unknown error"}
                    </span>
                  </div>
                </div>
              </div>
            </Delayed>
          ) : (
            validation(parsedRecipe) && (
              <div className="sticky md:absolute bottom-0 right-0 bg-gray-700 dark:bg-gray-100 animate-in fade-in duration-300">
                <div className="flex items-center justify-center p-4 ">
                  <div>
                    <span className="text-green-400 dark:text-green-600 flex flex-wrap gap-2 items-center">
                      Correct <CircleCheckBig size={16} />
                    </span>
                    <span className="text-muted text-sm">
                      Go to the next exercise!
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
