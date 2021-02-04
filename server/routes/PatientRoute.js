import express from "express";
import * as patientControl from "../controllers/PatientControllers";

const patientRouter = express.Router();


patientRouter
.route("/")
.post(patientControl.createPatient)
.get(patientControl.getAllPatient)

patientRouter
.route('/:id')
.get(patientControl.getPatient)
.patch(patientControl.updatePatient)
.delete(patientControl.deletePatient)

export default patientRouter;












/*patientRouter.post("/create",patientControl.createPatient);
patientRouter.get("/",patientControl.getAllPatient);
patientRouter.get("/:id",patientControl.getPatient);
patientRouter.patch("/:id",patientControl.updatePatient);
patientRouter.delete("/:id",patientControl.deletePatient);*/
