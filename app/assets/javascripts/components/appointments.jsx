var Appointments = React.createClass({
  render: function(){
    return (
      <div>
        <AppointmentForm />
        {this.props.appointments.map(function(appointment){
          return(
            <Appointment appointment = {appointment} key={appointment.id} />
          )
        })}
      </div>
    );
  }
});