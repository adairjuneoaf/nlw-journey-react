import { useParams } from 'react-router-dom';

export function TripDetailsPage() {
  const params = useParams<{ tripId: string }>();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <pre>tripId: {params.tripId}</pre>
      </div>
    </div>
  );
}
