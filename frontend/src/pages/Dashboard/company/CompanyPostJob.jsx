import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Users,
  Tag,
  User,
  FileText,
  Calendar as CalendarIcon,
  Plus,
  Trash2,
  Type,
  CheckSquare,
  Circle
} from 'lucide-react';
import { format } from "date-fns";
import { useToast } from '@/hooks/use-toast';

// Predefined Options
const JOB_SECTORS = [
  'IT', 'Marketing', 'Sales', 'Finance',
  'Human Resource', 'Design', 'Others'
];

const JOB_ROLES = [
  'web-developer', 'software-developer', 'data-analyst',
  'data-scientist', 'product-manager', 'project-manager',
  'business-analyst', 'business-development', 'marketing',
  'sales', 'finance', 'human-resource', 'designer', 'others'
];

const JOB_TYPES = ['Remote', 'Hybrid', 'On-site'];
const EXPERIENCE_LEVELS = ['Fresher', '1-2 Years', '3-5 Years', '5-10 Years', '10+ Years'];
// const JOB_LEVELS = ['Entry Level', 'Mid Level', 'Senior Level', 'Top Level'];


const QUESTION_TYPES = [
  { value: 'text', label: 'Short Text', icon: Type },
  { value: 'textarea', label: 'Long Text', icon: Type },
  { value: 'checkbox', label: 'Checkbox', icon: CheckSquare },
  { value: 'radio', label: 'Radio Group', icon: Circle }
];


