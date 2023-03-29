import { RateCardGrid } from "@/components/RateCardGrid/RateCardGrid";
import { Title } from "@/components/Title";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
`;

const TitleWrapper = styled(Title)`
  margin-bottom: 20px;
`;

const Index = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <TitleWrapper>Regulation enforcement rate</TitleWrapper>
          <RateCardGrid />
        </div>
        <div>
          <TitleWrapper>Coverage rate</TitleWrapper>
          <RateCardGrid />
        </div>
        <div>
          <TitleWrapper>Resolution rate</TitleWrapper>
          <RateCardGrid />
        </div>
      </Wrapper>
    </div>
  );
};

export default Index;
