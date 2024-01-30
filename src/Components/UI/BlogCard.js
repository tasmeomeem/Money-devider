import Image from "next/image";

const { default: Link } = require("next/link")


const BlogCard = (props) => {
    return (
        <div className="card shadow-xl overflow-hidden">
            <div className="card-body p-0">
                <div className="p-10">
                <Image
                    className='w-full h-[250px]'
                    src={props.image}
                    height={500}
                    // style={{width:'100%',height:'300px'}}
                    alt="Picture of the author"
                />
                    {/* <img src={props.image} width="100%" height={250} /> */}
                </div>
                <div className="p-3">
                    <div className="card-title mb-2">{props.title}</div>
                    <div>{props.description}</div>

                    <div className="my-3">
                        <Link href={`blog-details/${props.id}`} className="text-blue-500">Read more...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
