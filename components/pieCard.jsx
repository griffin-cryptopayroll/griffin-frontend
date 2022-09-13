import styled from "styled-components";

const StyledPieCard = styled.div`
  .statistics {
    min-width: 200px;
  }

  h1 {
    font-weight: 900;
  }

  .chart {
    height: 200px;
    min-width: 300px;
  }
  background: white;
  padding: 2rem 4rem;
  border-radius: 30px;
  box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px,
    rgb(0 0 0 / 30%) 0px 3px 7px -3px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  min-height: 300px;
  align-items: center;
  text-align: center;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  background-color: white;
`;

const PieCard = ({ pie, statistics, title }) => {
  return (
    <StyledPieCard>
      <div className="statistics">
        <h3>{title}</h3>
        <h1>{statistics}</h1>
      </div>
      <div className="chart">{pie}</div>
    </StyledPieCard>
  );
};

export default PieCard;
