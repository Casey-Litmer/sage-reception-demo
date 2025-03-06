

export type Message = {
    date: any;
    author?: string;
    message?: string;
    cleared?: boolean = false;
}



export type MessageTable = Record<number, Message[]>;