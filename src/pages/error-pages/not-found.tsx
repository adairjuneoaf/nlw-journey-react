import { Link, useRouteError } from "react-router-dom";

export function NotFoundErrorPage() {
  const error = useRouteError() as { statusText: string, message: string };

  return (
    <div className="h-screen flex items-center justify-center bg-maskBackground bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-lime-300">Oops!</h1>
          <p className="text-zinc-500 text-sm">Um erro não inesperado aconteceu, você pode se redirecionar para página inicial <Link to='/' className="text-zinc-300 underline hover:text-zinc-400 hover:duration-200">clicando aqui</Link>.</p>
        </div>
        <p className="text-zinc-300 text-lg">
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </div>
  )
}
