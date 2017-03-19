var AppointmentForm = React.createClass({
  render: function(){
    return (
      <div id="new-appt">
        <h5>Make a new appointment</h5>
        <form className="form-inline">
          <input type="text" name="title" placeholder="Appointment Title" className="form-control" />
          <input type="text" name="appt_time" placeholder="Date and Time" className="form-control" />
          <input type="submit" value="Make Appointment" className="btn btn-primary" />
        </form>
      </div>
    )
  }
});