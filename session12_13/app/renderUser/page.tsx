"use client";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
