import NoSSR from "../components/NoSSR";
import { SnakeGame } from "../components/SnakeGame";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
});

const IndexPage = () => (
  <main className={roboto.className}>
    <NoSSR>
      <SnakeGame />
    </NoSSR>
  </main>
);

export default IndexPage;
