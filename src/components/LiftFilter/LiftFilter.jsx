import { LiftCard } from "../liftcard/liftcard";

export function LiftFilter({ trips, filters }) {
  const filteredTrips = trips.filter((trip) => {
        if (filters.from && !trip.from.toLowerCase().includes(filters.from.toLowerCase())) {
      return false;
    }
    if (filters.to && !trip.to.toLowerCase().includes(filters.to.toLowerCase())) {
      return false;
    }
    // checker ledeige pladeser
    const availableSeats = trip.seatsTotal - trip.seatsBooked;
    if (filters.seats && availableSeats < filters.seats) return false;

    // filterer efter baggage
    if (filters.baggage && trip.baggage !== filters.baggage) return false;

    // filterer efter Comfort
    if (filters.comfort && !trip.hasComfort) return false;

    // filterer efter Preferences
    if (filters.preferences) {
      if (filters.preferences.music && !trip.allowMusic) return false;
      if (filters.preferences.kids && !trip.allowChildren) return false;
      if (filters.preferences.pets && !trip.allowPets) return false;
      if (filters.preferences.smoking && !trip.allowSmoking) return false;
    }

    return true;
  });

  return (
    <div>
      {filteredTrips.length > 0 ? (
        filteredTrips.map((trip) => <LiftCard key={trip.id} trip={trip} />)
      ) : (
        <p className="text-gray-500">Ingen ture matcher dine kriterier</p>
      )}
    </div>
  );
}
