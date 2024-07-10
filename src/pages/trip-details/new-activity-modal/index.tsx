import { FormEvent, useEffect, useRef } from 'react';
import { Calendar, Check, Tag, X } from 'lucide-react';

interface NewActivityModalProps {
  closeNewActivityModal: () => void;
}

type NewActivityType = {
  name: string;
  activityDate: string;
};

export const NewActivityModal = (props: NewActivityModalProps) => {
  const { closeNewActivityModal } = props;
  const inputFullNameActivityRef = useRef<HTMLInputElement | null>(null);

  const confirmCreateNewActivity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = JSON.parse(JSON.stringify(Object.fromEntries(formData))) as NewActivityType;
    console.log('data =>> ', data);
  };

  useEffect(() => {
    inputFullNameActivityRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="flex w-[640px] flex-col gap-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeNewActivityModal} className="cursor-pointer rounded-lg px-1 py-1 hover:bg-zinc-800 hover:duration-200">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">Todos convidados podem visualizar as atividades.</p>
        </div>

        <form onSubmit={confirmCreateNewActivity} className="space-y-3">
          <div className="space-y-2">
            <div className="flex h-14 items-center justify-between gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 outline-1 outline-lime-300 focus-within:outline">
              <div className="flex flex-1 items-center gap-2">
                <Tag className="size-5 text-zinc-400" />
                <input
                  ref={inputFullNameActivityRef}
                  required
                  type="text"
                  name="name"
                  placeholder="Qual a atividade*"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
                />
              </div>
            </div>
            <div className="flex h-14 items-center justify-between gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 outline-1 outline-lime-300 focus-within:outline">
              <div className="flex flex-1 items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input
                  required
                  type="datetime-local"
                  name="activityDate"
                  placeholder="Data/Hora da atividade*"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400 hover:duration-300"
          >
            <Check className="size-5 text-lime-950" />
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  );
};