export const CompanyPostJob = () => {

  const { toast } = useToast();

  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    jobSector: '',
    jobRole: '',
    jobDescription: '',
    jobType: '',
    jobLocation: '',
    phone: '',
    email: '',
    experience: '',
    jobLevel: '',
    tools: [],
    jobCity: '',
    jobState: '',
    jobCountry: '',
    jobZipCode: '',
    minSalary: '',
    maxSalary: '',
    jobVacancy: '',
    skillsRequired: [],
    jobDeadline: new Date(),
    requirements: [],
    preferredExperience: [],
    productDesigner: {
      knowledge: '',
      research: '',
      deliverables: '',
      communication: ''
    },
    // jobQuestions: [
    //   {
    //     type: "text",
    //     label: "Years of Design Experience",
    //     fieldName: "yearsExperience",
    //     value: ''
    //   },
    //   {
    //     type: "textarea",
    //     label: "Why are you interested in this role?",
    //     fieldName: "interestStatement",
    //     value: ''
    //   },
    //   {
    //     type: "checkbox",
    //     label: "I am able to relocate to the job location",
    //     fieldName: "canRelocate",
    //     value: false
    //   },
    //   {
    //     type: "radio",
    //     label: "Availability",
    //     fieldName: "availability",
    //     options: [
    //       { label: "Available to start immediately", value: "immediate" },
    //       { label: "2 weeks notice", value: "2-weeks" },
    //       { label: "1 month notice", value: "1-month" },
    //       { label: "Other", value: "other" }
    //     ],
    //     value: ''
    //   },
    //   {
    //     type: "text",
    //     label: "Portfolio Website",
    //     fieldName: "portfolioUrl",
    //     value: ''
    //   }
    // ]
    jobQuestions: []
  });

  const [currentTool, setCurrentTool] = useState('');
  const [currentSkill, setCurrentSkill] = useState('');

  const [newQuestion, setNewQuestion] = useState({
    type: '',
    label: '',
    fieldName: '',
    required: false,
    options: []
  });
  const [currentOption, setCurrentOption] = useState('');

  const [currentRequirement, setCurrentRequirement] = useState('');
  const [currentPreferredExperience, setCurrentPreferredExperience] = useState('');

  const handleInputChange = (field, value, questionIndex = null) => {
    if (questionIndex !== null) {
      const updatedQuestions = [...jobDetails.jobQuestions];
      updatedQuestions[questionIndex].value = value;
      setJobDetails(prev => ({
        ...prev,
        jobQuestions: updatedQuestions
      }));
    } else if (typeof field === 'object') {
      setJobDetails(prev => ({
        ...prev,
        productDesigner: {
          ...prev.productDesigner,
          ...field
        }
      }));
    } else {
      setJobDetails(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const addToolOrSkill = (field, currentValue, setCurrentValue) => {
    if (currentValue.trim()) {
      setJobDetails(prev => ({
        ...prev,
        [field]: [...prev[field], currentValue.trim()]
      }));
      setCurrentValue('');
    }
  };

  const addListItem = (field, currentValue, setCurrentValue) => {
    if (currentValue.trim()) {
      setJobDetails(prev => ({
        ...prev,
        [field]: [...prev[field], currentValue.trim()]
      }));
      setCurrentValue('');
    }
  };

  const removeItem = (field, index) => {
    setJobDetails(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleQuestionTypeChange = (type) => {
    setNewQuestion(prev => ({
      ...prev,
      type,
      options: type === 'radio' ? [] : undefined
    }));
  };

  const addOption = () => {
    if (currentOption.trim() && newQuestion.type === 'radio') {
      setNewQuestion(prev => ({
        ...prev,
        options: [...(prev.options || []), currentOption.trim()]
      }));
      setCurrentOption('');
    }
  };

  const removeOption = (index) => {
    setNewQuestion(prev => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== index)
    }));
  };

  const addJobQuestion = () => {
    // Validate question
    if (!newQuestion.type || !newQuestion.label) {
      toast({
        title: "Incomplete Question",
        description: "Please select a type and enter a label",
        variant: "destructive"
      });
      return;
    }

    // Generate unique field name
    const fieldName = newQuestion.label
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');

    const questionToAdd = {
      ...newQuestion,
      fieldName,
      value: newQuestion.type === 'checkbox' ? false : ''
    };

    setJobDetails(prev => ({
      ...prev,
      jobQuestions: [...prev.jobQuestions, questionToAdd]
    }));

    // Reset new question state
    setNewQuestion({
      type: '',
      label: '',
      fieldName: '',
      required: false,
      options: []
    });
  };

  const removeJobQuestion = (index) => {
    setJobDetails(prev => ({
      ...prev,
      jobQuestions: prev.jobQuestions.filter((_, i) => i !== index)
    }));
  };

  const renderQuestionInput = (question, index) => {
    switch (question.type) {
      case 'text':
        return (
          <Input
            placeholder={question.label}
            value={question.value}
            onChange={(e) => {
              const updatedQuestions = [...jobDetails.jobQuestions];
              updatedQuestions[index].value = e.target.value;
              setJobDetails(prev => ({ ...prev, jobQuestions: updatedQuestions }));
            }}
          />
        );
      case 'textarea':
        return (
          <Textarea
            placeholder={question.label}
            value={question.value}
            onChange={(e) => {
              const updatedQuestions = [...jobDetails.jobQuestions];
              updatedQuestions[index].value = e.target.value;
              setJobDetails(prev => ({ ...prev, jobQuestions: updatedQuestions }));
            }}
          />
        );
      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={question.value}
              onCheckedChange={(checked) => {
                const updatedQuestions = [...jobDetails.jobQuestions];
                updatedQuestions[index].value = checked;
                setJobDetails(prev => ({ ...prev, jobQuestions: updatedQuestions }));
              }}
            />
            <Label>{question.label}</Label>
          </div>
        );
      case 'radio':
        return (
          <RadioGroup
            onValueChange={(value) => {
              const updatedQuestions = [...jobDetails.jobQuestions];
              updatedQuestions[index].value = value;
              setJobDetails(prev => ({ ...prev, jobQuestions: updatedQuestions }));
            }}
            value={question.value}
          >
            {question.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const requiredFields = [
      'jobTitle', 'jobRole', 'jobDescription',
      'jobType', 'jobLocation', 'jobVacancy'
    ];

    const missingFields = requiredFields.filter(field => !jobDetails[field]);

    if (missingFields.length > 0) {
      toast({
        title: "Incomplete Form",
        description: `Please fill in the following fields: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return;
    }

    // Submit job posting
    console.log('Job Details:', jobDetails);
    // Add your API call here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto p-6 bg-white rounded-2xl"
    >
      <div className="flex items-center mb-8 space-x-4">
        <Briefcase className="text-primary-light w-12 h-12" />
        <h1 className="text-3xl font-bold text-primary-dark">
          Post a New Job Opportunity
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Job Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              <User className="mr-2 text-primary-light" /> Job Title
            </label>
            <Input
              placeholder="e.g., Senior Software Engineer"
              value={jobDetails.jobTitle}
              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            />
          </div>

          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              <Tag className="mr-2 text-primary-light" /> Job Sector
            </label>
            <Select
              value={jobDetails.jobSector}
              onValueChange={(value) => handleInputChange('jobSector', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Job Sector" />
              </SelectTrigger>
              <SelectContent>
                {JOB_SECTORS.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Role and Type */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              <Briefcase className="mr-2 text-primary-light" /> Job Role
            </label>
            <Select
              value={jobDetails.jobRole}
              onValueChange={(value) => handleInputChange('jobRole', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Job Role" />
              </SelectTrigger>
              <SelectContent>
                {JOB_ROLES.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              <MapPin className="mr-2 text-primary-light" /> Job Type
            </label>
            <Select
              value={jobDetails.jobType}
              onValueChange={(value) => handleInputChange('jobType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Job Type" />
              </SelectTrigger>
              <SelectContent>
                {JOB_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="flex items-center mb-2 text-primary-dark">
            <FileText className="mr-2 text-primary-light" /> Job Description
          </label>
          <Textarea
            placeholder="Provide a detailed job description..."
            value={jobDetails.jobDescription}
            onChange={(e) => handleInputChange('jobDescription', e.target.value)}
            className="h-40"
          />
        </div>

        {/* Location Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              <MapPin className="mr-2 text-primary-light" /> Job Location
            </label>
            <Input
              placeholder="City, Country"
              value={jobDetails.jobLocation}
              onChange={(e) => handleInputChange('jobLocation', e.target.value)}
            />
          </div>

          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              <Clock className="mr-2 text-primary-light" /> Experience Level
            </label>
            <Select
              value={jobDetails.experience}
              onValueChange={(value) => handleInputChange('experience', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Experience" />
              </SelectTrigger>
              <SelectContent>
                {EXPERIENCE_LEVELS.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Skills Required */}
        <div>
          <label className="flex items-center mb-2 text-primary-dark">
            <Users className="mr-2 text-primary-light" /> Skills Required
          </label>
          <div className="flex space-x-2 mb-2">
            <Input
              placeholder="Add a skill"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              className="flex-grow"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => addToolOrSkill('skillsRequired', currentSkill, setCurrentSkill)}
              className="bg-primary-ultra/10 hover:bg-primary-ultra/20 border-primary-light"
            >
              <Plus className="mr-2" /> Add Skill
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {jobDetails.skillsRequired.map((skill, index) => (
              <div
                key={index}
                className="flex items-center bg-primary-light/10 text-primary-dark px-3 py-1 rounded-full"
              >
                {skill}
                <Trash2
                  className="ml-2 text-red-500 cursor-pointer"
                  size={16}
                  onClick={() => removeItem('skillsRequired', index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Salary and Vacancy */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              <DollarSign className="mr-2 text-primary-light" /> Minimum Salary
            </label>
            <Input
              type="number"
              placeholder="Minimum Salary"
              value={jobDetails.minSalary}
              onChange={(e) => handleInputChange('minSalary', e.target.value)}
            />
          </div>

          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              <Users className="mr-2 text-primary-light" /> Job Vacancy
            </label>
            <Input
              type="number"
              placeholder="Number of Vacancies"
              value={jobDetails.jobVacancy}
              onChange={(e) => handleInputChange('jobVacancy', e.target.value)}
            />
          </div>
        </div>

        {/* Job Deadline */}
        <div>
          <label className="flex items-center mb-2 text-primary-dark">
            <CalendarIcon className="mr-2 text-primary-light" /> Job Application Deadline
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !jobDetails.jobDeadline && "text-muted-foreground",
                  "bg-primary-ultra/5 border-primary-light hover:bg-primary-ultra/10"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {jobDetails.jobDeadline ? (
                  format(jobDetails.jobDeadline, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={jobDetails.jobDeadline}
                onSelect={(date) => handleInputChange('jobDeadline', date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="flex items-center mb-2 text-primary-dark">
            <Users className="mr-2 text-primary-light" /> Job Requirements
          </label>
          <div className="flex space-x-2 mb-2">
            <Input
              placeholder="Add a requirement"
              value={currentRequirement}
              onChange={(e) => setCurrentRequirement(e.target.value)}
              className="flex-grow"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => addListItem('requirements', currentRequirement, setCurrentRequirement)}
              className="bg-primary-ultra/10 hover:bg-primary-ultra/20 border-primary-light"
            >
              <Plus className="mr-2" /> Add Requirement
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {jobDetails.requirements.map((req, index) => (
              <div
                key={index}
                className="flex items-center bg-primary-light/10 text-primary-dark px-3 py-1 rounded-full"
              >
                {req}
                <Trash2
                  className="ml-2 text-red-500 cursor-pointer"
                  size={16}
                  onClick={() => removeItem('requirements', index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Preferred Experience Section */}
        <div className="mt-6">
          <label className="flex items-center mb-2 text-primary-dark">
            <Users className="mr-2 text-primary-light" /> Preferred Experience
          </label>
          <div className="flex space-x-2 mb-2">
            <Input
              placeholder="Add preferred experience"
              value={currentPreferredExperience}
              onChange={(e) => setCurrentPreferredExperience(e.target.value)}
              className="flex-grow"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => addListItem('preferredExperience', currentPreferredExperience, setCurrentPreferredExperience)}
              className="bg-primary-ultra/10 hover:bg-primary-ultra/20 border-primary-light"
            >
              <Plus className="mr-2" /> Add Experience
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {jobDetails.preferredExperience.map((exp, index) => (
              <div
                key={index}
                className="flex items-center bg-primary-light/10 text-primary-dark px-3 py-1 rounded-full"
              >
                {exp}
                <Trash2
                  className="ml-2 text-red-500 cursor-pointer"
                  size={16}
                  onClick={() => removeItem('preferredExperience', index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Designer Details */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              Knowledge
            </label>
            <Textarea
              placeholder="Product Designer Knowledge"
              value={jobDetails.productDesigner.knowledge}
              onChange={(e) => handleInputChange({ knowledge: e.target.value })}
            />
          </div>
          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              Research
            </label>
            <Textarea
              placeholder="Research Responsibilities"
              value={jobDetails.productDesigner.research}
              onChange={(e) => handleInputChange({ research: e.target.value })}
            />
          </div>
          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              Deliverables
            </label>
            <Textarea
              placeholder="Expected Deliverables"
              value={jobDetails.productDesigner.deliverables}
              onChange={(e) => handleInputChange({ deliverables: e.target.value })}
            />
          </div>
          <div>
            <label className="flex items-center mb-2 text-primary-dark">
              Communication
            </label>
            <Textarea
              placeholder="Communication Expectations"
              value={jobDetails.productDesigner.communication}
              onChange={(e) => handleInputChange({ communication: e.target.value })}
            />
          </div>
        </div>

        {/* Job Application Questions Section */}
        <div className="space-y-6">
      {/* Question Creation Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Create Custom Application Questions</h2>
        
        {/* Question Type Selection */}
        <div className="mb-4">
          <Label>Select Question Type</Label>
          <div className="flex space-x-2 mt-2">
            {QUESTION_TYPES.map((type) => (
              <Button
                key={type.value}
                variant={newQuestion.type === type.value ? "default" : "outline"}
                onClick={() => handleQuestionTypeChange(type.value)}
                className="flex items-center space-x-2"
              >
                <type.icon className="mr-2" />
                {type.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Question Label Input */}
        <div className="mb-4">
          <Label>Question Label</Label>
          <Input 
            placeholder="Enter question text"
            value={newQuestion.label}
            onChange={(e) => setNewQuestion(prev => ({
              ...prev, 
              label: e.target.value
            }))}
          />
        </div>

        {/* Optional: Radio Button Options */}
        {newQuestion.type === 'radio' && (
          <div className="mb-4">
            <Label>Radio Button Options</Label>
            <div className="flex space-x-2 mb-2">
              <Input 
                placeholder="Add option"
                value={currentOption}
                onChange={(e) => setCurrentOption(e.target.value)}
                className="flex-grow"
              />
              <Button 
                variant="outline" 
                onClick={addOption}
                disabled={!currentOption.trim()}
              >
                <Plus className="mr-2" /> Add Option
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {newQuestion.options.map((option, index) => (
                <div 
                  key={option} 
                  className="flex items-center bg-primary-light/10 text-primary-dark px-3 py-1 rounded-full"
                >
                  {option}
                  <Trash2 
                    className="ml-2 text-red-500 cursor-pointer"
                    size={16}
                    onClick={() => removeOption(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Question Button */}
        <Button 
          onClick={addJobQuestion}
          disabled={!newQuestion.type || !newQuestion.label}
          className="mt-4"
        >
          <Plus className="mr-2" /> Add Question to Application
        </Button>
      </div>

      {/* Created Questions Display */}
      {jobDetails.jobQuestions.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Custom Application Questions</h2>
          {jobDetails.jobQuestions.map((question, index) => (
            <div 
              key={question.fieldName} 
              className="bg-white border rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <Label className="font-semibold">{question.label}</Label>
                  <span className="text-sm text-gray-500 capitalize">
                    ({question.type})
                  </span>
                </div>
                {renderQuestionInput(question, index)}
              </div>
              <Button 
                variant="destructive" 
                size="icon"
                onClick={() => removeJobQuestion(index)}
              >
                <Trash2 />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            disabled={!jobDetails.jobQuestions.length}
            className="bg-primary-light text-white hover:bg-primary-dark transition-colors duration-300"
          >
            {jobDetails.jobQuestions.length > 0
              ? "Post Job Listing"
              : "Add Questions Before Posting"}
          </Button>
        </div>

        {/* Submit Button */}
        <div className="flex  mt-8">
          <Button
            type="submit"
            className="bg-primary-light text-white hover:bg-primary-dark transition-colors duration-300 px-10 py-2 text-lg"
          >
            Post Job
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

