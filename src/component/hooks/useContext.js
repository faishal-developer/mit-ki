import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useUser from "./useUser";

export const UserContext = React.createContext();
const CustomContext = ({children}) => {
    const [user, setUser] = useState([])
    const [page, setPage] = useState(1)
    const [type, setType] = useState('employee')
    // const {page,type} = useUser()

    useEffect(() => {
        setUser([])
        const url = `https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=${type}&?page=1&limit=5`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setUser(data)
            })
            .catch((e) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.message
                })
            })
    }, [type])

    return (
        <UserContext.Provider value={{user,setUser,page,setPage,type,setType}}>
           {children}
        </UserContext.Provider>
    )
};

export default CustomContext;