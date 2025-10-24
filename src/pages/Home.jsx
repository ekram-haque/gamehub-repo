import React from "react";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";

import Category from "../components/Category";

import TopGames from "../components/TopGames";
import Container from "../components/Container";

const Home = () => {
  return (
    <div className="pt-[50px]">
      <Container>
        <section>
          <Banner />
        </section>

        <section>
          <Category />
        </section>
        <section>
          <TopGames />
        </section>
      </Container>
      <section>
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
