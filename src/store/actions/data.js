import { LOAD_DATA } from "../types";
import axios from "configs/axios";

export const loadData = (url, data) => (dispatch) => {
  return axios.get(url, {
    headers : {
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      "x-rapidapi-key": "d6bc5e3546msheeb2ba7cb574ae8p1e0671jsnc9a4636d48a4",
      "useQueryString": true
    }
  }).then((response) => {
    dispatch({
      type: LOAD_DATA,
      payload: {
        [data]: response.data,
      },
    });
    return response.data;
  });
};