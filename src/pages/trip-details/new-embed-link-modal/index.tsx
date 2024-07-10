import { FormEvent, useEffect, useRef } from 'react';
import { Calendar, Check, Tag, X } from 'lucide-react';

interface NewEmbedLinkModalProps {
  closeNewEmbedLinkModal: () => void;
}

type NewEmbedLinkType = {
  name: string;
  url: string;
};

export const NewEmbedLinkModal = (props: NewEmbedLinkModalProps) => {
  const { closeNewEmbedLinkModal } = props;
  const inputNameEmbedLinkRef = useRef<HTMLInputElement | null>(null);

  const confirmCreateNewEmbedLink = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = JSON.parse(JSON.stringify(Object.fromEntries(formData))) as NewEmbedLinkType;
    console.log('data =>> ', data);
  };

  useEffect(() => {
    inputNameEmbedLinkRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="flex w-[640px] flex-col gap-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button onClick={closeNewEmbedLinkModal} className="cursor-pointer rounded-lg px-1 py-1 hover:bg-zinc-800 hover:duration-200">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">Todos convidados podem visualizar os links importantes.</p>
        </div>

        <form onSubmit={confirmCreateNewEmbedLink} className="space-y-3">
          <div className="space-y-2">
            <div className="flex h-14 items-center justify-between gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 outline-1 outline-lime-300 focus-within:outline">
              <div className="flex flex-1 items-center gap-2">
                <Tag className="size-5 text-zinc-400" />
                <input
                  ref={inputNameEmbedLinkRef}
                  required
                  type="text"
                  name="name"
                  placeholder="Título do link*"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
                />
              </div>
            </div>
            <div className="flex h-14 items-center justify-between gap-2 rounded-lg bg-zinc-950 px-4 py-2.5 outline-1 outline-lime-300 focus-within:outline">
              <div className="flex flex-1 items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input required type="url" name="url" placeholder="URL*" className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400 hover:duration-300"
          >
            <Check className="size-5 text-lime-950" />
            Salvar link
          </button>
        </form>
      </div>
    </div>
  );
};
