import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";
import { useState, useEffect } from "react";

const Home = ({ coins }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <CoinSearch coins={coins} />
          <Trending />
        </div>
      )}
    </div>
  );
};

export default Home;
