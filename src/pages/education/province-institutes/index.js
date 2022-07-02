import React from "react";
import styled from "styled-components";
import { ItemCarousel, Title } from "../../../components";
import Carousel from "antd/lib/carousel";
import { provinceInstitutes } from "../../../data-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const ProvinceInstitutes = () => {
  return (
    <Container>
      <div className="wrapper-title">
        <Title>Institutos de Provincia</Title>
      </div>
      <Carousel
        autoplay
        arrows
        prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
        nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
      >
        {provinceInstitutes.map((provinceInstitute, index) => (
          <ItemCarousel
            key={index}
            image={provinceInstitute.image}
            title1={provinceInstitute.title1}
            title2={provinceInstitute.title2}
            title3={provinceInstitute.title3}
            socialLinks={provinceInstitute.socialLinks}
            buttonUrl={provinceInstitute.buttonUrl}
          />
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  .wrapper-title {
    margin: 1rem auto;
  }
`;
