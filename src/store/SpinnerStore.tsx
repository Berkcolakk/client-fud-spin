import { create } from 'zustand'
import { getAllSpinnerData } from '@services/index';
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
export interface IStore {
    WheelItems: IWheel[];
    SelectedItem: any;
    WheelName: string;
    setSelectedItem(payload: any): void;
    updateItems(payload: any): void;
    setWheelName(payload: any): void;
}
/*
This code creates a store using the Zustand library. The store contains the following properties: 
- WheelItems: an array of Wheel objects
- SelectedItem: any selected item 
- WheelName: a string representing the name of the wheel 
- setSelectedItem(payload): a function to set the SelectedItem property with a given payload 
- updateItems(payload): a function to update the WheelItems property with a given payload 
- setWheelName(payload): a function to set the WheelName property with a given payload 
- fetchWheels(): an async function that fetches all spinner data from an external service and sets it as the value for WheelItems. 
The store is then exported as useStore.
*/
const SpinnerStore = create<IStore>((set: any, get: any) => ({
    WheelItems: [],
    WheelName: "",
    setWheelName: (payload: any) => set((state: any) => ({ WheelName: payload })),
    SelectedItem: null,
    setSelectedItem: (payload: any) => set((state: any) => ({ SelectedItem: payload })),
    updateItems: (payload: any) => set((state: any) => ({ WheelItems: payload }))
}))
export default SpinnerStore;