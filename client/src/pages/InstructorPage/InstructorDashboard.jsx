import DashboardComponent from "@/components/instructor-view/DashboardComponent";
import InstructorCourses from "@/components/instructor-view/courses/InstructorCourses";
import { Button } from "@/components/ui/button";
import { BarChart, Book, LogOut } from "lucide-react";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const InstructorDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: BarChart,
      title: "Dashboard",
      value: "dashboard",
      component: <DashboardComponent />,
    },
    {
      icon: Book,
      title: "Courses",
      value: "courses",
      component: <InstructorCourses />,
    },
    {
      icon: LogOut,
      title: "Logout",
      value: "logout",
      component: null,
    },
  ];

  const handleLogout = () => {
    console.log("clicked");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen ">
      <aside className="w-40 sm:w-64 shadow-xl ">
        <div className="p-4">
          <h1 className="text-xl font-semibold sm:text-4xl ">Instructor</h1>
        </div>

        <div className=" p-4  ">
          {menuItems.map((item, _) => (
            <Button
              key={item.value}
              className=" w-full flex items-center justify-start p-2 my-2"
              onClick={
                item.value === "logout"
                  ? handleLogout
                  : () => setActiveTab(item.value)
              }
            >
              <item.icon className="w-6 h-6 mr-2" />
              <span>{item.title}</span>
            </Button>
          ))}
        </div>
      </aside>
      <main className="flex-1 bg-gray-200">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Instructor Dashboard</h1>
        </div>
        <div className="p-4">
          {/* {menuItems.find((item) => item.value === activeTab)?.component} */}
          {menuItems.map((item, _) => {
            return (
              <div key={item.value}>
                {item.value === activeTab ? item.component : null}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;
