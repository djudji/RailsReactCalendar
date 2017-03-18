var Appointments = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.appointments.map(function(appointment){
          return(
            <div>
              <h4>{appointment.title}</h4>
              <p>{appointment.appt_time}</p>
            </div>
          )
        })}
      </div>
    );
  }
});