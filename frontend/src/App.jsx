import Navbar from "./Components/Navbar"
import Welcome from "./Components/Welcome"
import Services from "./Components/Services"
import Transactions from "./Components/Transactions"
import Footer from "./Components/Footer"


const App = () => {
 

  return (
    <div className="min-h-screen">
         <Navbar />
    <div className="gradient-bg-welcome">
   
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
  )
}

export default App
