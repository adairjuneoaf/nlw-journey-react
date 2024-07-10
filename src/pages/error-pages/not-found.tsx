import { Link, useRouteError } from 'react-router-dom';

export function NotFoundErrorPage() {
  const error = useRouteError() as { statusText: string; message: string };

  return (
    <div className="flex h-screen items-center justify-center bg-maskBackground bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-6 px-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-lime-300">Oops!</h1>
          <p className="text-sm text-zinc-500">
            Um erro não inesperado aconteceu, você pode se redirecionar para página inicial{' '}
            <Link to="/" className="text-zinc-300 underline hover:text-zinc-400 hover:duration-200">
              clicando aqui
            </Link>
            .
          </p>
        </div>
        <p className="text-lg text-zinc-300">
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </div>
  );
}
