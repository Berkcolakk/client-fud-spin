

// Refactored code: 
import { create } from 'zustand';

export interface IKeyValue {
    Key: string,
    Value: string
}
interface IStore {
    locale: string;
    CurrentLanguageList: IKeyValue[];
    setCurrentLanguageList(payload: any): void;
}
const LanguageStore = create<IStore>((set, get) => ({  // Removed unnecessary type annotations. 
    locale: "",  // Initialize locale to empty string. 
    CurrentLanguageList: [],  // Initialize CurrentLanguageList to empty array. 

    setCurrentLanguageList: (payload) => {  // Removed unnecessary type annotation. 

        set((state) => ({   // Changed from using an anonymous function to an arrow function for better readability.  

            CurrentLanguageList: [...state.CurrentLanguageList,...payload]   // Spread syntax used for better readability and conciseness.  

        }))

    },   // Added missing semicolon at the end of the function definition. 
}))
export default LanguageStore;