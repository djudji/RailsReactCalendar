import React from "react";
import Datetime from "react-datetime";
import Label from "./label"

export default class AppointmentForm extends React.Component {
  handleChange(e) {
    const name = e.target.name;
    const obj = {};
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
        <form className="form" onSubmit = { (e) => this.handleSubmit(e) }>
          <input name="title" className="form-control"
                 value={this.props.input_title} onChange={ (e) => this.handleChange(e) } />
          <Label label="Choose date and time" />
          <Datetime input={false} open={true} inputProps={inputProps} value={this.props.appt_time}
                    onChange={ (e) => this.setApptTime(e) } />
          <input type="submit" value="Make Appointment" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}