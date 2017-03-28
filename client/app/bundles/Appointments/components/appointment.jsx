import React from "react";
import { formatDate } from "../utils/format"

export const Appointment = ({appointment}) =>
  <div>
    <h4>{appointment.title}</h4>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>
