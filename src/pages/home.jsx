import { Header } from "../components/Header";
import { CreatorsList } from "../components/CreatorsList";
import { Footer } from "../components/Footer";
// import { listOfCreators } from "../lists/Creators";

export const Home = () => {
  return (
    <>
      <Header />
      <CreatorsList/>
      <Footer />
    </>
  );
};
