

export type Message = {
    date: Date;          //Date of service
    messageTime: Date;   //Date of message
    author: string;       
    phoneNumber: string; 
    message: string;
    cleared: boolean;
    timeToRespond: number;
}

export type CalendarEvent = {
    title:string;
    start: Date;
    end: Date;
}

//Message status hashed by id
export type MessageRecord = Record<number, MessageStatus>;

export type MessageStatus = {
    message: Message;
    responded: boolean;
    onCalendar: boolean;
    remainingTime: number;
}