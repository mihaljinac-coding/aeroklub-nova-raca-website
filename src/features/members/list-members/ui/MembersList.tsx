import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Member } from "@/entities/memeber/types";

 export const MembersList: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/members.csv")
      .then((response) => response.text())
      .then((csvText) => {

        const { data } = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const parsedData = data as Member[];

        parsedData.sort(
          (a, b) => b.id - a.id
        );

        setMembers(parsedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
        setLoading(false);
      });
  }, []);


  if (loading) return <div>Loading...</div>;


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-7 pb-7 px-4 md:px-24">
    {members.map((member, idx) => (
      <div
        key={member.id || idx}
        className="bg-white rounded-2xl shadow-md p-4 h-[131px] flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <h3 className="text-lg font-semibold text-dark-blue">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.role}</p>
      </div>
    ))}
  </div>
  );
};
