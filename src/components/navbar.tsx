import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { ModeToggle } from "@/components/mode-toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const Navbar = () => {
  return (
    <header className="z-10 supports-backdrop-blur:bg-background/60 sticky top-0 w-full shadow dark:shadow-secondary bg-background/95 backdrop-blur">
      <SidebarInset>
        <div className="flex h-14 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex-1"></div>
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <div>
                    <ClerkLoading>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </ClerkLoading>
                    <ClerkLoaded>
                      <UserButton afterSignOutUrl="/sign-in" />
                    </ClerkLoaded>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">Profile</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </SidebarInset>
    </header>
  );
};

export default Navbar;
