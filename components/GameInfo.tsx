import { NUM_FOOD } from "./config";
import { InfoContainer, Title, Score, Instructions, Status } from "./styles";

interface IGameInfoProps {
  didWin: boolean;
  foodCount: number;
}

export const GameInfo = ({ foodCount, didWin }: IGameInfoProps) => {
  return (
    <InfoContainer>
      <Title>Simple Snake</Title>
      <Score>
        Score: {NUM_FOOD - foodCount} out of {NUM_FOOD}
      </Score>
      <Instructions>
        All you have to do is eat all the food without bumping into the edges
      </Instructions>
      <Status>
        {didWin
          ? "Yay, you ate them all!"
          : didWin === false
          ? "Oh no, you bumped into the edge"
          : ""}
      </Status>
    </InfoContainer>
  );
};
