import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <body>
        <NavBar />
        <div>About page</div>
      </body>
    </>
  );
};

export default Home;
