// Refactored code:
import { getUser } from "@/utils/getUser.utils";
import {
  getAllSpinnerDataEndpoint,
  spinnerLogEndpoint,
} from "@utils/apiCostant.utils";
import { fakeApi } from "@services/BaseService";

export const getAllSpinnerData = async () => {
  try {
    return await (
      await fakeApi({
        Url: getAllSpinnerDataEndpoint,
        Body: null,
        Method: "GET",
      })
    ).json();
  } catch (error) {
    console.error(error);
  }
};

export const spinnerLog = async (obj: any) => {
  // Changed the name of the function to be more descriptive
  try {
    return await (
      await fakeApi({
        Url: spinnerLogEndpoint,
        Body: JSON.stringify(obj),
        Method: "POST",
      })
    ).json();
  } catch (error) {
    console.error(error);
  }
};
