import axios from "axios";

const upload=async (file)=>{
  const data =new FormData();
  data.append("file",file);
  data.append("upload_preset","Freelance");
  try{
    // const res=await axios.post("https://api.cloudinary.com/v1_1/bilal/image/upload",data);
    // console.log(res.data);
    console.log("clouddd !!!")
     const res=await axios.post("https://api.cloudinary.com/v1_1/dexg5juap/image/upload",data);

    // const res=await axios.post(process.env.CLOUDINARY_URL, data);

  const {url}=res.data;
  return url;

  }catch(err){
    console.log(err);
  }
}

export default upload;