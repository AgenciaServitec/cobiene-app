import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const MenuList = () => {
  return (
    <Container className="item-menu">
      <div className="box-icon">
        <FontAwesomeIcon className="item-icon" icon={faBars} />
      </div>
      <div className="box-text">INICIO</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  .box-icon {
    width: 2.5rem;
    height: 2.5rem;
    background: #1b1b1b;
    text-align: center;
    border-radius: 50%;
    .item-icon {
      color: #fff;
      font-size: 0.8em;
    }
    .box-text {
      font-size: 1.1rem;
    }
  }
`;
