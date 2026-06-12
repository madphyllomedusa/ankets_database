export interface FormFieldSchema {
  name: string
  label: string
  type: string
  format?: string
  isArray: boolean
  enumValues?: Array<{ value: string; label: string }>
}

export interface ResourceFormSchema {
  schemaName: string
  fields: FormFieldSchema[]
}

export const resourceFormSchemas: Record<string, ResourceFormSchema> = {
  "welcome-training-feedback": {
    "schemaName": "WelcomeTrainingFeedbackRequestDto",
    "fields": [
      {
        "name": "trainerNameFormula",
        "label": "Trainer Name Formula",
        "type": "string",
        "isArray": false
      },
      {
        "name": "trainer",
        "label": "Trainer",
        "type": "string",
        "isArray": false
      },
      {
        "name": "averageScore",
        "label": "Average Score",
        "type": "number",
        "isArray": false
      },
      {
        "name": "filledAt",
        "label": "Filled At",
        "type": "string",
        "format": "date-time",
        "isArray": false
      },
      {
        "name": "topicImportance",
        "label": "Topic Importance",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "newKnowledge",
        "label": "New Knowledge",
        "type": "string",
        "isArray": false
      },
      {
        "name": "knowledgeApplication",
        "label": "Knowledge Application",
        "type": "string",
        "isArray": false
      },
      {
        "name": "saturation",
        "label": "Saturation",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "logic",
        "label": "Logic",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "materialVolume",
        "label": "Material Volume",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "comfort",
        "label": "Comfort",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "materialPerception",
        "label": "Material Perception",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "pace",
        "label": "Pace",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "trainerWork",
        "label": "Trainer Work",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "comments",
        "label": "Comments",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "trainee-three-sixty-reviews": {
    "schemaName": "TraineeThreeSixtyReviewRequestDto",
    "fields": [
      {
        "name": "averageScore",
        "label": "Average Score",
        "type": "number",
        "isArray": false
      },
      {
        "name": "curator",
        "label": "Curator",
        "type": "string",
        "isArray": false
      },
      {
        "name": "communication",
        "label": "Communication",
        "type": "string",
        "isArray": false
      },
      {
        "name": "organizationalSkills",
        "label": "Organizational Skills",
        "type": "string",
        "isArray": false
      },
      {
        "name": "discipline",
        "label": "Discipline",
        "type": "string",
        "isArray": false
      },
      {
        "name": "leadership",
        "label": "Leadership",
        "type": "string",
        "isArray": false
      },
      {
        "name": "selfMotivation",
        "label": "Self Motivation",
        "type": "string",
        "isArray": false
      },
      {
        "name": "loyalty",
        "label": "Loyalty",
        "type": "string",
        "isArray": false
      },
      {
        "name": "motivationOfOthers",
        "label": "Motivation Of Others",
        "type": "string",
        "isArray": false
      },
      {
        "name": "comments",
        "label": "Comments",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "satisfaction-surveys": {
    "schemaName": "SatisfactionSurveyRequestDto",
    "fields": [
      {
        "name": "surveyDate",
        "label": "Survey Date",
        "type": "string",
        "format": "date-time",
        "isArray": false
      },
      {
        "name": "salaryScore",
        "label": "Salary Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "workingConditionsScore",
        "label": "Working Conditions Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "jobContentScore",
        "label": "Job Content Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "safetyScore",
        "label": "Safety Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "comfortScore",
        "label": "Comfort Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      }
    ]
  },
  "resume-profiles": {
    "schemaName": "ResumeProfileRequestDto",
    "fields": [
      {
        "name": "fullName",
        "label": "Full Name",
        "type": "string",
        "isArray": false
      },
      {
        "name": "status",
        "label": "Status",
        "type": "string",
        "isArray": false
      },
      {
        "name": "photo",
        "label": "Photo",
        "type": "string",
        "isArray": false
      },
      {
        "name": "position",
        "label": "Position",
        "type": "string",
        "isArray": false
      },
      {
        "name": "experienceDays",
        "label": "Experience Days",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "developmentFor",
        "label": "Development For",
        "type": "string",
        "isArray": false
      },
      {
        "name": "rating",
        "label": "Rating",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "ageYears",
        "label": "Age Years",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "currentWorkStatus",
        "label": "Current Work Status",
        "type": "string",
        "isArray": false
      },
      {
        "name": "interviewResult",
        "label": "Interview Result",
        "type": "string",
        "isArray": false
      },
      {
        "name": "internalMeetings",
        "label": "Internal Meetings",
        "type": "string",
        "isArray": false
      },
      {
        "name": "careerGoals",
        "label": "Career Goals",
        "type": "string",
        "isArray": false
      },
      {
        "name": "curator",
        "label": "Curator",
        "type": "string",
        "isArray": false
      },
      {
        "name": "curatorFeedback",
        "label": "Curator Feedback",
        "type": "string",
        "isArray": false
      },
      {
        "name": "technicalInterviewDates",
        "label": "Technical Interview Dates",
        "type": "string",
        "isArray": false
      },
      {
        "name": "technicalInterviewResults",
        "label": "Technical Interview Results",
        "type": "string",
        "isArray": false
      },
      {
        "name": "mentor",
        "label": "Mentor",
        "type": "string",
        "isArray": false
      },
      {
        "name": "mentoringDays",
        "label": "Mentoring Days",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "mentorComment",
        "label": "Mentor Comment",
        "type": "string",
        "isArray": false
      },
      {
        "name": "theoryHistory",
        "label": "Theory History",
        "type": "string",
        "isArray": false
      },
      {
        "name": "practiceHistory",
        "label": "Practice History",
        "type": "string",
        "isArray": false
      },
      {
        "name": "candidateTrack",
        "label": "Candidate Track",
        "type": "string",
        "isArray": false
      },
      {
        "name": "projectsInCenter",
        "label": "Projects In Center",
        "type": "string",
        "isArray": false
      },
      {
        "name": "educationInstitution",
        "label": "Education Institution",
        "type": "string",
        "isArray": false
      },
      {
        "name": "degree",
        "label": "Degree",
        "type": "string",
        "isArray": false
      },
      {
        "name": "course",
        "label": "Course",
        "type": "string",
        "isArray": false
      },
      {
        "name": "specialty",
        "label": "Specialty",
        "type": "string",
        "isArray": false
      },
      {
        "name": "totalExamScore",
        "label": "Total Exam Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "faculty",
        "label": "Faculty",
        "type": "string",
        "isArray": false
      },
      {
        "name": "department",
        "label": "Department",
        "type": "string",
        "isArray": false
      },
      {
        "name": "workOrInternship",
        "label": "Work Or Internship",
        "type": "string",
        "isArray": false
      },
      {
        "name": "educationalInterests",
        "label": "Educational Interests",
        "type": "string",
        "isArray": false
      },
      {
        "name": "questionnaireProjects",
        "label": "Questionnaire Projects",
        "type": "string",
        "isArray": false
      },
      {
        "name": "additionalEducation",
        "label": "Additional Education",
        "type": "string",
        "isArray": false
      },
      {
        "name": "achievements",
        "label": "Achievements",
        "type": "string",
        "isArray": false
      },
      {
        "name": "skills",
        "label": "Skills",
        "type": "array",
        "isArray": true
      },
      {
        "name": "growthAreas",
        "label": "Growth Areas",
        "type": "string",
        "isArray": false
      },
      {
        "name": "professions",
        "label": "Professions",
        "type": "array",
        "isArray": true
      },
      {
        "name": "travelAvailability",
        "label": "Travel Availability",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "negotiation-duel-feedback": {
    "schemaName": "NegotiationDuelFeedbackRequestDto",
    "fields": [
      {
        "name": "feedbackDate",
        "label": "Feedback Date",
        "type": "string",
        "format": "date-time",
        "isArray": false
      },
      {
        "name": "averageScore",
        "label": "Average Score",
        "type": "number",
        "isArray": false
      },
      {
        "name": "meetingOverall",
        "label": "Meeting Overall",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "hostRating",
        "label": "Host Rating",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "topicRelevance",
        "label": "Topic Relevance",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "durationRating",
        "label": "Duration Rating",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "instructionClarity",
        "label": "Instruction Clarity",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "meetingDynamics",
        "label": "Meeting Dynamics",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "practicalSkillsQuality",
        "label": "Practical Skills Quality",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "expectationsMatch",
        "label": "Expectations Match",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "recommendation",
        "label": "Recommendation",
        "type": "string",
        "isArray": false
      },
      {
        "name": "comment",
        "label": "Comment",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "negotiation-duel-applications": {
    "schemaName": "NegotiationDuelApplicationRequestDto",
    "fields": [
      {
        "name": "fullName",
        "label": "Full Name",
        "type": "string",
        "isArray": false
      },
      {
        "name": "roles",
        "label": "Roles",
        "type": "array",
        "isArray": true
      },
      {
        "name": "meetingDate",
        "label": "Meeting Date",
        "type": "string",
        "isArray": false
      },
      {
        "name": "type",
        "label": "Type",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "loyalty-surveys": {
    "schemaName": "LoyaltySurveyRequestDto",
    "fields": [
      {
        "name": "surveyDate",
        "label": "Survey Date",
        "type": "string",
        "format": "date-time",
        "isArray": false
      },
      {
        "name": "companyRecommendation",
        "label": "Company Recommendation",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "promotersComment",
        "label": "Promoters Comment",
        "type": "string",
        "isArray": false
      },
      {
        "name": "passivelySatisfiedComment",
        "label": "Passively Satisfied Comment",
        "type": "string",
        "isArray": false
      },
      {
        "name": "detractorsComment",
        "label": "Detractors Comment",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "leadership-three-sixty-reviews": {
    "schemaName": "LeadershipThreeSixtyReviewRequestDto",
    "fields": [
      {
        "name": "averageScore",
        "label": "Average Score",
        "type": "number",
        "isArray": false
      },
      {
        "name": "curator",
        "label": "Curator",
        "type": "string",
        "isArray": false
      },
      {
        "name": "communication",
        "label": "Communication",
        "type": "string",
        "isArray": false
      },
      {
        "name": "organizationalSkills",
        "label": "Organizational Skills",
        "type": "string",
        "isArray": false
      },
      {
        "name": "discipline",
        "label": "Discipline",
        "type": "string",
        "isArray": false
      },
      {
        "name": "leadership",
        "label": "Leadership",
        "type": "string",
        "isArray": false
      },
      {
        "name": "selfMotivation",
        "label": "Self Motivation",
        "type": "string",
        "isArray": false
      },
      {
        "name": "loyalty",
        "label": "Loyalty",
        "type": "string",
        "isArray": false
      },
      {
        "name": "motivationOfOthers",
        "label": "Motivation Of Others",
        "type": "string",
        "isArray": false
      },
      {
        "name": "comments",
        "label": "Comments",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "freelance-project-catalog": {
    "schemaName": "FreelanceProjectCatalogEntryRequestDto",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "string",
        "isArray": false
      },
      {
        "name": "requests",
        "label": "Requests",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "freelance-applications": {
    "schemaName": "FreelanceApplicationRequestDto",
    "fields": [
      {
        "name": "employeeFullName",
        "label": "Employee Full Name",
        "type": "string",
        "isArray": false
      },
      {
        "name": "status",
        "label": "Status",
        "type": "string",
        "isArray": false
      },
      {
        "name": "roles",
        "label": "Roles",
        "type": "array",
        "isArray": true
      },
      {
        "name": "desiredPositions",
        "label": "Desired Positions",
        "type": "array",
        "isArray": true
      },
      {
        "name": "phone",
        "label": "Phone",
        "type": "string",
        "isArray": false
      },
      {
        "name": "email",
        "label": "Email",
        "type": "string",
        "isArray": false
      },
      {
        "name": "telegram",
        "label": "Telegram",
        "type": "string",
        "isArray": false
      },
      {
        "name": "projectTypes",
        "label": "Project Types",
        "type": "array",
        "isArray": true
      },
      {
        "name": "programmingSkills",
        "label": "Programming Skills",
        "type": "array",
        "isArray": true
      },
      {
        "name": "knowledgeLevels",
        "label": "Knowledge Levels",
        "type": "array",
        "isArray": true
      },
      {
        "name": "webDevelopmentSkills",
        "label": "Web Development Skills",
        "type": "array",
        "isArray": true
      },
      {
        "name": "databaseSkills",
        "label": "Database Skills",
        "type": "array",
        "isArray": true
      },
      {
        "name": "systemAdministrationSkills",
        "label": "System Administration Skills",
        "type": "array",
        "isArray": true
      },
      {
        "name": "devOpsSkills",
        "label": "Dev Ops Skills",
        "type": "array",
        "isArray": true
      },
      {
        "name": "testingSkills",
        "label": "Testing Skills",
        "type": "array",
        "isArray": true
      },
      {
        "name": "additionalSkills",
        "label": "Additional Skills",
        "type": "string",
        "isArray": false
      },
      {
        "name": "participationGoals",
        "label": "Participation Goals",
        "type": "string",
        "isArray": false
      },
      {
        "name": "workPlanHours",
        "label": "Work Plan Hours",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "engagement-surveys": {
    "schemaName": "EngagementSurveyRequestDto",
    "fields": [
      {
        "name": "filledAt",
        "label": "Filled At",
        "type": "string",
        "format": "date-time",
        "isArray": false
      },
      {
        "name": "expectationOfEmployer",
        "label": "Expectation Of Employer",
        "type": "string",
        "isArray": false
      },
      {
        "name": "toolsAndMaterial",
        "label": "Tools And Material",
        "type": "string",
        "isArray": false
      },
      {
        "name": "abilityToDoBetter",
        "label": "Ability To Do Better",
        "type": "string",
        "isArray": false
      },
      {
        "name": "recognitionAndPraise",
        "label": "Recognition And Praise",
        "type": "string",
        "isArray": false
      },
      {
        "name": "managerCare",
        "label": "Manager Care",
        "type": "string",
        "isArray": false
      },
      {
        "name": "development",
        "label": "Development",
        "type": "string",
        "isArray": false
      },
      {
        "name": "pointOfView",
        "label": "Point Of View",
        "type": "string",
        "isArray": false
      },
      {
        "name": "missionAndGoal",
        "label": "Mission And Goal",
        "type": "string",
        "isArray": false
      },
      {
        "name": "qualityWork",
        "label": "Quality Work",
        "type": "string",
        "isArray": false
      },
      {
        "name": "friendAtWork",
        "label": "Friend At Work",
        "type": "string",
        "isArray": false
      },
      {
        "name": "talkAboutSuccesses",
        "label": "Talk About Successes",
        "type": "string",
        "isArray": false
      },
      {
        "name": "growthAtWork",
        "label": "Growth At Work",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "curator-three-sixty-reviews": {
    "schemaName": "CuratorThreeSixtyReviewRequestDto",
    "fields": [
      {
        "name": "averageScore",
        "label": "Average Score",
        "type": "number",
        "isArray": false
      },
      {
        "name": "curator",
        "label": "Curator",
        "type": "string",
        "isArray": false
      },
      {
        "name": "communication",
        "label": "Communication",
        "type": "string",
        "isArray": false
      },
      {
        "name": "organizationalSkills",
        "label": "Organizational Skills",
        "type": "string",
        "isArray": false
      },
      {
        "name": "discipline",
        "label": "Discipline",
        "type": "string",
        "isArray": false
      },
      {
        "name": "leadership",
        "label": "Leadership",
        "type": "string",
        "isArray": false
      },
      {
        "name": "selfMotivation",
        "label": "Self Motivation",
        "type": "string",
        "isArray": false
      },
      {
        "name": "loyalty",
        "label": "Loyalty",
        "type": "string",
        "isArray": false
      },
      {
        "name": "motivationOfOthers",
        "label": "Motivation Of Others",
        "type": "string",
        "isArray": false
      },
      {
        "name": "comments",
        "label": "Comments",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "candidate-questionnaires": {
    "schemaName": "CandidateQuestionnaireRequestDto",
    "fields": [
      {
        "name": "fullName",
        "label": "Full Name",
        "type": "string",
        "isArray": false
      },
      {
        "name": "status",
        "label": "Status",
        "type": "string",
        "isArray": false
      },
      {
        "name": "submissionNumber",
        "label": "Submission Number",
        "type": "integer",
        "format": "int64",
        "isArray": false
      },
      {
        "name": "citizenship",
        "label": "Citizenship",
        "type": "string",
        "isArray": false
      },
      {
        "name": "registrationRegion",
        "label": "Registration Region",
        "type": "string",
        "isArray": false
      },
      {
        "name": "temporaryRegistration",
        "label": "Temporary Registration",
        "type": "string",
        "isArray": false
      },
      {
        "name": "hasRelativesAbroad",
        "label": "Has Relatives Abroad",
        "type": "string",
        "isArray": false
      },
      {
        "name": "changedCitizenship",
        "label": "Changed Citizenship",
        "type": "string",
        "isArray": false
      },
      {
        "name": "militaryRegistration",
        "label": "Military Registration",
        "type": "string",
        "isArray": false
      },
      {
        "name": "hasJob",
        "label": "Has Job",
        "type": "string",
        "isArray": false
      },
      {
        "name": "targetEducation",
        "label": "Target Education",
        "type": "string",
        "isArray": false
      },
      {
        "name": "travelAvailability",
        "label": "Travel Availability",
        "type": "string",
        "isArray": false
      },
      {
        "name": "phone",
        "label": "Phone",
        "type": "string",
        "isArray": false
      },
      {
        "name": "email",
        "label": "Email",
        "type": "string",
        "isArray": false
      },
      {
        "name": "telegramUrl",
        "label": "Telegram Url",
        "type": "string",
        "isArray": false
      },
      {
        "name": "birthDate",
        "label": "Birth Date",
        "type": "string",
        "format": "date-time",
        "isArray": false
      },
      {
        "name": "passedExam",
        "label": "Passed Exam",
        "type": "string",
        "isArray": false
      },
      {
        "name": "russianExamScore",
        "label": "Russian Exam Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "mathematicsExamScore",
        "label": "Mathematics Exam Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "thirdExamSubject",
        "label": "Third Exam Subject",
        "type": "string",
        "isArray": false
      },
      {
        "name": "thirdExamScore",
        "label": "Third Exam Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "totalExamScore",
        "label": "Total Exam Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "additionalExamSubject",
        "label": "Additional Exam Subject",
        "type": "string",
        "isArray": false
      },
      {
        "name": "additionalExamScore",
        "label": "Additional Exam Score",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "educationInstitution",
        "label": "Education Institution",
        "type": "string",
        "isArray": false
      },
      {
        "name": "educationInstitutionOther",
        "label": "Education Institution Other",
        "type": "string",
        "isArray": false
      },
      {
        "name": "faculty",
        "label": "Faculty",
        "type": "string",
        "isArray": false
      },
      {
        "name": "department",
        "label": "Department",
        "type": "string",
        "isArray": false
      },
      {
        "name": "degree",
        "label": "Degree",
        "type": "string",
        "isArray": false
      },
      {
        "name": "course",
        "label": "Course",
        "type": "string",
        "isArray": false
      },
      {
        "name": "specialty",
        "label": "Specialty",
        "type": "string",
        "isArray": false
      },
      {
        "name": "universityAverageScore",
        "label": "University Average Score",
        "type": "number",
        "isArray": false
      },
      {
        "name": "universityChoicePrinciple",
        "label": "University Choice Principle",
        "type": "string",
        "isArray": false
      },
      {
        "name": "workOrInternship",
        "label": "Work Or Internship",
        "type": "string",
        "isArray": false
      },
      {
        "name": "foreignLanguages",
        "label": "Foreign Languages",
        "type": "array",
        "isArray": true
      },
      {
        "name": "educationalInterests",
        "label": "Educational Interests",
        "type": "string",
        "isArray": false
      },
      {
        "name": "projects",
        "label": "Projects",
        "type": "string",
        "isArray": false
      },
      {
        "name": "additionalEducation",
        "label": "Additional Education",
        "type": "string",
        "isArray": false
      },
      {
        "name": "achievements",
        "label": "Achievements",
        "type": "string",
        "isArray": false
      },
      {
        "name": "skills",
        "label": "Skills",
        "type": "array",
        "isArray": true
      },
      {
        "name": "growthAreas",
        "label": "Growth Areas",
        "type": "string",
        "isArray": false
      },
      {
        "name": "source",
        "label": "Source",
        "type": "string",
        "isArray": false
      },
      {
        "name": "referrerFullName",
        "label": "Referrer Full Name",
        "type": "string",
        "isArray": false
      },
      {
        "name": "hobbies",
        "label": "Hobbies",
        "type": "array",
        "isArray": true
      },
      {
        "name": "idealWorkplace",
        "label": "Ideal Workplace",
        "type": "string",
        "isArray": false
      },
      {
        "name": "idealEmployer",
        "label": "Ideal Employer",
        "type": "string",
        "isArray": false
      },
      {
        "name": "professions",
        "label": "Professions",
        "type": "array",
        "isArray": true
      },
      {
        "name": "personalDataConsent",
        "label": "Personal Data Consent",
        "type": "boolean",
        "isArray": false
      }
    ]
  },
  "battle-of-opinions-feedback": {
    "schemaName": "BattleOfOpinionsFeedbackRequestDto",
    "fields": [
      {
        "name": "feedbackDate",
        "label": "Feedback Date",
        "type": "string",
        "format": "date-time",
        "isArray": false
      },
      {
        "name": "averageScore",
        "label": "Average Score",
        "type": "number",
        "isArray": false
      },
      {
        "name": "meetingOverall",
        "label": "Meeting Overall",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "hostRating",
        "label": "Host Rating",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "topicRelevance",
        "label": "Topic Relevance",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "durationRating",
        "label": "Duration Rating",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "instructionClarity",
        "label": "Instruction Clarity",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "meetingDynamics",
        "label": "Meeting Dynamics",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "practicalSkillsQuality",
        "label": "Practical Skills Quality",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "expectationsMatch",
        "label": "Expectations Match",
        "type": "integer",
        "format": "int32",
        "isArray": false
      },
      {
        "name": "recommendation",
        "label": "Recommendation",
        "type": "string",
        "isArray": false
      },
      {
        "name": "comment",
        "label": "Comment",
        "type": "string",
        "isArray": false
      }
    ]
  },
  "battle-of-opinions-applications": {
    "schemaName": "BattleOfOpinionsApplicationRequestDto",
    "fields": [
      {
        "name": "fullName",
        "label": "Full Name",
        "type": "string",
        "isArray": false
      },
      {
        "name": "roles",
        "label": "Roles",
        "type": "array",
        "isArray": true
      },
      {
        "name": "meetingDate",
        "label": "Meeting Date",
        "type": "string",
        "isArray": false
      },
      {
        "name": "type",
        "label": "Type",
        "type": "string",
        "isArray": false
      },
      {
        "name": "comment",
        "label": "Comment",
        "type": "string",
        "isArray": false
      }
    ]
  }
}
