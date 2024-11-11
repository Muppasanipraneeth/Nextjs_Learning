import axios from "axios";

const getData=async()=>{
    const response=await axios.get("http://localhost:3000/api/user");
    return response.data;
}



export default async function Home(){
    const data=await getData();
    return (<div>
        <div>
            name:{data?.name}
        </div>
        <div>            email:{data?.email}
</div>
    </div>)
} 