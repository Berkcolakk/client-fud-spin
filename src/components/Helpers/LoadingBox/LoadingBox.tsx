import { BeatLoader } from "react-spinners";

const LoadingBox = () => {
    return (
        <BeatLoader color="#AA8B56" margin={5} size={15} loading={true} cssOverride={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
    );
}

export default LoadingBox;