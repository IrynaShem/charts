import { Card } from "@/components/Card";
import {
  CrookedArrowDown,
  CrookedArrowUp,
  GeographyIcon,
  OpenIcon,
  SelectorIcon,
  StatusIcon,
} from "@/icons";
import { FC, Fragment } from "react";
import styled, { css } from "styled-components";

export interface TableCardProps {}

const tableData = [
  {
    id: "1",
    status: "success",
    description:
      "Review process with Makkah Amanah to improve their Regulation enforcement rate",
    owner: "Enforcement Team",
    impactedKpi: {
      name: "Regulation enforcement rate",
      value: 10,
    },
    impactedSubKpi: {
      name: "Regulation clause",
      value: 10,
    },
    impactedVsStep: "Plan / Detect",
    geography: "Riyadh",
  },
  {
    id: "2",
    status: "rejected",
    description:
      "Identify the root-cause of the lack of visibility for the sub-KPI Number of visits in the segment for the Jeddah Amanah",
    owner: "DTSC",
    impactedKpi: {
      name: "Coverage ratio",
      value: 18,
    },
    impactedSubKpi: {
      name: "Number of visits",
      value: 9,
    },
    impactedVsStep: "Detect / Process",
    geography: "Jeddah",
  },
  {
    id: "3",
    status: "warning",
    description:
      "Address the decrease in collection conversion rate sub-KPI for the Dammam Amanah",
    owner: "Licensing Team",
    impactedKpi: {
      name: "Resolution ratio",
      value: 23,
    },
    impactedSubKpi: {
      name: "Resolution ratio",
      value: 15,
    },
    impactedVsStep: "Resolve",
    geography: "Dammam",
  },
  {
    id: "4",
    status: "success",
    description:
      "Review process with Makkah Amanah to improve their Regulation enforcement rate",
    owner: "Enforcement Team",
    impactedKpi: {
      name: "Regulation enforcement rate​",
      value: 10,
    },
    impactedSubKpi: {
      name: "Regulation clause​​",
      value: 10,
    },
    impactedVsStep: "Plan / Detect",
    geography: "Riyadh",
  },
  {
    id: "5",
    status: "rejected",
    description:
      "Identify the root-cause of the lack of visibility for the sub-KPI Number of visits in the segment for the Jeddah Amanah",
    owner: "DTSC",
    impactedKpi: {
      name: "Coverae ratio",
      value: 18,
    },
    impactedSubKpi: {
      name: "Number of visits",
      value: 9,
    },
    impactedVsStep: "Detect / Process",
    geography: "Jeddah",
  },
];

const TableHead = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  border-bottom: 1px solid black;
  padding: 12px 0;
`;

const Table = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* or 133% */

  letter-spacing: 0.4px;

  color: #383874;

  border-bottom: 1px solid #dbdff1;
  padding: 12px 0;

  flex: 1;

  display: grid;
  grid-template-columns: 3fr repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 0;

  & div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  & div:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  & div:nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }
  & div:nth-child(4) {
    grid-area: 1 / 4 / 2 / 5;
  }
  & div:nth-child(5) {
    grid-area: 1 / 5 / 2 / 6;
  }
  & div:nth-child(6) {
    grid-area: 1 / 6 / 2 / 7;
  }
`;

const Wrapper = styled.div`
  flex: 1;
`;

const Text = styled.span<{ inline?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  ${(props) =>
    props.inline &&
    css`
      flex-direction: column;
      align-items: start;
    `}
`;

const Percentage = styled.span<{ status: "up" | "down" }>`
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${(props) =>
    props.status === "up" ? "#31CF801A" : "#FF708B1A"};
  color: ${(props) => (props.status === "up" ? "#23A698" : "#FF708B")};
`;

const ShowMoreBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  margin-top: 12px;
  cursor: pointer;
`;

export const TableCard: FC<TableCardProps> = (props) => {
  return (
    <Card>
      <Wrapper>
        <Table>
          <Text>Description</Text>
          <Text>
            Owner <SelectorIcon />
          </Text>
          <Text>
            Impacted KPI <SelectorIcon />
          </Text>
          <Text>
            Impacted Sub-KPI <SelectorIcon />
          </Text>
          <Text>
            Impacted VC step <SelectorIcon />
          </Text>
          <Text>
            Geography <SelectorIcon />
          </Text>
        </Table>
        {tableData.map((el) => (
          <Table key={el.id}>
            <Text>
              <StatusIcon status={el.status} />
              {el.description}
            </Text>
            <Text>{el.owner}</Text>
            <Text inline={true}>
              {el.impactedKpi.name}
              <br />
              <Percentage status={"down"}>
                <CrookedArrowDown />
                {el.impactedKpi.value}
              </Percentage>
            </Text>
            <Text inline={true}>
              {el.impactedSubKpi.name}
              <br />
              <Percentage status={"up"}>
                <CrookedArrowUp />
                {el.impactedSubKpi.value}
              </Percentage>
            </Text>
            <Text>{el.impactedVsStep}</Text>
            <Text>
              <GeographyIcon />
              {el.geography}
            </Text>
          </Table>
        ))}
        <ShowMoreBtn>
          <OpenIcon />
        </ShowMoreBtn>
      </Wrapper>
    </Card>
  );
};
