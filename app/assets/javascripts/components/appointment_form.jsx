class AppointmentForm extends React.Component {
  handleChange(e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setApptTime(e) {
    const name = "appt_time";
    const obj = {};
    if(obj[name] = e.toDate()){
      this.props.onUserInput(obj);
    }
  }

  render() {
    const inputProps = {
      name: "appt_time"
    };
    return (
      <div id="new-appt">
        <h5>Make a new appointment</h5>
        <form className="form" onSubmit = { this.handleSubmit.bind(this) }>
          <input name="title" className="form-control"
                 value={this.props.input_title} onChange={ this.handleChange.bind(this) } />
          <Label label="Choose date and time" />
          <Datetime input={false} open={true} inputProps={inputProps} value={this.props.appt_time} onChange={ this.setApptTime.bind(this) } />
          <input type="submit" value="Make Appointment" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}