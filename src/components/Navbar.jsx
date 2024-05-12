// import { NavLink } from "react-router-dom"

import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"

function Navbar() {
 return (
   <nav className="p-4 bg-stone-100  max-w-[1170px] w-[90vw] m-auto rounded-full">
     <div className="flex justify-between items-center    gap-x-2">
       <img src="/images/testLogo.svg" alt="svg" className="h-[2rem]" />
       <ul className="flex justify-between gap-x-4">
         <li className="flex items-center gap-x-2">
           <img
             src="/images/home_FILL0_wght300_GRAD0_opsz24.svg"
             alt="svg"
             className="h-[1rem] "
           />
           <NavLink>overview</NavLink>
         </li>
         <li className="flex items-center  gap-x-2">
           <img
             src="/images\group_FILL0_wght300_GRAD0_opsz24.svg"
             alt="svg"
             className="h-[1rem] "
           />
           <NavLink>patient</NavLink>
         </li>
         <li className="flex items-center  gap-x-2">
           <img
             src="/images\calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
             alt="svg"
             className="h-[1rem] "
           />
           <NavLink>schedule</NavLink>
         </li>
         <li className="flex items-center">
           <img
             src="/images\chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
             alt="svg"
             className="h-[1rem] "
           />
           <NavLink>message</NavLink>
         </li>
         <li className="flex items-center  gap-x-2">
           <img
             src="/images\credit_card_FILL0_wght300_GRAD0_opsz24.svg"
             alt="svg"
             className="h-[1rem] "
           />
           <NavLink>trabsaction</NavLink>
         </li>
       </ul>
       <Avatar />
     </div>
   </nav>
 );
}

export default Navbar
