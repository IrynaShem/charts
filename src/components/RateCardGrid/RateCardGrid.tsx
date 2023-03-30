import { LineWidget } from "@/components/LineWidget";
import { ProgressChartColor } from "@/components/ProgressChart";
import {
  Dynamics,
  ProgressWidget,
} from "@/components/ProgressWidget/ProgressWidget";
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProgressWidgetWrapper = styled.div`
  width: 50%;
`;

const ProgressWidgetsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export interface RateCardGridProps {
  colors: [ProgressChartColor, ProgressChartColor, string, string];
  dynamics: Dynamics;
}

export const RateCardGrid: FC<RateCardGridProps> = ({ colors, dynamics }) => {
  return (
    <Wrapper>
      <ProgressWidgetsWrapper>
        <ProgressWidgetWrapper>
          <ProgressWidget
            color={colors[0]}
            name={"Current state"}
            dynamics={dynamics}
            period={"1 Week"}
            progress={50}
          />
        </ProgressWidgetWrapper>

        <ProgressWidgetWrapper>
          <ProgressWidget
            color={colors[1]}
            name={"Target state"}
            period={"6 Moths"}
            progress={50}
          />
        </ProgressWidgetWrapper>
      </ProgressWidgetsWrapper>
      <LineWidget
        name={"Trend"}
        dynamic={{
          variant: "down",
          period: "6 Months",
        }}
        datasets={[
          {
            data: [33, 35, 37, 39, 30, 35, 37],
            borderColor: colors[2],
          },
          {
            data: [30, 37, 39, 32, 34, 31, 39],
            borderColor: colors[3],
          },
        ]}
      />
    </Wrapper>
  );
};
