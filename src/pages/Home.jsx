import AboutPatients from "../components/AboutPatients";
import DiagnosisHistory from "../components/DiagnosisHistory";
import PatientsData from "../components/PatientsData"

function Home() {
   const className = "max-w-6xl w-[90vw] py-8 m-auto";
 return (
  <section className={`${className}`}>
   <div className="flex gap-x-4">

   <PatientsData/>
   <DiagnosisHistory/>
   <AboutPatients/>
   </div>
  </section>
 )
}

export default Home
