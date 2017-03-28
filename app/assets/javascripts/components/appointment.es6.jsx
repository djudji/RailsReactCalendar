const Appointment = (props) => {
  return (
    <div>
      <h4>{props.appointment.title}</h4>
      <p>{formatDate(props.appointment.appt_time)}</p>
    </div>
  )
}
