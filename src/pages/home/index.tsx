import { FormEvent, useRef, useState } from 'react';
import { NewTripModal } from './components/new-trip-modal';
import { InviteGuestsModal } from './components/invite-guests-modal';
import { InputDestinationDate } from './components/input-destination-date';
import { InputGuestsInvite } from './components/input-guests-invite';

export function HomePage() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isNewTripModalOpen, setIsNewTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(['adair_juneo@hotmail.com', 'admin@teste.com', 'jonh.doe@acme.com']);
  const [errorsToInviteEmails, setErrorsToInviteEmails] = useState<Array<string>>([]);
  const inputEmailToInviteRef = useRef<HTMLInputElement | null>(null);

  const openGuestInput = () => setIsGuestInputOpen(true);
  const closeGuestInput = () => setIsGuestInputOpen(false);
  const closeGuestsModal = () => setIsGuestsModalOpen(false);
  const openNewTripModal = () => setIsNewTripModalOpen(true);
  const closeNewTripModal = () => setIsNewTripModalOpen(false);
  const openGuestsModal = () => {
    setIsGuestsModalOpen(true);
    setTimeout(() => {
      inputEmailToInviteRef.current?.focus();
    }, 100);
  };

  const addEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailToInvite = data.get('email')?.toString() || '';
    if (emailsToInvite.find((emailOnList) => emailOnList === emailToInvite)) {
      const erroDuplicateEmail = 'Email já está na lista para ser convidado';
      setErrorsToInviteEmails((prevState) => {
        const anotherErrors = prevState.filter((error) => error !== erroDuplicateEmail);
        return [...anotherErrors, erroDuplicateEmail];
      });
      inputEmailToInviteRef.current && inputEmailToInviteRef.current?.focus();
      return;
    }
    setEmailsToInvite((prevState) => [...prevState, emailToInvite]);
    setErrorsToInviteEmails([]);
    event.currentTarget.reset();
    inputEmailToInviteRef.current && inputEmailToInviteRef.current?.focus();
  };

  const removeEmailToInvite = (emailToRemove: string) => {
    setEmailsToInvite((prevState) => {
      const emailsRemnants = prevState.filter((emailRemnant) => emailRemnant !== emailToRemove);
      return emailsRemnants;
    });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-maskBackground bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="flex w-full flex-col justify-center gap-4">
          <InputDestinationDate isGuestInputOpen={isGuestInputOpen} closeGuestInput={closeGuestInput} openGuestInput={openGuestInput} />

          {isGuestInputOpen && <InputGuestsInvite emailsToInvite={emailsToInvite} openGuestsModal={openGuestsModal} openNewTripModal={openNewTripModal} />}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos{' '}
          <a href="#" className="text-zinc-300 underline hover:text-zinc-400 hover:duration-200">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-zinc-300 underline hover:text-zinc-400 hover:duration-200">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addEmailToInvite={addEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          errorsToInviteEmails={errorsToInviteEmails}
          removeEmailToInvite={removeEmailToInvite}
          inputEmailToInviteRef={inputEmailToInviteRef}
        />
      )}

      {isNewTripModalOpen && <NewTripModal closeNewTripModal={closeNewTripModal} />}
    </div>
  );
}
