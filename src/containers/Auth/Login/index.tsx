import AuthLogin from "@component/Auth/Login";
import MainTemplate from "@component/Auth/MainTemplate";

const LoginContainer = () => {
    return (
        <>
            <MainTemplate>
                <AuthLogin />
            </MainTemplate>
        </>
    )
}
export default LoginContainer;