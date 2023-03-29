import { LineWidget } from "@/components/LineWidget";
import { ProgressWidget } from "@/components/ProgressWidget/ProgressWidget";
import { FC } from "react";
import styled from "styled-components";

export interface RateCardGridProps {}

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

export const RateCardGrid: FC<RateCardGridProps> = (props) => {
  return (
    <Wrapper>
      <ProgressWidgetsWrapper>
        <ProgressWidgetWrapper>
          <ProgressWidget
            name={"Current state"}
            dynamics={{
              variant: "up",
              percentage: 10,
            }}
            period={"1 week"}
            progress={50}
          />
        </ProgressWidgetWrapper>

        <ProgressWidgetWrapper>
          <ProgressWidget
            name={"Current state"}
            dynamics={{
              variant: "up",
              percentage: 10,
            }}
            period={"1 week"}
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
            borderColor: "#416BFF",
          },
          {
            data: [30, 37, 39, 32, 34, 31, 39],
            borderColor: "#23A698",
          },
        ]}
      />
    </Wrapper>
  );
};
