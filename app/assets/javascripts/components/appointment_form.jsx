var AppointmentForm = React.createClass({
  render: function() {
    return (
      <div id="new-appt">
        <h5>Make a new appointment</h5>
        <form className="form-inline">
          <input name="title" className="form-control"
                 value={this.props.input_title} />
          <input name="appt_time" className="form-control"
                 value={this.props.input_appt_time} />
          <input type="submit" value="Make Appointment" className="btn btn-primary" />
        </form>
      </div>
    )
  }
});