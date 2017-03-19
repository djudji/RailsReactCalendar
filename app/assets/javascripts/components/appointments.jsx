var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: "Team meeting",
      appt_time: "Tomorrow at 9am"
    }
  },

  render: function() {
    return(
      <div>
        <AppointmentForm input_title={this.state.title} input_appt_time={this.state.appt_time} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});