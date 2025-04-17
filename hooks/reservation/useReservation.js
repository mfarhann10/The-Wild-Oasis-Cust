import { ReservationContext } from "@/app/context/ReservationContext";
import { useContext } from "react";

function useReservation (){
    const context = useContext (ReservationContext)

    if(context === undefined) throw new Error("Context was not provider")

    return context;
}

export {useReservation}