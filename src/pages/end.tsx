import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Link } from "wouter";

function Container({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("container max-w-4xl px-4 pt-4", className)}>
      {children}
    </div>
  );
}

export function End() {
  return (
    <div className="w-screen h-screen antialiased">
      <div className="">
        <MainNav />
        <Container>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold text-center pb-8 text-green-600 dark:text-green-400">
              Congratulations!
            </h2>
            <p className="pb-4">
              You've successfully completed the Reciperium tutorial and are now
              equipped to create your own delicious recipes.
            </p>
            <h3 className="text-2xl font-semibold pb-6">What's next?</h3>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Experiment</span>: Try creating your
                own recipes from scratch.
              </li>
              <li>
                <span className="font-bold">Share</span>: Share your recipes
                with friends and family.
              </li>
              <li>
                <span className="font-bold">Explore</span>: Discover new recipes
                and techniques in{" "}
                <a
                  href="https://www.reciperium.com"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                  Reciperium
                </a>
              </li>
              <li>
                <span className="font-bold">Start again</span>: Go to{" "}
                <Link
                  href="/"
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                  exercise 1
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}
