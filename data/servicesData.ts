// data/servicesData.ts
export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    details: string;  // Additional info for the popup page
  }
  
  export const services: Service[] = [
    {
      id: 'consultation',
      title: 'Consultation',
      description: 'In-depth discussions to understand your vision and create a personalized design plan.',
      image: '/consultation.jpg',
      details: 'Detailed info about Consultation. You can elaborate on your process, timeline, pricing, etc.',
    },
    {
      id: 'space-planning',
      title: 'Space Planning',
      description: 'Strategic planning to optimize your space’s functionality and aesthetic appeal.',
      image: '/spaceplanning.jpg',
      details: 'Detailed info about Space Planning. Provide more background, approach, and examples.',
    },
    {
      id: 'bespoke-design',
      title: 'Bespoke Design',
      description: 'Custom design solutions crafted to reflect your personal style and lifestyle.',
      image: '/bespoke.jpg',
      details: 'Detailed info about Bespoke Design. Discuss your unique approach, custom materials, etc.',
    },
  ];
  