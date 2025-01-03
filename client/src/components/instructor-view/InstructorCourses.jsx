import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useNavigate } from 'react-router-dom'
import { DeleteIcon, Edit } from 'lucide-react'

const InstructorCourses = () => {
    const navigate = useNavigate()
  return (
   <Card >
    <CardHeader className="flex justify-between flex-col  sm:flex-row  items-center ">

    <CardTitle className="text-4xl font-extrabold mb-4 sm:mb-0">Courses</CardTitle>
   <Link to={`add-new-course`}>
    <Button className="p-6 w-full sm:w-40 ">Create New Course</Button>
   </Link>
    </CardHeader>
    <CardContent >
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Courses</TableHead>
      <TableHead>Students</TableHead>
      <TableHead>Revenue</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="" >Intro to React Js</TableCell>
      <TableCell>Jhon Doe</TableCell>
      <TableCell>$500</TableCell>
      <TableCell className="text-right">
        <Button varient="ghost" className="m-2">
            <Edit/>
        </Button>
        <Button varient="secondary " className="m-2">
            <DeleteIcon/>
        </Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

    </CardContent>
   </Card>
  )
}

export default InstructorCourses