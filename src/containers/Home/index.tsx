"use client"
import SpinnerAdd from "@component/Spinner/SpinnerAdd";
import SpinnerWheel from "@component/Spinner/SpinnerWheel";
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
import UseFudSpinContext from "@/context/appContext";
import { useEffect } from "react";
import TestSpinner from "@/components/Spinner/TestSpinner";
const HomeContainer = () => {
    return (
        <>
            <div className="container mx-auto flex-auto 2xl:flex xl:flex lg:flex md:flex sm:block items-center justify-center p-4 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                <SpinnerAdd />
                <SpinnerWheel />
            </div>
        </>
    )
}
export default HomeContainer;