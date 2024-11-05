import { CardHome } from "@/components/CardHome";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="mt-20 pt-4">
      <div className="px-4 container mx-auto flex flex-col gap-6">
        <CardHome />
        <Divider />
        <CardHome />
      </div>
    </section>
  );
}
