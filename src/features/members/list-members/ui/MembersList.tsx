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
    <section>
      <h2>Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </section>
  );
};
