const Appointment = ({appointment}) => {
  return (
    <div>
      <h4>{appointment.title}</h4>
      <p>{formatDate(appointment.appt_time)}</p>
    </div>
  )
}
