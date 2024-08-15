import { createClient } from "@/utils/supabase/client.ts";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [supabaseClient, setSupabaseClient] = useState<SupabaseClient | null>(
    null,
  );
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    const getUser = async () => {
      const supabase = createClient();
      setSupabaseClient(supabase);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

      if (!user) {
        return router.push("/login");
      }
    };
    getUser();
  }, []);

  return { user, supabaseClient };
};

export default useAuth;
