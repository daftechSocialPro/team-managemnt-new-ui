import { useEffect } from "react";
import { logout } from "api/authApi";
import { useNavigate } from "react-router-dom";
function Logout() {

    const navigate = useNavigate()
    useEffect(() => {
        const response = logout()
        if (response) {
            navigate("/")
        }
    }, [])
    return
    <>
    </>
}

export default Logout;