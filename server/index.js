import express from "express";
import bodyParser from "body-parser";
import patientRouter from "./routes/PatientRoute";
import getAllpatientRouter from "./routes/PatientRoute";
import getpatientRouter from "./routes/PatientRoute";
import updatepatientRouter from "./routes/PatientRoute";
import deletepatientRouter from "./routes/PatientRoute";
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req,res)=>{res.status(200).send({
    status:200,
    message:'welcome to patiente registration',
})})

app.use("/api/v1/patient",patientRouter)
app.use("/api/v1/getAllPatient",getAllpatientRouter)
app.use("/api/v1/getPatient",getpatientRouter)
app.use("/api/v1/updatePatient",updatepatientRouter)
app.use("/api/v1/deletePatient",deletepatientRouter)

export default app;