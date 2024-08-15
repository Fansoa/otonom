"use client";

import { getMealworms } from "@/services/mealworm/index.ts";
import { useEffect, useState } from "react";

const useFetchMealworm = ({ supabaseClient, user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (supabaseClient && user) {
      getMealworms({ supabaseClient, userId: user.id }).then((res) => {
        if (res.error) {
          console.error(res.error);
        }
        if (res.data) {
          console.log(res.data);
          setData(res.data);
        }
      });
    }
  }, [supabaseClient, user]);

  return { data, setData };
};

export default useFetchMealworm;
