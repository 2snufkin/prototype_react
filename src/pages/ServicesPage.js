import Service from '../components/features/Service';
import {useTitle} from "../hooks/useTitle";

export const ServicesPage = ({title}) => {
    useTitle(title)
    const services = [
        {
            title: 'Web Development',
            description: 'we build fast and responsive web applications using the latest technologies.',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14.268a5.998 5.998 0 01-3.783 2.244c-1.127.148-2.28.073-3.35-.198-1.777-.454-3.243-1.92-3.697-3.697a5.996 5.996 0 01-.197-3.349 6.001 6.001 0 012.243-3.783M12 2c3.313 0 6 2.687 6 6 0 2.658-1.75 4.904-4.166 5.658-.316.084-.654.138-1 .162M4.166 13.66C5.75 12.905 7 10.658 7 8c0-3.313 2.687-6 6-6s6 2.687 6 6c0 2.658-1.75 4.904-4.166 5.658-.316.084-.654.138-1 .162M16 12c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zM8 14c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
                />
            ),
        },
        {
            title: 'Mobile App Development',
            description: 'we create mobile apps for both Android and iOS platforms to reach a broader audience.',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM12 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm-8 9v5a2 2 0 002 2h14a2 2 0 002-2v-5M4 19h16"
                />
            ),
        },
        {
            title: 'UI/UX Design',
            description: 'our designers create stunning user interfaces and user experiences for your products.',
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 20l9 2-9-18-9 18 9-2zm0 0v-8"
                />
            ),
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Service
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
