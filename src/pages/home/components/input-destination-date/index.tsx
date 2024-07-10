import { MapPin, Calendar, ArrowRight, Settings2 } from 'lucide-react';

interface InputDestinationDateProps {
  isGuestInputOpen: boolean;
  openGuestInput: () => void;
  closeGuestInput: () => void;
}

export const InputDestinationDate = (props: InputDestinationDateProps) => {
  const { openGuestInput, closeGuestInput, isGuestInputOpen } = props;

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          name="destination"
          placeholder="Para onde você vai?"
          className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none transition-colors duration-200 disabled:cursor-not-allowed disabled:text-zinc-400"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          name="dateWhen"
          placeholder="Quando?"
          className="w-40 bg-transparent text-lg placeholder-zinc-400 outline-none transition-colors duration-200 disabled:cursor-not-allowed disabled:text-zinc-400"
        />
      </div>
      <div className="h-6 w-px bg-zinc-800" />
      {!isGuestInputOpen ? (
        <button
          type="button"
          onClick={openGuestInput}
          className="flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400 hover:duration-300"
        >
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </button>
      ) : (
        <button
          type="button"
          onClick={closeGuestInput}
          className="flex items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700 hover:duration-300"
        >
          Alterar data
          <Settings2 className="size-5 text-zinc-200" />
        </button>
      )}
    </div>
  );
};
