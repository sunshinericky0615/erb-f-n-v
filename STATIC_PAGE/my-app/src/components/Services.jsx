import Title from "./Title";
import Service from "./Service";
import { services } from "../../data.js";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="services-center">
        {services.map((service) => {
          return (
            <Service
              icon={service.icon}
              title={service.title}
              text={service.text}
              key={service.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
