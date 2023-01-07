import { useState } from "react";

import {
  getInfoAllScheduleService,
  getInfoScheduleService,
} from "../services/scheduleService";
import useNotify from "./useNotify";

const useSchedule = () => {
  const notify = useNotify();
  const [infoAllSchedule, setInfoAllSchedule] = useState([]);
  const [infoSchedule, setInfoSchedule] = useState([]);
  const getInfoAllSchedule = (payload = {}) => {
    getInfoAllScheduleService(
      payload,
      (res) => {
        setInfoAllSchedule(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };
  const getInfoSchedule = (payload = {}) => {
    getInfoScheduleService(
      payload,
      (res) => {
        setInfoSchedule(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };

  return { infoAllSchedule, getInfoAllSchedule, infoSchedule, getInfoSchedule };
};

export default useSchedule;
