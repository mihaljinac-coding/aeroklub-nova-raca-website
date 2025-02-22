export interface Notification {
    title: string;
    message: string;
    date: Date;
}

export interface SerializableNotification extends Omit<Notification, "date"> {
    date: string;
}
  