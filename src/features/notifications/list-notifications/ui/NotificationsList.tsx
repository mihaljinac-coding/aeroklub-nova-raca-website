import { SerializableNotification } from "@/entities/notification/types";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const NotificationsList: React.FC = () => {
  const [notifications, setNotifications] = useState<SerializableNotification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("data/notifications.csv")
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
    <div className=" pb-12 px-4 md:px-24 w-full">
      {loading ? (
        <p>Učitavanje...</p>
      ) : notifications.length === 0 ? (
        <p>Nema obavijesti.</p>
      ) : (
        <Carousel  
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="w-full"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="px-4"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
          {notifications.map((notif, idx) => (
            <div
              key={notif.id || idx}
              className="flex flex-col gap-4 md:h-[230px] h-auto w-full bg-white rounded-2xl shadow p-4"
            >
              <h3 className="text-2xl font-light">{notif.title}</h3>
              <hr className="border border-black border-opacity-20"></hr>
              <p className="text-base font-light text-dark-blue">{notif.message}</p>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
