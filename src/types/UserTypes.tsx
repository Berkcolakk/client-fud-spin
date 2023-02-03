export interface User {
    Name: string;
    Surname: string;
    Email: string;
    PhoneNumber: string;
    Password: string;
    Gender: number;
    DateOfBirth: string;
}
export interface Store {
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