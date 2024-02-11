import styled from "styled-components";
import { CELL_SIZE } from "./config";

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  box-sizing: border-box;
  background-color: #dfdfdf;
`;

export const BoardContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

export const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
`;

export const Cell = styled.div`
  border: 0.25px solid #dfdfdf;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const FoodContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const getPositionOnBoard = (position: number) =>
  `${position * CELL_SIZE + 15}px`;

const snakeColor = "#5bbdbb";

export const Food = styled.div<{ x: number; y: number }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ebc67c;
  position: absolute;
  top: ${({ y }) => getPositionOnBoard(y)};
  left: ${({ x }) => getPositionOnBoard(x)};
`;

export const SnakeJoint = styled.div<{
  x: number;
  y: number;
  width: number;
  height: number;
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${snakeColor};
  position: absolute;
  top: ${({ y }) => getPositionOnBoard(y)};
  left: ${({ x }) => getPositionOnBoard(x)};
  border-radius: 20px;
  border: 10px solid ${snakeColor};
`;

export const SnakeHead = styled.div<{ x: number; y: number }>`
  width: 30px;
  height: 30px;
  background-color: ${snakeColor};
  position: absolute;
  top: ${({ y }) => `${y * CELL_SIZE + 10}px`};
  left: ${({ x }) => `${x * CELL_SIZE + 10}px`};
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  width: 300px;
  height: 500px;
  margin-right: 5em;
  & > * + * {
    margin-top: 1em;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  margin: 0;
`;

export const Score = styled.div`
  font-size: 1.5em;
`;

export const Instructions = styled.div`
  font-size: 1em;
`;

export const Status = styled.div`
  font-size: 1.5em;
  margin-top: 3em;
`;
