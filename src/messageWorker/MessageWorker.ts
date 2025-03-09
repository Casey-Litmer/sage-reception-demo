/// <reference lib="webworker" />

declare const self: DedicatedWorkerGlobalScope;

import { Message } from "../types";
import { getRandomDate, getRandomName, getRandomPhoneNumber, getRandomTime, madlib } from "./Madlibs";

//===============================================================================
let isRunning = false;

self.onmessage = (e) => {
    if (e.data.start) {
        fetchMessage();
        isRunning = true;
    };
    if (e.data.stop) {
        isRunning = false;
    };   
};

//===============================================================================
/* Set a random interval, send a message, and restart */
const fetchMessage = () => {
    setTimeout(() => {
        if (isRunning){
            sendMessage();
            fetchMessage();
        };
    }, Math.random() * 25000 + 18000);
};

const sendMessage = () => {
    const name = getRandomName();
    const date = getRandomDate();
    const phoneNumber = getRandomPhoneNumber();
    const transcript = madlib(name, date);
    const timeToRespond = getRandomTime(1/3);

    const message = {
        author: name,
        date: date,
        messageTime: new Date(),
        phoneNumber: phoneNumber,
        message: transcript,
        cleared: false,
        timeToRespond: timeToRespond
    } as Message;

    self.postMessage({message});
};