import {
  BestSeller,
  Header,
  Services,
  Categories,
  NewsLetter,
} from "../components";
import Latests from "../components/latests/Latests";

function Home() {
  return (
    <div>
      <Header />
      <Latests />
      <BestSeller />
      <Services />
      <NewsLetter />
      <Categories />
    </div>
  );
}

export default Home;
