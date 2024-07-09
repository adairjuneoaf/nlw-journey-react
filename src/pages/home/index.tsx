import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, AtSign, Calendar, Check, Mail, MapPin, Plus, Settings2, User, UserPlus, X } from "lucide-react";

type ConfirmNewTripType = {
  name: string,
  email: string,
}

export function HomePage() {
  const navigate = useNavigate();
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isNewTripModalOpen, setIsNewTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'adair_juneo@hotmail.com', 'admin@teste.com', 'jonh.doe@acme.com',
  ])
  const [errorsToInviteEmails, setErrorsToInviteEmails] = useState<Array<string>>([]);
  const inputEmailToInviteRef = useRef<HTMLInputElement | null>(null);

  const openGuestInput = () => { setIsGuestInputOpen(true); }
  const closeGuestInput = () => { setIsGuestInputOpen(false); }
  const openGuestsModal = () => {
    setIsGuestsModalOpen(true);
    setTimeout(() => {
      inputEmailToInviteRef.current?.focus();
    }, 100);
  }
  const closeGuestsModal = () => { setIsGuestsModalOpen(false); }
  const openNewTripModal = () => { setIsNewTripModalOpen(true); }
  const closeNewTripModal = () => { setIsNewTripModalOpen(false); }

  const addEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailToInvite = data.get('email')?.toString() || ''
    if (emailsToInvite.find(emailOnList => emailOnList === emailToInvite)) {
      const erroDuplicateEmail = 'Email já está na lista para ser convidado';
      setErrorsToInviteEmails((prevState) => {
        const anotherErrors = prevState.filter(error => error !== erroDuplicateEmail)
        return ([...anotherErrors, erroDuplicateEmail])
      })
      inputEmailToInviteRef.current && inputEmailToInviteRef.current?.focus();
      return;
    }
    setEmailsToInvite((prevState) => ([...prevState, emailToInvite]));
    setErrorsToInviteEmails([]);
    event.currentTarget.reset();
    inputEmailToInviteRef.current && inputEmailToInviteRef.current?.focus();
  }

  const removerEmailToInvite = (emailToRemove: string) => {
    setEmailsToInvite((prevState) => {
      const emailsRemnants = prevState.filter(emailRemnant => emailRemnant !== emailToRemove);
      return emailsRemnants;
    });
  }

  const confirmCreateNewTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = JSON.parse(JSON.stringify(Object.fromEntries(formData))) as ConfirmNewTripType
    console.log('data =>> ', data);
    navigate('/trips/123456')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-maskBackground bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="w-full flex flex-col justify-center gap-4">
          <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input disabled={isGuestInputOpen} type="text" name="destination" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none disabled:cursor-not-allowed disabled:text-zinc-400 transition-colors duration-200" />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input disabled={isGuestInputOpen} type="text" name="dateWhen" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none disabled:cursor-not-allowed disabled:text-zinc-400 transition-colors duration-200" />
            </div>
            <div className="w-px h-6 bg-zinc-800" />
            {!isGuestInputOpen ? (
              <button type="button" onClick={openGuestInput} className=" bg-lime-300 text-lime-950 font-medium px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-lime-400 hover:duration-300">
                Continuar
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            ) : (
              <button type="button" onClick={closeGuestInput} className=" bg-zinc-800 text-zinc-200 font-medium px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-700 hover:duration-300">
                Alterar data
                <Settings2 className="size-5 text-zinc-200" />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
              <button type="button" onClick={openGuestsModal} className="h-full flex items-center gap-2 flex-1">
                <UserPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length === 0 ? (
                  <span className="w-full text-lg text-zinc-400 flex text-left">
                    Quem estará da viagem?
                  </span>
                ) : (
                  <span className="w-full text-lg text-zinc-100 flex text-left">
                    {emailsToInvite.length} pessoa(s) convidada(s)
                  </span>
                )}
              </button>
              <div className="w-px h-6 bg-zinc-800" />
              <button onClick={openNewTripModal} disabled={emailsToInvite.length === 0} className=" bg-lime-300 text-lime-950 font-medium px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:enabled:bg-lime-400 hover:duration-300 disabled:cursor-not-allowed disabled:opacity-60">
                Confirmar viagem
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline hover:text-zinc-400 hover:duration-200">termos de uso</a> e <a href="#" className="text-zinc-300 underline hover:text-zinc-400 hover:duration-200">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button onClick={closeGuestsModal} className="py-1 px-1 rounded-lg cursor-pointer hover:bg-zinc-800 hover:duration-200">
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2">
              {emailsToInvite.length === 0 && (
                <p className="text-xs text-zinc-400">Nenhum e-mail para convidar foi selecionado.</p>
              )}
              {emailsToInvite.map(((email) => {
                return (
                  <div key={email} className="bg-zinc-800 text-zinc-300 px-2.5 py-1.5 rounded-md flex flex-row gap-[10px]">
                    {email}
                    <button onClick={() => { removerEmailToInvite(email); }} className="py-1  px-1 rounded-md cursor-pointer hover:bg-zinc-700 hover:duration-200">
                      <X className="size-4 text-zinc-400" />
                    </button>
                  </div>
                )
              }))}
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form onSubmit={addEmailToInvite} className="space-y-1">
              <div className="h-14 px-4 py-2.5 bg-zinc-950 rounded-lg flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-1">
                  <AtSign className="size-5 text-zinc-400" />
                  <input ref={inputEmailToInviteRef} required type="email" name="email" placeholder="Digite o e-mail do convidado*" className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none" />
                </div>
                <button type="submit" className="bg-lime-300 text-lime-950 font-medium px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-lime-400 hover:duration-300">
                  Convidar
                  <Plus className="size-5 text-lime-950" />
                </button>
              </div>
              {errorsToInviteEmails.length > 0 && (
                <div className="flex items-center flex-wrap">
                  {errorsToInviteEmails.map((error, index) => {
                    const errorFormat = errorsToInviteEmails.length > 0 && index !== errorsToInviteEmails.length - 1 ? String(error).concat(', \xa0') : error;
                    return (
                      <span key={error} className="text-xs text-red-500">{errorFormat}</span>
                    )
                  })}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {isNewTripModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                <button onClick={closeNewTripModal} className="py-1 px-1 rounded-lg cursor-pointer hover:bg-zinc-800 hover:duration-200">
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a <br /> 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
            </div>

            <form onSubmit={confirmCreateNewTrip} className="space-y-3">
              <div className="space-y-2">
                <div className="h-14 px-4 py-2.5 bg-zinc-950 rounded-lg flex items-center justify-between gap-2 focus-within:outline outline-lime-300 outline-1">
                  <div className="flex items-center gap-2 flex-1">
                    <User className="size-5 text-zinc-400" />
                    <input required type="text" name="name" placeholder="Seu nome completo*" className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none" />
                  </div>
                </div>
                <div className="h-14 px-4 py-2.5 bg-zinc-950 rounded-lg flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-1">
                    <Mail className="size-5 text-zinc-400" />
                    <input required type="email" name="email" placeholder="Seu e-mail pessoal*" className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none" />
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-lime-300 text-lime-950 w-full font-medium px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-lime-400 hover:duration-300">
                Confirmar criação da viagem
                <Check className="size-5 text-lime-950" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
