const PricingPlan = ({ title, price, features }) => {
    return (
        <div className="max-w-md bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="text-4xl font-bold mb-4">${price}</div>
            <ul className="text-gray-600">
                {features.map((feature) => (
                    <li key={title} className="py-1">
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">
                Select Plan
            </button>
        </div>
    );
};

export default PricingPlan;
