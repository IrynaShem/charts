import { Card } from "@/components/Card";
import { LineChart, LineChartProps } from "@/components/LineChart";
import { Period } from "@/components/LineWidget/Period";
import { FC } from "react";
import styled from "styled-components";

export interface Dynamic {
  variant: "up" | "down";
  period: string;
}

export interface LineWidgetProps extends LineChartProps {
  name: string;
  dynamic: Dynamic;
}

const LeftSideContent = styled.div`
  margin-right: 40px;
`;

const WidgetName = styled.p`
  margin: 0 0 6px;
  padding: 0;

  font-family: "Poppins", serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.44px;
  color: #383874;
`;

export const LineWidget: FC<LineWidgetProps> = ({
  name,
  dynamic,
  ...lineChartProps
}) => {
  return (
    <Card>
      <LeftSideContent>
        <WidgetName>{name}</WidgetName>
        <Period dynamic={dynamic} />
      </LeftSideContent>

      <LineChart {...lineChartProps} />
    </Card>
  );
};
