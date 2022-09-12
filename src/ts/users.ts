export type UserAddressGeolocationType = {
  lat: string;
  long: string;
};

export type UserAddressType = {
  city: string;
  street: string;
  number: number | string;
  zipcode: string;
  geolocation: UserAddressGeolocationType;
};
export type UserNameType = {
  firstname: string;
  lastname: string;
};

export type UserType = {
  address: UserAddressType;
  email: string;
  username: string;
  password?: string;
  name: UserNameType;
  phone: string;
};

export type UserDelete = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  id: number;
};
