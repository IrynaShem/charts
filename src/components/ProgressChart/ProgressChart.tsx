import { FC } from "react";
import ProgressBar from "react-customizable-progressbar";
import styled from "styled-components";

enum ColorVariant {
  blue = "#416BFF",
  green = "#23A698",
  pink = "#FA6298",
  yellow = "#FFBA69",
}

type ProgressChartColor = "blue" | "green" | "pink" | "yellow";

export interface ProgressChartProps {
  progress: number;
  color?: ProgressChartColor;
}

const ProgressBarWrapper = styled.div`
  position: relative;
`;

const TextWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: #383874;
`;

const Percentage = styled.span`
  font-size: 34px;
`;

const Percent = styled.span`
  font-size: 16px;
  margin-bottom: auto;
`;

export const ProgressChart: FC<ProgressChartProps> = ({
  progress,
  color = "blue",
}) => {
  return (
    <ProgressBarWrapper>
      <ProgressBar
        radius={40}
        progress={progress}
        trackStrokeWidth={3}
        strokeWidth={6}
        strokeColor={ColorVariant[color]}
      >
        <TextWrapper>
          <Percentage>{progress}</Percentage>
          <Percent>%</Percent>
        </TextWrapper>
      </ProgressBar>
    </ProgressBarWrapper>
  );
};
