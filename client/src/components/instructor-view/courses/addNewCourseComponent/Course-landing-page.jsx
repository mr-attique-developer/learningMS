import React, { useContext } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { courseLandingPageFormControls } from '@/config';
import { InstructorContext } from '@/context/Instructor';

const CourseLandingPage = () => {
  const { courseLandingFormData, setCourseLandingFormData } = useContext(InstructorContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseLandingFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <h1 className='font-extrabold'>Course Landing Page</h1>
        </CardHeader>
        <CardContent>
          {courseLandingPageFormControls.map((control, index) => {
            switch (control.componentType) {
              case 'input':
                return (
                  <div key={index} className="space-y-1">
                    <label htmlFor={control.name}>{control.label}</label>
                    <Input
                      id={control.name}
                      name={control.name}
                      placeholder={control.placeholder}
                      type={control.type}
                      value={courseLandingFormData[control.name] || ''}
                      onChange={handleChange}
                    />
                  </div>
                );
              case 'textarea':
                return (
                  <div key={index} className="space-y-1">
                    <label htmlFor={control.name}>{control.label}</label>
                    <Textarea
                      id={control.name}
                      name={control.name}
                      placeholder={control.placeholder}
                      value={courseLandingFormData[control.name] || ''}
                      onChange={handleChange}
                    />
                  </div>
                );
              case 'select':
                return (
                  <div key={index} className="space-y-1">
                    <label htmlFor={control.name}>{control.label}</label>
                    <Select
                      id={control.name}
                      name={control.name}
                      value={courseLandingFormData[control.name] || ''}
                      onChange={(value) => handleChange({ target: { name: control.name, value } })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={control.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {control.options.map((option) => (
                          <SelectItem key={option.id} value={option.id}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                );
              default:
                return null;
            }
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseLandingPage;