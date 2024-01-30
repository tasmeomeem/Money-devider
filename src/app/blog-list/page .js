import Blog from '@/Components/layout/Blog';
import Footer from '@/Components/layout/Footer';
import Nav from '@/Components/layout/Nav';


const page  = () => {
    return (
        <div>
            <Nav/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default page ;