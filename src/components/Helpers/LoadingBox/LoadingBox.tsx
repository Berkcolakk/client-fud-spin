import { BeatLoader } from "react-spinners";
interface IProps {
    isLoading: boolean;
}
export const LoadingBox = ({ isLoading }: IProps) => {
    return (
        <BeatLoader color="#AA8B56" margin={5} size={15} loading={isLoading} cssOverride={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
    );
}
