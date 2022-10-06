import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "antd/lib/collapse";

export const DrawerShow = ({ icon, title, content }) => {
  const { Panel } = Collapse;
  return (
    <Container>
      <Panel
        className="site-collapse-custom-panel"
        header={
          <div className="content-drawer">
            <div className="item-left">
              <div className="box-icon">
                <FontAwesomeIcon className="item-icon" icon={icon} />
              </div>
            </div>
            <div className="box-text">
              <h3>{title}</h3>
            </div>
          </div>
        }
      >
        {content}
      </Panel>
    </Container>
  );
};

const Container = styled(Collapse)`
  .content-drawer {
    color: #000;
    display: grid;
    grid-template-columns: 13% 1fr;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    .box-icon {
      width: 2.5rem;
      height: 2.5rem;
      background: ${({ theme }) => theme.colors.dark};
      text-align: center;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .item-icon {
        color: #fff;
        font-size: 1.2em;
      }
    }
    .box-text {
      display: flex;
      justify-content: start;
      align-items: center;
      h3 {
        color: ${({ theme }) => theme.colors.dark};
        margin: 0;
      }
    }
  }
`;
