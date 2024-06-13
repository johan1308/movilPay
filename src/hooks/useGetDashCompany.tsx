import { DashboardAsyncThunks } from "../store/dashboard/thunks";

export const getDashCompany = async (params?: any) => {
  params.group_by = "year,month,day,payment_method_id";
  const { status, data } = await DashboardAsyncThunks(params);
  if (status == 200) {
    return data;
  }
};
