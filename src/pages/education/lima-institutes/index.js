import React from "react";
import styled from "styled-components";
import { ItemCarousel, Title } from "../../../components";
import Carousel from "antd/lib/carousel";
import { limaInstitutes } from "../../../data-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const LimaInstitutes = () => {
  return (
    <Container>
      <div className="wrapper-title">
        <Title>Institutos de Lima</Title>
      </div>
      <Carousel
        autoplay
        arrows
        prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}
        nextArrow={<FontAwesomeIcon icon={faChevronRight} />}
      >
        {limaInstitutes.map((limaInstitute, index) => (
          <ItemCarousel
            key={index}
            image={limaInstitute.image}
            title1={limaInstitute.title1}
            title2={limaInstitute.title2}
            title3={limaInstitute.title3}
            socialLinks={limaInstitute.socialLinks}
            buttonUrl={limaInstitute.buttonUrl}
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
