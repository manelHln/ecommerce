import PulseLoader from "react-spinners/PulseLoader";
import "./loader.css"

const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <PulseLoader loading={loading} color="#007aff" />
    </div>
  );
};

export default Loader
