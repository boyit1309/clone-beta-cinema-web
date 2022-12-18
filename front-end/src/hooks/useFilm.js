import { useState } from "react";
import { getInfoFilm } from "../services/filmService";
import useNotify from "./useNotify";

const useFilm = () => {
  const notify = useNotify();
  const [infoFilm, setInfoFilm] = useState([]);
  const getInfoFilmInFilmPage = (payload = {}) => {
    getInfoFilm(
      payload,
      (res) => {
        setInfoFilm(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };

  return { infoFilm, getInfoFilmInFilmPage };
};

export default useFilm;