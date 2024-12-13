"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  House,
  NotebookPen,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";

// Data for Home and Workstation dashboards
const dashboardsData = {
  Home: {
    navMain: [
      {
        title: "Overview",
        url: "#",
        icon: BookOpen,
        isActive: true,
        items: [
          { title: "Summary", url: "#" },
          { title: "Reports", url: "#" },
          { title: "Settings", url: "#" },
        ],
      },
      {
        title: "Tasks",
        url: "#",
        icon: Bot,
        items: [
          { title: "Assigned", url: "#" },
          { title: "In Progress", url: "#" },
          { title: "Completed", url: "#" },
        ],
      },
    ],
    projects: [
      { name: "Personal Growth", url: "#", icon: Frame },
      { name: "Hobbies", url: "#", icon: Map },
    ],
  },
  Workstation: {
    navMain: [
      {
        title: "Assignments",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          { title: "Explore", url: "#" },
          { title: "Saved", url: "#" },
          { title: "Submitted", url: "#" },
        ],
      },
      {
        title: "Teams",
        url: "#",
        icon: Settings2,
        items: [
          { title: "Collaborations", url: "#" },
          { title: "Requests", url: "#" },
        ],
      },
    ],
    projects: [
      { name: "Client Work", url: "#", icon: PieChart },
      { name: "Research", url: "#", icon: Map },
    ],
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [selectedDashboard, setSelectedDashboard] = React.useState<
    "Home" | "Workstation"
  >("Home");

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const handleDashboardChange = (teamName: string) => {
    if (teamName === "Home" || teamName === "Workstation") {
      setSelectedDashboard(teamName); // Safely cast the string to the union type
    }
  };

  const currentData = dashboardsData[selectedDashboard];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher
          teams={[
            { name: "Home", logo: House, plan: "Personal" },
            { name: "Workstation", logo: NotebookPen, plan: "Professional" },
          ]}
          onTeamChange={handleDashboardChange} // Handle dashboard switch
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={currentData.navMain} />
        <NavProjects projects={currentData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
