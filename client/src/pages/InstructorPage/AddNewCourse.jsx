import CourseCurriculum from "@/components/instructor-view/courses/addNewCourseComponent/Course-curriculum";
import CourseLandingPage from "@/components/instructor-view/courses/addNewCourseComponent/Course-landing-page";
import CourseSettings from "@/components/instructor-view/courses/addNewCourseComponent/Course-settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

const AddNewCourse = () => {
  return (
    <>
      <div className="flex items-center justify-between p-8">
        <h1 className="font-extrabold text-4xl">Create a new Course</h1>
        <Button className=" p-6">SUBMIT</Button>
      </div>

      <div className="container mx-auto">
        <Card>
          <div className="container mx-auto p-6">
            <CardContent>
              <Tabs defaultValue="curriculum" className="space-y-4">
                <TabsList className="space-x-3">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="course-landing-page">
                    Course Landing Page
                  </TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum">
                  <CourseCurriculum/>
                </TabsContent>
                <TabsContent value="course-landing-page">
                  <CourseLandingPage/>
                </TabsContent>
                <TabsContent value="settings">
                  <CourseSettings/>
                </TabsContent>
              </Tabs>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AddNewCourse;
