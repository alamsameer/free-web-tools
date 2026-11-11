import { CharacterCounter } from "@/components/CharacterCounter";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 sm:px-6">
      <CharacterCounter />
    </main>
  );
}
