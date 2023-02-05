import { create } from 'zustand';
import { IMenu } from "@interfaces/MenusInterfaces/MenusInterfaces";

export interface IStore {
    MenuList: Array<IMenu>;
    ProfileMenuList: Array<IMenu>;
    setMenuList(payload: any): void;
    setProfileMenuList(payload: any): void;
}
const NavbarStore = create<IStore>((set: any, get: any) => ({
    MenuList: [],
    ProfileMenuList: [],
    setMenuList: (payload: any) => set((state: any) => ({ MenuList: payload })),
    setProfileMenuList: (payload: any) => set((state: any) => ({ ProfileMenuList: payload })),
}))
export default NavbarStore;