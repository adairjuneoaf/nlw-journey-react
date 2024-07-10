import { ArrowRight, UserPlus } from 'lucide-react';

interface InputGuestsInviteProps {
  emailsToInvite: Array<string>;
  openGuestsModal: () => void;
  openNewTripModal: () => void;
}

export const InputGuestsInvite = (props: InputGuestsInviteProps) => {
  const { openGuestsModal, openNewTripModal, emailsToInvite } = props;

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button type="button" onClick={openGuestsModal} className="flex h-full flex-1 items-center gap-2">
        <UserPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length === 0 ? (
          <span className="flex w-full text-left text-lg text-zinc-400">Quem estará da viagem?</span>
        ) : (
          <span className="flex w-full text-left text-lg text-zinc-100">{emailsToInvite.length} pessoa(s) convidada(s)</span>
        )}
      </button>
      <div className="h-6 w-px bg-zinc-800" />
      <button
        onClick={openNewTripModal}
        disabled={emailsToInvite.length === 0}
        className="flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:duration-300 hover:enabled:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-lime-950" />
      </button>
    </div>
  );
};
