import React from "react";
// import AppointmentForm from "./appointment_form";
import { AppointmentsList } from "./appointments_list";
// import update from "immutability-helper";

export default class Appointments extends React.Component{
  constructor(props, railsContext) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: "Team meeting",
      appt_time: "Tomorrow at 9am"
    }
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  handleFormSubmit() {
    const appointment = {title: this.state.title, appt_time: this.state.appt_time};
    $.post("/appointments",
           {appointment: appointment}).done((data) => {
            this.addNewAppointment(data);
           });
  }

  addNewAppointment(appointment) {
    const appointments = React.addons.update(this.state.appointments, { $push: [appointment] });
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render() {
    return(
      <div>
        
        <AppointmentsList appointments = { this.state.appointments } />
      </div>
    )
  }
}