import type { LoaderArgs, ActionFunction } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node"; // or cloudflare/deno

export const action: ActionFunction = async ({ request }: LoaderArgs) => {
    if (request.method.toLocaleLowerCase() === "post") {
        const reader = request.body?.getReader();
        const data = await reader?.read()
        const bodyJSON = new TextDecoder().decode(data?.value)
        return JSON.parse(bodyJSON);
    }
}