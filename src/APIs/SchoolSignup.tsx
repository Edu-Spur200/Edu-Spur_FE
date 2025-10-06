    import axios from "axios"

    const url : string = "https://edu-spur-be-3.onrender.com"
    
    // const url : string = "http://localhost:3000"


    export const registerTeacher = async (data : any) => {
        await axios.post(`${url}/api/teachers` , data).then((res: any) => {
            return res.data
        })
    }

    export const registerSchool = async (data : any) => {
        await axios.post(`${url}/api/schools` , data).then((res: any) => {
            return res.data
        })
    }

    export const registerParent = async (data : any) => {
        await axios.post(`${url}/api/parents` , data).then((res: any) => {
            return res.data
        })
    }   