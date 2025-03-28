import styled from "styled-components";

export function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <FeatureCardStyled>
        <h2>{title}</h2>
        <div>{description}</div>
      </FeatureCardStyled>
    </>
  );
}
const FeatureCardStyled = styled.div`
  width: 270px;
  height: 80px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
