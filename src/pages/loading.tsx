import { ProgressSpinner } from "primereact/progressspinner";

const Loading = () => {
  <ProgressSpinner
    style={{ width: "50px", height: "50" }}
    strokeWidth="8"
    fill="transparent"
    animationDuration=".5s"
  />;
};
export default Loading;
