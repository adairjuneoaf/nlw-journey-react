import { FormEvent, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Mail, User, X } from 'lucide-react';

interface NewTripModalProps {
  closeNewTripModal: () => void;
}

type ConfirmNewTripType = {
  name: string;
  email: string;
};

export const NewTripModal = (props: NewTripModalProps) => {
  const { closeNewTripModal } = props;
  const navigate = useNavigate();
  const inputFullNameRef = useRef<HTMLInputElement | null>(null);

  const confirmCreateNewTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = JSON.parse(JSON.stringify(Object.fromEntries(formData))) as ConfirmNewTripType;
    console.log('data =>> ', data);
    navigate('/trips/123456');
  };

  useEffect(() => {
    inputFullNameRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="flex w-[640px] flex-col gap-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
            <button onClick={closeNewTripModal} className="cursor-pointer rounded-lg px-1 py-1 hover:bg-zinc-800 hover:duration-200">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 a <br /> 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={confirmCreateNewTrip} className="space-y-3">
          <div className="space-y-2">
            <div className="flex h-14 items-center justify-between gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 outline-1 outline-lime-300 focus-within:outline">
              <div className="flex flex-1 items-center gap-2">
                <User className="size-5 text-zinc-400" />
                <input
                  ref={inputFullNameRef}
                  required
                  type="text"
                  name="name"
                  placeholder="Seu nome completo*"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
                />
              </div>
            </div>
            <div className="flex h-14 items-center justify-between gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 outline-1 outline-lime-300 focus-within:outline">
              <div className="flex flex-1 items-center gap-2">
                <Mail className="size-5 text-zinc-400" />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Seu e-mail pessoal*"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400 hover:duration-300"
          >
            Confirmar criação da viagem
            <Check className="size-5 text-lime-950" />
          </button>
        </form>
      </div>
    </div>
  );
};
