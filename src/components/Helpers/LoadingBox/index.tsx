import { BeatLoader } from "react-spinners";
interface IProps {
    Loading: boolean;
}
const LoadingBox = ({ Loading }: IProps) => {
    let display = "block";
    if (!Loading) {
        Loading = false;
        display = "none";
    }
    return (
        <div style={{ display:display, position: "fixed", zIndex: 9999, left: 0, top: 0, width: "100%", height: "100%", overflow: "auto", backgroundColor: `rgba(0, 0, 0, 0.1)` }}>
            <BeatLoader color="#AA8B56" margin={5} size={15} loading={Loading} cssOverride={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        </div>
    );
}

export default LoadingBox;