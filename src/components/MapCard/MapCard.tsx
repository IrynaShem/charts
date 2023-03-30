import { MapImage } from "@/icons";
import { FC } from "react";
import styled from "styled-components";

export interface MapProps {}

const Wrapper = styled.div`
  background: #eef1fa;

  box-shadow: 0 100px 80px rgba(108, 73, 172, 0.07),
    0 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198),
    0 22.3363px 17.869px rgba(108, 73, 172, 0.0417275),
    0 12.5216px 10.0172px rgba(108, 73, 172, 0.035),
    0 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725),
    0 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802);
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
`;

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 16px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
`;

const TopButtonWrapper = styled.div`
  margin-left: auto;
`;

const PagButtonWrapper = styled.div`
  & button:nth-child(1) {
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  & button:nth-child(2) {
    border-top-right-radius: unset;
    border-top-left-radius: unset;
  }
`;

const SelectArrowWrapper = styled.span`
  transform: rotate(90deg);
`;

export const MapCard: FC<MapProps> = (props) => {
  return (
    <Wrapper>
      <TopButtonWrapper>
        <SelectButton>
          Choose the main KPI <SelectArrowWrapper>&#10151;</SelectArrowWrapper>
        </SelectButton>
      </TopButtonWrapper>

      <MapImage />

      <PagButtonWrapper>
        <SelectButton>&#10009;</SelectButton>
        <SelectButton>&#9866;</SelectButton>
      </PagButtonWrapper>
    </Wrapper>
  );
};
