import PricingPlan from '../components/features/PricingPlan';

export const PricingPage = () => {
    const plans = [
        {
            title: 'Basic',
            price: '9.99',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
        },
        {
            title: 'Pro',
            price: '19.99',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
            title: 'Premium',
            price: '29.99',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                    <PricingPlan key={index} title={plan.title} price={plan.price} features={plan.features} />
                ))}
            </div>
        </div>
    );
};


