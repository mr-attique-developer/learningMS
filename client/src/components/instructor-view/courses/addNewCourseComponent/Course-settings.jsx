import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CourseSettings = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>Course Settings</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>

          <div className="space-y-2">
<Label htmlFor="file">Upload Course Image</Label>
          <Input
          type="file"
          accept="image/*"
          />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseSettings;
