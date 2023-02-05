"use client"
import SpinnerList from '@/components/Spinner/SpinnerList';
import { error } from 'console';
import { useContext, createContext, useMemo, useState } from 'react';
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
interface IContext {
    Spinners: Array<IWheel>;
    SetSpinners: any;
    SpinnerSelectedItem: any;
    SetSpinnerSelectedItem: any;
}
const FudSpinContext = createContext<IContext>({});
interface IFudSpinProvider {
    children: any;
}
export const FudSpinProvider = ({ children }: IFudSpinProvider) => {
    const [Spinners, SetSpinners] = useState<Array<IWheel>>([]);
    const [SpinnerSelectedItem, SetSpinnerSelectedItem] = useState<any>(null);
    return (
        <FudSpinContext.Provider value={{
            Spinners,
            SetSpinners,
            SpinnerSelectedItem,
            SetSpinnerSelectedItem
        }}>{children}
        </FudSpinContext.Provider>);
}
const UseFudSpinContext = () => {
    const context = useContext(FudSpinContext)
    return context;
}
export default UseFudSpinContext;