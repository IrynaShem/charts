import {
  Dynamics,
  ProgressWidgetProps,
} from "@/components/ProgressWidget/ProgressWidget";
import { Arrow } from "@/icons";
import { FC } from "react";
import styled from "styled-components";

const PeriodWrapper = styled.div<Dynamics>`
  color: ${(props) => (props.variant === "up" ? "#23A698" : "#FF708B")};
  display: flex;
  align-items: center;

  gap: 3px;

  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.44px;
`;

export const Period: FC<Pick<ProgressWidgetProps, "dynamics">> = ({
  dynamics,
}) => {
  if (!dynamics) return null;

  return (
    <PeriodWrapper {...dynamics}>
      <Arrow variant={dynamics.variant} />
      {dynamics.variant === "down" && "-"}10%
    </PeriodWrapper>
  );
};
