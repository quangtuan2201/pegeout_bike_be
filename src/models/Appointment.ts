import mongoose, { Schema, Document } from "mongoose";
interface IAppointment extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  bicycleId: string;
  appointmentDate: Date;
  status: mongoose.Schema.Types.ObjectId;
}

// Tạo schema cho Product
const AppointmentSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bicycleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bicycle",
    required: true,
  },
  appointmentDate: { type: Date, required: true }, // DateTime
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AllCode",
    require: true,
  },
});

// Export model Product với interface IAppointment
const Appointment = mongoose.model<IAppointment>(
  "Appointment",
  AppointmentSchema
);
export default Appointment;
