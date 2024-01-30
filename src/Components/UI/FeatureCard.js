


const FeatureCard = (props) => {
    
    return (
            <div className="card shadow-xl" >
                <div className="card-body">
                    <div className="w-14 h-14 rounded-full bg-blue-500 text-white text-center flex justify-center items-center text-3xl mb-3">
                        <i className={props.icon}></i>
                    </div>

                    <div className="card-title">{props.title}</div>

                    <div>{props.description}</div>
                </div>
            </div>
    );
};

export default FeatureCard;