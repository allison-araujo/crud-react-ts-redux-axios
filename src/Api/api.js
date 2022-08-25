import axios from "axios";

class User {
  constructor() {
    this.BASE_URL = "https://fakestoreapi.com";
  }

  onError = error => {
    const {
      response: { data },
    } = error;

    return data.error.message;
  };

  async listUsers() {
    console.log("estou em list User");
    try {
      const res = await axios.get(
        `${this.BASE_URL}/users`,
        this.axiosRequest()
      );
      const json = res.data;
      console.log("retorno pai", json);
      return json;
    } catch {
      return this.onError;
    }
  }
  async addUsers() {
    try {
      const res = await axios.get(
        `${this.BASE_URL}/users`,
        this.axiosRequest()
      );
      const json = res.data;

      return json;
    } catch {
      return this.onError;
    }
  }

  async updateUser(id) {
    try {
      const res = await axios.get(
        `${this.BASE_URL}/users${id}`,
        this.axiosRequest()
      );
      const json = res.data;

      return json;
    } catch {
      return this.onError;
    }
  }

  async deleteUser(id) {
    try {
      const res = await axios.get(
        `${this.BASE_URL}/users${id}`,
        this.axiosRequest()
      );
      const json = res.data;

      return json;
    } catch {
      return this.onError;
    }
  }

  axiosRequest() {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
}

export default User;
