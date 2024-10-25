import Navbar from "./components/NavBar/NavBar"
import Banner from "./components/Banner/Banner"
import AboutUs from "./components/AboutUs/AboutUs";
import TripForm from "./components/TripForm/TripForm";
import Footer from "./components/Footer/Footer";


import "./App.css"
function App() {

  return (
    <>
      <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TripForm /> {/* Renderiza o componente do formulário */}
    </div>
      <Footer />
      </div>
    
    </>
  )
}

export default App 
