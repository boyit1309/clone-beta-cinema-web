import { useState } from "react";
import { getInfoUser } from "../services/userService";
import { getUserByToken, loginRequest } from "../services/authService";
import useNotify from "./useNotify";
import { saveUserInfo } from "../utils/storage";
import { setIsLogin } from "../redux/slices/appSlice";
import { useDispatch } from "react-redux";

const useUsers = () => {
  const dispatch = useDispatch();
  const notify = useNotify();
  const [infoUser, setInfoUser] = useState([]);

  const getInfoUsersInMultiPage = (payload = {}) => {
    getInfoUser(
      payload,
      (res) => {
        setInfoUser(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };

  const getToken = (payload = {}) => {
    loginRequest(
      payload,
      (res) => {
        localStorage.setItem("_token", res.data.token);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };
  const getUserInfo = (payload = {}) => {
    getUserByToken(
      payload,
      (res) => {
        saveUserInfo(
          res.data.username,
          res.data.email,
          res.data.phoneNumber,
          res.data.id
        );
        dispatch(setIsLogin(true));
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };
  return {
    infoUser,
    getInfoUsersInMultiPage,
    getToken,
    getUserInfo,
  };
};

export default useUsers;
