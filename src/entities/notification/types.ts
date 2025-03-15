export interface Notification {
    id: string;
    title: string;
    message: string;
    date: Date;
}

export interface SerializableNotification extends Omit<Notification, "date"> {
    date: string;
}
  