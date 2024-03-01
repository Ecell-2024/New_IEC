// import React from 'react'
import img from "../../assets/Home/KLA.jpg";
const Note = () => {
  return (
    <div className="text-center mt-[-80px] mb-[80px]">
      <h1 className="text-[#4D55BA] text-[48px]">{`Dean's Note`}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="left justify-around items-center rounded-3xl flex w-1/2 h-1/2 m-5">
          <img
            className="w-full h-[400px] object-cover rounded-3xl "
            src={img}
            alt="Kla"
            style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
          />
        </div>
        <div className="right w-1/2 mt-5 p-5 items-center text-center flex flex-col">
          <p className="mt-[100px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            doloremque eum error animi impedit, incidunt aperiam qui dolore
            quidem consequatur nesciunt soluta quisquam odit eos? Excepturi quod
            asperiores sequi harum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate ducimus accusantium ipsum illo vitae
            nobis alias pariatur sequi corporis! Fugiat eos ipsum quod totam
            eligendi numquam fuga libero cum voluptates.
          </p>
          <h3 className="mt-5">By KLA Khan</h3>
        </div>
      </div>
    </div>
  );
};

export default Note;
