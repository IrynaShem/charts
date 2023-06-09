import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  background: #ffffff;
  opacity: 0.9;

  /* Widget shadow */
  box-shadow: 0 100px 80px rgba(108, 73, 172, 0.07),
    0 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198),
    0 22.3363px 17.869px rgba(108, 73, 172, 0.0417275),
    0 12.5216px 10.0172px rgba(108, 73, 172, 0.035),
    0 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725),
    0 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802);
  border-radius: 10px;
`;
