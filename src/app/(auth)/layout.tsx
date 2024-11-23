import { Link } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative  h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-3 lg:px-0">
      <div className="relative hidden flex-col justify-center bg-muted p-10 text-white lg:flex bg-zinc-900 dark:bg-gray-200 h-full">
        <div className="relative z-20 flex justify-center items-center w-fit">
          <div className="text-left dark:text-primary-foreground">
            <h1 className="flex justify-start items-center font-bold text-2xl pb-6">
              <Link className="mr-2 -mt-2" size={40} strokeWidth={3.5} />
              Assignmate
            </h1>
            <h2 className="text-5xl font-extrabold">
              Where great writers meet great opportunities.
            </h2>
            <p className="text-muted pt-5 font-light">
              AssignMate connects users with freelance writers for academic and
              professional tasks, offering secure payments, efficient task
              management, and a rating system for quality and transparency.
            </p>
          </div>
        </div>
      </div>
      <div className="lg-p-8 lg:col-span-2">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <ModeToggle float />
          {children}
        </div>
      </div>
    </div>
  );
}
