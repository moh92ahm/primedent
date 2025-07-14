import React from 'react';
import Link from 'next/link';

type serviceItem = {
  title: string;
  description: string;
  link: string;
};

type ServicesSectionProps = {
  heading: string;
  subheading: string;
  services: serviceItem[];
  viewAllLink: string;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({
  heading,
  subheading,
  services,
  viewAllLink,
}) => (
  <div className="max-w-screen-xl mx-auto px-6 text-center my-20">
    <p className="text-lg text-brand-primary mb-4">{subheading}</p>
    <h2 className="text-4xl font-heading text-brand-primary font-bold mb-10">{heading}</h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {services.map(({ title, description, link }) => (
        <section key={title}
        className="p-6 transition-all border border-brand-primary/30 hover:bg-brand-primary group">
          <h4 className="font-bold font-heading text-2xl text-brand-primary group-hover:text-brand-background mb-2">{title}</h4>
          <p className="text-sm mb-3 text-brand-white group-hover:text-brand-background">{description}</p>
          <Link className="underline font-bold font-heading text-lg group-hover:text-brand-background" href={link} >Read more</Link>
        </section>
      ))}
    </div>

    <Link className="inline-block bg-brand-primary text-brand-background font-heading font-bold text-lg py-2 px-6"
    href={viewAllLink}> View All Services </Link>
  </div>

);

export default ServicesSection;




