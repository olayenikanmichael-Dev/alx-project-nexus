"use client";
import CustomButton from "../../forms/CustomButton";

const ConversationDetails = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 bg-gray-300">
          <p className="font-bold text-gray-500">Oluwatunmise</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="w-[80%] ml-[30%] py-4 px-6 bg-gray-300">
          <p className="font-bold text-blue-500">Pounds Michaels</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="mt-4 py-4 px-6 flex border border-gray-300 rounded-xl">
        <input
          type="text"
          placeholder="Type your message here"
          className="w-full p-3 bg-gray-100 rounded-xl outline-none"
        />

        <CustomButton
          label="send"
          onClick={() => console.log("clicked")}
          className="w-[100px]"
        />
      </div>
    </>
  );
};

export default ConversationDetails;
