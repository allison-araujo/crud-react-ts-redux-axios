export type UserAddressGeolocationType = {
  lat: string;
  long: string;
};

export type UserAddressType = {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: UserAddressGeolocationType;
};
export type UserNameType = {
  firstname: string;
  lastname: string;
};

export type PropsUser = {
  address: UserAddressType;
  id: number;
  email: string;
  username: string;
  password: string;
  name: UserNameType;
  phone: string;
};

export type UserType = {
  email: string;
  username: string;
  password: string;
  id: number;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  number: string;
  zipcode: string;
  lat: string;
  long: string;
  phone: string;
};

export type ArrayUser = {
  user: [];
};
