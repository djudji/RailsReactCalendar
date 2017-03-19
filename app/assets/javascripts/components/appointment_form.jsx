var AppointmentForm = React.createClass({
  handleChange: function(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  render: function() {
    return (
      <div id="new-appt">
        <h5>Make a new appointment</h5>
        <form className="form-inline">
          <input name="title" className="form-control"
                 value={this.props.input_title} onChange={this.handleChange} />
          <input name="appt_time" className="form-control"
                 value={this.props.input_appt_time} onChange={this.handleChange} />
          <input type="submit" value="Make Appointment" className="btn btn-primary" />
        </form>
      </div>
    )
  }
});