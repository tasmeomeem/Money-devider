import Link from "next/link";
import BlogCard from "../UI/BlogCard";

async function getData(){
    let res = await fetch('https://dev.to/api/articles?per_page=6');
    return res.json()
}
const Blog  = async () => {
    let blogs = await getData();

   
    return (
        <section>
            <div className="container mx-auto">
                <div className="text-center text-5xl font-bold mb-16 text-blue-500">
                    Blogs
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        blogs.map((blog,index)=>(
                            <BlogCard
                                key={`feature-${index}`}
                                image={blog.image}
                                title={blog.title}
                                description={blog.description}
                            />  
                        ))}
                </div>

                <div className="flex justify-center mt-8 mb-5">
                    <Link href="/blog-list" className="btn btn-primary px-10">
                        Show All
                    </Link>
                        
                    
                </div>
            </div>
        </section>
    );
};

export default  Blog;