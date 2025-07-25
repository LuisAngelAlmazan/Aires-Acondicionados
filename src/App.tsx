import './index.css'
import Header from './components/Header'
import ServicesSection from './components/ServicesSection'
import ProductGallery from './components/ProductGallery'
import Testimonials from './components/Testimonials'
import FloatingWhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

//<div className="min-h-screen bg-white text-gray-800 pt-14"> {/* 56px = 14 * 4px */}


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-14">
      <Navbar/>
      <Header />
      <main>
        <ServicesSection />
        <ProductGallery/>
        <Testimonials/>
      </main>
      
     <Footer/>
      <FloatingWhatsAppButton/>
    </div>
  )
}

export default App
