import EditReservationForm from "@/app/_components/EditReservationForm";
import UpdateButton from "@/app/_components/UpdateButton";
import { editReservation, updateGuest } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";
import { getBooking, getBookings, getCabin } from "@/app/_lib/data-service";

export default async function Page({params}){
    // const reservationId = 103;
//   const maxCapacity = 23;

  const {reservationId} = await params;
  const booking = await getBooking(reservationId);
  const cabin = await getCabin(booking.cabinId)
 

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <EditReservationForm cabin={cabin} booking = {booking}/>
    </div>
  );
}