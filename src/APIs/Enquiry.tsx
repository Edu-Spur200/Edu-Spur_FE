import axios from "axios"

// const url : string = "https://edu-spur-be-3.onrender.com"   
const url: string = "http://localhost:3000"


export const makeEnquiry = (data: any) => {
    console.log(data);

     axios.post(`${url}/api/enquiries`, data).then((res: any) => {
        console.log(res);

        return res.data
    })

    // await axios.post("http://localhost:3000/api/enquiries", data, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });




}