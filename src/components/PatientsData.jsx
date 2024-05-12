import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../services/patientApi";
import { usePatient } from "../PatientContext";
// import PatientItemData from "./PatientItemData";



function PatientsData() {
 const {data=[],isLoading} = useQuery({
   queryFn: getPatients,
   queryKey:["patients"]
 });
 console.log(data)
  const { selectedItem, setSelectedItem } = usePatient();
  const handleClick = (item)=>{
   setSelectedItem(item)
  }
 return (
   <div className=" bg-white rounded-md w-[367px] p-2">
     <div className="flex justify-between items-center ">
       <h3>patients</h3>
       <img
         src="/images\search_FILL0_wght300_GRAD0_opsz24.svg"
         alt="img"
         className="h-[1rem]"
       />
     </div>
{isLoading&&<p className="text-center font-semibold">loading....</p>}
     <ul className="space-y-2">
       {data.map((item,index) => (
         <li key={item.name} onClick={()=> handleClick(item)} className="cursor-pointer hover:bg-slate-200">
           <div className="flex justify-between cursor-pointer">
            <div className="flex items-center gap-x-2 m">
<img src={item.profile_picture} alt="img" className="h-[4rem]"/>
             <div>
             <h4 className="mb-0">{item.name}</h4>
               <span>{item.gender}</span>
               <span>{item.age}</span>
             </div>
            </div>
             <img
               src="/images\more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
               alt="img"
             />
           </div>
         </li>
       ))}
     </ul>
   </div>
 );
}

export default PatientsData
