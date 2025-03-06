/// <reference lib="webworker" />

declare const self: DedicatedWorkerGlobalScope;

import { Message } from "../types";
import { getRandomDate, getRandomName, getRandomPhoneNumber, madlib } from "./Madlibs";


self.onmessage = (_) => {
    const name = getRandomName();
    const date = getRandomDate();
    const phoneNumber = getRandomPhoneNumber();
    const transcript = madlib(name, date);
    
    const message = {
        author: name,
        date: date,
        messageTime: new Date(),
        phoneNumber: phoneNumber,
        message: transcript,
        cleared: false
    } as Message;

    console.log('message processed', message)

    self.postMessage({message});
};