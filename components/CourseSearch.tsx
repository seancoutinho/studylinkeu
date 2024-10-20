"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  { id: 1, name: "Computer Science", university: "Technical University of Munich", country: "Germany" },
  { id: 2, name: "Business Administration", university: "Warsaw School of Economics", country: "Poland" },
  { id: 3, name: "Environmental Sciences", university: "University of Amsterdam", country: "Netherlands" },
  { id: 4, name: "Mechanical Engineering", university: "RWTH Aachen University", country: "Germany" },
  { id: 5, name: "International Relations", university: "Jagiellonian University", country: "Poland" },
  { id: 6, name: "Artificial Intelligence", university: "Delft University of Technology", country: "Netherlands" },
];

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = () => {
    const filtered = courses.filter(course => 
      (course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       course.university.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCountry === '' || course.country === selectedCountry)
    );
    setFilteredCourses(filtered);
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect Course</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            type="text"
            placeholder="Search courses or universities"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="Poland">Poland</SelectItem>
              <SelectItem value="Netherlands">Netherlands</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.university}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Country: {course.country}</p>
                <Button variant="link" className="mt-2 p-0">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSearch;