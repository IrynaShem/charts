import { MapCard } from "@/components/MapCard";
import { RateCardGrid } from "@/components/RateCardGrid/RateCardGrid";
import { TableCard } from "@/components/TableCard";
import { Title } from "@/components/Title";
import styled from "styled-components";

const ChartsWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;

  & div {
    flex: 1;
  }
`;

const PriorityRecWrapper = styled.div`
  margin-top: 40px;
`;

const PriorityRecContent = styled.div`
  display: flex;
  gap: 20px;
`;

const TitleWrapper = styled(Title)`
  margin-bottom: 20px;
`;

const Index = () => {
  return (
    <div>
      <ChartsWrapper>
        <div>
          <TitleWrapper>Regulation enforcement rate</TitleWrapper>
          <RateCardGrid
            colors={["blue", "green", "#416BFF", "#23A698"]}
            dynamics={{
              variant: "up",
              percentage: 10,
            }}
          />
        </div>
        <div>
          <TitleWrapper>Coverage rate</TitleWrapper>
          <RateCardGrid
            colors={["pink", "green", "#FF708B", "#23A698"]}
            dynamics={{
              variant: "down",
              percentage: 10,
            }}
          />
        </div>
        <div>
          <TitleWrapper>Resolution rate</TitleWrapper>
          <RateCardGrid
            colors={["yellow", "green", "#FFBA69", "#23A698"]}
            dynamics={{
              variant: "up",
              percentage: 10,
            }}
          />
        </div>
      </ChartsWrapper>
      <PriorityRecWrapper>
        <TitleWrapper>Priority Recommendations</TitleWrapper>
        <PriorityRecContent>
          <MapCard />
          <TableCard />
        </PriorityRecContent>
      </PriorityRecWrapper>
    </div>
  );
};

export default Index;
