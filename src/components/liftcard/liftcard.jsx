export function LiftCard({ trip }) {
  return (
    <div
      className="grid grid-cols-3 gap-4 border rounded-lg p-4 mb-4 hover:shadow cursor-pointer"
      onClick={() => (window.location.href = `/trip/${trip.id}`)}
    >
      <div className="flex items-center space-x-2">
        <img
          src={trip?.user?.imageUrl}
          alt={trip?.user?.firstname}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold">{trip?.user?.firstname}</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={
                  i <= trip?.user?.avgStars
                    ? "text-yellow-500"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold">
          {trip.cityDeparture} → {trip.cityDestination}
        </p>
        <p>
            {trip.addressDeparture} → {trip.addressDestination}
        </p>
        <p>
          {trip.departureDate .slice(2, 10)} kl. {trip.departureDate .slice(11, 16)}
        </p>
      </div>

      <div className="text-right">
        <div className="space-x-2">
          
          {trip.isElectric && <span>🔋 Elbil</span>}
          {trip.useFerry && <span>⛴️ Færge</span>}
        </div>
        <p className="font-bold">{trip.pricePerSeat} DKK</p>

        <div className="flex justify-end space-x-1">
          {Array.from({ length: trip.seatsTotal || 0 }).map((_, idx) => (
            <span
              key={idx}
              className={`w-4 h-4 rounded-full ${
                idx < (trip.seatsBooked || 0) ? "bg-red-500" : "bg-green-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
