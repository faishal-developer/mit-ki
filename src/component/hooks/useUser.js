import { useContext } from "react";
import { UserContext } from "./useContext";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const useUser = () => {
    const {setType,setPage,user,setUser} = useContext(UserContext)
    let navigate = useNavigate()

    const displayArray = (p,u) => {
        if (p === 1) return u?.slice(0, 5)
        const initial = ((p - 1) * 5)
        const last = (u?.length > p * 5) ? p * 5 : u?.length;
        return u?.slice(initial, last)
    }

    const handleAdOrEm = (v) => {
        setType(v)
        setPage(1)
        displayArray()
    }

    const pageHandler = (v) => {
         setPage(v)
        displayArray();
    }

    const updateUser=(fuser)=>{
        const url = `https://60f2479f6d44f300177885e6.mockapi.io/users/${fuser.id}`
        console.log(fuser,url);
        fetch(url, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(fuser)
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire(
                'successfull',
                'User updated',
                'success'
            )
            const newUsers = [...user]
            let newUser = newUsers.find((v)=>v.id===fuser.id)
            newUser.first_name = fuser.first_name
            newUser.last_name = fuser.last_name
            newUser.id = fuser.id
            newUser.division = fuser.division
            newUser.district = fuser.district
            setUser(newUsers)
            navigate('/')
        })
        .catch(e=>{
            Swal.fire(
                'Error',
                e.message,
                'error'
            )
        })

    }

    const addUser=(fuser)=>{
        const url = ` https://60f2479f6d44f300177885e6.mockapi.io/users`
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(fuser)
        })
        .then(res=>res.json())
        .then(data=>{
            const newUsers = [...user];
            newUsers.push(fuser)
            setUser(newUsers)
            Swal.fire(
                'successfull',
                'new user added',
                'success'
            )
            const heighestPage = Math.ceil((user.length+1) / 5)
            setPage(heighestPage)
        })
        .catch(e=>{
            Swal.fire(
                'error',
                e.message,
                'error'
            )
        })

    }

    return {
        addUser,
        updateUser,
        handleAdOrEm,
        pageHandler,
        displayArray,
    }

};

export default useUser;