class AppointmentsController < ApplicationController
  before_action :set_appointments, only: [:index, :create]

  def index; end

  def create
    @appointment = Appointment.new(appointment_params)
    respond_to do |format|
      format.js { render :index unless @appointment.save }
    end
  end

  private

  def set_appointments
    @appointments = Appointment.order(appt_time: :asc)
  end

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
