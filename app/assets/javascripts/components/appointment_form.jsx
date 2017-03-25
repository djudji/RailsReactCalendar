var AppointmentForm = React.createClass({
  handleChange: function(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    var inputProps = {
      name: "appt_time"
    };
    return (
      <div id="new-appt">
        <h5>Make a new appointment</h5>
        <form className="form" onSubmit = { this.handleSubmit }>
          <input name="title" className="form-control"
                 value={this.props.input_title} onChange={this.handleChange} />
          <Datetime input = {false} inputProps = {inputProps} value={this.props.appt_time} />
          <input type="submit" value="Make Appointment" className="btn btn-primary" />
        </form>
      </div>
    )
  }
});