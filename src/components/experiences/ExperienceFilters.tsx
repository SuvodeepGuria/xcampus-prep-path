import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

interface ExperienceFiltersProps {
  onFilterChange: (filters: {
    year?: string;
    company?: string;
    role?: string;
    search?: string;
    experienceType?: string;
    branchType?: string;
  }) => void;
}

export const ExperienceFilters: React.FC<ExperienceFiltersProps> = ({
  onFilterChange,
}) => {
  const [filters, setFilters] = useState({
    year: '',
    company: '',
    role: '',
    search: '',
    experienceType: '',
    branchType: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = { year: '', company: '', role: '', search: '', experienceType: '', branchType: '' };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-card rounded-lg p-6 mb-8 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center">
          <Filter className="mr-2 h-5 w-5" />
          Filter Section
        </h3>
        <Button
          variant="outline"
          onClick={clearFilters}
          className="text-sm"
        >
          Clear Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search experiences..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="pl-10"
          />
        </div>

        <Select
          value={filters.year}
          onValueChange={(value) => handleFilterChange('year', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-years">All Years</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.company}
          onValueChange={(value) => handleFilterChange('company', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-companies">All Companies</SelectItem>
            <SelectItem value="Google">Google</SelectItem>
            <SelectItem value="Microsoft">Microsoft</SelectItem>
            <SelectItem value="Amazon">Amazon</SelectItem>
            <SelectItem value="Apple">Apple</SelectItem>
            <SelectItem value="Meta">Meta</SelectItem>
            <SelectItem value="Netflix">Netflix</SelectItem>
            <SelectItem value="Tesla">Tesla</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.role}
          onValueChange={(value) => handleFilterChange('role', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-roles">All Roles</SelectItem>
            <SelectItem value="Software Engineer">Software Engineer</SelectItem>
            <SelectItem value="Senior Software Engineer">Senior Software Engineer</SelectItem>
            <SelectItem value="Product Manager">Product Manager</SelectItem>
            <SelectItem value="Data Scientist">Data Scientist</SelectItem>
            <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
            <SelectItem value="Backend Developer">Backend Developer</SelectItem>
            <SelectItem value="Full Stack Developer">Full Stack Developer</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.experienceType}
          onValueChange={(value) => handleFilterChange('experienceType', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Experience Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">All Types</SelectItem>
            <SelectItem value="placement">Placement</SelectItem>
            <SelectItem value="internship">Internship</SelectItem>
            <SelectItem value="hackathon">Hackathon</SelectItem>
            <SelectItem value="higher-studies">Higher Studies</SelectItem>
            <SelectItem value="certification">Certification</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.branchType}
          onValueChange={(value) => handleFilterChange('branchType', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Branch Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-branches">All Branches</SelectItem>
            <SelectItem value="computer-science">Computer Science</SelectItem>
            <SelectItem value="electrical">Electrical Engineering</SelectItem>
            <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
            <SelectItem value="civil">Civil Engineering</SelectItem>
            <SelectItem value="chemical">Chemical Engineering</SelectItem>
            <SelectItem value="electronics">Electronics & Communication</SelectItem>
            <SelectItem value="aerospace">Aerospace Engineering</SelectItem>
            <SelectItem value="biotechnology">Biotechnology</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          onClick={() => onFilterChange(filters)}
          className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground"
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );
};