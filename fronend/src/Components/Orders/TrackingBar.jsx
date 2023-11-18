/* eslint-disable react/prop-types */
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

const TrackingBar = (props) => {
  return (
    <div>
      <div className="w-full border-b-2 p-2 grid grid-cols-4 gap-1 ">
        <div className="text-center">
          {props.status >= 1 ? (
            <AiFillCheckCircle className="inline-block w-full text-violet-500 text-2xl mx-1 mt-4" />
          ) : (
            <AiOutlineCheckCircle className="inline-block w-full text-violet-500 text-2xl mx-1 mt-4" />
          )}
          Order Created
        </div>
        <div className=" text-center text">
          {props.status >= 2 ? (
            <AiFillCheckCircle className="inline-block w-full text-violet-500 text-2xl mx-1 mt-4" />
          ) : (
            <AiOutlineCheckCircle className="inline-block w-full text-violet-500 text-2xl mx-1 mt-4" />
          )}{" "}
          Order Shifted
        </div>
        <div className=" text-center">
          {props.status >= 3 ? (
            <AiFillCheckCircle className="inline-block w-full text-violet-500 text-2xl mx-1 mt-4" />
          ) : (
            <AiOutlineCheckCircle className="inline-block w-full text-violet-500 text-2xl mx-1 mt-4" />
          )}{" "}
          Out of Delivery
        </div>
        <div className=" text-center">
          {props.status >= 4 ? (
            <AiFillCheckCircle className="inline-block w-full text-violet-500 text-2xl mx-1 mt-4" />
          ) : (
            <AiOutlineCheckCircle className="inline-block w-full text-violet-500 text-2xl mx-1 mt-4" />
          )}{" "}
          Delivered
        </div>
      </div>
    </div>
  );
};

export default TrackingBar;
