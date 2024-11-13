import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="border-none shadow-none">
      <SignIn />
    </div>
  );
}
