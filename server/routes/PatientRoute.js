import express from "express";
import * as patientControl from "../controllers/PatientControllers";

const patientRouter = express.Router();


patientRouter.post("/create",patientControl.createPatient);
patientRouter.get("/",patientControl.getAllPatient);
patientRouter.get("/:id",patientControl.getPatient);
patientRouter.patch("/:id",patientControl.updatePatient);
patientRouter.delete("/:id",patientControl.deletePatient);
export default patientRouter;