import { useCallback, useEffect, useState } from "react";
import { INITIAL_SNAKE, NUM_FOOD, DIRECTIONS } from "./config";
import { calculateSnakeJoint, generateFood } from "./utils";
import {
  Page,
  BoardContainer,
  Board,
  Cell,
  FoodContainer,
  Food,
  SnakeJoint,
  SnakeHead,
} from "./styles";
import { GameInfo } from "./GameInfo";
import { TStatus } from "./types";

export const SnakeGame = () => {
  const [food, setFood] = useState(generateFood());
  const [foodCount, setFoodCount] = useState(NUM_FOOD);
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [nextPosition, setNextPosition] = useState(INITIAL_SNAKE[0]);
  const [didWin, setDidWin] = useState<boolean | null>(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setDidWin(null);

      setNextPosition((prev) => [
        prev[0] + DIRECTIONS[e.keyCode][0],
        prev[1] + DIRECTIONS[e.keyCode][1],
      ]);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const resetBoard = useCallback(() => {
    setSnake([[0, 0]]);
    setNextPosition([0, 0]);
    setFood(generateFood());
    setFoodCount(NUM_FOOD);
  }, []);

  const isGameOver = useCallback(() => {
    if (
      nextPosition[0] < 0 ||
      nextPosition[0] > 9 ||
      nextPosition[1] < 0 ||
      nextPosition[1] > 9
    ) {
      setDidWin(false);
      resetBoard();
      return true;
    }
    return false;
  }, [nextPosition]);

  useEffect(() => {
    if (foodCount < 1) {
      setDidWin(true);
      resetBoard();
    } else {
      setFood(generateFood(snake));
    }
  }, [foodCount]);

  useEffect(() => {
    if (isGameOver()) return;

    if (nextPosition[0] === food[0] && nextPosition[1] === food[1]) {
      setFoodCount(foodCount - 1);
      setSnake([nextPosition, ...snake]);
    } else {
      setSnake([nextPosition, ...snake.slice(0, -1)]);
    }
  }, [nextPosition]);

  return (
    <Page>
      <GameInfo foodCount={foodCount} didWin={didWin} />
      <BoardContainer>
        <Board>
          {Array(100)
            .fill(null)
            .map((_, i) => (
              <Cell key={`'cell${i}`}></Cell>
            ))}
        </Board>
        <FoodContainer>
          {food && <Food x={food[0]} y={food[1]}></Food>}
          <SnakeHead x={snake[0][0]} y={snake[0][1]} />
          {snake.map((_, i) => (
            <SnakeJoint
              key={`snake${i}`}
              {...calculateSnakeJoint(snake, i)}
            ></SnakeJoint>
          ))}
        </FoodContainer>
      </BoardContainer>
    </Page>
  );
};
