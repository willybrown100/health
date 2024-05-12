import { usePatient } from "../PatientContext"
import BloodpressureChart from "./BloodpressureChart"
import PatientHeartInfo from "./PatientHeartInfo"
import SortBy from "./SortBy"

function DiagnosisHistory() {

 const {selectedItem}=usePatient()
 console.log(selectedItem)
 const destructureVlue = (obj)=>{
  if(obj){
   const {diagnosis_history,diagnostic_list}=obj
   return { diagnosis_history, diagnostic_list };
  }else{
   return {}
  }
 }
 const { diagnosis_history} = destructureVlue(selectedItem);
 console.log(diagnosis_history)

 
 const BloodPressure=diagnosis_history?.map((item)=>item?.blood_pressure)
 const respiratoryRate = diagnosis_history?.map((item)=>item.respiratory_rate)
 const heartRate = diagnosis_history?.map((item)=>item.heart_rate)
 const temperature = diagnosis_history?.map((item)=>item.temperature)
 const systolic  = BloodPressure?.map((item)=>item.systolic)
 const diastolic  = BloodPressure?.map((item)=>item.diastolic)
console.log(systolic,diastolic)
 


 
 return (
  

  <div className="bg-stone-100 h-[673px] rounded-md p-4 w-[766px]">
   <h4>diagnosis history</h4>
   <div className="bg-purple-200 rounded-md p-4">
    <div className="flex justify-between">
    <h4>blood pressure</h4>
    <SortBy/>
    </div>
   </div>
   <div>
   {selectedItem&&
   <div>
    <BloodpressureChart systolic={systolic} diastolic={diastolic}
   />
   <PatientHeartInfo heartRate={heartRate} respiratoryRate={respiratoryRate} temperature={temperature}/>
   

  
   </div>
   }
   </div>
  </div>

 
 )
}

export default DiagnosisHistory
