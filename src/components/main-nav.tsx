import { ModeToggle } from "./mode-toggle";

export function MainNav() {
  return (
    <nav className="flex w-full p-4 bg-primary-foreground justify-center border-b ">
      <div className="flex w-full max-w-4xl justify-between items-center">
        <div className="flex gap-2 items-center ">
          <h1 className="text-lg font-semibold self-end ">Learn</h1>
          <h2 className="text-sm text-muted-foreground ">
            to write recipes for{" "}
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
      </div>
    </nav>
  );
}
