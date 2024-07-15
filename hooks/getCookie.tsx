import { env } from "process";
export const baseFetch = async (
    input: string | URL | globalThis.Request,
    init?: RequestInit,
  ) => {
    return fetch(input, {
      ...init,
      headers: init?.headers
        ? {
            ...init.headers,
            Authorization: `Bearer ${getCookie()}`,
          }
        : { Authorization: `Bearer ${getCookie()}` },
    }).then((res) => res.json());
  };
  
  export function getCookie() {
    console.log(process.env.NEXT_PUBLIC_TOKEN);
    return process.env.NEXT_PUBLIC_TOKEN;
  }
  