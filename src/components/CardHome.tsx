import Link from "next/link"
import Image from "next/image"
import { Button } from "@nextui-org/react"

export function CardHome() {
  return (
    <Button
      as={Link}
      href={'/teste'}
      variant="light"
      className="flex whitespace-normal h-auto w-full flex-col gap-4 p-4 cursor-pointer rounded-lg transition-all duration-200 md:flex-row md:justify-start hover:bg-white/10"
    >
      <Image
        src={'/assets/rat.jpg'}
        alt=""
        width={100}
        height={100}
        className="w-full h-auto rounded-md object-cover md:w-[300px] md:min-w-[300px]"
      />

      <div className="w-full md:flex md:flex-col md:justify-center md:items-start">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold md:text-2xl">Título da postagem</h2>
          <p className="text-sm text-zinc-800/75 dark:text-zinc-400/75 line-clamp-3">Descrição da postagem descrição da postagem descrição da postagem descrição da postagem descrição da postagem descrição da postagem descrição da postagem descrição da postagem descrição da postagem descrição da postagem </p>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <Image
            src={'/assets/rat.jpg'}
            alt=""
            width={40}
            height={40}
            className="rounded-full object-cover h-[40px] w-[40px]"
          />

          <p className="font-semibold">Jão Vitu</p>
        </div>
      </div>
    </Button>
  )
}