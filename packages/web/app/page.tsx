"use client";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data: users, error } = await supabase.from("users").select("*");

      if (error) {
        console.log("Error fetching data: ", error);
      } else {
        setData(users);
      }
    }

    fetchData();
  }, []);
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello from Next.js and Supabase!
      </h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </main>
  );
}
