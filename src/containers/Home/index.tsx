import SpinnerAdd from "@component/Spinner/SpinnerAdd";
import SpinnerWheel from "@component/Spinner/SpinnerWheel";
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';

interface IProps {
    Wheels: Array<IWheel>
}
const HomeContainer = ({ Wheels }: IProps) => {
    return (
        <>
            <div className="container mx-auto flex-auto 2xl:flex xl:flex lg:flex md:flex sm:block items-center justify-center">
                <SpinnerAdd />
                <SpinnerWheel Wheels={Wheels} />
            </div>
        </>
    )
}
export default HomeContainer;