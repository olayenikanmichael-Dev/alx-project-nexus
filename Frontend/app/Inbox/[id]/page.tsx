"use client";

import CustomButton from "@/app/components/forms/CustomButton";


const ConversationDetails = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <h2 className="font-semibold">Conversation Details</h2>

        {/* Incoming message */}

        <div className="w-[80%] py-4 px-6 bg-gray-300 rounded-lg">
          <p className="font-bold text-gray-500">Oluwatunmise</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporib
          </p>
        </div>


        {/* Outgoing message */}
        <div className="w-[80%] ml-[20%] py-4 px-6 bg-gray-400 rounded-lg">
          <p className="font-bold text-blue-600">Pounds Michaels</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporib
          </p>
        </div>
      </div>

      {/* Message input */}
      <div className="mt-4 py-4 px-6 flex gap-3 border border-gray-300 rounded-xl">
        <input
          type="text"
          placeholder="Type your message here"
          className="w-full p-3 bg-gray-100 rounded-xl outline-none"
        />


<CustomButton  label="Send"
          onClick={() => console.log("clicked")}
          className="w-[100px]"

         />


        
      
      </div>
    </>
  );
};

export default ConversationDetails;
