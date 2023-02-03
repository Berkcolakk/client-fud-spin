import { create } from 'zustand';
import { Store } from '@types/UserTypes';

const AuthStore = create<Store>((set: any, get: any) => ({
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