import React from "react";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import useGames from "../hooks/usegames";
import Category from "../components/Category";
import Container from "../components/container";
import TopGames from "../components/TopGames";

const Home = () => {
  const { games } = useGames();
  console.log(games);
  return (
    <div>
      <Container>
        <section>
          <Banner />
        </section>

        <section>
          <Category />
        </section>
        <section>
            <TopGames/>
        </section>
      </Container>
      <section>
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
