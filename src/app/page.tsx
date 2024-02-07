"use client"

import { useState, useEffect } from "react";
import { usernames, messages, colors } from "./misc/sampleData";
import { Message } from "./misc/types";
import { randomColor, generateMessage } from "./misc/utils";

export default function Home() {
  const [allMessages, setAllMessages] = useState<Message[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
     let newMessages = [];
     let chatUsers: any = [];

     usernames.forEach((username: string) => {
      chatUsers.push({username, color: randomColor(colors)});
     });

     for(let i = 0; i <= 400; i++) {
        let index = Math.floor(Math.random() * chatUsers.length);
        const user = chatUsers[index];
        const text = generateMessage(messages);

        newMessages.push({user, text});
     }

     setAllMessages(newMessages);
     setIsLoading(false)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      { isLoading ? <h1 className="text-3xl">Loading messages, please wait...</h1> : <div className="flex flex-col items-start justify-center text-sm p-3 gap-2">
      {
        allMessages?.map((msg: Message, idx: number) => {
          return (<p key={idx}>
            <span className={`${msg.user.color} font-bold`}>{msg.user.username}</span>: <span>{msg.text}</span>
          </p>)
        })
      }
      </div>}
    </main>
  );
}
