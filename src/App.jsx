import Navbar from "./components/Navbar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import {PatientContext} from "./PatientContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>
<PatientContext>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </BrowserRouter>
</PatientContext>
    </QueryClientProvider>
  )
}

export default App

