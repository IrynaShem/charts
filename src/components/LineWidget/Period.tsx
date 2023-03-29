import { LineWidgetProps } from "@/components/LineWidget/LineWidget";
import { CrookedArrowDown, CrookedArrowUp } from "@/icons";
import { FC } from "react";
import styled from "styled-components";

const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Text = styled.span`
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #383874;
  mix-blend-mode: normal;
  opacity: 0.6;
  inline-size: max-content;
`;

export const Period: FC<Pick<LineWidgetProps, "dynamic">> = ({ dynamic }) => {
  return (
    <PeriodWrapper>
      {dynamic.variant === "up" ? <CrookedArrowUp /> : <CrookedArrowDown />}

      <Text>Last {dynamic.period}</Text>
    </PeriodWrapper>
  );
};
