import { useEffect, useState } from "react";

const useFetchMealworm = (supabaseClient, user, stateToTriggeringEffect) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (supabaseClient && user) {
      const getData = async () => {
        const response = await supabaseClient
          .from("rack")
          .select("*, crate(*)")
          .eq("user_id", user.id)
          .abortSignal(AbortSignal.timeout(3000));
        setData(response.data);
      };
      getData();
    }
  }, [supabaseClient, user, stateToTriggeringEffect]);

  return { data };
};

export default useFetchMealworm;
