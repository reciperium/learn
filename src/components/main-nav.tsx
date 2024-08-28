import { ModeToggle } from "./mode-toggle";

export function MainNav() {
  return (
    <nav className="flex w-full p-4 justify-between bg-primary-foreground items-center border-b ">
      <div className="flex flex-row items-end gap-2">
        <h1 className="text-lg font-semibold self-end align-text-bottom ">
          Learn
        </h1>
        <h2 className="text-sm text-muted-foreground align-bottom">
          by{" "}
          <a
            href="https://www.reciperium.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-600"
          >
            Reciperium
          </a>
        </h2>
      </div>
      <ModeToggle />
    </nav>
  );
}
