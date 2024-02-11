import { INITIAL_SNAKE, NUM_CELLS } from "./config";

export const generateFood = (snake: number[][] = INITIAL_SNAKE) => {
  const snakePositions = snake.map(
    (bodyPart) => bodyPart[0] * 10 + bodyPart[1]
  );
  const possiblePositions = Array(NUM_CELLS)
    .fill(null)
    .map((_, i) => i)
    .filter((i) => !snakePositions.includes(i));
  const foodPosition =
    possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
  return [Math.floor(foodPosition / 10), foodPosition % 10];
};

export const calculateSnakeJoint = (snake: number[][], i: number) => {
  const start = snake[i];
  const end = snake[i + 1] || snake[i];
  const xDistance = Math.abs(start[0] - end[0]);
  const yDistance = Math.abs(start[1] - end[1]);
  return {
    x: Math.min(start[0], end[0]),
    y: Math.min(start[1], end[1]),
    width: Math.max(xDistance * 50, 1),
    height: Math.max(yDistance * 50, 1),
  };
};
