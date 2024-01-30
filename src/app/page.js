import About from "@/Components/layout/About";
import Blog from "@/Components/layout/Blog";
import Features from "@/Components/layout/Features";
import Footer from "@/Components/layout/Footer";
import Hero from "@/Components/layout/Hero";
import Nav from "@/Components/layout/Nav";


const page = () => {
  return (
    <div className="container mx-auto">
      
        <Nav/>
        <Hero/>
        <About/>
        <Features/>
        <Blog/>
        <Footer/>
      
    </div>
  );
};

export default page;