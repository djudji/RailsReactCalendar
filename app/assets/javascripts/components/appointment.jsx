var Appointment = React.createClass({
  render: function() {
    return(
      <div>
        <h4>{this.props.appointment.title}</h4>
        <p>{moment(this.props.appointment.appt_time).format("DD MMMM YYYY, hh:mm")}</p>
      </div>
    )
  }
});
