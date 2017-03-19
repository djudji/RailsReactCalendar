var Appointment = React.createClass({
  render: function() {
    return(
      <div>
        <h4>{this.props.appointment.title}</h4>
        <p>{this.props.appointment.appt_time}</p>
      </div>
    )
  }
});
