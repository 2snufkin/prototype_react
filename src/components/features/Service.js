const Service = ({ title, description, icon }) => {
    return (
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icon}
                </svg>
            </div>
            <div className="ml-3">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};
export default Service

