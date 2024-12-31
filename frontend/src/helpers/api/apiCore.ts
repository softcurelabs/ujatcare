import axios, { AxiosHeaders, AxiosRequestConfig, AxiosRequestHeaders } from "axios";

import config from "../../config";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

const axiosInstance = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': "application/json",
    'Accept': "application/json",
  }
});

// intercepting to capture errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message: String = "";

    if (error && error.response && error.response.status === 404) {
      window.location.href = "/not-found";
    } else if (error && error.response && error.response.status === 403) {
      window.location.href = "/access-denied";
    } else {
      switch (error.response.status) {
        case 401:
            return Promise.reject(error.response.data)
        case 403:
          message = "Access Forbidden";
          break;
        case 404:
          message = "Sorry! the data you are looking for could not be found";
          break;
        case 422:
          return Promise.reject(error.response.data);
      }
      return Promise.reject(message);
    }
  },
);

const AUTH_SESSION_KEY = "ujatcare_user";

/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: string | null) => {
  if (token) axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
  else delete axiosInstance.defaults.headers.common["Authorization"];
};

const getUserFromCookie = () => {
  const user = sessionStorage.getItem(AUTH_SESSION_KEY);
  return user ? (typeof user == "object" ? user : JSON.parse(user)) : null;
};
class APICore {
  /**
   * Fetches data from given url
   */
  get = (url: string, params: any) => {
    let response;
    if (params) {
      var queryString = params
        ? Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&")
        : "";
      response = axiosInstance.get(`${url}?${queryString}`, params);
    } else {
      response = axiosInstance.get(`${url}`, params);
    }
    return response;
  };

  getFile = (url: string, params: any) => {
    let response;
    if (params) {
      var queryString = params
        ? Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&")
        : "";
      response = axiosInstance.get(`${url}?${queryString}`, { responseType: "blob" });
    } else {
      response = axiosInstance.get(`${url}`, { responseType: "blob" });
    }
    return response;
  };

  getMultiple = (urls: string, params: any) => {
    const reqs = [];
    let queryString = "";
    if (params) {
      queryString = params
        ? Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&")
        : "";
    }

    for (const url of urls) {
      reqs.push(axiosInstance.get(`${url}?${queryString}`));
    }
    return axios.all(reqs);
  };

  /**
   * post given data to url
   */
  create = (url: string, data: any) => {
    return axiosInstance.post(url, data);
  };

  /**
   * Updates patch data
   */
  updatePatch = (url: string, data: any) => {
    return axiosInstance.patch(url, data);
  };

  /**
   * Updates data
   */
  update = (url: string, data: any) => {
    return axiosInstance.put(url, data);
  };

  /**
   * Deletes data
   */
  delete = (url: string) => {
    return axiosInstance.delete(url);
  };

  /**
   * post given data to url with file
   */
  createWithFile = (url: string, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      if (data[k] instanceof Array) {
        for (const file in data[k]) {
          formData.append(k + "[]", data[k][file]);
        }
      } else {
        formData.append(k, data[k]);
      }
    }

    const config = {
      headers: new AxiosHeaders({
        "Content-Type": "multipart/form-data",
      }) 
    };
    return axiosInstance.post(url, formData, config);
  };

  /**
   * post given data to url with file
   */
  updateWithFile = (url: string, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      if (data[k] instanceof Array) {
        for (const file in data[k]) {
          formData.append(k + "[]", data[k][file]);
        }
      } else {
        formData.append(k, data[k]);
      }
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return axiosInstance.patch(url, formData, config);
  };

  isUserAuthenticated = () => {
    const user = this.getLoggedInUser();

    if (!user) {
      return false;
    }
    return true;
    // const decoded: any = jwtDecode(user.token);
    // const currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //   console.warn("access token expired");
    //   return false;
    // } else {
    //   return true;
    // }
  };

  setLoggedInUser = (session: any) => {
    if (session)
      sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    else {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    }
  };
  /**
   * Returns the logged in user
   */
  getLoggedInUser = () => {
    return getUserFromCookie();
  };

  setUserInSession = (modifiedUser: any) => {
    let userInfo = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (userInfo) {
      const { accessToken, user } = JSON.parse(userInfo);
      this.setLoggedInUser({ accessToken, ...user, ...modifiedUser });
    }
  };
}

/*
Check if token available in session
*/
let user = getUserFromCookie();
if (user) {
  const { accessToken } = user;
  if (accessToken) {
    setAuthorization(accessToken);
  }
}

export { APICore, setAuthorization };
