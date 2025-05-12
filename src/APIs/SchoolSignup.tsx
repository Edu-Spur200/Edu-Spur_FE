import axios from "axios"

const url : string = "https://edu-spur-be-3.onrender.com"


export const registerTeacher = async (data : any) => {
    await axios.post(`${url}/api/teachers` , data).then((res: any) => {
        return res.data
    })
}