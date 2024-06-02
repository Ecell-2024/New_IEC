import img from "../../assets/upstart_logo.png";
import Card from "./card/Card"
const StartUp= ()=>{
    return(
        <div className="">
            <h1 className="text-[#012060] !font-medium !text-4xl lg:!text-5xl  text-center m-4 my-10">Our StartUps</h1>
            <div className="flex flex-col items-center  flex-wrap lg:flex-row justify-center align-middle gap-8">
            <Card image={img}/>
            <Card image={img}/>
            <Card image={img}/>
            <Card image={img}/>
            <Card image={img}/>
            <Card image={img}/>
            <Card image={img}/>
            <Card image={img}/>
            </div>
        </div>
    )
}

export default StartUp;