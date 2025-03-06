

export type Message = {
    date: any;
    author?: string;
    message?: string;
    cleared?: boolean = false;
}

export type CalendarEvent = {
    title:string;
    start: Date;
    end: Date;
}

export type MessageTable = Record<number, Message[]>;