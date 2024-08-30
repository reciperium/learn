import { cn } from "@/lib/utils";
import { HTMLProps } from "react";
import { buttonVariants } from "./ui/button";
import { maxExercises } from "@/tasks";
import { Link } from "wouter";

export type Props = React.PropsWithChildren &
  HTMLProps<HTMLElement> & { exerciseId: number };

export function Footer({ className, exerciseId }: Props): React.ReactNode {
  return (
    <nav
      className={cn(
        "flex w-full p-4 justify-between bg-primary-foreground items-center border-b ",
        className
      )}
    >
      <span>
        {exerciseId > 1 && (
          <Link
            href={`/${exerciseId - 1}`}
            className={buttonVariants({ variant: "default" })}
          >
            Previous
          </Link>
        )}
      </span>
      <span>
        {maxExercises !== exerciseId && (
          <Link
            href={`/${exerciseId + 1}`}
            className={buttonVariants({ variant: "default" })}
          >
            Next
          </Link>
        )}
      </span>
    </nav>
  );
}
