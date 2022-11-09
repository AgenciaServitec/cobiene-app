import React from "react";
import { useNavigate, useParams } from "react-router";
import { Button, InitialContent } from "../../../../components/public";

export const ServiceType = () => {
  const { typeService } = useParams();
  const navigate = useNavigate();

  const listServices = [
    {
      type: "restaurants",
      title: "Restaurantes",
      buttons: [
        {
          title: "Cebillano",
          // url: `/conventions/multi-service/${typeService}/cebillano`,
        },
        { title: "Cevicheria", url: "" },
        {
          title: "Chifa",
          url: `/conventions/multi-service/${typeService}/chifa`,
        },
        {
          title: "Comida peruana",
          url: `/conventions/multi-service/${typeService}/peruvianFood`,
        },
      ],
    },
    {
      type: "hotels",
      title: "Hoteles",
      buttons: [],
    },
  ];

  const serviceType = listServices.filter(
    (service) => service.type === typeService
  );

  return (
    <>
      {serviceType.map((service, index) => (
        <div key={index}>
          <InitialContent title={service.title} />
          {service.buttons.map((button, index) => (
            <Button
              key={index}
              width="100%"
              onClick={() =>
                navigate(button.url ? button.url : "/page-default")
              }
            >
              {button.title}
            </Button>
          ))}
        </div>
      ))}
    </>
  );
};
