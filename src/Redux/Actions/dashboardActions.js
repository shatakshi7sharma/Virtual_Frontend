import { LIST_DATA_INIT } from "../ActionTypes/dashboardActionTypes";

export const ListData = (obj) => {
    return { type: LIST_DATA_INIT, payload: obj };
};
  