function PatientHeartInfo({temperature,respiratoryRate,heartRate}) {
 // console.log(temperature,heartRate,respiratoryRate)

 return (
   <div>
    <div  className="grid grid-cols-3 mt-3 gap-4">

     <div className="bg-[#E0F3FA] p-2 rounded-md">
       <img src="/images\respiratory rate.svg" alt="img" />
       <span>respiratoryRate</span>
       <div>{respiratoryRate[0].value} bpm</div>
       <span className="font-semibold text-sm">{respiratoryRate[0].levels}</span>
     </div>
     <div className="bg-[#FFE6E9] p-6 rounded-md">
       <img src="/images\temperature.svg" alt="img" />
       <span>temperature</span>
       <h5 className="font-semibold">{temperature[0].value}</h5>
       <span className=" text-sm">{temperature[0].levels}</span>
     </div>
     <div className="bg-[#FFE6F1] p-2">
       <img src="\images\respiratory rate.svg" alt="img" />
       <span>heart rate</span>
       <h5 className="font-semibold">{heartRate[0].value} bpm</h5>
       <span>{heartRate[0].levels} </span>
     </div>
    </div>
   </div>
 );
}

export default PatientHeartInfo
