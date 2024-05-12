import { usePatient } from "../PatientContext"



function AboutPatients() {
 const {selectedItem}=usePatient()
 return (
   <div className="bg-white grid gap-4 grid-rows-[9rem,1fr,4rem] h-[740px] w-[367px] rounded-md p-2">
     {selectedItem && (
       <>
       <div>
         <img
           src={selectedItem.profile_picture}
           alt="img"
           className="m-auto h-[7rem]"
           />
         <h4 className="text-center font-semibold">{selectedItem.name}</h4>
           </div>
         <div className="mt-6 space-y-4">
           <div className="flex mt-4  gap-x-4">
             <img
               src="/images\calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
               alt="img"
               className="h-1rem"
             />
             <div>
               <p className="mb-0 text-sm text-stone-600">date of birth</p>
               <span>{selectedItem.date_of_birth}</span>
             </div>
           </div>

           <div className="flex gap-x-4 items-center">
             <img src="/images\FemaleIcon.svg" alt="img" className="h-[1rem]" />
             <div>
               <p className="mb-0 text-sm text-stone-600">gender</p>
               <h5 className="font-semibold">{selectedItem.gender}</h5>
             </div>
           </div>
           <div className="flex gap-x-4 items-center">
             <img src="/images\PhoneIcon.svg" alt="img" className="h-[1rem]" />
             <div>
               <p className="mb-0 text-sm text-stone-600">contact info</p>
               <h5 className="font-semibold">{selectedItem.phone_number}</h5>
             </div>
           </div>
           <div className="flex gap-x-4 items-center">
             <img src="/images\PhoneIcon.svg" alt="img" className="h-[1rem]" />
             <div>
               <p className="mb-0 text-sm text-stone-600">
                 {" "}
                 emergency contact{" "}
               </p>
               <h5 className="font-semibold">
                 {selectedItem.emergency_contact}
               </h5>
             </div>
           </div>
           <div className="flex gap-x-4 items-center">
             <img
               src="/images\InsuranceIcon.svg"
               alt="img"
               className="h-[1rem]"
             />
             <div>
               <p className="mb-0 text-sm text-stone-600"> insurance info </p>
               <h5 className="font-semibold">{selectedItem.insurance_type}</h5>
             </div>
           </div>
         </div>

         <div className="text-center mt-4">
           <button className="bg-green-300 rounded-full p-2 px-4">
             show all information
           </button>
         </div>
       </>
     )}
   </div>
 );
}

export default AboutPatients
