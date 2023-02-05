"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { removeCookies } from '@utils/storageHash.utils'
const Logout = () => {
    const navigate = useRouter();
    useEffect(() => {
        removeCookies("auth")
        navigate.push("/");
    }, [navigate]); // Added the navigate dependency to the effect hook so that it will be re-run if the navigate function changes. 
    return (
        <>
        </>
    )
}
export default Logout;