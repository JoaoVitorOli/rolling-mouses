import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

export function Header() {
  return (
    <header className="">
      <div className="container px-4 py-5 mx-auto justify-between flex items-center">
        <div className="flex items-center gap-2">
          <p className="text-4xl">
            🐭
          </p>

          <Button
            variant="light"
            className="font-medium"
            href="/"
            as={Link}
          >
            Home
          </Button>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  )
}