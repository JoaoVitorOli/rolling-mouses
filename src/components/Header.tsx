import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed z-50 top-0 w-full bg-background/70 backdrop-blur-md">
      <div className="container px-4 py-5 mx-auto justify-between flex items-center">
        <div className="flex items-center gap-2">
          <Tooltip content="sniff sniff">
            <p className="text-4xl cursor-default">
              🐭
            </p>
          </Tooltip>

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