import Link from "next/link";
import { createClient } from "@/utils/supabase/server.ts";
import { redirect } from "next/navigation";
import OtonomIcon from "@/components/Icons/OtonomIcon/index.tsx";
import LabelInput from "@/components/LabelInput/index.tsx";
import Button from "@/components/Button/index.tsx";

export const metadata = {
  title: "Login | Otonom",
};

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/modules/mealworm");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="w-full flex justify-center">
          <OtonomIcon fillColor={"#16a34a"} />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <LabelInput
            id="email"
            name="email"
            type="email"
            label="Email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
          <LabelInput
            id="password"
            name="password"
            type="password"
            label="Password"
            autoComplete="current-password"
            placeholder="••••••••"
            // pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}"
            title="Your password must contain at least 8 characters, including a letter, a number and a symbol."
            // minLength={8}
            required
          />

          <div>
            <Button label="Sign in" type="submit" formAction={signIn} />
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-red-600 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Sign up on our site
          </Link>
        </p>
      </div>
    </div>
  );
}
