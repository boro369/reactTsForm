export enum Gender {
    male = 'Male',
    female = 'Female'
}

export default interface UserType {
    name: string;
    email: string;
    password: string;
    gender: typeof Gender | undefined;
    country?: string;
    acceptTermsAndConditions?: boolean;
}