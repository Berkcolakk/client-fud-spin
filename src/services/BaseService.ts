interface IApi {
    Url: string;
    Body: any;
    Method: string;
}

const api = async ({ Url, Body, Method }: IApi) => {
    return await fetch(`${process.env.NEXT_PUBLIC_HOST}${Url}`, {
        cache: 'no-store',
        method: Method,
        body: Body
    });

}
export default api;