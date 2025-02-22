import { SerializableNotification } from "@/entities/notification/types";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";

 export const NotificationsList: React.FC = () => {
  const [notifications, setNotifications] = useState<SerializableNotification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/notifications.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const { data } = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const parsedData = data as SerializableNotification[];

        parsedData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setNotifications(parsedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
        setLoading(false);
      });
  }, []);


  if (loading) return <div>Loading...</div>;


  return (
    <section>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.title}>
            <strong>{notif.title}</strong> - {notif.message}
          </li>
        ))}
      </ul>
    </section>
  );
};
