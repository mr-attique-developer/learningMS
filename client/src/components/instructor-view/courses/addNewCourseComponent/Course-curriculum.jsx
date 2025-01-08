import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseCurriculumInitialFormData } from "@/config";
import { InstructorContext } from "@/context/Instructor";
import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CourseCurriculum = () => {
  const { courseCurriculumFormData, setCourseCurriculumFormData } =
    useContext(InstructorContext);
  console.log(courseCurriculumFormData);

  const handleAddLecture = () => {
    setCourseCurriculumFormData([

      ...courseCurriculumFormData,{
        ...courseCurriculumInitialFormData[0],
      }
    ]
      );
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Create Course Curriculum</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleAddLecture}>Add Lecture</Button>

          <div className="my-6 space-y-4">
            {courseCurriculumFormData.map((item, index) => {
              return (
                <div className=" border p-5 rounded-md my-4" key={index}>
                  <div className="flex gap-5 items-center">
                    <h2 className="font-semibold">{`Lecture ${index + 1} `}</h2>

                    <Input
                      name="title"
                      className="max-w-96"
                      placeholder="Enter Title"
                      value={item.lectureTitle}
                    />

                    <div className="flex items-center space-x-2">
                      <Switch checked={false} id={`freePreview ${index + 1}`} />
                      <Label htmlFor={`freePreview ${index + 1}`}>
                        Free Preview
                      </Label>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Input type="file" accept="video/*" />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CourseCurriculum;
