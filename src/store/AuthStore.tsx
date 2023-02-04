import { create } from 'zustand';
export interface IStore {
    Name: string;
    Surname: string;
    Email: string;
    PhoneNumber: string;
    Password: string;
    Gender: number;
    DateOfBirth: string;
    setName(payload: string): void;
    setSurname(payload: string): void;
    setEmail(payload: string): void;
    setPhoneNumber(payload: string): void;
    setPassword(payload: string): void;
    setDateOfBirth(payload: string): void;
    setGender(payload: number): void;
}
const AuthStore = create<IStore>((set: any, get: any) => ({
    Name: "",
    Surname: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    Gender: 1,
    DateOfBirth: "",
    setName: (payload: string) => set((state: string) => ({ Name: payload })),
    setSurname: (payload: string) => set((state: string) => ({ Surname: payload })),
    setEmail: (payload: string) => set((state: string) => ({ Email: payload })),
    setPhoneNumber: (payload: string) => set((state: string) => ({ PhoneNumber: payload })),
    setPassword: (payload: string) => set((state: string) => ({ Password: payload })),
    setDateOfBirth: (payload: string) => set((state: number) => ({ DateOfBirth: payload })),
    setGender: (payload: number) => set((state: number) => ({ Gender: payload }))
}))
export default AuthStore;