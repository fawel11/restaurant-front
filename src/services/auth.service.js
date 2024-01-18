import axios from "axios";

class AuthService {
  login(loginObj) {
    return axios
      .post("auth/login", {
        email: loginObj.email,
        password: loginObj.pass,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
        }
        localStorage.setItem("user", JSON.stringify(response.data.user));

        console.log(response.data);

        return response.data.user;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  }
}

export default new AuthService();
