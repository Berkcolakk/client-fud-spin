export interface ILoginDTO {
    UserName: string;
    Password: string;
}
export interface IUser {
    Name: string;
    Surname: string;
    Email: string;
    PhoneNumber: string;
    Password: string;
    Gender: number;
    DateOfBirth: string;
}
export interface IRegisterDTO {
    Name: string;
    Surname: string;
    UserEmail: string;
    PhoneNumber: string;
    UserPassword: string;
    Gender: number;
    DateOfBirth: string;
}