import patientInfos from "../models/Patient";

export const createPatient = async (req,res)=>{

    const newPatient = await patientInfos.create(req.body);

    res.status(201).json({
        status:"success",
        newPatient
    })
}
 export const getAllPatient=async(req,res)=>{
try{
    const Patient=await patientInfos.find();
    res.status(200).json({
        success:true,
        data: Patient
    })
}
catch(err){
    res.status(400).json({
        success:false
    })
}
 }
 export const getPatient=async(req,res)=>{
    try{
        const Patient=await patientInfos.findById(req.params.id);
        res.status(200).json({
            success:true,
            data: Patient
        })
    }
    catch(err){
        res.status(400).json({
            success:false
        })
    }
     }

     export const updatePatient=async(req,res)=>{
        try{
            const Patient=await patientInfos.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidator:true
            })
            res.status(200).json({
                success:true,
                data: Patient
            })
        
        }
        catch(err){
            res.status(400).json({
                success:false
            })
        }
 
       
         }
         export const deletePatient=async(req,res)=>{
            try{
            const Patient=await patientInfos.findByIdAndRemove (req.params.id);
            res.status(200).json({
                success:true,
                data:{}
            })
            }
             catch(err){
                res.status(400).json({
                    success:false
                });
    
                 }
         }

