"use client";

import { getRackList } from "@/services/mealworm/index.ts";
import { useEffect, useState } from "react";

const useRackList = ({ supabaseClient, user }) => {
  const [rackList, setRackList] = useState(null);

  useEffect(() => {
    if (supabaseClient && user) {
      getRackList({ supabaseClient, userId: user.id }).then((res) => {
        if (res.error) {
          console.error(res.error);
        }
        if (res.data) {
          console.log(res.data);
          setRackList(res.data);
        }
      });
    }
  }, [supabaseClient, user]);

  return { rackList, setRackList };
};

export default useRackList;
