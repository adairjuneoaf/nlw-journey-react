import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, CheckCircle2, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from 'lucide-react';
import { NewActivityModal } from './new-activity-modal';
import { NewEmbedLinkModal } from './new-embed-link-modal';

export function TripDetailsPage() {
  const [isOpenModalNewActivity, setIsOpenModalNewActivity] = useState(false);
  const [isOpenModalNewEmbedLink, setIsOpenModalNewEmbedLink] = useState(false);
  // const [isOpenModalConfirmPresenceTrip, setIsOpenModalConfirmPresenceTrip] = useState(false);
  const params = useParams<{ tripId: string }>();

  const openModalNewActivity = () => setIsOpenModalNewActivity(true);
  const closeModalNewActivity = () => setIsOpenModalNewActivity(false);
  const openModalNewEmbedLink = () => setIsOpenModalNewEmbedLink(true);
  const closeModalNewEmbedLink = () => setIsOpenModalNewEmbedLink(false);
  // const openModalConfirmPresenceTrip = () => setIsOpenModalConfirmPresenceTrip(true);
  // const closeModalConfirmPresenceTrip = () => setIsOpenModalConfirmPresenceTrip(false);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-6 shadow-shape">
        <div className="flex items-center justify-start gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>
        <div className="flex items-center justify-start gap-5">
          <div className="flex items-center justify-start gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>
          <div className="h-6 w-px bg-zinc-800" />
          <div className="flex items-center justify-start gap-2">
            <button
              type="button"
              onClick={() => {}}
              className="flex items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700 hover:duration-300"
            >
              Alterar data
              <Settings2 className="size-5 text-zinc-200" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Atividades</h1>
            <button
              type="button"
              onClick={openModalNewActivity}
              className="flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400 hover:duration-300"
            >
              <Plus className="size-5 text-lime-950" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-zinc-300">Dia 17</h3>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-zinc-300">Dia 18</h3>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="flex h-10 items-center justify-between gap-3 rounded-xl bg-zinc-900 px-4 py-6 shadow-shape">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-lime-300" />
                  <p className="text-sm text-zinc-100">Corrida de Kart</p>
                </div>
                <span className="text-sm text-zinc-400">14:00h</span>
              </div>
              <div className="flex h-10 items-center justify-between gap-3 rounded-xl bg-zinc-900 px-4 py-6 opacity-60 shadow-shape">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-lime-300" />
                  <p className="text-sm text-zinc-100">Academia em grupo</p>
                </div>
                <span className="text-sm text-zinc-400">16:00h</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="w-full">
                  <h4 className="text-zinc-100">Reserva do AirBnB</h4>
                  <p className="truncate">
                    <a
                      href="#"
                      target="_blank"
                      title="https://www.airbnb.com.br/rooms/104700011"
                      className="text-zinc-400 underline hover:text-zinc-400 hover:duration-200"
                    >
                      https://www.airbnb.com.br/rooms/104700011
                    </a>
                  </p>
                </div>
                <div className="shrink-0">
                  <Link2 className="size-5 text-zinc-400" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="w-full">
                  <h4 className="text-zinc-100">Regras da casa</h4>
                  <p className="truncate">
                    <a
                      href="#"
                      target="_blank"
                      title="https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000"
                      className="text-zinc-400 underline hover:text-zinc-400 hover:duration-200"
                    >
                      https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
                    </a>
                  </p>
                </div>
                <div className="shrink-0">
                  <Link2 className="size-5 text-zinc-400" />
                </div>
              </div>
              <button
                type="button"
                onClick={openModalNewEmbedLink}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700 hover:duration-300"
              >
                <Plus className="size-5 text-zinc-200" />
                Cadastrar novo link
              </button>
            </div>

            <div className="h-px w-full bg-zinc-800" />
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Convidados</h2>

              <div className="flex flex-col gap-6">
                <div className="flex flex-row items-center justify-between gap-10">
                  <div className="w-full">
                    <p className="text-zinc-100">Jessica White</p>
                    <p className="truncate">
                      <p title="jessica.white44@yahoo.com" className="text-sm text-zinc-400">
                        jessica.white44@yahoo.com
                      </p>
                    </p>
                  </div>
                  <div className="shrink-0">
                    <CircleDashed className="size-5 text-zinc-400" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-10">
                  <div className="w-full">
                    <p className="text-zinc-100">Dr. Rita Pacocha</p>
                    <p className="truncate">
                      <p title="lacy.stiedemann@gmail.com" className="text-sm text-zinc-400">
                        lacy.stiedemann@gmail.com
                      </p>
                    </p>
                  </div>
                  <div className="shrink-0">
                    <CircleCheck className="size-5 text-lime-300" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {}}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700 hover:duration-300"
              >
                <UserCog className="size-5 text-zinc-200" />
                Gerenciar convidados
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpenModalNewActivity && <NewActivityModal closeNewActivityModal={closeModalNewActivity} />}

      {isOpenModalNewEmbedLink && <NewEmbedLinkModal closeNewEmbedLinkModal={closeModalNewEmbedLink} />}
    </div>
  );
}
