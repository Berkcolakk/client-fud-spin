"use client"
import SpinnerAdd from "@component/Spinner/SpinnerAdd";
import SpinnerWheel from "@component/Spinner/SpinnerWheel";
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
import UseFudSpinContext from "@/context/appContext";
interface IProps {
    Wheels: Array<IWheel>
}
const HomeContainer = ({ Wheels }: Array<IWheel>) => {
    const { Spinners, SetSpinners } = UseFudSpinContext();
    SetSpinners(Wheels)
    return (
        <>
            <div className="container mx-auto flex-auto 2xl:flex xl:flex lg:flex md:flex sm:block items-center justify-center">
                <SpinnerAdd />
                <SpinnerWheel />
            </div>
        </>
    )
}
export default HomeContainer;