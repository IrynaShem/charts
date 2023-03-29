import { Card } from "@/components/Card";
import { ProgressChart, ProgressChartProps } from "@/components/ProgressChart";
import { Period } from "@/components/ProgressWidget/Period";
import { FC } from "react";
import styled from "styled-components";

export interface Dynamics {
  variant: "up" | "down";
  percentage: number;
}

export interface ProgressWidgetProps extends ProgressChartProps {
  name: string;
  period: string;
  dynamics?: Dynamics;
}

const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-left: 16px;
`;

const WidgetName = styled.span`
  font-family: "Poppins", serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.44px;
  color: #383874;
`;

const PeriodText = styled.span`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #383874;
  mix-blend-mode: normal;
  opacity: 0.6;
`;

export const ProgressWidget: FC<ProgressWidgetProps> = ({
  dynamics,
  name,
  period,
  ...chartProps
}) => {
  return (
    <>
      <Card>
        <ProgressChart {...chartProps} />
        <RightContentContainer>
          <WidgetName>{name}</WidgetName>
          <PeriodText>({period})</PeriodText>
          {dynamics && <Period dynamics={dynamics} />}
        </RightContentContainer>
      </Card>
    </>
  );
};
