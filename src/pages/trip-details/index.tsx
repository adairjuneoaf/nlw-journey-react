import { useParams } from "react-router-dom";

export function TripDetailsPage() {
  const params = useParams<{ tripId: string }>();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <pre>tripId: {params.tripId}</pre>
      </div>
    </div>
  )
}
