import { TrainerCard } from "@/components/trainers/TrainerCard";
import { TRAINERS } from "@/data/trainers";

export function TrainerGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      {TRAINERS.map((trainer) => (
        <TrainerCard key={trainer.slug} trainer={trainer} />
      ))}
    </div>
  );
}
