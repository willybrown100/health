import { createContext, useContext, useState } from "react"

 const PatientContexts = createContext()
function PatientContext({children}) {
 const [selectedItem,setSelectedItem]=useState(null)
 return (
  <PatientContexts.Provider value={{selectedItem,setSelectedItem}}>
   {children}
  </PatientContexts.Provider>
 )
}

function usePatient(){
 const context = useContext(PatientContexts)
 return context
}
export { PatientContext, usePatient };