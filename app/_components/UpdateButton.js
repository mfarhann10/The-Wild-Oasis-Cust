"use client"

import { editReservation } from "../_lib/actions"

function UpdateButton({id}) {
    return (
        <button onClick={()=> editReservation(id)} className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update reservation
          </button>
    )
}

export default UpdateButton
