import { X, AtSign, Plus } from 'lucide-react';
import { FormEvent, MutableRefObject } from 'react';

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: Array<string>;
  errorsToInviteEmails: Array<string>;
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailToInvite: (email: string) => void;
  inputEmailToInviteRef: MutableRefObject<HTMLInputElement | null>;
}

export const InviteGuestsModal = (props: InviteGuestsModalProps) => {
  const { addEmailToInvite, closeGuestsModal, inputEmailToInviteRef, removeEmailToInvite, emailsToInvite, errorsToInviteEmails } = props;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="flex w-[640px] flex-col gap-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal} className="cursor-pointer rounded-lg px-1 py-1 hover:bg-zinc-800 hover:duration-200">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          {emailsToInvite.length === 0 && <p className="text-xs text-zinc-400">Nenhum e-mail para convidar foi selecionado.</p>}
          {emailsToInvite.map((email) => {
            return (
              <div key={email} className="flex flex-row gap-[10px] rounded-md bg-zinc-800 px-2.5 py-1.5 text-zinc-300">
                {email}
                <button
                  onClick={() => {
                    removeEmailToInvite(email);
                  }}
                  className="cursor-pointer rounded-md px-1 py-1 hover:bg-zinc-700 hover:duration-200"
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <form onSubmit={addEmailToInvite} className="space-y-1">
          <div className="flex h-14 items-center justify-between gap-2 rounded-lg bg-zinc-950 px-4 py-2.5">
            <div className="flex flex-1 items-center gap-2">
              <AtSign className="size-5 text-zinc-400" />
              <input
                ref={inputEmailToInviteRef}
                required
                type="email"
                name="email"
                placeholder="Digite o e-mail do convidado*"
                className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400 hover:duration-300"
            >
              Convidar
              <Plus className="size-5 text-lime-950" />
            </button>
          </div>
          {errorsToInviteEmails.length > 0 && (
            <div className="flex flex-wrap items-center">
              {errorsToInviteEmails.map((error, index) => {
                const errorFormat = errorsToInviteEmails.length > 0 && index !== errorsToInviteEmails.length - 1 ? String(error).concat(', \xa0') : error;
                return (
                  <span key={error} className="text-xs text-red-500">
                    {errorFormat}
                  </span>
                );
              })}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
