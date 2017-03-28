class Appointment extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.appointment.title}</h4>
        <p>{formatDate(this.props.appointment.appt_time)}</p>
      </div>
    )
  }
}
