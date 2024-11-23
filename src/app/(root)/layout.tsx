import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    redirect("sign-in");
  }

  redirect("admin");

  return <>{children}</>;
}
