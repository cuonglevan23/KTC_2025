export interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  gender: 'male' | 'female' | 'other' | '';
  dateOfBirth: string;
  country: string;
  hobbies: string[];
  profilePicture: File | null;
  bio: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phoneNumber?: string;
  gender?: string;
  dateOfBirth?: string;
  country?: string;
  hobbies?: string;
  profilePicture?: string;
  bio?: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface Hobby {
  id: string;
  label: string;
}
