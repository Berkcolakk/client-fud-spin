import { getUser } from "@utils/getUser.utils";
interface IApi {
  Url: string;
  Body: any;
  Method: string;
}

const api = async ({ Url, Body, Method }: IApi) => {
  debugger;
  const { authUser } = getUser();
  return await fetch(`${process.env.NEXT_PUBLIC_HOST}${Url}`, {
    cache: "no-store",
    method: Method,
    body: Body,
    headers: {
      Autorization: authUser,
    },
  });
};
const realApi = async ({ Url, Body, Method }: IApi) => {
  console.log(Body);
  return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}${Url}`, {
    cache: "no-store",
    method: Method,
    body: Body,
    headers: {
      "Content-Type": "application/json",
      Autorization: "ASDASFAZAMAZQVQVZAYRAZ.",
    },
  });
};
export { api, realApi };
