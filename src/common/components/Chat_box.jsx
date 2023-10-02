import Image from "next/image";
import React from "react";

const Chat_box = () => {
  return (
    <div>
      <h1>Chat_box</h1>
      <div className="w-full">
        <Image
          className="w-full"
          src="/website_screenshots/chat_feild.png"
          alt="Next.js"
          width={600}
          height={160}
        />
      </div>
    </div>
  );
};

export default Chat_box;
