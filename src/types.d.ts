

export type Message = {
    date: Date;          //Date of service
    messageTime: Date;   //Date of message
    author: string;       
    phoneNumber: string; 
    message: string;
    cleared?: boolean = false;
}

export type CalendarEvent = {
    title:string;
    start: Date;
    end: Date;
}

//Message lists hashed by date (number)
export type MessageTable = Record<number, Message[]>;

//Message status hashed by id
export type MessageRecord = Record<number, MessageStatus>;

export type MessageStatus = {
    message: Message;
    responded: boolean;
    onCalendar: boolean;
}