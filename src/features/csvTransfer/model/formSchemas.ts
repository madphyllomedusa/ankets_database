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
        "isArray": false,
        "enumValues": [
          {
            "value": "AVDEEV_GEORGIY",
            "label": "Авдеев Георгий"
          },
          {
            "value": "SHIROKOV_KIRILL",
            "label": "Широков Кирилл"
          },
          {
            "value": "BOBRIKOVA_LADA",
            "label": "Бобрикова Лада"
          },
          {
            "value": "MALYSHEV_ARTUR",
            "label": "Малышев Артур"
          },
          {
            "value": "KULISH_OKSANA",
            "label": "Кулиш Оксана"
          },
          {
            "value": "KARYZNOVA_ANASTASIYA",
            "label": "Карызнова Анастасия"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "knowledgeApplication",
        "label": "Knowledge Application",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "CURATOR",
            "label": "КУРАТОР"
          },
          {
            "value": "AVDEEV_GEORGIY_VALERYEVICH",
            "label": "Авдеев Георгий Валерьевич"
          },
          {
            "value": "KLIMINA_TAISIYA_MAKSIMOVNA",
            "label": "Климина Таисия Максимовна"
          },
          {
            "value": "LARIONOVA_EKATERINA_ANDREEVNA",
            "label": "Ларионова Екатерина Андреевна"
          },
          {
            "value": "LUKIN_ARTYOM_ANDREEVICH",
            "label": "Лукин Артём Андреевич"
          },
          {
            "value": "PULINA_ANGELINA_SERGEEVNA",
            "label": "Пулина Ангелина Сергеевна"
          },
          {
            "value": "RYAZANOV_DANIL_ALEKSANDROVICH",
            "label": "Рязанов Данил Александрович"
          },
          {
            "value": "SHIROKOV_KIRILL_SERGEEVICH",
            "label": "Широков Кирилл Сергеевич"
          },
          {
            "value": "SHKUROPAT_PAVEL_KONSTANTINOVICH",
            "label": "Шкуропат Павел Константинович"
          },
          {
            "value": "ASSISTANT",
            "label": "АССИСТЕНТ"
          },
          {
            "value": "NOT_REQUIRED",
            "label": "НЕ ТРЕБУЕТСЯ"
          }
        ]
      },
      {
        "name": "communication",
        "label": "Communication",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "organizationalSkills",
        "label": "Organizational Skills",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "discipline",
        "label": "Discipline",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "leadership",
        "label": "Leadership",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "selfMotivation",
        "label": "Self Motivation",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "loyalty",
        "label": "Loyalty",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "motivationOfOthers",
        "label": "Motivation Of Others",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "EDUCATION",
            "label": "ОБУЧЕНИЕ"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "ENGINEER",
            "label": "Инженер"
          },
          {
            "value": "TECHNICIAN",
            "label": "Техник"
          },
          {
            "value": "DE_FACTO_ENGINEER",
            "label": "Инженер (де-факто)"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "CURATOR",
            "label": "КУРАТОР"
          },
          {
            "value": "AVDEEV_GEORGIY_VALERYEVICH",
            "label": "Авдеев Георгий Валерьевич"
          },
          {
            "value": "KLIMINA_TAISIYA_MAKSIMOVNA",
            "label": "Климина Таисия Максимовна"
          },
          {
            "value": "LARIONOVA_EKATERINA_ANDREEVNA",
            "label": "Ларионова Екатерина Андреевна"
          },
          {
            "value": "LUKIN_ARTYOM_ANDREEVICH",
            "label": "Лукин Артём Андреевич"
          },
          {
            "value": "PULINA_ANGELINA_SERGEEVNA",
            "label": "Пулина Ангелина Сергеевна"
          },
          {
            "value": "RYAZANOV_DANIL_ALEKSANDROVICH",
            "label": "Рязанов Данил Александрович"
          },
          {
            "value": "SHIROKOV_KIRILL_SERGEEVICH",
            "label": "Широков Кирилл Сергеевич"
          },
          {
            "value": "SHKUROPAT_PAVEL_KONSTANTINOVICH",
            "label": "Шкуропат Павел Константинович"
          },
          {
            "value": "ASSISTANT",
            "label": "АССИСТЕНТ"
          },
          {
            "value": "NOT_REQUIRED",
            "label": "НЕ ТРЕБУЕТСЯ"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "INSTITUTION_01",
            "label": "СПбПУ (Санкт-Петербургский политехнический университет Петра Великого)"
          },
          {
            "value": "INSTITUTION_02",
            "label": "СПбГЭТУ \"ЛЭТИ\" (Санкт-Петербургский государственный электротехнический университет «ЛЭТИ»)"
          },
          {
            "value": "INSTITUTION_03",
            "label": "СПбГУТ (Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А. Бонч-Бруевича)"
          },
          {
            "value": "INSTITUTION_04",
            "label": "ГУМРФ имени адмирала С. О. Макарова (Государственный университет морского и речного флота им. адмирала С. О. Макарова)"
          },
          {
            "value": "INSTITUTION_05",
            "label": "СПбГАСУ (Санкт-Петербургский государственный архитектурно-строительный университет)"
          },
          {
            "value": "INSTITUTION_06",
            "label": "ГУАП (Санкт-Петербургский государственный университет аэрокосмического приборостроения)"
          },
          {
            "value": "INSTITUTION_07",
            "label": "СПбГУПТД (Санкт-Петербургский государственный университет промышленных технологий и дизайна)"
          },
          {
            "value": "INSTITUTION_08",
            "label": "РАНХиГС (Российская академия народного хозяйства и государственной службы при Президенте Российской Федерации)"
          },
          {
            "value": "INSTITUTION_09",
            "label": "Университет ИТМО (Федеральное государственное автономное образовательное учреждение высшего образования «Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики»)"
          },
          {
            "value": "INSTITUTION_10",
            "label": "НИУ ВШЭ (Высшая школа Экономики)"
          },
          {
            "value": "INSTITUTION_11",
            "label": "СПбГЛТУ им С.М. Кирова (Санкт-Петербургский государственный лесотехнический университет имени С.М. Кирова)"
          },
          {
            "value": "INSTITUTION_12",
            "label": "СПбГУ (Санкт-Петербургский государственный университет)"
          },
          {
            "value": "INSTITUTION_13",
            "label": "БГТУ «ВОЕНМЕХ» (Военная академия связи имени Маршала Советского"
          },
          {
            "value": "INSTITUTION_14",
            "label": "РГПУ им. А.И. Герцена (Российский Государственный Педагогический Университет имени А.И. Герцена)"
          },
          {
            "value": "INSTITUTION_15",
            "label": "СПбГТИ (ТУ) (Санкт-Петербургский государственный технологический институт)"
          },
          {
            "value": "INSTITUTION_16",
            "label": "РГГМУ (Российский государственный Гидрометеорологический университет)"
          },
          {
            "value": "INSTITUTION_17",
            "label": "СПбГМТУ (Санкт-Петербургский государственный морской технический университет)"
          },
          {
            "value": "INSTITUTION_18",
            "label": "Санкт-Петербургский горный университет (Санкт-Петербургский горный университет императрицы Екатерины II)"
          },
          {
            "value": "INSTITUTION_19",
            "label": "Колледж Телекоммуникаций им. Э.Т. Кренкеля (Санкт-Петербургский колледж телекоммуникаций имени Э.Т. Кренкеля)"
          },
          {
            "value": "INSTITUTION_20",
            "label": "СПбГЭУ (Санкт-Петербургский государственный экономический университет)"
          },
          {
            "value": "INSTITUTION_21",
            "label": "ЛГУ им. А.С. Пушкина (Ленинградский государственный университет имени А.С. Пушкина)"
          },
          {
            "value": "INSTITUTION_22",
            "label": "АНО ВО \"Университет при МПА ЕврАзЭС\" (Автономная некоммерческая организация высшего образования \"Университет при Межпарламентской Ассамблее ЕврАзЭС\")"
          },
          {
            "value": "INSTITUTION_23",
            "label": "СПбГУП (Санкт-Петербургский Гуманитарный Университет Профсоюзов)"
          },
          {
            "value": "INSTITUTION_24",
            "label": "СПб ГБПОУ \"Колледж автоматизации производства\" (Санкт-Петербургское государственное бюджетное профессиональное образовательное учреждение «Колледж автоматизации производственных процессов и прикладных информационных систем»)"
          },
          {
            "value": "INSTITUTION_25",
            "label": "Другое (Нет в списке)"
          },
          {
            "value": "INSTITUTION_26",
            "label": "ТКУиК (Санкт-Петербургский Технический колледж управления и коммерции)"
          },
          {
            "value": "INSTITUTION_27",
            "label": "Ванкор-БП"
          }
        ]
      },
      {
        "name": "degree",
        "label": "Degree",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "SECONDARY_VOCATIONAL",
            "label": "СРЕДНЕЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ"
          },
          {
            "value": "BACHELOR",
            "label": "БАКАЛАВРИАТ"
          },
          {
            "value": "SPECIALIST",
            "label": "СПЕЦИАЛИТЕТ"
          },
          {
            "value": "MASTER",
            "label": "МАГИСТРАТУРА"
          },
          {
            "value": "POSTGRADUATE",
            "label": "АСПИРАНТУРА"
          },
          {
            "value": "COMPLETED_EDUCATION",
            "label": "окончил(-ла) обучение"
          }
        ]
      },
      {
        "name": "course",
        "label": "Course",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "FIRST_YEAR",
            "label": "1-й"
          },
          {
            "value": "SECOND_YEAR",
            "label": "2-й"
          },
          {
            "value": "THIRD_YEAR",
            "label": "3-й"
          },
          {
            "value": "FOURTH_YEAR",
            "label": "4-й"
          },
          {
            "value": "FIFTH_YEAR",
            "label": "5-й"
          },
          {
            "value": "SIXTH_YEAR",
            "label": "6-й"
          },
          {
            "value": "EDUCATION_COMPLETED",
            "label": "Закончено образование"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "SKILL_001",
            "label": "Linux"
          },
          {
            "value": "SKILL_002",
            "label": "MS Word"
          },
          {
            "value": "SKILL_003",
            "label": "Ubuntu"
          },
          {
            "value": "SKILL_004",
            "label": "ОС Astra Linux"
          },
          {
            "value": "SKILL_005",
            "label": "Assembler"
          },
          {
            "value": "SKILL_006",
            "label": "GIT"
          },
          {
            "value": "SKILL_007",
            "label": "DOCKER"
          },
          {
            "value": "SKILL_008",
            "label": "JSON"
          },
          {
            "value": "SKILL_009",
            "label": "Machine learning"
          },
          {
            "value": "SKILL_010",
            "label": "Mathematical Analysis"
          },
          {
            "value": "SKILL_011",
            "label": "Matplotlib"
          },
          {
            "value": "SKILL_012",
            "label": "MS Power Point"
          },
          {
            "value": "SKILL_013",
            "label": "MySQL"
          },
          {
            "value": "SKILL_014",
            "label": "NumPy"
          },
          {
            "value": "SKILL_015",
            "label": "Pandas"
          },
          {
            "value": "SKILL_016",
            "label": "PyCharm"
          },
          {
            "value": "SKILL_017",
            "label": "Scikit-learn"
          },
          {
            "value": "SKILL_018",
            "label": "UX/UI"
          },
          {
            "value": "SKILL_019",
            "label": "БИБЛИОТЕКА QT5"
          },
          {
            "value": "SKILL_020",
            "label": "Искусственный интеллект (ИИ)"
          },
          {
            "value": "SKILL_021",
            "label": "РАЗМЕТКИ HTML"
          },
          {
            "value": "SKILL_022",
            "label": "СТИЛИ CSS"
          },
          {
            "value": "SKILL_023",
            "label": "СУБД POSTGRESQL"
          },
          {
            "value": "SKILL_024",
            "label": "СУБД SQLITE"
          },
          {
            "value": "SKILL_025",
            "label": "ЯЗЫК C++"
          },
          {
            "value": "SKILL_026",
            "label": "ЯЗЫК PYTHON"
          },
          {
            "value": "SKILL_027",
            "label": "ЯЗЫК С"
          },
          {
            "value": "SKILL_028",
            "label": "Tilda"
          },
          {
            "value": "SKILL_029",
            "label": "JavaFX"
          },
          {
            "value": "SKILL_030",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_031",
            "label": "MathCAD"
          },
          {
            "value": "SKILL_032",
            "label": "MS Excel"
          },
          {
            "value": "SKILL_033",
            "label": "Visual Studio"
          },
          {
            "value": "SKILL_034",
            "label": "ЯЗЫК JAVA"
          },
          {
            "value": "SKILL_035",
            "label": "Adobe Premiere Pro"
          },
          {
            "value": "SKILL_036",
            "label": "MS Office"
          },
          {
            "value": "SKILL_037",
            "label": "Corel Draw"
          },
          {
            "value": "SKILL_038",
            "label": "Photoshop"
          },
          {
            "value": "SKILL_039",
            "label": "Google Docs"
          },
          {
            "value": "SKILL_040",
            "label": "AutoCAD"
          },
          {
            "value": "SKILL_041",
            "label": "Autodesk Revit"
          },
          {
            "value": "SKILL_042",
            "label": "SolidWorks"
          },
          {
            "value": "SKILL_043",
            "label": "Adobe After Effects"
          },
          {
            "value": "SKILL_044",
            "label": "Android"
          },
          {
            "value": "SKILL_045",
            "label": "Figma"
          },
          {
            "value": "SKILL_046",
            "label": "Jira"
          },
          {
            "value": "SKILL_047",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_048",
            "label": "Ms Outlook"
          },
          {
            "value": "SKILL_049",
            "label": "ЯЗЫК C#"
          },
          {
            "value": "SKILL_050",
            "label": "Big Data"
          },
          {
            "value": "SKILL_051",
            "label": "BI Analytics"
          },
          {
            "value": "SKILL_052",
            "label": "BPMN"
          },
          {
            "value": "SKILL_053",
            "label": "Cisco"
          },
          {
            "value": "SKILL_054",
            "label": "Data Science"
          },
          {
            "value": "SKILL_055",
            "label": "Аналитика"
          },
          {
            "value": "SKILL_056",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ TCP"
          },
          {
            "value": "SKILL_057",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ HTTP"
          },
          {
            "value": "SKILL_058",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ IP"
          },
          {
            "value": "SKILL_059",
            "label": "ЯЗЫК KOTLIN"
          },
          {
            "value": "SKILL_060",
            "label": ".NET Framework"
          },
          {
            "value": "SKILL_061",
            "label": "Hibernate"
          },
          {
            "value": "SKILL_062",
            "label": "Java Database Connectivity (JDBC)"
          },
          {
            "value": "SKILL_063",
            "label": "Kubernetes"
          },
          {
            "value": "SKILL_064",
            "label": "Postman"
          },
          {
            "value": "SKILL_065",
            "label": "SPRING FRAMEWORK"
          },
          {
            "value": "SKILL_066",
            "label": "КОМПАС-3D"
          },
          {
            "value": "SKILL_067",
            "label": "ЯЗЫК JAVASCRIPT"
          },
          {
            "value": "SKILL_068",
            "label": "Pygame"
          },
          {
            "value": "SKILL_069",
            "label": "Django"
          },
          {
            "value": "SKILL_070",
            "label": "Apache Maven"
          },
          {
            "value": "SKILL_071",
            "label": "Битркис"
          },
          {
            "value": "SKILL_072",
            "label": "1С"
          },
          {
            "value": "SKILL_073",
            "label": "Altium Designer"
          },
          {
            "value": "SKILL_074",
            "label": "MicroCap"
          },
          {
            "value": "SKILL_075",
            "label": "Bootstrap"
          },
          {
            "value": "SKILL_076",
            "label": "CSS3"
          },
          {
            "value": "SKILL_077",
            "label": "Sass"
          },
          {
            "value": "SKILL_078",
            "label": "Adobe Illustrator"
          },
          {
            "value": "SKILL_079",
            "label": "Конструкторская документация"
          },
          {
            "value": "SKILL_080",
            "label": "3D"
          },
          {
            "value": "SKILL_081",
            "label": "MongoDB"
          },
          {
            "value": "SKILL_082",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_083",
            "label": "Autodesk Fusion 360"
          },
          {
            "value": "SKILL_084",
            "label": "САПР"
          },
          {
            "value": "SKILL_085",
            "label": "LabVIEW"
          },
          {
            "value": "SKILL_086",
            "label": "Микроконтроллеры"
          },
          {
            "value": "SKILL_087",
            "label": "Робототехника"
          },
          {
            "value": "SKILL_088",
            "label": "ЯЗЫК PHP"
          },
          {
            "value": "SKILL_089",
            "label": "Node.js"
          },
          {
            "value": "SKILL_090",
            "label": "NoSQL"
          },
          {
            "value": "SKILL_091",
            "label": "React.js"
          },
          {
            "value": "SKILL_092",
            "label": "TypeScript"
          },
          {
            "value": "SKILL_093",
            "label": "Vue js"
          },
          {
            "value": "SKILL_094",
            "label": "Mockito"
          },
          {
            "value": "SKILL_095",
            "label": "Ajax"
          },
          {
            "value": "SKILL_096",
            "label": "RISC-V"
          },
          {
            "value": "SKILL_097",
            "label": "Adobe InDesign"
          },
          {
            "value": "SKILL_098",
            "label": "БАЗОВЫЕ PIPELINE ДЛЯ СТЕКОВ В JS"
          },
          {
            "value": "SKILL_099",
            "label": "WordPress"
          },
          {
            "value": "SKILL_100",
            "label": "Simple DirectMedia Layer (SDL)"
          },
          {
            "value": "SKILL_101",
            "label": "GNU Octave"
          },
          {
            "value": "SKILL_102",
            "label": "P-Cad"
          },
          {
            "value": "SKILL_103",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_104",
            "label": "ANSYS"
          },
          {
            "value": "SKILL_105",
            "label": "Язык C"
          },
          {
            "value": "SKILL_106",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_107",
            "label": "Python"
          },
          {
            "value": "SKILL_108",
            "label": "PHP"
          },
          {
            "value": "SKILL_109",
            "label": "С++"
          },
          {
            "value": "SKILL_110",
            "label": "Java"
          },
          {
            "value": "SKILL_111",
            "label": "SQL"
          },
          {
            "value": "SKILL_112",
            "label": "C"
          },
          {
            "value": "SKILL_113",
            "label": "Не обладаю"
          },
          {
            "value": "SKILL_114",
            "label": "Kotlin"
          },
          {
            "value": "SKILL_115",
            "label": "JavaScript"
          },
          {
            "value": "SKILL_116",
            "label": "Visual Basic"
          },
          {
            "value": "SKILL_117",
            "label": "HTML"
          },
          {
            "value": "SKILL_118",
            "label": ".NET Core"
          },
          {
            "value": "SKILL_119",
            "label": "Angular"
          },
          {
            "value": "SKILL_120",
            "label": "Aura"
          },
          {
            "value": "SKILL_121",
            "label": "Backbone.JS"
          },
          {
            "value": "SKILL_122",
            "label": "Beego"
          },
          {
            "value": "SKILL_123",
            "label": "CakePHP"
          },
          {
            "value": "SKILL_124",
            "label": "CodeIgniter"
          },
          {
            "value": "SKILL_125",
            "label": "CSS"
          },
          {
            "value": "SKILL_126",
            "label": "Drupal"
          },
          {
            "value": "SKILL_127",
            "label": "ExpressJS"
          },
          {
            "value": "SKILL_128",
            "label": "FatFree"
          },
          {
            "value": "SKILL_129",
            "label": "Flask"
          },
          {
            "value": "SKILL_130",
            "label": "FuelPHP"
          },
          {
            "value": "SKILL_131",
            "label": "Gatsby"
          },
          {
            "value": "SKILL_132",
            "label": "Iris"
          },
          {
            "value": "SKILL_133",
            "label": "jQuery"
          },
          {
            "value": "SKILL_134",
            "label": "Koa"
          },
          {
            "value": "SKILL_135",
            "label": "Laravel"
          },
          {
            "value": "SKILL_136",
            "label": "Meteor"
          },
          {
            "value": "SKILL_137",
            "label": "NestJs"
          },
          {
            "value": "SKILL_138",
            "label": "Phalcon"
          },
          {
            "value": "SKILL_139",
            "label": "Ruby on Rails"
          },
          {
            "value": "SKILL_140",
            "label": "React js"
          },
          {
            "value": "SKILL_141",
            "label": "Slim"
          },
          {
            "value": "SKILL_142",
            "label": "Spring Boot"
          },
          {
            "value": "SKILL_143",
            "label": "Spring Framework"
          },
          {
            "value": "SKILL_144",
            "label": "Strapi"
          },
          {
            "value": "SKILL_145",
            "label": "Svelte"
          },
          {
            "value": "SKILL_146",
            "label": "Symfony"
          },
          {
            "value": "SKILL_147",
            "label": "Vue.js"
          },
          {
            "value": "SKILL_148",
            "label": "Yii"
          },
          {
            "value": "SKILL_149",
            "label": "Zend Framework"
          },
          {
            "value": "SKILL_150",
            "label": "PostgreSQL"
          },
          {
            "value": "SKILL_151",
            "label": "DB2"
          },
          {
            "value": "SKILL_152",
            "label": "Redis"
          },
          {
            "value": "SKILL_153",
            "label": "Microsoft Access"
          },
          {
            "value": "SKILL_154",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_155",
            "label": "Oracle"
          },
          {
            "value": "SKILL_156",
            "label": "Windows"
          },
          {
            "value": "SKILL_157",
            "label": "iOS"
          },
          {
            "value": "SKILL_158",
            "label": "MacOS"
          },
          {
            "value": "SKILL_159",
            "label": "CI/CD"
          },
          {
            "value": "SKILL_160",
            "label": "AWS"
          },
          {
            "value": "SKILL_161",
            "label": "Azure"
          },
          {
            "value": "SKILL_162",
            "label": "Anchore"
          },
          {
            "value": "SKILL_163",
            "label": "Ansible"
          },
          {
            "value": "SKILL_164",
            "label": "Argo CD"
          },
          {
            "value": "SKILL_165",
            "label": "Bamboo"
          },
          {
            "value": "SKILL_166",
            "label": "BitBucket"
          },
          {
            "value": "SKILL_167",
            "label": "Chef"
          },
          {
            "value": "SKILL_168",
            "label": "E2E"
          },
          {
            "value": "SKILL_169",
            "label": "GitHub"
          },
          {
            "value": "SKILL_170",
            "label": "GitLab"
          },
          {
            "value": "SKILL_171",
            "label": "integration"
          },
          {
            "value": "SKILL_172",
            "label": "Jenkins"
          },
          {
            "value": "SKILL_173",
            "label": "Octopus Deploy"
          },
          {
            "value": "SKILL_174",
            "label": "Puppet"
          },
          {
            "value": "SKILL_175",
            "label": "Spinnaker"
          },
          {
            "value": "SKILL_176",
            "label": "Sysdig"
          },
          {
            "value": "SKILL_177",
            "label": "TeamCity"
          },
          {
            "value": "SKILL_178",
            "label": "TwistLock"
          },
          {
            "value": "SKILL_179",
            "label": "Junit"
          },
          {
            "value": "SKILL_180",
            "label": "AssertJ"
          },
          {
            "value": "SKILL_181",
            "label": "Selenium"
          },
          {
            "value": "SKILL_182",
            "label": "JMeter"
          },
          {
            "value": "SKILL_183",
            "label": "SonarQube"
          },
          {
            "value": "SKILL_184",
            "label": "Битрикс"
          },
          {
            "value": "SKILL_185",
            "label": "padn"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "PROFESSION_01",
            "label": "DevOps-инженер"
          },
          {
            "value": "PROFESSION_02",
            "label": "Frontend разработчик"
          },
          {
            "value": "PROFESSION_03",
            "label": "Fullstack-разработчик"
          },
          {
            "value": "PROFESSION_04",
            "label": "Fullstack-разработчик на JavaScript"
          },
          {
            "value": "PROFESSION_05",
            "label": "Fullstack-разработчик на Python"
          },
          {
            "value": "PROFESSION_06",
            "label": "QA-инженер"
          },
          {
            "value": "PROFESSION_07",
            "label": "UI-дизайнер"
          },
          {
            "value": "PROFESSION_08",
            "label": "UX-дизайнер"
          },
          {
            "value": "PROFESSION_09",
            "label": "Аналитик"
          },
          {
            "value": "PROFESSION_10",
            "label": "Архитектор информационных систем"
          },
          {
            "value": "PROFESSION_11",
            "label": "Специалист по Баллистике"
          },
          {
            "value": "PROFESSION_12",
            "label": "Бизнес-аналитик"
          },
          {
            "value": "PROFESSION_13",
            "label": "Бэкенд-разработчик (Back-end developer)"
          },
          {
            "value": "PROFESSION_14",
            "label": "Веб-программист"
          },
          {
            "value": "PROFESSION_15",
            "label": "Инженер по проектированию информационно-аналитических систем"
          },
          {
            "value": "PROFESSION_16",
            "label": "Инженер по разработке ТД"
          },
          {
            "value": "PROFESSION_17",
            "label": "Инженер-конструктор"
          },
          {
            "value": "PROFESSION_18",
            "label": "Инженер-программист"
          },
          {
            "value": "PROFESSION_19",
            "label": "Инженер-проектировщик"
          },
          {
            "value": "PROFESSION_20",
            "label": "Инженер-электроник"
          },
          {
            "value": "PROFESSION_21",
            "label": "Младший аналитик (программный/системный)"
          },
          {
            "value": "PROFESSION_22",
            "label": "Мобильный разработчик(mobile)"
          },
          {
            "value": "PROFESSION_23",
            "label": "Специалист по Навигации"
          },
          {
            "value": "PROFESSION_24",
            "label": "Программист C++"
          },
          {
            "value": "PROFESSION_25",
            "label": "Программист Java"
          },
          {
            "value": "PROFESSION_26",
            "label": "Программист JavaScript"
          },
          {
            "value": "PROFESSION_27",
            "label": "Программист Python"
          },
          {
            "value": "PROFESSION_28",
            "label": "Специалист по Радиолокации"
          },
          {
            "value": "PROFESSION_29",
            "label": "Разработчик 1С"
          },
          {
            "value": "PROFESSION_30",
            "label": "Системный администратор"
          },
          {
            "value": "PROFESSION_31",
            "label": "Системный аналитик"
          },
          {
            "value": "PROFESSION_32",
            "label": "Системный инженер"
          },
          {
            "value": "PROFESSION_33",
            "label": "Системный программист"
          },
          {
            "value": "PROFESSION_34",
            "label": "Специалист по защите информации"
          },
          {
            "value": "PROFESSION_35",
            "label": "Специалист по информационной безопасности"
          },
          {
            "value": "PROFESSION_36",
            "label": "Специалист по информационным системам"
          },
          {
            "value": "PROFESSION_37",
            "label": "Специалист по машинному обучению (ML-специалист)"
          },
          {
            "value": "PROFESSION_38",
            "label": "Тестировщик программного обеспечения (ПО)"
          },
          {
            "value": "PROFESSION_39",
            "label": "Специалист по Телеметрии"
          },
          {
            "value": "PROFESSION_40",
            "label": "Технический писатель"
          },
          {
            "value": "PROFESSION_41",
            "label": "Менеджер"
          },
          {
            "value": "PROFESSION_42",
            "label": "Менеджер по работе с клиентами"
          },
          {
            "value": "PROFESSION_43",
            "label": "Другое"
          },
          {
            "value": "PROFESSION_44",
            "label": "Программист"
          },
          {
            "value": "PROFESSION_45",
            "label": "Инженер по системам связи и передачи данных"
          },
          {
            "value": "PROFESSION_46",
            "label": "Тимлид (Team leader)"
          },
          {
            "value": "PROFESSION_47",
            "label": "Дизайнер компьютерной графики"
          },
          {
            "value": "PROFESSION_48",
            "label": "Tech Lead (техлид)"
          },
          {
            "value": "PROFESSION_49",
            "label": "Руководитель/Зам.рук. проекта"
          },
          {
            "value": "PROFESSION_50",
            "label": "Главный конструктор /Зам."
          },
          {
            "value": "PROFESSION_51",
            "label": "Инженер ОТК"
          },
          {
            "value": "PROFESSION_52",
            "label": "Юзабилити-специалист"
          },
          {
            "value": "PROFESSION_53",
            "label": "Специалист Телеметрии"
          }
        ]
      },
      {
        "name": "travelAvailability",
        "label": "Travel Availability",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "LONG_PERIOD_DURING_YEAR",
            "label": "Да, готов на длительный период в течении года"
          },
          {
            "value": "LONG_PERIOD_IN_SUMMER",
            "label": "Да, готов на длительный период летом"
          },
          {
            "value": "UP_TO_TWO_THREE_WEEKS_PER_MONTH",
            "label": "Да, но не более 2-3 недель/месяц"
          },
          {
            "value": "UP_TO_ONE_WEEK_PER_MONTH",
            "label": "Да, но не более 1 недели/месяц"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "PLAYER",
            "label": "Игрок"
          },
          {
            "value": "SECOND",
            "label": "Секундант"
          },
          {
            "value": "JUDGE",
            "label": "Судья"
          },
          {
            "value": "OBSERVER",
            "label": "Наблюдатель"
          }
        ]
      },
      {
        "name": "meetingDate",
        "label": "Meeting Date",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "DATE_2026_01_29",
            "label": "DATE_2026_01_29"
          },
          {
            "value": "DATE_2025_12_09",
            "label": "DATE_2025_12_09"
          },
          {
            "value": "DATE_2025_10_23",
            "label": "DATE_2025_10_23"
          },
          {
            "value": "DATE_2025_09_24",
            "label": "DATE_2025_09_24"
          },
          {
            "value": "DATE_2025_08_27",
            "label": "DATE_2025_08_27"
          },
          {
            "value": "DATE_2025_08_15",
            "label": "DATE_2025_08_15"
          },
          {
            "value": "DATE_2025_07_29",
            "label": "DATE_2025_07_29"
          },
          {
            "value": "DATE_2025_07_17",
            "label": "DATE_2025_07_17"
          },
          {
            "value": "DATE_2025_07_03",
            "label": "DATE_2025_07_03"
          },
          {
            "value": "DATE_2025_06_17",
            "label": "DATE_2025_06_17"
          },
          {
            "value": "DATE_2025_05_27",
            "label": "DATE_2025_05_27"
          },
          {
            "value": "DATE_2025_04_29",
            "label": "DATE_2025_04_29"
          },
          {
            "value": "DATE_2025_03_28",
            "label": "DATE_2025_03_28"
          },
          {
            "value": "DATE_2025_01_29",
            "label": "DATE_2025_01_29"
          },
          {
            "value": "DATE_2024_11_11",
            "label": "DATE_2024_11_11"
          },
          {
            "value": "DATE_2024_10_23",
            "label": "DATE_2024_10_23"
          },
          {
            "value": "DATE_2026_03_25",
            "label": "DATE_2026_03_25"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "CURATOR",
            "label": "КУРАТОР"
          },
          {
            "value": "AVDEEV_GEORGIY_VALERYEVICH",
            "label": "Авдеев Георгий Валерьевич"
          },
          {
            "value": "KLIMINA_TAISIYA_MAKSIMOVNA",
            "label": "Климина Таисия Максимовна"
          },
          {
            "value": "LARIONOVA_EKATERINA_ANDREEVNA",
            "label": "Ларионова Екатерина Андреевна"
          },
          {
            "value": "LUKIN_ARTYOM_ANDREEVICH",
            "label": "Лукин Артём Андреевич"
          },
          {
            "value": "PULINA_ANGELINA_SERGEEVNA",
            "label": "Пулина Ангелина Сергеевна"
          },
          {
            "value": "RYAZANOV_DANIL_ALEKSANDROVICH",
            "label": "Рязанов Данил Александрович"
          },
          {
            "value": "SHIROKOV_KIRILL_SERGEEVICH",
            "label": "Широков Кирилл Сергеевич"
          },
          {
            "value": "SHKUROPAT_PAVEL_KONSTANTINOVICH",
            "label": "Шкуропат Павел Константинович"
          },
          {
            "value": "ASSISTANT",
            "label": "АССИСТЕНТ"
          },
          {
            "value": "NOT_REQUIRED",
            "label": "НЕ ТРЕБУЕТСЯ"
          }
        ]
      },
      {
        "name": "communication",
        "label": "Communication",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "organizationalSkills",
        "label": "Organizational Skills",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "discipline",
        "label": "Discipline",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "leadership",
        "label": "Leadership",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "selfMotivation",
        "label": "Self Motivation",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "loyalty",
        "label": "Loyalty",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "motivationOfOthers",
        "label": "Motivation Of Others",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "REJECTED",
            "label": "ОТКАЗ"
          },
          {
            "value": "RESERVED",
            "label": "РЕЗЕРВ"
          },
          {
            "value": "POSTPONED",
            "label": "ПЕРЕНЕСЕНО"
          },
          {
            "value": "NEW_APPLICATION",
            "label": "НОВАЯ ЗАЯВКА"
          }
        ]
      },
      {
        "name": "roles",
        "label": "Roles",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "DEVELOPER",
            "label": "Developer"
          },
          {
            "value": "ANALYST",
            "label": "Analyst"
          },
          {
            "value": "FARMER",
            "label": "Farmer"
          },
          {
            "value": "TEAM_LEAD",
            "label": "TeamLead"
          }
        ]
      },
      {
        "name": "desiredPositions",
        "label": "Desired Positions",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "PYTHON_DEVELOPER",
            "label": "Python разработчик"
          },
          {
            "value": "JAVA_DEVELOPER",
            "label": "Java разработчик"
          },
          {
            "value": "OTHER",
            "label": "Другое"
          },
          {
            "value": "DEVOPS",
            "label": "DevOps"
          },
          {
            "value": "PHP_DEVELOPER",
            "label": "PHP разработчик"
          },
          {
            "value": "FRONTEND_DEVELOPER",
            "label": "Frontend разработчик"
          },
          {
            "value": "GOLANG_DEVELOPER",
            "label": "Golang разработчик"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "PROJECT_001",
            "label": "AI. YandexGPT"
          },
          {
            "value": "PROJECT_002",
            "label": "AI. Adobe Firefly"
          },
          {
            "value": "PROJECT_003",
            "label": "AI. ChatGPT"
          },
          {
            "value": "PROJECT_004",
            "label": "AI. Clipdrop"
          },
          {
            "value": "PROJECT_005",
            "label": "AI. DALL-E"
          },
          {
            "value": "PROJECT_006",
            "label": "AI. GigaChat"
          },
          {
            "value": "PROJECT_007",
            "label": "AI. Google Gemini"
          },
          {
            "value": "PROJECT_008",
            "label": "AI. GPT Store"
          },
          {
            "value": "PROJECT_009",
            "label": "AI. Kandinsky"
          },
          {
            "value": "PROJECT_010",
            "label": "AI. Midjourney"
          },
          {
            "value": "PROJECT_011",
            "label": "AI. Stable Diffusion"
          },
          {
            "value": "PROJECT_012",
            "label": "AI. Нейронные сети"
          },
          {
            "value": "PROJECT_013",
            "label": "SMM и PR. PR под ключ"
          },
          {
            "value": "PROJECT_014",
            "label": "SMM и PR. SMM под ключ"
          },
          {
            "value": "PROJECT_015",
            "label": "SMM и PR. Ведение страниц и групп в соцсетях"
          },
          {
            "value": "PROJECT_016",
            "label": "SMM и PR. Обеспечение публикаций в СМИ"
          },
          {
            "value": "PROJECT_017",
            "label": "SMM и PR. Разрабокта SMM-стратегии"
          },
          {
            "value": "PROJECT_018",
            "label": "SMM и PR. Разработка PR-стратегии"
          },
          {
            "value": "PROJECT_019",
            "label": "SMM и PR. Управление репутацией в интернете (ORM)"
          },
          {
            "value": "PROJECT_020",
            "label": "Дизайн и брендинг. 3D моделирование"
          },
          {
            "value": "PROJECT_021",
            "label": "Дизайн и брендинг. Брендинг"
          },
          {
            "value": "PROJECT_022",
            "label": "Дизайн и брендинг. Иллюстрации"
          },
          {
            "value": "PROJECT_023",
            "label": "Дизайн и брендинг. Инфографика"
          },
          {
            "value": "PROJECT_024",
            "label": "Дизайн и брендинг. Промышленный дизайн"
          },
          {
            "value": "PROJECT_025",
            "label": "Дизайн и брендинг. Разрабокта логотипа"
          },
          {
            "value": "PROJECT_026",
            "label": "Дизайн и брендинг. Упаковка и этикетка"
          },
          {
            "value": "PROJECT_027",
            "label": "Дизайн и брендинг. Фирменный стиль"
          },
          {
            "value": "PROJECT_028",
            "label": "Игры. 2D-графика для игр"
          },
          {
            "value": "PROJECT_029",
            "label": "Игры. 3D-графика для игр"
          },
          {
            "value": "PROJECT_030",
            "label": "Игры. HeroEngine"
          },
          {
            "value": "PROJECT_031",
            "label": "Игры. PlayStation"
          },
          {
            "value": "PROJECT_032",
            "label": "Игры. Project Anarchy"
          },
          {
            "value": "PROJECT_033",
            "label": "Игры. Unity"
          },
          {
            "value": "PROJECT_034",
            "label": "Игры. Unreal Engine"
          },
          {
            "value": "PROJECT_035",
            "label": "Игры. Xbox"
          },
          {
            "value": "PROJECT_036",
            "label": "Игры. Геймдизайнер"
          },
          {
            "value": "PROJECT_037",
            "label": "Игры. Игры для Android"
          },
          {
            "value": "PROJECT_038",
            "label": "Игры. Игры для iOS"
          },
          {
            "value": "PROJECT_039",
            "label": "Игры. Программирование игр"
          },
          {
            "value": "PROJECT_040",
            "label": "Игры. Продвижение игр"
          },
          {
            "value": "PROJECT_041",
            "label": "Игры. Продюсер игр"
          },
          {
            "value": "PROJECT_042",
            "label": "Игры. Разработка игр под ключ"
          },
          {
            "value": "PROJECT_043",
            "label": "Игры. Тестирование игр (QA)"
          },
          {
            "value": "PROJECT_044",
            "label": "Контент. Копирайтинг"
          },
          {
            "value": "PROJECT_045",
            "label": "Контент. Размещение контента"
          },
          {
            "value": "PROJECT_046",
            "label": "Контент. Редактура"
          },
          {
            "value": "PROJECT_047",
            "label": "Контент. Тексты на иностранных языках"
          },
          {
            "value": "PROJECT_048",
            "label": "Контент. Фото и видео"
          },
          {
            "value": "PROJECT_049",
            "label": "Маркетинг. E-mail маркетинг"
          },
          {
            "value": "PROJECT_050",
            "label": "Маркетинг. Performance-маркетинг"
          },
          {
            "value": "PROJECT_051",
            "label": "Маркетинг. Вирусный маркетинг"
          },
          {
            "value": "PROJECT_052",
            "label": "Маркетинг. Комплексный маркетинг"
          },
          {
            "value": "PROJECT_053",
            "label": "Маркетинг. Контент-маркетинг"
          },
          {
            "value": "PROJECT_054",
            "label": "Маркетинг. Позиционирование"
          },
          {
            "value": "PROJECT_055",
            "label": "Мобильные приложения. Cordova"
          },
          {
            "value": "PROJECT_056",
            "label": "Мобильные приложения. Flutter"
          },
          {
            "value": "PROJECT_057",
            "label": "Мобильные приложения. Ionic Framework"
          },
          {
            "value": "PROJECT_058",
            "label": "Мобильные приложения. React Native"
          },
          {
            "value": "PROJECT_059",
            "label": "Мобильные приложения. Xamarin"
          },
          {
            "value": "PROJECT_060",
            "label": "Мобильные приложения. Дизайн приложений"
          },
          {
            "value": "PROJECT_061",
            "label": "Мобильные приложения. Поддержка и развитие"
          },
          {
            "value": "PROJECT_062",
            "label": "Мобильные приложения. Приложение под ключ"
          },
          {
            "value": "PROJECT_063",
            "label": "Мобильные приложения. Приложения для Android"
          },
          {
            "value": "PROJECT_064",
            "label": "Мобильные приложения. Приложения для iOS"
          },
          {
            "value": "PROJECT_065",
            "label": "Мобильные приложения. Продвижение в AppStore"
          },
          {
            "value": "PROJECT_066",
            "label": "Мобильные приложения. Продвижение в Google Play Store"
          },
          {
            "value": "PROJECT_067",
            "label": "Мобильные приложения. Продвижение в Huawei AppGallery"
          },
          {
            "value": "PROJECT_068",
            "label": "Мобильные приложения. Продвижение в RuStore"
          },
          {
            "value": "PROJECT_069",
            "label": "Мобильные приложения. Редизайн приложений"
          },
          {
            "value": "PROJECT_070",
            "label": "ПО. Telegram Mini Apps"
          },
          {
            "value": "PROJECT_071",
            "label": "ПО. Администрирование серверов"
          },
          {
            "value": "PROJECT_072",
            "label": "ПО. Внедрение и поддержка CRM"
          },
          {
            "value": "PROJECT_073",
            "label": "ПО. Проектирование и дизайн CRM"
          },
          {
            "value": "PROJECT_074",
            "label": "ПО. Разрабокта и поддержка 1С"
          },
          {
            "value": "PROJECT_075",
            "label": "ПО. Разработка программного обеспечения"
          },
          {
            "value": "PROJECT_076",
            "label": "ПО. Разработка чат-ботов"
          },
          {
            "value": "PROJECT_077",
            "label": "Поисковая оптимизация. SEO-аудит сайта"
          },
          {
            "value": "PROJECT_078",
            "label": "Поисковая оптимизация. SEO под ключ"
          },
          {
            "value": "PROJECT_079",
            "label": "Поисковая оптимизация. SEO по позициям"
          },
          {
            "value": "PROJECT_080",
            "label": "Поисковая оптимизация. SEO по трафику"
          },
          {
            "value": "PROJECT_081",
            "label": "Поисковая оптимизация. SEO-проектирование"
          },
          {
            "value": "PROJECT_082",
            "label": "Поисковая оптимизация. Внешняя оптимизация сайта"
          },
          {
            "value": "PROJECT_083",
            "label": "Поисковая оптимизация. Внутренняя оптимизация сайта"
          },
          {
            "value": "PROJECT_084",
            "label": "Поисковая оптимизация. Вывод сайта из под фильтров"
          },
          {
            "value": "PROJECT_085",
            "label": "Поисковая оптимизация. Продвижение по лидам"
          },
          {
            "value": "PROJECT_086",
            "label": "Поисковая оптимизация. Управление репутацией (SERM)"
          },
          {
            "value": "PROJECT_087",
            "label": "Разработка сайтов. HTML верстка"
          },
          {
            "value": "PROJECT_088",
            "label": "Разработка сайтов. Дизайн сайта"
          },
          {
            "value": "PROJECT_089",
            "label": "Разработка сайтов. Поддержка и развитие сайта"
          },
          {
            "value": "PROJECT_090",
            "label": "Разработка сайтов. Программирование сайта"
          },
          {
            "value": "PROJECT_091",
            "label": "Разработка сайтов. Проектирование сайта"
          },
          {
            "value": "PROJECT_092",
            "label": "Разработка сайтов. Сайт под ключ"
          },
          {
            "value": "PROJECT_093",
            "label": "Разработка сайтов. Тестирование сайта"
          },
          {
            "value": "PROJECT_094",
            "label": "Реклама. Аудиореклама"
          },
          {
            "value": "PROJECT_095",
            "label": "Реклама. Баннерная реклама"
          },
          {
            "value": "PROJECT_096",
            "label": "Реклама. Видеореклама"
          },
          {
            "value": "PROJECT_097",
            "label": "Реклама. Контекстная реклама"
          },
          {
            "value": "PROJECT_098",
            "label": "Реклама. Медийная реклама"
          },
          {
            "value": "PROJECT_099",
            "label": "Реклама. Реклама в мобильных приложениях"
          },
          {
            "value": "PROJECT_100",
            "label": "Реклама. Реклама в социальных сетях"
          },
          {
            "value": "PROJECT_101",
            "label": "Реклама. Таргетированная реклама"
          },
          {
            "value": "PROJECT_102",
            "label": "Тестирование. Мобайл"
          },
          {
            "value": "PROJECT_103",
            "label": "Тестирование. Сайты"
          },
          {
            "value": "PROJECT_104",
            "label": "Тестирование. Софт"
          }
        ]
      },
      {
        "name": "programmingSkills",
        "label": "Programming Skills",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "SKILL_001",
            "label": "Linux"
          },
          {
            "value": "SKILL_002",
            "label": "MS Word"
          },
          {
            "value": "SKILL_003",
            "label": "Ubuntu"
          },
          {
            "value": "SKILL_004",
            "label": "ОС Astra Linux"
          },
          {
            "value": "SKILL_005",
            "label": "Assembler"
          },
          {
            "value": "SKILL_006",
            "label": "GIT"
          },
          {
            "value": "SKILL_007",
            "label": "DOCKER"
          },
          {
            "value": "SKILL_008",
            "label": "JSON"
          },
          {
            "value": "SKILL_009",
            "label": "Machine learning"
          },
          {
            "value": "SKILL_010",
            "label": "Mathematical Analysis"
          },
          {
            "value": "SKILL_011",
            "label": "Matplotlib"
          },
          {
            "value": "SKILL_012",
            "label": "MS Power Point"
          },
          {
            "value": "SKILL_013",
            "label": "MySQL"
          },
          {
            "value": "SKILL_014",
            "label": "NumPy"
          },
          {
            "value": "SKILL_015",
            "label": "Pandas"
          },
          {
            "value": "SKILL_016",
            "label": "PyCharm"
          },
          {
            "value": "SKILL_017",
            "label": "Scikit-learn"
          },
          {
            "value": "SKILL_018",
            "label": "UX/UI"
          },
          {
            "value": "SKILL_019",
            "label": "БИБЛИОТЕКА QT5"
          },
          {
            "value": "SKILL_020",
            "label": "Искусственный интеллект (ИИ)"
          },
          {
            "value": "SKILL_021",
            "label": "РАЗМЕТКИ HTML"
          },
          {
            "value": "SKILL_022",
            "label": "СТИЛИ CSS"
          },
          {
            "value": "SKILL_023",
            "label": "СУБД POSTGRESQL"
          },
          {
            "value": "SKILL_024",
            "label": "СУБД SQLITE"
          },
          {
            "value": "SKILL_025",
            "label": "ЯЗЫК C++"
          },
          {
            "value": "SKILL_026",
            "label": "ЯЗЫК PYTHON"
          },
          {
            "value": "SKILL_027",
            "label": "ЯЗЫК С"
          },
          {
            "value": "SKILL_028",
            "label": "Tilda"
          },
          {
            "value": "SKILL_029",
            "label": "JavaFX"
          },
          {
            "value": "SKILL_030",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_031",
            "label": "MathCAD"
          },
          {
            "value": "SKILL_032",
            "label": "MS Excel"
          },
          {
            "value": "SKILL_033",
            "label": "Visual Studio"
          },
          {
            "value": "SKILL_034",
            "label": "ЯЗЫК JAVA"
          },
          {
            "value": "SKILL_035",
            "label": "Adobe Premiere Pro"
          },
          {
            "value": "SKILL_036",
            "label": "MS Office"
          },
          {
            "value": "SKILL_037",
            "label": "Corel Draw"
          },
          {
            "value": "SKILL_038",
            "label": "Photoshop"
          },
          {
            "value": "SKILL_039",
            "label": "Google Docs"
          },
          {
            "value": "SKILL_040",
            "label": "AutoCAD"
          },
          {
            "value": "SKILL_041",
            "label": "Autodesk Revit"
          },
          {
            "value": "SKILL_042",
            "label": "SolidWorks"
          },
          {
            "value": "SKILL_043",
            "label": "Adobe After Effects"
          },
          {
            "value": "SKILL_044",
            "label": "Android"
          },
          {
            "value": "SKILL_045",
            "label": "Figma"
          },
          {
            "value": "SKILL_046",
            "label": "Jira"
          },
          {
            "value": "SKILL_047",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_048",
            "label": "Ms Outlook"
          },
          {
            "value": "SKILL_049",
            "label": "ЯЗЫК C#"
          },
          {
            "value": "SKILL_050",
            "label": "Big Data"
          },
          {
            "value": "SKILL_051",
            "label": "BI Analytics"
          },
          {
            "value": "SKILL_052",
            "label": "BPMN"
          },
          {
            "value": "SKILL_053",
            "label": "Cisco"
          },
          {
            "value": "SKILL_054",
            "label": "Data Science"
          },
          {
            "value": "SKILL_055",
            "label": "Аналитика"
          },
          {
            "value": "SKILL_056",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ TCP"
          },
          {
            "value": "SKILL_057",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ HTTP"
          },
          {
            "value": "SKILL_058",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ IP"
          },
          {
            "value": "SKILL_059",
            "label": "ЯЗЫК KOTLIN"
          },
          {
            "value": "SKILL_060",
            "label": ".NET Framework"
          },
          {
            "value": "SKILL_061",
            "label": "Hibernate"
          },
          {
            "value": "SKILL_062",
            "label": "Java Database Connectivity (JDBC)"
          },
          {
            "value": "SKILL_063",
            "label": "Kubernetes"
          },
          {
            "value": "SKILL_064",
            "label": "Postman"
          },
          {
            "value": "SKILL_065",
            "label": "SPRING FRAMEWORK"
          },
          {
            "value": "SKILL_066",
            "label": "КОМПАС-3D"
          },
          {
            "value": "SKILL_067",
            "label": "ЯЗЫК JAVASCRIPT"
          },
          {
            "value": "SKILL_068",
            "label": "Pygame"
          },
          {
            "value": "SKILL_069",
            "label": "Django"
          },
          {
            "value": "SKILL_070",
            "label": "Apache Maven"
          },
          {
            "value": "SKILL_071",
            "label": "Битркис"
          },
          {
            "value": "SKILL_072",
            "label": "1С"
          },
          {
            "value": "SKILL_073",
            "label": "Altium Designer"
          },
          {
            "value": "SKILL_074",
            "label": "MicroCap"
          },
          {
            "value": "SKILL_075",
            "label": "Bootstrap"
          },
          {
            "value": "SKILL_076",
            "label": "CSS3"
          },
          {
            "value": "SKILL_077",
            "label": "Sass"
          },
          {
            "value": "SKILL_078",
            "label": "Adobe Illustrator"
          },
          {
            "value": "SKILL_079",
            "label": "Конструкторская документация"
          },
          {
            "value": "SKILL_080",
            "label": "3D"
          },
          {
            "value": "SKILL_081",
            "label": "MongoDB"
          },
          {
            "value": "SKILL_082",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_083",
            "label": "Autodesk Fusion 360"
          },
          {
            "value": "SKILL_084",
            "label": "САПР"
          },
          {
            "value": "SKILL_085",
            "label": "LabVIEW"
          },
          {
            "value": "SKILL_086",
            "label": "Микроконтроллеры"
          },
          {
            "value": "SKILL_087",
            "label": "Робототехника"
          },
          {
            "value": "SKILL_088",
            "label": "ЯЗЫК PHP"
          },
          {
            "value": "SKILL_089",
            "label": "Node.js"
          },
          {
            "value": "SKILL_090",
            "label": "NoSQL"
          },
          {
            "value": "SKILL_091",
            "label": "React.js"
          },
          {
            "value": "SKILL_092",
            "label": "TypeScript"
          },
          {
            "value": "SKILL_093",
            "label": "Vue js"
          },
          {
            "value": "SKILL_094",
            "label": "Mockito"
          },
          {
            "value": "SKILL_095",
            "label": "Ajax"
          },
          {
            "value": "SKILL_096",
            "label": "RISC-V"
          },
          {
            "value": "SKILL_097",
            "label": "Adobe InDesign"
          },
          {
            "value": "SKILL_098",
            "label": "БАЗОВЫЕ PIPELINE ДЛЯ СТЕКОВ В JS"
          },
          {
            "value": "SKILL_099",
            "label": "WordPress"
          },
          {
            "value": "SKILL_100",
            "label": "Simple DirectMedia Layer (SDL)"
          },
          {
            "value": "SKILL_101",
            "label": "GNU Octave"
          },
          {
            "value": "SKILL_102",
            "label": "P-Cad"
          },
          {
            "value": "SKILL_103",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_104",
            "label": "ANSYS"
          },
          {
            "value": "SKILL_105",
            "label": "Язык C"
          },
          {
            "value": "SKILL_106",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_107",
            "label": "Python"
          },
          {
            "value": "SKILL_108",
            "label": "PHP"
          },
          {
            "value": "SKILL_109",
            "label": "С++"
          },
          {
            "value": "SKILL_110",
            "label": "Java"
          },
          {
            "value": "SKILL_111",
            "label": "SQL"
          },
          {
            "value": "SKILL_112",
            "label": "C"
          },
          {
            "value": "SKILL_113",
            "label": "Не обладаю"
          },
          {
            "value": "SKILL_114",
            "label": "Kotlin"
          },
          {
            "value": "SKILL_115",
            "label": "JavaScript"
          },
          {
            "value": "SKILL_116",
            "label": "Visual Basic"
          },
          {
            "value": "SKILL_117",
            "label": "HTML"
          },
          {
            "value": "SKILL_118",
            "label": ".NET Core"
          },
          {
            "value": "SKILL_119",
            "label": "Angular"
          },
          {
            "value": "SKILL_120",
            "label": "Aura"
          },
          {
            "value": "SKILL_121",
            "label": "Backbone.JS"
          },
          {
            "value": "SKILL_122",
            "label": "Beego"
          },
          {
            "value": "SKILL_123",
            "label": "CakePHP"
          },
          {
            "value": "SKILL_124",
            "label": "CodeIgniter"
          },
          {
            "value": "SKILL_125",
            "label": "CSS"
          },
          {
            "value": "SKILL_126",
            "label": "Drupal"
          },
          {
            "value": "SKILL_127",
            "label": "ExpressJS"
          },
          {
            "value": "SKILL_128",
            "label": "FatFree"
          },
          {
            "value": "SKILL_129",
            "label": "Flask"
          },
          {
            "value": "SKILL_130",
            "label": "FuelPHP"
          },
          {
            "value": "SKILL_131",
            "label": "Gatsby"
          },
          {
            "value": "SKILL_132",
            "label": "Iris"
          },
          {
            "value": "SKILL_133",
            "label": "jQuery"
          },
          {
            "value": "SKILL_134",
            "label": "Koa"
          },
          {
            "value": "SKILL_135",
            "label": "Laravel"
          },
          {
            "value": "SKILL_136",
            "label": "Meteor"
          },
          {
            "value": "SKILL_137",
            "label": "NestJs"
          },
          {
            "value": "SKILL_138",
            "label": "Phalcon"
          },
          {
            "value": "SKILL_139",
            "label": "Ruby on Rails"
          },
          {
            "value": "SKILL_140",
            "label": "React js"
          },
          {
            "value": "SKILL_141",
            "label": "Slim"
          },
          {
            "value": "SKILL_142",
            "label": "Spring Boot"
          },
          {
            "value": "SKILL_143",
            "label": "Spring Framework"
          },
          {
            "value": "SKILL_144",
            "label": "Strapi"
          },
          {
            "value": "SKILL_145",
            "label": "Svelte"
          },
          {
            "value": "SKILL_146",
            "label": "Symfony"
          },
          {
            "value": "SKILL_147",
            "label": "Vue.js"
          },
          {
            "value": "SKILL_148",
            "label": "Yii"
          },
          {
            "value": "SKILL_149",
            "label": "Zend Framework"
          },
          {
            "value": "SKILL_150",
            "label": "PostgreSQL"
          },
          {
            "value": "SKILL_151",
            "label": "DB2"
          },
          {
            "value": "SKILL_152",
            "label": "Redis"
          },
          {
            "value": "SKILL_153",
            "label": "Microsoft Access"
          },
          {
            "value": "SKILL_154",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_155",
            "label": "Oracle"
          },
          {
            "value": "SKILL_156",
            "label": "Windows"
          },
          {
            "value": "SKILL_157",
            "label": "iOS"
          },
          {
            "value": "SKILL_158",
            "label": "MacOS"
          },
          {
            "value": "SKILL_159",
            "label": "CI/CD"
          },
          {
            "value": "SKILL_160",
            "label": "AWS"
          },
          {
            "value": "SKILL_161",
            "label": "Azure"
          },
          {
            "value": "SKILL_162",
            "label": "Anchore"
          },
          {
            "value": "SKILL_163",
            "label": "Ansible"
          },
          {
            "value": "SKILL_164",
            "label": "Argo CD"
          },
          {
            "value": "SKILL_165",
            "label": "Bamboo"
          },
          {
            "value": "SKILL_166",
            "label": "BitBucket"
          },
          {
            "value": "SKILL_167",
            "label": "Chef"
          },
          {
            "value": "SKILL_168",
            "label": "E2E"
          },
          {
            "value": "SKILL_169",
            "label": "GitHub"
          },
          {
            "value": "SKILL_170",
            "label": "GitLab"
          },
          {
            "value": "SKILL_171",
            "label": "integration"
          },
          {
            "value": "SKILL_172",
            "label": "Jenkins"
          },
          {
            "value": "SKILL_173",
            "label": "Octopus Deploy"
          },
          {
            "value": "SKILL_174",
            "label": "Puppet"
          },
          {
            "value": "SKILL_175",
            "label": "Spinnaker"
          },
          {
            "value": "SKILL_176",
            "label": "Sysdig"
          },
          {
            "value": "SKILL_177",
            "label": "TeamCity"
          },
          {
            "value": "SKILL_178",
            "label": "TwistLock"
          },
          {
            "value": "SKILL_179",
            "label": "Junit"
          },
          {
            "value": "SKILL_180",
            "label": "AssertJ"
          },
          {
            "value": "SKILL_181",
            "label": "Selenium"
          },
          {
            "value": "SKILL_182",
            "label": "JMeter"
          },
          {
            "value": "SKILL_183",
            "label": "SonarQube"
          },
          {
            "value": "SKILL_184",
            "label": "Битрикс"
          },
          {
            "value": "SKILL_185",
            "label": "padn"
          }
        ]
      },
      {
        "name": "knowledgeLevels",
        "label": "Knowledge Levels",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "LEVEL_001",
            "label": "Не обладаю"
          },
          {
            "value": "LEVEL_002",
            "label": "JavaScript (Начальный)"
          },
          {
            "value": "LEVEL_003",
            "label": "JavaScript (Низкий)"
          },
          {
            "value": "LEVEL_004",
            "label": "JavaScript (Средний)"
          },
          {
            "value": "LEVEL_005",
            "label": "JavaScript (Выше среднего)"
          },
          {
            "value": "LEVEL_006",
            "label": "Python (Начальный)"
          },
          {
            "value": "LEVEL_007",
            "label": "Python (Низкий)"
          },
          {
            "value": "LEVEL_008",
            "label": "Python (Средний)"
          },
          {
            "value": "LEVEL_009",
            "label": "Python (Выше среднего)"
          },
          {
            "value": "LEVEL_010",
            "label": "C# (Начальный)"
          },
          {
            "value": "LEVEL_011",
            "label": "C# (Низкий)"
          },
          {
            "value": "LEVEL_012",
            "label": "C# (Средний)"
          },
          {
            "value": "LEVEL_013",
            "label": "C# (Выше среднего)"
          },
          {
            "value": "LEVEL_014",
            "label": "Java (Начальный)"
          },
          {
            "value": "LEVEL_015",
            "label": "Java (Низкий)"
          },
          {
            "value": "LEVEL_016",
            "label": "Java (Средний)"
          },
          {
            "value": "LEVEL_017",
            "label": "Java (Выше среднего)"
          },
          {
            "value": "LEVEL_018",
            "label": "С++ (Начальный)"
          },
          {
            "value": "LEVEL_019",
            "label": "С++ (Низкий)"
          },
          {
            "value": "LEVEL_020",
            "label": "С++ (Средний)"
          },
          {
            "value": "LEVEL_021",
            "label": "С++ (Выше среднего)"
          },
          {
            "value": "LEVEL_022",
            "label": "C (Начальный)"
          },
          {
            "value": "LEVEL_023",
            "label": "C (Низкий)"
          },
          {
            "value": "LEVEL_024",
            "label": "C (Средний)"
          },
          {
            "value": "LEVEL_025",
            "label": "C (Выше среднего)"
          },
          {
            "value": "LEVEL_026",
            "label": "PHP (Начальный)"
          },
          {
            "value": "LEVEL_027",
            "label": "PHP (Низкий)"
          },
          {
            "value": "LEVEL_028",
            "label": "PHP (Средний)"
          },
          {
            "value": "LEVEL_029",
            "label": "PHP (Выше среднего)"
          },
          {
            "value": "LEVEL_030",
            "label": "Kotlin (Начальный)"
          },
          {
            "value": "LEVEL_031",
            "label": "Kotlin (Низкий)"
          },
          {
            "value": "LEVEL_032",
            "label": "Kotlin (Средний)"
          },
          {
            "value": "LEVEL_033",
            "label": "Kotlin (Выше среднего)"
          },
          {
            "value": "LEVEL_034",
            "label": "TypeScript (Начальный)"
          },
          {
            "value": "LEVEL_035",
            "label": "TypeScript (Низкий)"
          },
          {
            "value": "LEVEL_036",
            "label": "TypeScript (Средний)"
          },
          {
            "value": "LEVEL_037",
            "label": "TypeScript (Выше среднего)"
          },
          {
            "value": "LEVEL_038",
            "label": "Scratch (Начальный)"
          },
          {
            "value": "LEVEL_039",
            "label": "Scratch (Низкий)"
          },
          {
            "value": "LEVEL_040",
            "label": "Scratch (Средний)"
          },
          {
            "value": "LEVEL_041",
            "label": "Scratch (Выше среднего)"
          },
          {
            "value": "LEVEL_042",
            "label": "SQL (Начальный)"
          },
          {
            "value": "LEVEL_043",
            "label": "SQL (Низкий)"
          },
          {
            "value": "LEVEL_044",
            "label": "SQL (Средний)"
          },
          {
            "value": "LEVEL_045",
            "label": "SQL (Выше среднего)"
          },
          {
            "value": "LEVEL_046",
            "label": "Visual Basic (Начальный)"
          },
          {
            "value": "LEVEL_047",
            "label": "Visual Basic (Низкий)"
          },
          {
            "value": "LEVEL_048",
            "label": "Visual Basic (Средний)"
          },
          {
            "value": "LEVEL_049",
            "label": "Visual Basic (Выше среднего)"
          }
        ]
      },
      {
        "name": "webDevelopmentSkills",
        "label": "Web Development Skills",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "SKILL_001",
            "label": "Linux"
          },
          {
            "value": "SKILL_002",
            "label": "MS Word"
          },
          {
            "value": "SKILL_003",
            "label": "Ubuntu"
          },
          {
            "value": "SKILL_004",
            "label": "ОС Astra Linux"
          },
          {
            "value": "SKILL_005",
            "label": "Assembler"
          },
          {
            "value": "SKILL_006",
            "label": "GIT"
          },
          {
            "value": "SKILL_007",
            "label": "DOCKER"
          },
          {
            "value": "SKILL_008",
            "label": "JSON"
          },
          {
            "value": "SKILL_009",
            "label": "Machine learning"
          },
          {
            "value": "SKILL_010",
            "label": "Mathematical Analysis"
          },
          {
            "value": "SKILL_011",
            "label": "Matplotlib"
          },
          {
            "value": "SKILL_012",
            "label": "MS Power Point"
          },
          {
            "value": "SKILL_013",
            "label": "MySQL"
          },
          {
            "value": "SKILL_014",
            "label": "NumPy"
          },
          {
            "value": "SKILL_015",
            "label": "Pandas"
          },
          {
            "value": "SKILL_016",
            "label": "PyCharm"
          },
          {
            "value": "SKILL_017",
            "label": "Scikit-learn"
          },
          {
            "value": "SKILL_018",
            "label": "UX/UI"
          },
          {
            "value": "SKILL_019",
            "label": "БИБЛИОТЕКА QT5"
          },
          {
            "value": "SKILL_020",
            "label": "Искусственный интеллект (ИИ)"
          },
          {
            "value": "SKILL_021",
            "label": "РАЗМЕТКИ HTML"
          },
          {
            "value": "SKILL_022",
            "label": "СТИЛИ CSS"
          },
          {
            "value": "SKILL_023",
            "label": "СУБД POSTGRESQL"
          },
          {
            "value": "SKILL_024",
            "label": "СУБД SQLITE"
          },
          {
            "value": "SKILL_025",
            "label": "ЯЗЫК C++"
          },
          {
            "value": "SKILL_026",
            "label": "ЯЗЫК PYTHON"
          },
          {
            "value": "SKILL_027",
            "label": "ЯЗЫК С"
          },
          {
            "value": "SKILL_028",
            "label": "Tilda"
          },
          {
            "value": "SKILL_029",
            "label": "JavaFX"
          },
          {
            "value": "SKILL_030",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_031",
            "label": "MathCAD"
          },
          {
            "value": "SKILL_032",
            "label": "MS Excel"
          },
          {
            "value": "SKILL_033",
            "label": "Visual Studio"
          },
          {
            "value": "SKILL_034",
            "label": "ЯЗЫК JAVA"
          },
          {
            "value": "SKILL_035",
            "label": "Adobe Premiere Pro"
          },
          {
            "value": "SKILL_036",
            "label": "MS Office"
          },
          {
            "value": "SKILL_037",
            "label": "Corel Draw"
          },
          {
            "value": "SKILL_038",
            "label": "Photoshop"
          },
          {
            "value": "SKILL_039",
            "label": "Google Docs"
          },
          {
            "value": "SKILL_040",
            "label": "AutoCAD"
          },
          {
            "value": "SKILL_041",
            "label": "Autodesk Revit"
          },
          {
            "value": "SKILL_042",
            "label": "SolidWorks"
          },
          {
            "value": "SKILL_043",
            "label": "Adobe After Effects"
          },
          {
            "value": "SKILL_044",
            "label": "Android"
          },
          {
            "value": "SKILL_045",
            "label": "Figma"
          },
          {
            "value": "SKILL_046",
            "label": "Jira"
          },
          {
            "value": "SKILL_047",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_048",
            "label": "Ms Outlook"
          },
          {
            "value": "SKILL_049",
            "label": "ЯЗЫК C#"
          },
          {
            "value": "SKILL_050",
            "label": "Big Data"
          },
          {
            "value": "SKILL_051",
            "label": "BI Analytics"
          },
          {
            "value": "SKILL_052",
            "label": "BPMN"
          },
          {
            "value": "SKILL_053",
            "label": "Cisco"
          },
          {
            "value": "SKILL_054",
            "label": "Data Science"
          },
          {
            "value": "SKILL_055",
            "label": "Аналитика"
          },
          {
            "value": "SKILL_056",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ TCP"
          },
          {
            "value": "SKILL_057",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ HTTP"
          },
          {
            "value": "SKILL_058",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ IP"
          },
          {
            "value": "SKILL_059",
            "label": "ЯЗЫК KOTLIN"
          },
          {
            "value": "SKILL_060",
            "label": ".NET Framework"
          },
          {
            "value": "SKILL_061",
            "label": "Hibernate"
          },
          {
            "value": "SKILL_062",
            "label": "Java Database Connectivity (JDBC)"
          },
          {
            "value": "SKILL_063",
            "label": "Kubernetes"
          },
          {
            "value": "SKILL_064",
            "label": "Postman"
          },
          {
            "value": "SKILL_065",
            "label": "SPRING FRAMEWORK"
          },
          {
            "value": "SKILL_066",
            "label": "КОМПАС-3D"
          },
          {
            "value": "SKILL_067",
            "label": "ЯЗЫК JAVASCRIPT"
          },
          {
            "value": "SKILL_068",
            "label": "Pygame"
          },
          {
            "value": "SKILL_069",
            "label": "Django"
          },
          {
            "value": "SKILL_070",
            "label": "Apache Maven"
          },
          {
            "value": "SKILL_071",
            "label": "Битркис"
          },
          {
            "value": "SKILL_072",
            "label": "1С"
          },
          {
            "value": "SKILL_073",
            "label": "Altium Designer"
          },
          {
            "value": "SKILL_074",
            "label": "MicroCap"
          },
          {
            "value": "SKILL_075",
            "label": "Bootstrap"
          },
          {
            "value": "SKILL_076",
            "label": "CSS3"
          },
          {
            "value": "SKILL_077",
            "label": "Sass"
          },
          {
            "value": "SKILL_078",
            "label": "Adobe Illustrator"
          },
          {
            "value": "SKILL_079",
            "label": "Конструкторская документация"
          },
          {
            "value": "SKILL_080",
            "label": "3D"
          },
          {
            "value": "SKILL_081",
            "label": "MongoDB"
          },
          {
            "value": "SKILL_082",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_083",
            "label": "Autodesk Fusion 360"
          },
          {
            "value": "SKILL_084",
            "label": "САПР"
          },
          {
            "value": "SKILL_085",
            "label": "LabVIEW"
          },
          {
            "value": "SKILL_086",
            "label": "Микроконтроллеры"
          },
          {
            "value": "SKILL_087",
            "label": "Робототехника"
          },
          {
            "value": "SKILL_088",
            "label": "ЯЗЫК PHP"
          },
          {
            "value": "SKILL_089",
            "label": "Node.js"
          },
          {
            "value": "SKILL_090",
            "label": "NoSQL"
          },
          {
            "value": "SKILL_091",
            "label": "React.js"
          },
          {
            "value": "SKILL_092",
            "label": "TypeScript"
          },
          {
            "value": "SKILL_093",
            "label": "Vue js"
          },
          {
            "value": "SKILL_094",
            "label": "Mockito"
          },
          {
            "value": "SKILL_095",
            "label": "Ajax"
          },
          {
            "value": "SKILL_096",
            "label": "RISC-V"
          },
          {
            "value": "SKILL_097",
            "label": "Adobe InDesign"
          },
          {
            "value": "SKILL_098",
            "label": "БАЗОВЫЕ PIPELINE ДЛЯ СТЕКОВ В JS"
          },
          {
            "value": "SKILL_099",
            "label": "WordPress"
          },
          {
            "value": "SKILL_100",
            "label": "Simple DirectMedia Layer (SDL)"
          },
          {
            "value": "SKILL_101",
            "label": "GNU Octave"
          },
          {
            "value": "SKILL_102",
            "label": "P-Cad"
          },
          {
            "value": "SKILL_103",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_104",
            "label": "ANSYS"
          },
          {
            "value": "SKILL_105",
            "label": "Язык C"
          },
          {
            "value": "SKILL_106",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_107",
            "label": "Python"
          },
          {
            "value": "SKILL_108",
            "label": "PHP"
          },
          {
            "value": "SKILL_109",
            "label": "С++"
          },
          {
            "value": "SKILL_110",
            "label": "Java"
          },
          {
            "value": "SKILL_111",
            "label": "SQL"
          },
          {
            "value": "SKILL_112",
            "label": "C"
          },
          {
            "value": "SKILL_113",
            "label": "Не обладаю"
          },
          {
            "value": "SKILL_114",
            "label": "Kotlin"
          },
          {
            "value": "SKILL_115",
            "label": "JavaScript"
          },
          {
            "value": "SKILL_116",
            "label": "Visual Basic"
          },
          {
            "value": "SKILL_117",
            "label": "HTML"
          },
          {
            "value": "SKILL_118",
            "label": ".NET Core"
          },
          {
            "value": "SKILL_119",
            "label": "Angular"
          },
          {
            "value": "SKILL_120",
            "label": "Aura"
          },
          {
            "value": "SKILL_121",
            "label": "Backbone.JS"
          },
          {
            "value": "SKILL_122",
            "label": "Beego"
          },
          {
            "value": "SKILL_123",
            "label": "CakePHP"
          },
          {
            "value": "SKILL_124",
            "label": "CodeIgniter"
          },
          {
            "value": "SKILL_125",
            "label": "CSS"
          },
          {
            "value": "SKILL_126",
            "label": "Drupal"
          },
          {
            "value": "SKILL_127",
            "label": "ExpressJS"
          },
          {
            "value": "SKILL_128",
            "label": "FatFree"
          },
          {
            "value": "SKILL_129",
            "label": "Flask"
          },
          {
            "value": "SKILL_130",
            "label": "FuelPHP"
          },
          {
            "value": "SKILL_131",
            "label": "Gatsby"
          },
          {
            "value": "SKILL_132",
            "label": "Iris"
          },
          {
            "value": "SKILL_133",
            "label": "jQuery"
          },
          {
            "value": "SKILL_134",
            "label": "Koa"
          },
          {
            "value": "SKILL_135",
            "label": "Laravel"
          },
          {
            "value": "SKILL_136",
            "label": "Meteor"
          },
          {
            "value": "SKILL_137",
            "label": "NestJs"
          },
          {
            "value": "SKILL_138",
            "label": "Phalcon"
          },
          {
            "value": "SKILL_139",
            "label": "Ruby on Rails"
          },
          {
            "value": "SKILL_140",
            "label": "React js"
          },
          {
            "value": "SKILL_141",
            "label": "Slim"
          },
          {
            "value": "SKILL_142",
            "label": "Spring Boot"
          },
          {
            "value": "SKILL_143",
            "label": "Spring Framework"
          },
          {
            "value": "SKILL_144",
            "label": "Strapi"
          },
          {
            "value": "SKILL_145",
            "label": "Svelte"
          },
          {
            "value": "SKILL_146",
            "label": "Symfony"
          },
          {
            "value": "SKILL_147",
            "label": "Vue.js"
          },
          {
            "value": "SKILL_148",
            "label": "Yii"
          },
          {
            "value": "SKILL_149",
            "label": "Zend Framework"
          },
          {
            "value": "SKILL_150",
            "label": "PostgreSQL"
          },
          {
            "value": "SKILL_151",
            "label": "DB2"
          },
          {
            "value": "SKILL_152",
            "label": "Redis"
          },
          {
            "value": "SKILL_153",
            "label": "Microsoft Access"
          },
          {
            "value": "SKILL_154",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_155",
            "label": "Oracle"
          },
          {
            "value": "SKILL_156",
            "label": "Windows"
          },
          {
            "value": "SKILL_157",
            "label": "iOS"
          },
          {
            "value": "SKILL_158",
            "label": "MacOS"
          },
          {
            "value": "SKILL_159",
            "label": "CI/CD"
          },
          {
            "value": "SKILL_160",
            "label": "AWS"
          },
          {
            "value": "SKILL_161",
            "label": "Azure"
          },
          {
            "value": "SKILL_162",
            "label": "Anchore"
          },
          {
            "value": "SKILL_163",
            "label": "Ansible"
          },
          {
            "value": "SKILL_164",
            "label": "Argo CD"
          },
          {
            "value": "SKILL_165",
            "label": "Bamboo"
          },
          {
            "value": "SKILL_166",
            "label": "BitBucket"
          },
          {
            "value": "SKILL_167",
            "label": "Chef"
          },
          {
            "value": "SKILL_168",
            "label": "E2E"
          },
          {
            "value": "SKILL_169",
            "label": "GitHub"
          },
          {
            "value": "SKILL_170",
            "label": "GitLab"
          },
          {
            "value": "SKILL_171",
            "label": "integration"
          },
          {
            "value": "SKILL_172",
            "label": "Jenkins"
          },
          {
            "value": "SKILL_173",
            "label": "Octopus Deploy"
          },
          {
            "value": "SKILL_174",
            "label": "Puppet"
          },
          {
            "value": "SKILL_175",
            "label": "Spinnaker"
          },
          {
            "value": "SKILL_176",
            "label": "Sysdig"
          },
          {
            "value": "SKILL_177",
            "label": "TeamCity"
          },
          {
            "value": "SKILL_178",
            "label": "TwistLock"
          },
          {
            "value": "SKILL_179",
            "label": "Junit"
          },
          {
            "value": "SKILL_180",
            "label": "AssertJ"
          },
          {
            "value": "SKILL_181",
            "label": "Selenium"
          },
          {
            "value": "SKILL_182",
            "label": "JMeter"
          },
          {
            "value": "SKILL_183",
            "label": "SonarQube"
          },
          {
            "value": "SKILL_184",
            "label": "Битрикс"
          },
          {
            "value": "SKILL_185",
            "label": "padn"
          }
        ]
      },
      {
        "name": "databaseSkills",
        "label": "Database Skills",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "SKILL_001",
            "label": "Linux"
          },
          {
            "value": "SKILL_002",
            "label": "MS Word"
          },
          {
            "value": "SKILL_003",
            "label": "Ubuntu"
          },
          {
            "value": "SKILL_004",
            "label": "ОС Astra Linux"
          },
          {
            "value": "SKILL_005",
            "label": "Assembler"
          },
          {
            "value": "SKILL_006",
            "label": "GIT"
          },
          {
            "value": "SKILL_007",
            "label": "DOCKER"
          },
          {
            "value": "SKILL_008",
            "label": "JSON"
          },
          {
            "value": "SKILL_009",
            "label": "Machine learning"
          },
          {
            "value": "SKILL_010",
            "label": "Mathematical Analysis"
          },
          {
            "value": "SKILL_011",
            "label": "Matplotlib"
          },
          {
            "value": "SKILL_012",
            "label": "MS Power Point"
          },
          {
            "value": "SKILL_013",
            "label": "MySQL"
          },
          {
            "value": "SKILL_014",
            "label": "NumPy"
          },
          {
            "value": "SKILL_015",
            "label": "Pandas"
          },
          {
            "value": "SKILL_016",
            "label": "PyCharm"
          },
          {
            "value": "SKILL_017",
            "label": "Scikit-learn"
          },
          {
            "value": "SKILL_018",
            "label": "UX/UI"
          },
          {
            "value": "SKILL_019",
            "label": "БИБЛИОТЕКА QT5"
          },
          {
            "value": "SKILL_020",
            "label": "Искусственный интеллект (ИИ)"
          },
          {
            "value": "SKILL_021",
            "label": "РАЗМЕТКИ HTML"
          },
          {
            "value": "SKILL_022",
            "label": "СТИЛИ CSS"
          },
          {
            "value": "SKILL_023",
            "label": "СУБД POSTGRESQL"
          },
          {
            "value": "SKILL_024",
            "label": "СУБД SQLITE"
          },
          {
            "value": "SKILL_025",
            "label": "ЯЗЫК C++"
          },
          {
            "value": "SKILL_026",
            "label": "ЯЗЫК PYTHON"
          },
          {
            "value": "SKILL_027",
            "label": "ЯЗЫК С"
          },
          {
            "value": "SKILL_028",
            "label": "Tilda"
          },
          {
            "value": "SKILL_029",
            "label": "JavaFX"
          },
          {
            "value": "SKILL_030",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_031",
            "label": "MathCAD"
          },
          {
            "value": "SKILL_032",
            "label": "MS Excel"
          },
          {
            "value": "SKILL_033",
            "label": "Visual Studio"
          },
          {
            "value": "SKILL_034",
            "label": "ЯЗЫК JAVA"
          },
          {
            "value": "SKILL_035",
            "label": "Adobe Premiere Pro"
          },
          {
            "value": "SKILL_036",
            "label": "MS Office"
          },
          {
            "value": "SKILL_037",
            "label": "Corel Draw"
          },
          {
            "value": "SKILL_038",
            "label": "Photoshop"
          },
          {
            "value": "SKILL_039",
            "label": "Google Docs"
          },
          {
            "value": "SKILL_040",
            "label": "AutoCAD"
          },
          {
            "value": "SKILL_041",
            "label": "Autodesk Revit"
          },
          {
            "value": "SKILL_042",
            "label": "SolidWorks"
          },
          {
            "value": "SKILL_043",
            "label": "Adobe After Effects"
          },
          {
            "value": "SKILL_044",
            "label": "Android"
          },
          {
            "value": "SKILL_045",
            "label": "Figma"
          },
          {
            "value": "SKILL_046",
            "label": "Jira"
          },
          {
            "value": "SKILL_047",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_048",
            "label": "Ms Outlook"
          },
          {
            "value": "SKILL_049",
            "label": "ЯЗЫК C#"
          },
          {
            "value": "SKILL_050",
            "label": "Big Data"
          },
          {
            "value": "SKILL_051",
            "label": "BI Analytics"
          },
          {
            "value": "SKILL_052",
            "label": "BPMN"
          },
          {
            "value": "SKILL_053",
            "label": "Cisco"
          },
          {
            "value": "SKILL_054",
            "label": "Data Science"
          },
          {
            "value": "SKILL_055",
            "label": "Аналитика"
          },
          {
            "value": "SKILL_056",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ TCP"
          },
          {
            "value": "SKILL_057",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ HTTP"
          },
          {
            "value": "SKILL_058",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ IP"
          },
          {
            "value": "SKILL_059",
            "label": "ЯЗЫК KOTLIN"
          },
          {
            "value": "SKILL_060",
            "label": ".NET Framework"
          },
          {
            "value": "SKILL_061",
            "label": "Hibernate"
          },
          {
            "value": "SKILL_062",
            "label": "Java Database Connectivity (JDBC)"
          },
          {
            "value": "SKILL_063",
            "label": "Kubernetes"
          },
          {
            "value": "SKILL_064",
            "label": "Postman"
          },
          {
            "value": "SKILL_065",
            "label": "SPRING FRAMEWORK"
          },
          {
            "value": "SKILL_066",
            "label": "КОМПАС-3D"
          },
          {
            "value": "SKILL_067",
            "label": "ЯЗЫК JAVASCRIPT"
          },
          {
            "value": "SKILL_068",
            "label": "Pygame"
          },
          {
            "value": "SKILL_069",
            "label": "Django"
          },
          {
            "value": "SKILL_070",
            "label": "Apache Maven"
          },
          {
            "value": "SKILL_071",
            "label": "Битркис"
          },
          {
            "value": "SKILL_072",
            "label": "1С"
          },
          {
            "value": "SKILL_073",
            "label": "Altium Designer"
          },
          {
            "value": "SKILL_074",
            "label": "MicroCap"
          },
          {
            "value": "SKILL_075",
            "label": "Bootstrap"
          },
          {
            "value": "SKILL_076",
            "label": "CSS3"
          },
          {
            "value": "SKILL_077",
            "label": "Sass"
          },
          {
            "value": "SKILL_078",
            "label": "Adobe Illustrator"
          },
          {
            "value": "SKILL_079",
            "label": "Конструкторская документация"
          },
          {
            "value": "SKILL_080",
            "label": "3D"
          },
          {
            "value": "SKILL_081",
            "label": "MongoDB"
          },
          {
            "value": "SKILL_082",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_083",
            "label": "Autodesk Fusion 360"
          },
          {
            "value": "SKILL_084",
            "label": "САПР"
          },
          {
            "value": "SKILL_085",
            "label": "LabVIEW"
          },
          {
            "value": "SKILL_086",
            "label": "Микроконтроллеры"
          },
          {
            "value": "SKILL_087",
            "label": "Робототехника"
          },
          {
            "value": "SKILL_088",
            "label": "ЯЗЫК PHP"
          },
          {
            "value": "SKILL_089",
            "label": "Node.js"
          },
          {
            "value": "SKILL_090",
            "label": "NoSQL"
          },
          {
            "value": "SKILL_091",
            "label": "React.js"
          },
          {
            "value": "SKILL_092",
            "label": "TypeScript"
          },
          {
            "value": "SKILL_093",
            "label": "Vue js"
          },
          {
            "value": "SKILL_094",
            "label": "Mockito"
          },
          {
            "value": "SKILL_095",
            "label": "Ajax"
          },
          {
            "value": "SKILL_096",
            "label": "RISC-V"
          },
          {
            "value": "SKILL_097",
            "label": "Adobe InDesign"
          },
          {
            "value": "SKILL_098",
            "label": "БАЗОВЫЕ PIPELINE ДЛЯ СТЕКОВ В JS"
          },
          {
            "value": "SKILL_099",
            "label": "WordPress"
          },
          {
            "value": "SKILL_100",
            "label": "Simple DirectMedia Layer (SDL)"
          },
          {
            "value": "SKILL_101",
            "label": "GNU Octave"
          },
          {
            "value": "SKILL_102",
            "label": "P-Cad"
          },
          {
            "value": "SKILL_103",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_104",
            "label": "ANSYS"
          },
          {
            "value": "SKILL_105",
            "label": "Язык C"
          },
          {
            "value": "SKILL_106",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_107",
            "label": "Python"
          },
          {
            "value": "SKILL_108",
            "label": "PHP"
          },
          {
            "value": "SKILL_109",
            "label": "С++"
          },
          {
            "value": "SKILL_110",
            "label": "Java"
          },
          {
            "value": "SKILL_111",
            "label": "SQL"
          },
          {
            "value": "SKILL_112",
            "label": "C"
          },
          {
            "value": "SKILL_113",
            "label": "Не обладаю"
          },
          {
            "value": "SKILL_114",
            "label": "Kotlin"
          },
          {
            "value": "SKILL_115",
            "label": "JavaScript"
          },
          {
            "value": "SKILL_116",
            "label": "Visual Basic"
          },
          {
            "value": "SKILL_117",
            "label": "HTML"
          },
          {
            "value": "SKILL_118",
            "label": ".NET Core"
          },
          {
            "value": "SKILL_119",
            "label": "Angular"
          },
          {
            "value": "SKILL_120",
            "label": "Aura"
          },
          {
            "value": "SKILL_121",
            "label": "Backbone.JS"
          },
          {
            "value": "SKILL_122",
            "label": "Beego"
          },
          {
            "value": "SKILL_123",
            "label": "CakePHP"
          },
          {
            "value": "SKILL_124",
            "label": "CodeIgniter"
          },
          {
            "value": "SKILL_125",
            "label": "CSS"
          },
          {
            "value": "SKILL_126",
            "label": "Drupal"
          },
          {
            "value": "SKILL_127",
            "label": "ExpressJS"
          },
          {
            "value": "SKILL_128",
            "label": "FatFree"
          },
          {
            "value": "SKILL_129",
            "label": "Flask"
          },
          {
            "value": "SKILL_130",
            "label": "FuelPHP"
          },
          {
            "value": "SKILL_131",
            "label": "Gatsby"
          },
          {
            "value": "SKILL_132",
            "label": "Iris"
          },
          {
            "value": "SKILL_133",
            "label": "jQuery"
          },
          {
            "value": "SKILL_134",
            "label": "Koa"
          },
          {
            "value": "SKILL_135",
            "label": "Laravel"
          },
          {
            "value": "SKILL_136",
            "label": "Meteor"
          },
          {
            "value": "SKILL_137",
            "label": "NestJs"
          },
          {
            "value": "SKILL_138",
            "label": "Phalcon"
          },
          {
            "value": "SKILL_139",
            "label": "Ruby on Rails"
          },
          {
            "value": "SKILL_140",
            "label": "React js"
          },
          {
            "value": "SKILL_141",
            "label": "Slim"
          },
          {
            "value": "SKILL_142",
            "label": "Spring Boot"
          },
          {
            "value": "SKILL_143",
            "label": "Spring Framework"
          },
          {
            "value": "SKILL_144",
            "label": "Strapi"
          },
          {
            "value": "SKILL_145",
            "label": "Svelte"
          },
          {
            "value": "SKILL_146",
            "label": "Symfony"
          },
          {
            "value": "SKILL_147",
            "label": "Vue.js"
          },
          {
            "value": "SKILL_148",
            "label": "Yii"
          },
          {
            "value": "SKILL_149",
            "label": "Zend Framework"
          },
          {
            "value": "SKILL_150",
            "label": "PostgreSQL"
          },
          {
            "value": "SKILL_151",
            "label": "DB2"
          },
          {
            "value": "SKILL_152",
            "label": "Redis"
          },
          {
            "value": "SKILL_153",
            "label": "Microsoft Access"
          },
          {
            "value": "SKILL_154",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_155",
            "label": "Oracle"
          },
          {
            "value": "SKILL_156",
            "label": "Windows"
          },
          {
            "value": "SKILL_157",
            "label": "iOS"
          },
          {
            "value": "SKILL_158",
            "label": "MacOS"
          },
          {
            "value": "SKILL_159",
            "label": "CI/CD"
          },
          {
            "value": "SKILL_160",
            "label": "AWS"
          },
          {
            "value": "SKILL_161",
            "label": "Azure"
          },
          {
            "value": "SKILL_162",
            "label": "Anchore"
          },
          {
            "value": "SKILL_163",
            "label": "Ansible"
          },
          {
            "value": "SKILL_164",
            "label": "Argo CD"
          },
          {
            "value": "SKILL_165",
            "label": "Bamboo"
          },
          {
            "value": "SKILL_166",
            "label": "BitBucket"
          },
          {
            "value": "SKILL_167",
            "label": "Chef"
          },
          {
            "value": "SKILL_168",
            "label": "E2E"
          },
          {
            "value": "SKILL_169",
            "label": "GitHub"
          },
          {
            "value": "SKILL_170",
            "label": "GitLab"
          },
          {
            "value": "SKILL_171",
            "label": "integration"
          },
          {
            "value": "SKILL_172",
            "label": "Jenkins"
          },
          {
            "value": "SKILL_173",
            "label": "Octopus Deploy"
          },
          {
            "value": "SKILL_174",
            "label": "Puppet"
          },
          {
            "value": "SKILL_175",
            "label": "Spinnaker"
          },
          {
            "value": "SKILL_176",
            "label": "Sysdig"
          },
          {
            "value": "SKILL_177",
            "label": "TeamCity"
          },
          {
            "value": "SKILL_178",
            "label": "TwistLock"
          },
          {
            "value": "SKILL_179",
            "label": "Junit"
          },
          {
            "value": "SKILL_180",
            "label": "AssertJ"
          },
          {
            "value": "SKILL_181",
            "label": "Selenium"
          },
          {
            "value": "SKILL_182",
            "label": "JMeter"
          },
          {
            "value": "SKILL_183",
            "label": "SonarQube"
          },
          {
            "value": "SKILL_184",
            "label": "Битрикс"
          },
          {
            "value": "SKILL_185",
            "label": "padn"
          }
        ]
      },
      {
        "name": "systemAdministrationSkills",
        "label": "System Administration Skills",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "SKILL_001",
            "label": "Linux"
          },
          {
            "value": "SKILL_002",
            "label": "MS Word"
          },
          {
            "value": "SKILL_003",
            "label": "Ubuntu"
          },
          {
            "value": "SKILL_004",
            "label": "ОС Astra Linux"
          },
          {
            "value": "SKILL_005",
            "label": "Assembler"
          },
          {
            "value": "SKILL_006",
            "label": "GIT"
          },
          {
            "value": "SKILL_007",
            "label": "DOCKER"
          },
          {
            "value": "SKILL_008",
            "label": "JSON"
          },
          {
            "value": "SKILL_009",
            "label": "Machine learning"
          },
          {
            "value": "SKILL_010",
            "label": "Mathematical Analysis"
          },
          {
            "value": "SKILL_011",
            "label": "Matplotlib"
          },
          {
            "value": "SKILL_012",
            "label": "MS Power Point"
          },
          {
            "value": "SKILL_013",
            "label": "MySQL"
          },
          {
            "value": "SKILL_014",
            "label": "NumPy"
          },
          {
            "value": "SKILL_015",
            "label": "Pandas"
          },
          {
            "value": "SKILL_016",
            "label": "PyCharm"
          },
          {
            "value": "SKILL_017",
            "label": "Scikit-learn"
          },
          {
            "value": "SKILL_018",
            "label": "UX/UI"
          },
          {
            "value": "SKILL_019",
            "label": "БИБЛИОТЕКА QT5"
          },
          {
            "value": "SKILL_020",
            "label": "Искусственный интеллект (ИИ)"
          },
          {
            "value": "SKILL_021",
            "label": "РАЗМЕТКИ HTML"
          },
          {
            "value": "SKILL_022",
            "label": "СТИЛИ CSS"
          },
          {
            "value": "SKILL_023",
            "label": "СУБД POSTGRESQL"
          },
          {
            "value": "SKILL_024",
            "label": "СУБД SQLITE"
          },
          {
            "value": "SKILL_025",
            "label": "ЯЗЫК C++"
          },
          {
            "value": "SKILL_026",
            "label": "ЯЗЫК PYTHON"
          },
          {
            "value": "SKILL_027",
            "label": "ЯЗЫК С"
          },
          {
            "value": "SKILL_028",
            "label": "Tilda"
          },
          {
            "value": "SKILL_029",
            "label": "JavaFX"
          },
          {
            "value": "SKILL_030",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_031",
            "label": "MathCAD"
          },
          {
            "value": "SKILL_032",
            "label": "MS Excel"
          },
          {
            "value": "SKILL_033",
            "label": "Visual Studio"
          },
          {
            "value": "SKILL_034",
            "label": "ЯЗЫК JAVA"
          },
          {
            "value": "SKILL_035",
            "label": "Adobe Premiere Pro"
          },
          {
            "value": "SKILL_036",
            "label": "MS Office"
          },
          {
            "value": "SKILL_037",
            "label": "Corel Draw"
          },
          {
            "value": "SKILL_038",
            "label": "Photoshop"
          },
          {
            "value": "SKILL_039",
            "label": "Google Docs"
          },
          {
            "value": "SKILL_040",
            "label": "AutoCAD"
          },
          {
            "value": "SKILL_041",
            "label": "Autodesk Revit"
          },
          {
            "value": "SKILL_042",
            "label": "SolidWorks"
          },
          {
            "value": "SKILL_043",
            "label": "Adobe After Effects"
          },
          {
            "value": "SKILL_044",
            "label": "Android"
          },
          {
            "value": "SKILL_045",
            "label": "Figma"
          },
          {
            "value": "SKILL_046",
            "label": "Jira"
          },
          {
            "value": "SKILL_047",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_048",
            "label": "Ms Outlook"
          },
          {
            "value": "SKILL_049",
            "label": "ЯЗЫК C#"
          },
          {
            "value": "SKILL_050",
            "label": "Big Data"
          },
          {
            "value": "SKILL_051",
            "label": "BI Analytics"
          },
          {
            "value": "SKILL_052",
            "label": "BPMN"
          },
          {
            "value": "SKILL_053",
            "label": "Cisco"
          },
          {
            "value": "SKILL_054",
            "label": "Data Science"
          },
          {
            "value": "SKILL_055",
            "label": "Аналитика"
          },
          {
            "value": "SKILL_056",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ TCP"
          },
          {
            "value": "SKILL_057",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ HTTP"
          },
          {
            "value": "SKILL_058",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ IP"
          },
          {
            "value": "SKILL_059",
            "label": "ЯЗЫК KOTLIN"
          },
          {
            "value": "SKILL_060",
            "label": ".NET Framework"
          },
          {
            "value": "SKILL_061",
            "label": "Hibernate"
          },
          {
            "value": "SKILL_062",
            "label": "Java Database Connectivity (JDBC)"
          },
          {
            "value": "SKILL_063",
            "label": "Kubernetes"
          },
          {
            "value": "SKILL_064",
            "label": "Postman"
          },
          {
            "value": "SKILL_065",
            "label": "SPRING FRAMEWORK"
          },
          {
            "value": "SKILL_066",
            "label": "КОМПАС-3D"
          },
          {
            "value": "SKILL_067",
            "label": "ЯЗЫК JAVASCRIPT"
          },
          {
            "value": "SKILL_068",
            "label": "Pygame"
          },
          {
            "value": "SKILL_069",
            "label": "Django"
          },
          {
            "value": "SKILL_070",
            "label": "Apache Maven"
          },
          {
            "value": "SKILL_071",
            "label": "Битркис"
          },
          {
            "value": "SKILL_072",
            "label": "1С"
          },
          {
            "value": "SKILL_073",
            "label": "Altium Designer"
          },
          {
            "value": "SKILL_074",
            "label": "MicroCap"
          },
          {
            "value": "SKILL_075",
            "label": "Bootstrap"
          },
          {
            "value": "SKILL_076",
            "label": "CSS3"
          },
          {
            "value": "SKILL_077",
            "label": "Sass"
          },
          {
            "value": "SKILL_078",
            "label": "Adobe Illustrator"
          },
          {
            "value": "SKILL_079",
            "label": "Конструкторская документация"
          },
          {
            "value": "SKILL_080",
            "label": "3D"
          },
          {
            "value": "SKILL_081",
            "label": "MongoDB"
          },
          {
            "value": "SKILL_082",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_083",
            "label": "Autodesk Fusion 360"
          },
          {
            "value": "SKILL_084",
            "label": "САПР"
          },
          {
            "value": "SKILL_085",
            "label": "LabVIEW"
          },
          {
            "value": "SKILL_086",
            "label": "Микроконтроллеры"
          },
          {
            "value": "SKILL_087",
            "label": "Робототехника"
          },
          {
            "value": "SKILL_088",
            "label": "ЯЗЫК PHP"
          },
          {
            "value": "SKILL_089",
            "label": "Node.js"
          },
          {
            "value": "SKILL_090",
            "label": "NoSQL"
          },
          {
            "value": "SKILL_091",
            "label": "React.js"
          },
          {
            "value": "SKILL_092",
            "label": "TypeScript"
          },
          {
            "value": "SKILL_093",
            "label": "Vue js"
          },
          {
            "value": "SKILL_094",
            "label": "Mockito"
          },
          {
            "value": "SKILL_095",
            "label": "Ajax"
          },
          {
            "value": "SKILL_096",
            "label": "RISC-V"
          },
          {
            "value": "SKILL_097",
            "label": "Adobe InDesign"
          },
          {
            "value": "SKILL_098",
            "label": "БАЗОВЫЕ PIPELINE ДЛЯ СТЕКОВ В JS"
          },
          {
            "value": "SKILL_099",
            "label": "WordPress"
          },
          {
            "value": "SKILL_100",
            "label": "Simple DirectMedia Layer (SDL)"
          },
          {
            "value": "SKILL_101",
            "label": "GNU Octave"
          },
          {
            "value": "SKILL_102",
            "label": "P-Cad"
          },
          {
            "value": "SKILL_103",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_104",
            "label": "ANSYS"
          },
          {
            "value": "SKILL_105",
            "label": "Язык C"
          },
          {
            "value": "SKILL_106",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_107",
            "label": "Python"
          },
          {
            "value": "SKILL_108",
            "label": "PHP"
          },
          {
            "value": "SKILL_109",
            "label": "С++"
          },
          {
            "value": "SKILL_110",
            "label": "Java"
          },
          {
            "value": "SKILL_111",
            "label": "SQL"
          },
          {
            "value": "SKILL_112",
            "label": "C"
          },
          {
            "value": "SKILL_113",
            "label": "Не обладаю"
          },
          {
            "value": "SKILL_114",
            "label": "Kotlin"
          },
          {
            "value": "SKILL_115",
            "label": "JavaScript"
          },
          {
            "value": "SKILL_116",
            "label": "Visual Basic"
          },
          {
            "value": "SKILL_117",
            "label": "HTML"
          },
          {
            "value": "SKILL_118",
            "label": ".NET Core"
          },
          {
            "value": "SKILL_119",
            "label": "Angular"
          },
          {
            "value": "SKILL_120",
            "label": "Aura"
          },
          {
            "value": "SKILL_121",
            "label": "Backbone.JS"
          },
          {
            "value": "SKILL_122",
            "label": "Beego"
          },
          {
            "value": "SKILL_123",
            "label": "CakePHP"
          },
          {
            "value": "SKILL_124",
            "label": "CodeIgniter"
          },
          {
            "value": "SKILL_125",
            "label": "CSS"
          },
          {
            "value": "SKILL_126",
            "label": "Drupal"
          },
          {
            "value": "SKILL_127",
            "label": "ExpressJS"
          },
          {
            "value": "SKILL_128",
            "label": "FatFree"
          },
          {
            "value": "SKILL_129",
            "label": "Flask"
          },
          {
            "value": "SKILL_130",
            "label": "FuelPHP"
          },
          {
            "value": "SKILL_131",
            "label": "Gatsby"
          },
          {
            "value": "SKILL_132",
            "label": "Iris"
          },
          {
            "value": "SKILL_133",
            "label": "jQuery"
          },
          {
            "value": "SKILL_134",
            "label": "Koa"
          },
          {
            "value": "SKILL_135",
            "label": "Laravel"
          },
          {
            "value": "SKILL_136",
            "label": "Meteor"
          },
          {
            "value": "SKILL_137",
            "label": "NestJs"
          },
          {
            "value": "SKILL_138",
            "label": "Phalcon"
          },
          {
            "value": "SKILL_139",
            "label": "Ruby on Rails"
          },
          {
            "value": "SKILL_140",
            "label": "React js"
          },
          {
            "value": "SKILL_141",
            "label": "Slim"
          },
          {
            "value": "SKILL_142",
            "label": "Spring Boot"
          },
          {
            "value": "SKILL_143",
            "label": "Spring Framework"
          },
          {
            "value": "SKILL_144",
            "label": "Strapi"
          },
          {
            "value": "SKILL_145",
            "label": "Svelte"
          },
          {
            "value": "SKILL_146",
            "label": "Symfony"
          },
          {
            "value": "SKILL_147",
            "label": "Vue.js"
          },
          {
            "value": "SKILL_148",
            "label": "Yii"
          },
          {
            "value": "SKILL_149",
            "label": "Zend Framework"
          },
          {
            "value": "SKILL_150",
            "label": "PostgreSQL"
          },
          {
            "value": "SKILL_151",
            "label": "DB2"
          },
          {
            "value": "SKILL_152",
            "label": "Redis"
          },
          {
            "value": "SKILL_153",
            "label": "Microsoft Access"
          },
          {
            "value": "SKILL_154",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_155",
            "label": "Oracle"
          },
          {
            "value": "SKILL_156",
            "label": "Windows"
          },
          {
            "value": "SKILL_157",
            "label": "iOS"
          },
          {
            "value": "SKILL_158",
            "label": "MacOS"
          },
          {
            "value": "SKILL_159",
            "label": "CI/CD"
          },
          {
            "value": "SKILL_160",
            "label": "AWS"
          },
          {
            "value": "SKILL_161",
            "label": "Azure"
          },
          {
            "value": "SKILL_162",
            "label": "Anchore"
          },
          {
            "value": "SKILL_163",
            "label": "Ansible"
          },
          {
            "value": "SKILL_164",
            "label": "Argo CD"
          },
          {
            "value": "SKILL_165",
            "label": "Bamboo"
          },
          {
            "value": "SKILL_166",
            "label": "BitBucket"
          },
          {
            "value": "SKILL_167",
            "label": "Chef"
          },
          {
            "value": "SKILL_168",
            "label": "E2E"
          },
          {
            "value": "SKILL_169",
            "label": "GitHub"
          },
          {
            "value": "SKILL_170",
            "label": "GitLab"
          },
          {
            "value": "SKILL_171",
            "label": "integration"
          },
          {
            "value": "SKILL_172",
            "label": "Jenkins"
          },
          {
            "value": "SKILL_173",
            "label": "Octopus Deploy"
          },
          {
            "value": "SKILL_174",
            "label": "Puppet"
          },
          {
            "value": "SKILL_175",
            "label": "Spinnaker"
          },
          {
            "value": "SKILL_176",
            "label": "Sysdig"
          },
          {
            "value": "SKILL_177",
            "label": "TeamCity"
          },
          {
            "value": "SKILL_178",
            "label": "TwistLock"
          },
          {
            "value": "SKILL_179",
            "label": "Junit"
          },
          {
            "value": "SKILL_180",
            "label": "AssertJ"
          },
          {
            "value": "SKILL_181",
            "label": "Selenium"
          },
          {
            "value": "SKILL_182",
            "label": "JMeter"
          },
          {
            "value": "SKILL_183",
            "label": "SonarQube"
          },
          {
            "value": "SKILL_184",
            "label": "Битрикс"
          },
          {
            "value": "SKILL_185",
            "label": "padn"
          }
        ]
      },
      {
        "name": "devOpsSkills",
        "label": "Dev Ops Skills",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "SKILL_001",
            "label": "Linux"
          },
          {
            "value": "SKILL_002",
            "label": "MS Word"
          },
          {
            "value": "SKILL_003",
            "label": "Ubuntu"
          },
          {
            "value": "SKILL_004",
            "label": "ОС Astra Linux"
          },
          {
            "value": "SKILL_005",
            "label": "Assembler"
          },
          {
            "value": "SKILL_006",
            "label": "GIT"
          },
          {
            "value": "SKILL_007",
            "label": "DOCKER"
          },
          {
            "value": "SKILL_008",
            "label": "JSON"
          },
          {
            "value": "SKILL_009",
            "label": "Machine learning"
          },
          {
            "value": "SKILL_010",
            "label": "Mathematical Analysis"
          },
          {
            "value": "SKILL_011",
            "label": "Matplotlib"
          },
          {
            "value": "SKILL_012",
            "label": "MS Power Point"
          },
          {
            "value": "SKILL_013",
            "label": "MySQL"
          },
          {
            "value": "SKILL_014",
            "label": "NumPy"
          },
          {
            "value": "SKILL_015",
            "label": "Pandas"
          },
          {
            "value": "SKILL_016",
            "label": "PyCharm"
          },
          {
            "value": "SKILL_017",
            "label": "Scikit-learn"
          },
          {
            "value": "SKILL_018",
            "label": "UX/UI"
          },
          {
            "value": "SKILL_019",
            "label": "БИБЛИОТЕКА QT5"
          },
          {
            "value": "SKILL_020",
            "label": "Искусственный интеллект (ИИ)"
          },
          {
            "value": "SKILL_021",
            "label": "РАЗМЕТКИ HTML"
          },
          {
            "value": "SKILL_022",
            "label": "СТИЛИ CSS"
          },
          {
            "value": "SKILL_023",
            "label": "СУБД POSTGRESQL"
          },
          {
            "value": "SKILL_024",
            "label": "СУБД SQLITE"
          },
          {
            "value": "SKILL_025",
            "label": "ЯЗЫК C++"
          },
          {
            "value": "SKILL_026",
            "label": "ЯЗЫК PYTHON"
          },
          {
            "value": "SKILL_027",
            "label": "ЯЗЫК С"
          },
          {
            "value": "SKILL_028",
            "label": "Tilda"
          },
          {
            "value": "SKILL_029",
            "label": "JavaFX"
          },
          {
            "value": "SKILL_030",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_031",
            "label": "MathCAD"
          },
          {
            "value": "SKILL_032",
            "label": "MS Excel"
          },
          {
            "value": "SKILL_033",
            "label": "Visual Studio"
          },
          {
            "value": "SKILL_034",
            "label": "ЯЗЫК JAVA"
          },
          {
            "value": "SKILL_035",
            "label": "Adobe Premiere Pro"
          },
          {
            "value": "SKILL_036",
            "label": "MS Office"
          },
          {
            "value": "SKILL_037",
            "label": "Corel Draw"
          },
          {
            "value": "SKILL_038",
            "label": "Photoshop"
          },
          {
            "value": "SKILL_039",
            "label": "Google Docs"
          },
          {
            "value": "SKILL_040",
            "label": "AutoCAD"
          },
          {
            "value": "SKILL_041",
            "label": "Autodesk Revit"
          },
          {
            "value": "SKILL_042",
            "label": "SolidWorks"
          },
          {
            "value": "SKILL_043",
            "label": "Adobe After Effects"
          },
          {
            "value": "SKILL_044",
            "label": "Android"
          },
          {
            "value": "SKILL_045",
            "label": "Figma"
          },
          {
            "value": "SKILL_046",
            "label": "Jira"
          },
          {
            "value": "SKILL_047",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_048",
            "label": "Ms Outlook"
          },
          {
            "value": "SKILL_049",
            "label": "ЯЗЫК C#"
          },
          {
            "value": "SKILL_050",
            "label": "Big Data"
          },
          {
            "value": "SKILL_051",
            "label": "BI Analytics"
          },
          {
            "value": "SKILL_052",
            "label": "BPMN"
          },
          {
            "value": "SKILL_053",
            "label": "Cisco"
          },
          {
            "value": "SKILL_054",
            "label": "Data Science"
          },
          {
            "value": "SKILL_055",
            "label": "Аналитика"
          },
          {
            "value": "SKILL_056",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ TCP"
          },
          {
            "value": "SKILL_057",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ HTTP"
          },
          {
            "value": "SKILL_058",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ IP"
          },
          {
            "value": "SKILL_059",
            "label": "ЯЗЫК KOTLIN"
          },
          {
            "value": "SKILL_060",
            "label": ".NET Framework"
          },
          {
            "value": "SKILL_061",
            "label": "Hibernate"
          },
          {
            "value": "SKILL_062",
            "label": "Java Database Connectivity (JDBC)"
          },
          {
            "value": "SKILL_063",
            "label": "Kubernetes"
          },
          {
            "value": "SKILL_064",
            "label": "Postman"
          },
          {
            "value": "SKILL_065",
            "label": "SPRING FRAMEWORK"
          },
          {
            "value": "SKILL_066",
            "label": "КОМПАС-3D"
          },
          {
            "value": "SKILL_067",
            "label": "ЯЗЫК JAVASCRIPT"
          },
          {
            "value": "SKILL_068",
            "label": "Pygame"
          },
          {
            "value": "SKILL_069",
            "label": "Django"
          },
          {
            "value": "SKILL_070",
            "label": "Apache Maven"
          },
          {
            "value": "SKILL_071",
            "label": "Битркис"
          },
          {
            "value": "SKILL_072",
            "label": "1С"
          },
          {
            "value": "SKILL_073",
            "label": "Altium Designer"
          },
          {
            "value": "SKILL_074",
            "label": "MicroCap"
          },
          {
            "value": "SKILL_075",
            "label": "Bootstrap"
          },
          {
            "value": "SKILL_076",
            "label": "CSS3"
          },
          {
            "value": "SKILL_077",
            "label": "Sass"
          },
          {
            "value": "SKILL_078",
            "label": "Adobe Illustrator"
          },
          {
            "value": "SKILL_079",
            "label": "Конструкторская документация"
          },
          {
            "value": "SKILL_080",
            "label": "3D"
          },
          {
            "value": "SKILL_081",
            "label": "MongoDB"
          },
          {
            "value": "SKILL_082",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_083",
            "label": "Autodesk Fusion 360"
          },
          {
            "value": "SKILL_084",
            "label": "САПР"
          },
          {
            "value": "SKILL_085",
            "label": "LabVIEW"
          },
          {
            "value": "SKILL_086",
            "label": "Микроконтроллеры"
          },
          {
            "value": "SKILL_087",
            "label": "Робототехника"
          },
          {
            "value": "SKILL_088",
            "label": "ЯЗЫК PHP"
          },
          {
            "value": "SKILL_089",
            "label": "Node.js"
          },
          {
            "value": "SKILL_090",
            "label": "NoSQL"
          },
          {
            "value": "SKILL_091",
            "label": "React.js"
          },
          {
            "value": "SKILL_092",
            "label": "TypeScript"
          },
          {
            "value": "SKILL_093",
            "label": "Vue js"
          },
          {
            "value": "SKILL_094",
            "label": "Mockito"
          },
          {
            "value": "SKILL_095",
            "label": "Ajax"
          },
          {
            "value": "SKILL_096",
            "label": "RISC-V"
          },
          {
            "value": "SKILL_097",
            "label": "Adobe InDesign"
          },
          {
            "value": "SKILL_098",
            "label": "БАЗОВЫЕ PIPELINE ДЛЯ СТЕКОВ В JS"
          },
          {
            "value": "SKILL_099",
            "label": "WordPress"
          },
          {
            "value": "SKILL_100",
            "label": "Simple DirectMedia Layer (SDL)"
          },
          {
            "value": "SKILL_101",
            "label": "GNU Octave"
          },
          {
            "value": "SKILL_102",
            "label": "P-Cad"
          },
          {
            "value": "SKILL_103",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_104",
            "label": "ANSYS"
          },
          {
            "value": "SKILL_105",
            "label": "Язык C"
          },
          {
            "value": "SKILL_106",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_107",
            "label": "Python"
          },
          {
            "value": "SKILL_108",
            "label": "PHP"
          },
          {
            "value": "SKILL_109",
            "label": "С++"
          },
          {
            "value": "SKILL_110",
            "label": "Java"
          },
          {
            "value": "SKILL_111",
            "label": "SQL"
          },
          {
            "value": "SKILL_112",
            "label": "C"
          },
          {
            "value": "SKILL_113",
            "label": "Не обладаю"
          },
          {
            "value": "SKILL_114",
            "label": "Kotlin"
          },
          {
            "value": "SKILL_115",
            "label": "JavaScript"
          },
          {
            "value": "SKILL_116",
            "label": "Visual Basic"
          },
          {
            "value": "SKILL_117",
            "label": "HTML"
          },
          {
            "value": "SKILL_118",
            "label": ".NET Core"
          },
          {
            "value": "SKILL_119",
            "label": "Angular"
          },
          {
            "value": "SKILL_120",
            "label": "Aura"
          },
          {
            "value": "SKILL_121",
            "label": "Backbone.JS"
          },
          {
            "value": "SKILL_122",
            "label": "Beego"
          },
          {
            "value": "SKILL_123",
            "label": "CakePHP"
          },
          {
            "value": "SKILL_124",
            "label": "CodeIgniter"
          },
          {
            "value": "SKILL_125",
            "label": "CSS"
          },
          {
            "value": "SKILL_126",
            "label": "Drupal"
          },
          {
            "value": "SKILL_127",
            "label": "ExpressJS"
          },
          {
            "value": "SKILL_128",
            "label": "FatFree"
          },
          {
            "value": "SKILL_129",
            "label": "Flask"
          },
          {
            "value": "SKILL_130",
            "label": "FuelPHP"
          },
          {
            "value": "SKILL_131",
            "label": "Gatsby"
          },
          {
            "value": "SKILL_132",
            "label": "Iris"
          },
          {
            "value": "SKILL_133",
            "label": "jQuery"
          },
          {
            "value": "SKILL_134",
            "label": "Koa"
          },
          {
            "value": "SKILL_135",
            "label": "Laravel"
          },
          {
            "value": "SKILL_136",
            "label": "Meteor"
          },
          {
            "value": "SKILL_137",
            "label": "NestJs"
          },
          {
            "value": "SKILL_138",
            "label": "Phalcon"
          },
          {
            "value": "SKILL_139",
            "label": "Ruby on Rails"
          },
          {
            "value": "SKILL_140",
            "label": "React js"
          },
          {
            "value": "SKILL_141",
            "label": "Slim"
          },
          {
            "value": "SKILL_142",
            "label": "Spring Boot"
          },
          {
            "value": "SKILL_143",
            "label": "Spring Framework"
          },
          {
            "value": "SKILL_144",
            "label": "Strapi"
          },
          {
            "value": "SKILL_145",
            "label": "Svelte"
          },
          {
            "value": "SKILL_146",
            "label": "Symfony"
          },
          {
            "value": "SKILL_147",
            "label": "Vue.js"
          },
          {
            "value": "SKILL_148",
            "label": "Yii"
          },
          {
            "value": "SKILL_149",
            "label": "Zend Framework"
          },
          {
            "value": "SKILL_150",
            "label": "PostgreSQL"
          },
          {
            "value": "SKILL_151",
            "label": "DB2"
          },
          {
            "value": "SKILL_152",
            "label": "Redis"
          },
          {
            "value": "SKILL_153",
            "label": "Microsoft Access"
          },
          {
            "value": "SKILL_154",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_155",
            "label": "Oracle"
          },
          {
            "value": "SKILL_156",
            "label": "Windows"
          },
          {
            "value": "SKILL_157",
            "label": "iOS"
          },
          {
            "value": "SKILL_158",
            "label": "MacOS"
          },
          {
            "value": "SKILL_159",
            "label": "CI/CD"
          },
          {
            "value": "SKILL_160",
            "label": "AWS"
          },
          {
            "value": "SKILL_161",
            "label": "Azure"
          },
          {
            "value": "SKILL_162",
            "label": "Anchore"
          },
          {
            "value": "SKILL_163",
            "label": "Ansible"
          },
          {
            "value": "SKILL_164",
            "label": "Argo CD"
          },
          {
            "value": "SKILL_165",
            "label": "Bamboo"
          },
          {
            "value": "SKILL_166",
            "label": "BitBucket"
          },
          {
            "value": "SKILL_167",
            "label": "Chef"
          },
          {
            "value": "SKILL_168",
            "label": "E2E"
          },
          {
            "value": "SKILL_169",
            "label": "GitHub"
          },
          {
            "value": "SKILL_170",
            "label": "GitLab"
          },
          {
            "value": "SKILL_171",
            "label": "integration"
          },
          {
            "value": "SKILL_172",
            "label": "Jenkins"
          },
          {
            "value": "SKILL_173",
            "label": "Octopus Deploy"
          },
          {
            "value": "SKILL_174",
            "label": "Puppet"
          },
          {
            "value": "SKILL_175",
            "label": "Spinnaker"
          },
          {
            "value": "SKILL_176",
            "label": "Sysdig"
          },
          {
            "value": "SKILL_177",
            "label": "TeamCity"
          },
          {
            "value": "SKILL_178",
            "label": "TwistLock"
          },
          {
            "value": "SKILL_179",
            "label": "Junit"
          },
          {
            "value": "SKILL_180",
            "label": "AssertJ"
          },
          {
            "value": "SKILL_181",
            "label": "Selenium"
          },
          {
            "value": "SKILL_182",
            "label": "JMeter"
          },
          {
            "value": "SKILL_183",
            "label": "SonarQube"
          },
          {
            "value": "SKILL_184",
            "label": "Битрикс"
          },
          {
            "value": "SKILL_185",
            "label": "padn"
          }
        ]
      },
      {
        "name": "testingSkills",
        "label": "Testing Skills",
        "type": "array",
        "isArray": true,
        "enumValues": [
          {
            "value": "SKILL_001",
            "label": "Linux"
          },
          {
            "value": "SKILL_002",
            "label": "MS Word"
          },
          {
            "value": "SKILL_003",
            "label": "Ubuntu"
          },
          {
            "value": "SKILL_004",
            "label": "ОС Astra Linux"
          },
          {
            "value": "SKILL_005",
            "label": "Assembler"
          },
          {
            "value": "SKILL_006",
            "label": "GIT"
          },
          {
            "value": "SKILL_007",
            "label": "DOCKER"
          },
          {
            "value": "SKILL_008",
            "label": "JSON"
          },
          {
            "value": "SKILL_009",
            "label": "Machine learning"
          },
          {
            "value": "SKILL_010",
            "label": "Mathematical Analysis"
          },
          {
            "value": "SKILL_011",
            "label": "Matplotlib"
          },
          {
            "value": "SKILL_012",
            "label": "MS Power Point"
          },
          {
            "value": "SKILL_013",
            "label": "MySQL"
          },
          {
            "value": "SKILL_014",
            "label": "NumPy"
          },
          {
            "value": "SKILL_015",
            "label": "Pandas"
          },
          {
            "value": "SKILL_016",
            "label": "PyCharm"
          },
          {
            "value": "SKILL_017",
            "label": "Scikit-learn"
          },
          {
            "value": "SKILL_018",
            "label": "UX/UI"
          },
          {
            "value": "SKILL_019",
            "label": "БИБЛИОТЕКА QT5"
          },
          {
            "value": "SKILL_020",
            "label": "Искусственный интеллект (ИИ)"
          },
          {
            "value": "SKILL_021",
            "label": "РАЗМЕТКИ HTML"
          },
          {
            "value": "SKILL_022",
            "label": "СТИЛИ CSS"
          },
          {
            "value": "SKILL_023",
            "label": "СУБД POSTGRESQL"
          },
          {
            "value": "SKILL_024",
            "label": "СУБД SQLITE"
          },
          {
            "value": "SKILL_025",
            "label": "ЯЗЫК C++"
          },
          {
            "value": "SKILL_026",
            "label": "ЯЗЫК PYTHON"
          },
          {
            "value": "SKILL_027",
            "label": "ЯЗЫК С"
          },
          {
            "value": "SKILL_028",
            "label": "Tilda"
          },
          {
            "value": "SKILL_029",
            "label": "JavaFX"
          },
          {
            "value": "SKILL_030",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_031",
            "label": "MathCAD"
          },
          {
            "value": "SKILL_032",
            "label": "MS Excel"
          },
          {
            "value": "SKILL_033",
            "label": "Visual Studio"
          },
          {
            "value": "SKILL_034",
            "label": "ЯЗЫК JAVA"
          },
          {
            "value": "SKILL_035",
            "label": "Adobe Premiere Pro"
          },
          {
            "value": "SKILL_036",
            "label": "MS Office"
          },
          {
            "value": "SKILL_037",
            "label": "Corel Draw"
          },
          {
            "value": "SKILL_038",
            "label": "Photoshop"
          },
          {
            "value": "SKILL_039",
            "label": "Google Docs"
          },
          {
            "value": "SKILL_040",
            "label": "AutoCAD"
          },
          {
            "value": "SKILL_041",
            "label": "Autodesk Revit"
          },
          {
            "value": "SKILL_042",
            "label": "SolidWorks"
          },
          {
            "value": "SKILL_043",
            "label": "Adobe After Effects"
          },
          {
            "value": "SKILL_044",
            "label": "Android"
          },
          {
            "value": "SKILL_045",
            "label": "Figma"
          },
          {
            "value": "SKILL_046",
            "label": "Jira"
          },
          {
            "value": "SKILL_047",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_048",
            "label": "Ms Outlook"
          },
          {
            "value": "SKILL_049",
            "label": "ЯЗЫК C#"
          },
          {
            "value": "SKILL_050",
            "label": "Big Data"
          },
          {
            "value": "SKILL_051",
            "label": "BI Analytics"
          },
          {
            "value": "SKILL_052",
            "label": "BPMN"
          },
          {
            "value": "SKILL_053",
            "label": "Cisco"
          },
          {
            "value": "SKILL_054",
            "label": "Data Science"
          },
          {
            "value": "SKILL_055",
            "label": "Аналитика"
          },
          {
            "value": "SKILL_056",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ TCP"
          },
          {
            "value": "SKILL_057",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ HTTP"
          },
          {
            "value": "SKILL_058",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ IP"
          },
          {
            "value": "SKILL_059",
            "label": "ЯЗЫК KOTLIN"
          },
          {
            "value": "SKILL_060",
            "label": ".NET Framework"
          },
          {
            "value": "SKILL_061",
            "label": "Hibernate"
          },
          {
            "value": "SKILL_062",
            "label": "Java Database Connectivity (JDBC)"
          },
          {
            "value": "SKILL_063",
            "label": "Kubernetes"
          },
          {
            "value": "SKILL_064",
            "label": "Postman"
          },
          {
            "value": "SKILL_065",
            "label": "SPRING FRAMEWORK"
          },
          {
            "value": "SKILL_066",
            "label": "КОМПАС-3D"
          },
          {
            "value": "SKILL_067",
            "label": "ЯЗЫК JAVASCRIPT"
          },
          {
            "value": "SKILL_068",
            "label": "Pygame"
          },
          {
            "value": "SKILL_069",
            "label": "Django"
          },
          {
            "value": "SKILL_070",
            "label": "Apache Maven"
          },
          {
            "value": "SKILL_071",
            "label": "Битркис"
          },
          {
            "value": "SKILL_072",
            "label": "1С"
          },
          {
            "value": "SKILL_073",
            "label": "Altium Designer"
          },
          {
            "value": "SKILL_074",
            "label": "MicroCap"
          },
          {
            "value": "SKILL_075",
            "label": "Bootstrap"
          },
          {
            "value": "SKILL_076",
            "label": "CSS3"
          },
          {
            "value": "SKILL_077",
            "label": "Sass"
          },
          {
            "value": "SKILL_078",
            "label": "Adobe Illustrator"
          },
          {
            "value": "SKILL_079",
            "label": "Конструкторская документация"
          },
          {
            "value": "SKILL_080",
            "label": "3D"
          },
          {
            "value": "SKILL_081",
            "label": "MongoDB"
          },
          {
            "value": "SKILL_082",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_083",
            "label": "Autodesk Fusion 360"
          },
          {
            "value": "SKILL_084",
            "label": "САПР"
          },
          {
            "value": "SKILL_085",
            "label": "LabVIEW"
          },
          {
            "value": "SKILL_086",
            "label": "Микроконтроллеры"
          },
          {
            "value": "SKILL_087",
            "label": "Робототехника"
          },
          {
            "value": "SKILL_088",
            "label": "ЯЗЫК PHP"
          },
          {
            "value": "SKILL_089",
            "label": "Node.js"
          },
          {
            "value": "SKILL_090",
            "label": "NoSQL"
          },
          {
            "value": "SKILL_091",
            "label": "React.js"
          },
          {
            "value": "SKILL_092",
            "label": "TypeScript"
          },
          {
            "value": "SKILL_093",
            "label": "Vue js"
          },
          {
            "value": "SKILL_094",
            "label": "Mockito"
          },
          {
            "value": "SKILL_095",
            "label": "Ajax"
          },
          {
            "value": "SKILL_096",
            "label": "RISC-V"
          },
          {
            "value": "SKILL_097",
            "label": "Adobe InDesign"
          },
          {
            "value": "SKILL_098",
            "label": "БАЗОВЫЕ PIPELINE ДЛЯ СТЕКОВ В JS"
          },
          {
            "value": "SKILL_099",
            "label": "WordPress"
          },
          {
            "value": "SKILL_100",
            "label": "Simple DirectMedia Layer (SDL)"
          },
          {
            "value": "SKILL_101",
            "label": "GNU Octave"
          },
          {
            "value": "SKILL_102",
            "label": "P-Cad"
          },
          {
            "value": "SKILL_103",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_104",
            "label": "ANSYS"
          },
          {
            "value": "SKILL_105",
            "label": "Язык C"
          },
          {
            "value": "SKILL_106",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_107",
            "label": "Python"
          },
          {
            "value": "SKILL_108",
            "label": "PHP"
          },
          {
            "value": "SKILL_109",
            "label": "С++"
          },
          {
            "value": "SKILL_110",
            "label": "Java"
          },
          {
            "value": "SKILL_111",
            "label": "SQL"
          },
          {
            "value": "SKILL_112",
            "label": "C"
          },
          {
            "value": "SKILL_113",
            "label": "Не обладаю"
          },
          {
            "value": "SKILL_114",
            "label": "Kotlin"
          },
          {
            "value": "SKILL_115",
            "label": "JavaScript"
          },
          {
            "value": "SKILL_116",
            "label": "Visual Basic"
          },
          {
            "value": "SKILL_117",
            "label": "HTML"
          },
          {
            "value": "SKILL_118",
            "label": ".NET Core"
          },
          {
            "value": "SKILL_119",
            "label": "Angular"
          },
          {
            "value": "SKILL_120",
            "label": "Aura"
          },
          {
            "value": "SKILL_121",
            "label": "Backbone.JS"
          },
          {
            "value": "SKILL_122",
            "label": "Beego"
          },
          {
            "value": "SKILL_123",
            "label": "CakePHP"
          },
          {
            "value": "SKILL_124",
            "label": "CodeIgniter"
          },
          {
            "value": "SKILL_125",
            "label": "CSS"
          },
          {
            "value": "SKILL_126",
            "label": "Drupal"
          },
          {
            "value": "SKILL_127",
            "label": "ExpressJS"
          },
          {
            "value": "SKILL_128",
            "label": "FatFree"
          },
          {
            "value": "SKILL_129",
            "label": "Flask"
          },
          {
            "value": "SKILL_130",
            "label": "FuelPHP"
          },
          {
            "value": "SKILL_131",
            "label": "Gatsby"
          },
          {
            "value": "SKILL_132",
            "label": "Iris"
          },
          {
            "value": "SKILL_133",
            "label": "jQuery"
          },
          {
            "value": "SKILL_134",
            "label": "Koa"
          },
          {
            "value": "SKILL_135",
            "label": "Laravel"
          },
          {
            "value": "SKILL_136",
            "label": "Meteor"
          },
          {
            "value": "SKILL_137",
            "label": "NestJs"
          },
          {
            "value": "SKILL_138",
            "label": "Phalcon"
          },
          {
            "value": "SKILL_139",
            "label": "Ruby on Rails"
          },
          {
            "value": "SKILL_140",
            "label": "React js"
          },
          {
            "value": "SKILL_141",
            "label": "Slim"
          },
          {
            "value": "SKILL_142",
            "label": "Spring Boot"
          },
          {
            "value": "SKILL_143",
            "label": "Spring Framework"
          },
          {
            "value": "SKILL_144",
            "label": "Strapi"
          },
          {
            "value": "SKILL_145",
            "label": "Svelte"
          },
          {
            "value": "SKILL_146",
            "label": "Symfony"
          },
          {
            "value": "SKILL_147",
            "label": "Vue.js"
          },
          {
            "value": "SKILL_148",
            "label": "Yii"
          },
          {
            "value": "SKILL_149",
            "label": "Zend Framework"
          },
          {
            "value": "SKILL_150",
            "label": "PostgreSQL"
          },
          {
            "value": "SKILL_151",
            "label": "DB2"
          },
          {
            "value": "SKILL_152",
            "label": "Redis"
          },
          {
            "value": "SKILL_153",
            "label": "Microsoft Access"
          },
          {
            "value": "SKILL_154",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_155",
            "label": "Oracle"
          },
          {
            "value": "SKILL_156",
            "label": "Windows"
          },
          {
            "value": "SKILL_157",
            "label": "iOS"
          },
          {
            "value": "SKILL_158",
            "label": "MacOS"
          },
          {
            "value": "SKILL_159",
            "label": "CI/CD"
          },
          {
            "value": "SKILL_160",
            "label": "AWS"
          },
          {
            "value": "SKILL_161",
            "label": "Azure"
          },
          {
            "value": "SKILL_162",
            "label": "Anchore"
          },
          {
            "value": "SKILL_163",
            "label": "Ansible"
          },
          {
            "value": "SKILL_164",
            "label": "Argo CD"
          },
          {
            "value": "SKILL_165",
            "label": "Bamboo"
          },
          {
            "value": "SKILL_166",
            "label": "BitBucket"
          },
          {
            "value": "SKILL_167",
            "label": "Chef"
          },
          {
            "value": "SKILL_168",
            "label": "E2E"
          },
          {
            "value": "SKILL_169",
            "label": "GitHub"
          },
          {
            "value": "SKILL_170",
            "label": "GitLab"
          },
          {
            "value": "SKILL_171",
            "label": "integration"
          },
          {
            "value": "SKILL_172",
            "label": "Jenkins"
          },
          {
            "value": "SKILL_173",
            "label": "Octopus Deploy"
          },
          {
            "value": "SKILL_174",
            "label": "Puppet"
          },
          {
            "value": "SKILL_175",
            "label": "Spinnaker"
          },
          {
            "value": "SKILL_176",
            "label": "Sysdig"
          },
          {
            "value": "SKILL_177",
            "label": "TeamCity"
          },
          {
            "value": "SKILL_178",
            "label": "TwistLock"
          },
          {
            "value": "SKILL_179",
            "label": "Junit"
          },
          {
            "value": "SKILL_180",
            "label": "AssertJ"
          },
          {
            "value": "SKILL_181",
            "label": "Selenium"
          },
          {
            "value": "SKILL_182",
            "label": "JMeter"
          },
          {
            "value": "SKILL_183",
            "label": "SonarQube"
          },
          {
            "value": "SKILL_184",
            "label": "Битрикс"
          },
          {
            "value": "SKILL_185",
            "label": "padn"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "toolsAndMaterial",
        "label": "Tools And Material",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "abilityToDoBetter",
        "label": "Ability To Do Better",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "recognitionAndPraise",
        "label": "Recognition And Praise",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "managerCare",
        "label": "Manager Care",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "development",
        "label": "Development",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "pointOfView",
        "label": "Point Of View",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "missionAndGoal",
        "label": "Mission And Goal",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "qualityWork",
        "label": "Quality Work",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "friendAtWork",
        "label": "Friend At Work",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "talkAboutSuccesses",
        "label": "Talk About Successes",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "growthAtWork",
        "label": "Growth At Work",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "CURATOR",
            "label": "КУРАТОР"
          },
          {
            "value": "AVDEEV_GEORGIY_VALERYEVICH",
            "label": "Авдеев Георгий Валерьевич"
          },
          {
            "value": "KLIMINA_TAISIYA_MAKSIMOVNA",
            "label": "Климина Таисия Максимовна"
          },
          {
            "value": "LARIONOVA_EKATERINA_ANDREEVNA",
            "label": "Ларионова Екатерина Андреевна"
          },
          {
            "value": "LUKIN_ARTYOM_ANDREEVICH",
            "label": "Лукин Артём Андреевич"
          },
          {
            "value": "PULINA_ANGELINA_SERGEEVNA",
            "label": "Пулина Ангелина Сергеевна"
          },
          {
            "value": "RYAZANOV_DANIL_ALEKSANDROVICH",
            "label": "Рязанов Данил Александрович"
          },
          {
            "value": "SHIROKOV_KIRILL_SERGEEVICH",
            "label": "Широков Кирилл Сергеевич"
          },
          {
            "value": "SHKUROPAT_PAVEL_KONSTANTINOVICH",
            "label": "Шкуропат Павел Константинович"
          },
          {
            "value": "ASSISTANT",
            "label": "АССИСТЕНТ"
          },
          {
            "value": "NOT_REQUIRED",
            "label": "НЕ ТРЕБУЕТСЯ"
          }
        ]
      },
      {
        "name": "communication",
        "label": "Communication",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "organizationalSkills",
        "label": "Organizational Skills",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "discipline",
        "label": "Discipline",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "leadership",
        "label": "Leadership",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "selfMotivation",
        "label": "Self Motivation",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "loyalty",
        "label": "Loyalty",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
      },
      {
        "name": "motivationOfOthers",
        "label": "Motivation Of Others",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "ZERO",
            "label": "0"
          },
          {
            "value": "ONE",
            "label": "1"
          },
          {
            "value": "TWO",
            "label": "2"
          },
          {
            "value": "THREE",
            "label": "3"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "NEW_APPLICATION",
            "label": "НОВАЯ ЗАЯВКА"
          },
          {
            "value": "ADDED_TO_DATABASE",
            "label": "ВНЕСЕНО В БД"
          },
          {
            "value": "REJECTED_DUPLICATE",
            "label": "ОТКАЗ (повтор)"
          },
          {
            "value": "REJECTED_OTHER",
            "label": "ОТКАЗ (прочее)"
          },
          {
            "value": "REJECTED_CITIZENSHIP",
            "label": "ОТКАЗ (гражданство)"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "RUSSIAN_FEDERATION",
            "label": "Российская Федерация"
          },
          {
            "value": "KAZAKHSTAN",
            "label": "Республика Казахстан"
          },
          {
            "value": "BELARUS",
            "label": "Республика Беларусь"
          },
          {
            "value": "MOLDOVA",
            "label": "Республика Молдова"
          },
          {
            "value": "UZBEKISTAN",
            "label": "Республика Узбекистан"
          },
          {
            "value": "TURKMENISTAN",
            "label": "Туркменистан"
          },
          {
            "value": "KYRGYZ_REPUBLIC",
            "label": "Кыргызская Республика"
          }
        ]
      },
      {
        "name": "registrationRegion",
        "label": "Registration Region",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "REGION_01",
            "label": "г. Санкт-Петербург"
          },
          {
            "value": "REGION_02",
            "label": "Ленинградская область"
          },
          {
            "value": "REGION_03",
            "label": "Белгородская область"
          },
          {
            "value": "REGION_04",
            "label": "Республика Карелия"
          },
          {
            "value": "REGION_05",
            "label": "Пермский край"
          },
          {
            "value": "REGION_06",
            "label": "Амурская область"
          },
          {
            "value": "REGION_07",
            "label": "Астраханская область"
          },
          {
            "value": "REGION_08",
            "label": "Республика Марий Эл"
          },
          {
            "value": "REGION_09",
            "label": "Калининградская область"
          },
          {
            "value": "REGION_10",
            "label": "Брянская область"
          },
          {
            "value": "REGION_11",
            "label": "Свердловская область"
          },
          {
            "value": "REGION_12",
            "label": "Новгородская область"
          },
          {
            "value": "REGION_13",
            "label": "Республика Башкортостан"
          },
          {
            "value": "REGION_14",
            "label": "Оренбургская область"
          },
          {
            "value": "REGION_15",
            "label": "Кабардино-Балкарская Республика"
          },
          {
            "value": "REGION_16",
            "label": "Самарская область"
          },
          {
            "value": "REGION_17",
            "label": "Ханты-Мансийский автономный округ — Югра"
          },
          {
            "value": "REGION_18",
            "label": "Тюменская область"
          },
          {
            "value": "REGION_19",
            "label": "Хабаровский край"
          },
          {
            "value": "REGION_20",
            "label": "Краснодарский край"
          },
          {
            "value": "REGION_21",
            "label": "Республика Крым"
          },
          {
            "value": "REGION_22",
            "label": "Республика Коми"
          },
          {
            "value": "REGION_23",
            "label": "Республика Хакасия"
          },
          {
            "value": "REGION_24",
            "label": "Томская область"
          },
          {
            "value": "REGION_25",
            "label": "Ямало-Ненецкий автономный округ"
          },
          {
            "value": "REGION_26",
            "label": "г. Севастополь"
          },
          {
            "value": "REGION_27",
            "label": "Республика Мордовия"
          },
          {
            "value": "REGION_28",
            "label": "Тверская область"
          },
          {
            "value": "REGION_29",
            "label": "Новосибирская область"
          },
          {
            "value": "REGION_30",
            "label": "прочее"
          },
          {
            "value": "REGION_31",
            "label": "Псковская область"
          },
          {
            "value": "REGION_32",
            "label": "Красноярский край"
          },
          {
            "value": "REGION_33",
            "label": "Тамбовская область"
          },
          {
            "value": "REGION_34",
            "label": "Алтайский край"
          },
          {
            "value": "REGION_35",
            "label": "Забайкальский край"
          },
          {
            "value": "REGION_36",
            "label": "Донецкая Народная Республика"
          },
          {
            "value": "REGION_37",
            "label": "Волгоградская область"
          },
          {
            "value": "REGION_38",
            "label": "Ростовская область"
          },
          {
            "value": "REGION_39",
            "label": "Челябинская область"
          },
          {
            "value": "REGION_40",
            "label": "Мурманская область"
          },
          {
            "value": "REGION_41",
            "label": "Костромская область"
          },
          {
            "value": "REGION_42",
            "label": "Архангельская область"
          },
          {
            "value": "REGION_43",
            "label": "Московская область"
          },
          {
            "value": "REGION_44",
            "label": "Камчатский край"
          },
          {
            "value": "REGION_45",
            "label": "Ярославская область"
          },
          {
            "value": "REGION_46",
            "label": "Саратовская область"
          },
          {
            "value": "REGION_47",
            "label": "Воронежская область"
          },
          {
            "value": "REGION_48",
            "label": "Республика Дагестан"
          },
          {
            "value": "REGION_49",
            "label": "Ивановская область"
          },
          {
            "value": "REGION_50",
            "label": "Республика Калмыкия"
          },
          {
            "value": "REGION_51",
            "label": "Республика Татарстан (Татарстан)"
          },
          {
            "value": "REGION_52",
            "label": "Кировская область"
          },
          {
            "value": "REGION_53",
            "label": "Курская область"
          },
          {
            "value": "REGION_54",
            "label": "Вологодская область"
          },
          {
            "value": "REGION_55",
            "label": "Кемеровская область — Кузбасс"
          },
          {
            "value": "REGION_56",
            "label": "Ставропольский край"
          },
          {
            "value": "REGION_57",
            "label": "Нижегородская область"
          },
          {
            "value": "REGION_58",
            "label": "Республика Адыгея (Адыгея)"
          },
          {
            "value": "REGION_59",
            "label": "Удмуртская Республика"
          },
          {
            "value": "REGION_60",
            "label": "Владимирская область"
          },
          {
            "value": "REGION_61",
            "label": "Иркутская область"
          },
          {
            "value": "REGION_62",
            "label": "г. Москва"
          },
          {
            "value": "REGION_63",
            "label": "Республика Саха (Якутия)"
          },
          {
            "value": "REGION_64",
            "label": "Рязанская область"
          },
          {
            "value": "REGION_65",
            "label": "Приморский край"
          },
          {
            "value": "REGION_66",
            "label": "Курганская область"
          },
          {
            "value": "REGION_67",
            "label": "Омская область"
          },
          {
            "value": "REGION_68",
            "label": "Чувашская Республика — Чувашия"
          },
          {
            "value": "REGION_69",
            "label": "Калужская область"
          },
          {
            "value": "REGION_70",
            "label": "Республика Бурятия"
          },
          {
            "value": "REGION_71",
            "label": "Орловская область"
          },
          {
            "value": "REGION_72",
            "label": "Тульская область"
          },
          {
            "value": "REGION_73",
            "label": "Ульяновская область"
          },
          {
            "value": "REGION_74",
            "label": "Карачаево-Черкесская Республика"
          },
          {
            "value": "REGION_75",
            "label": "Липецкая область"
          },
          {
            "value": "REGION_76",
            "label": "Республика Северная Осетия — Алания"
          },
          {
            "value": "REGION_77",
            "label": "Республика Алтай"
          }
        ]
      },
      {
        "name": "temporaryRegistration",
        "label": "Temporary Registration",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "hasRelativesAbroad",
        "label": "Has Relatives Abroad",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "changedCitizenship",
        "label": "Changed Citizenship",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "militaryRegistration",
        "label": "Military Registration",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "NOT_REQUIRED_FOR_WOMEN",
            "label": "не требуется (для девушек)"
          },
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "hasJob",
        "label": "Has Job",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "targetEducation",
        "label": "Target Education",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
      },
      {
        "name": "travelAvailability",
        "label": "Travel Availability",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "LONG_PERIOD_DURING_YEAR",
            "label": "Да, готов на длительный период в течении года"
          },
          {
            "value": "LONG_PERIOD_IN_SUMMER",
            "label": "Да, готов на длительный период летом"
          },
          {
            "value": "UP_TO_TWO_THREE_WEEKS_PER_MONTH",
            "label": "Да, но не более 2-3 недель/месяц"
          },
          {
            "value": "UP_TO_ONE_WEEK_PER_MONTH",
            "label": "Да, но не более 1 недели/месяц"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "INFORMATICS",
            "label": "информатика и информационно-коммуникационные технологии (ИКТ)"
          },
          {
            "value": "PHYSICS",
            "label": "физика"
          },
          {
            "value": "SOCIAL_STUDIES",
            "label": "обществознание"
          },
          {
            "value": "CHEMISTRY",
            "label": "химия"
          },
          {
            "value": "HISTORY",
            "label": "история"
          },
          {
            "value": "FOREIGN_LANGUAGES",
            "label": "иностранные языки"
          },
          {
            "value": "LITERATURE",
            "label": "литература"
          },
          {
            "value": "BIOLOGY",
            "label": "биология"
          },
          {
            "value": "GEOGRAPHY",
            "label": "география"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "NOT_TAKEN",
            "label": "не сдавал (-ла)"
          },
          {
            "value": "PHYSICS",
            "label": "физика"
          },
          {
            "value": "CHEMISTRY",
            "label": "химия"
          },
          {
            "value": "HISTORY",
            "label": "история"
          },
          {
            "value": "SOCIAL_STUDIES",
            "label": "обществознание"
          },
          {
            "value": "INFORMATICS",
            "label": "информатика и информационно-коммуникационные технологии (ИКТ)"
          },
          {
            "value": "BIOLOGY",
            "label": "биология"
          },
          {
            "value": "GEOGRAPHY",
            "label": "география"
          },
          {
            "value": "FOREIGN_LANGUAGES",
            "label": "иностранные языки"
          },
          {
            "value": "LITERATURE",
            "label": "литература"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "INSTITUTION_01",
            "label": "СПбПУ (Санкт-Петербургский политехнический университет Петра Великого)"
          },
          {
            "value": "INSTITUTION_02",
            "label": "СПбГЭТУ \"ЛЭТИ\" (Санкт-Петербургский государственный электротехнический университет «ЛЭТИ»)"
          },
          {
            "value": "INSTITUTION_03",
            "label": "СПбГУТ (Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А. Бонч-Бруевича)"
          },
          {
            "value": "INSTITUTION_04",
            "label": "ГУМРФ имени адмирала С. О. Макарова (Государственный университет морского и речного флота им. адмирала С. О. Макарова)"
          },
          {
            "value": "INSTITUTION_05",
            "label": "СПбГАСУ (Санкт-Петербургский государственный архитектурно-строительный университет)"
          },
          {
            "value": "INSTITUTION_06",
            "label": "ГУАП (Санкт-Петербургский государственный университет аэрокосмического приборостроения)"
          },
          {
            "value": "INSTITUTION_07",
            "label": "СПбГУПТД (Санкт-Петербургский государственный университет промышленных технологий и дизайна)"
          },
          {
            "value": "INSTITUTION_08",
            "label": "РАНХиГС (Российская академия народного хозяйства и государственной службы при Президенте Российской Федерации)"
          },
          {
            "value": "INSTITUTION_09",
            "label": "Университет ИТМО (Федеральное государственное автономное образовательное учреждение высшего образования «Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики»)"
          },
          {
            "value": "INSTITUTION_10",
            "label": "НИУ ВШЭ (Высшая школа Экономики)"
          },
          {
            "value": "INSTITUTION_11",
            "label": "СПбГЛТУ им С.М. Кирова (Санкт-Петербургский государственный лесотехнический университет имени С.М. Кирова)"
          },
          {
            "value": "INSTITUTION_12",
            "label": "СПбГУ (Санкт-Петербургский государственный университет)"
          },
          {
            "value": "INSTITUTION_13",
            "label": "БГТУ «ВОЕНМЕХ» (Военная академия связи имени Маршала Советского"
          },
          {
            "value": "INSTITUTION_14",
            "label": "РГПУ им. А.И. Герцена (Российский Государственный Педагогический Университет имени А.И. Герцена)"
          },
          {
            "value": "INSTITUTION_15",
            "label": "СПбГТИ (ТУ) (Санкт-Петербургский государственный технологический институт)"
          },
          {
            "value": "INSTITUTION_16",
            "label": "РГГМУ (Российский государственный Гидрометеорологический университет)"
          },
          {
            "value": "INSTITUTION_17",
            "label": "СПбГМТУ (Санкт-Петербургский государственный морской технический университет)"
          },
          {
            "value": "INSTITUTION_18",
            "label": "Санкт-Петербургский горный университет (Санкт-Петербургский горный университет императрицы Екатерины II)"
          },
          {
            "value": "INSTITUTION_19",
            "label": "Колледж Телекоммуникаций им. Э.Т. Кренкеля (Санкт-Петербургский колледж телекоммуникаций имени Э.Т. Кренкеля)"
          },
          {
            "value": "INSTITUTION_20",
            "label": "СПбГЭУ (Санкт-Петербургский государственный экономический университет)"
          },
          {
            "value": "INSTITUTION_21",
            "label": "ЛГУ им. А.С. Пушкина (Ленинградский государственный университет имени А.С. Пушкина)"
          },
          {
            "value": "INSTITUTION_22",
            "label": "АНО ВО \"Университет при МПА ЕврАзЭС\" (Автономная некоммерческая организация высшего образования \"Университет при Межпарламентской Ассамблее ЕврАзЭС\")"
          },
          {
            "value": "INSTITUTION_23",
            "label": "СПбГУП (Санкт-Петербургский Гуманитарный Университет Профсоюзов)"
          },
          {
            "value": "INSTITUTION_24",
            "label": "СПб ГБПОУ \"Колледж автоматизации производства\" (Санкт-Петербургское государственное бюджетное профессиональное образовательное учреждение «Колледж автоматизации производственных процессов и прикладных информационных систем»)"
          },
          {
            "value": "INSTITUTION_25",
            "label": "Другое (Нет в списке)"
          },
          {
            "value": "INSTITUTION_26",
            "label": "ТКУиК (Санкт-Петербургский Технический колледж управления и коммерции)"
          },
          {
            "value": "INSTITUTION_27",
            "label": "Ванкор-БП"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "SECONDARY_VOCATIONAL",
            "label": "СРЕДНЕЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ"
          },
          {
            "value": "BACHELOR",
            "label": "БАКАЛАВРИАТ"
          },
          {
            "value": "SPECIALIST",
            "label": "СПЕЦИАЛИТЕТ"
          },
          {
            "value": "MASTER",
            "label": "МАГИСТРАТУРА"
          },
          {
            "value": "POSTGRADUATE",
            "label": "АСПИРАНТУРА"
          },
          {
            "value": "COMPLETED_EDUCATION",
            "label": "окончил(-ла) обучение"
          }
        ]
      },
      {
        "name": "course",
        "label": "Course",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "FIRST_YEAR",
            "label": "1-й"
          },
          {
            "value": "SECOND_YEAR",
            "label": "2-й"
          },
          {
            "value": "THIRD_YEAR",
            "label": "3-й"
          },
          {
            "value": "FOURTH_YEAR",
            "label": "4-й"
          },
          {
            "value": "FIFTH_YEAR",
            "label": "5-й"
          },
          {
            "value": "SIXTH_YEAR",
            "label": "6-й"
          },
          {
            "value": "EDUCATION_COMPLETED",
            "label": "Закончено образование"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "DONT_KNOW",
            "label": "не знаю"
          },
          {
            "value": "ENGLISH",
            "label": "Английский"
          },
          {
            "value": "FRENCH",
            "label": "Французский"
          },
          {
            "value": "GERMAN",
            "label": "Немецкий"
          },
          {
            "value": "KOREAN",
            "label": "Корейский"
          },
          {
            "value": "ITALIAN",
            "label": "Итальянский"
          },
          {
            "value": "CHINESE",
            "label": "Китайский"
          },
          {
            "value": "ARABIC",
            "label": "Арабский"
          },
          {
            "value": "SPANISH",
            "label": "Испанский"
          },
          {
            "value": "PORTUGUESE",
            "label": "Португальский"
          },
          {
            "value": "TURKISH",
            "label": "Турецкий"
          },
          {
            "value": "JAPANESE",
            "label": "Японский"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "SKILL_001",
            "label": "Linux"
          },
          {
            "value": "SKILL_002",
            "label": "MS Word"
          },
          {
            "value": "SKILL_003",
            "label": "Ubuntu"
          },
          {
            "value": "SKILL_004",
            "label": "ОС Astra Linux"
          },
          {
            "value": "SKILL_005",
            "label": "Assembler"
          },
          {
            "value": "SKILL_006",
            "label": "GIT"
          },
          {
            "value": "SKILL_007",
            "label": "DOCKER"
          },
          {
            "value": "SKILL_008",
            "label": "JSON"
          },
          {
            "value": "SKILL_009",
            "label": "Machine learning"
          },
          {
            "value": "SKILL_010",
            "label": "Mathematical Analysis"
          },
          {
            "value": "SKILL_011",
            "label": "Matplotlib"
          },
          {
            "value": "SKILL_012",
            "label": "MS Power Point"
          },
          {
            "value": "SKILL_013",
            "label": "MySQL"
          },
          {
            "value": "SKILL_014",
            "label": "NumPy"
          },
          {
            "value": "SKILL_015",
            "label": "Pandas"
          },
          {
            "value": "SKILL_016",
            "label": "PyCharm"
          },
          {
            "value": "SKILL_017",
            "label": "Scikit-learn"
          },
          {
            "value": "SKILL_018",
            "label": "UX/UI"
          },
          {
            "value": "SKILL_019",
            "label": "БИБЛИОТЕКА QT5"
          },
          {
            "value": "SKILL_020",
            "label": "Искусственный интеллект (ИИ)"
          },
          {
            "value": "SKILL_021",
            "label": "РАЗМЕТКИ HTML"
          },
          {
            "value": "SKILL_022",
            "label": "СТИЛИ CSS"
          },
          {
            "value": "SKILL_023",
            "label": "СУБД POSTGRESQL"
          },
          {
            "value": "SKILL_024",
            "label": "СУБД SQLITE"
          },
          {
            "value": "SKILL_025",
            "label": "ЯЗЫК C++"
          },
          {
            "value": "SKILL_026",
            "label": "ЯЗЫК PYTHON"
          },
          {
            "value": "SKILL_027",
            "label": "ЯЗЫК С"
          },
          {
            "value": "SKILL_028",
            "label": "Tilda"
          },
          {
            "value": "SKILL_029",
            "label": "JavaFX"
          },
          {
            "value": "SKILL_030",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_031",
            "label": "MathCAD"
          },
          {
            "value": "SKILL_032",
            "label": "MS Excel"
          },
          {
            "value": "SKILL_033",
            "label": "Visual Studio"
          },
          {
            "value": "SKILL_034",
            "label": "ЯЗЫК JAVA"
          },
          {
            "value": "SKILL_035",
            "label": "Adobe Premiere Pro"
          },
          {
            "value": "SKILL_036",
            "label": "MS Office"
          },
          {
            "value": "SKILL_037",
            "label": "Corel Draw"
          },
          {
            "value": "SKILL_038",
            "label": "Photoshop"
          },
          {
            "value": "SKILL_039",
            "label": "Google Docs"
          },
          {
            "value": "SKILL_040",
            "label": "AutoCAD"
          },
          {
            "value": "SKILL_041",
            "label": "Autodesk Revit"
          },
          {
            "value": "SKILL_042",
            "label": "SolidWorks"
          },
          {
            "value": "SKILL_043",
            "label": "Adobe After Effects"
          },
          {
            "value": "SKILL_044",
            "label": "Android"
          },
          {
            "value": "SKILL_045",
            "label": "Figma"
          },
          {
            "value": "SKILL_046",
            "label": "Jira"
          },
          {
            "value": "SKILL_047",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_048",
            "label": "Ms Outlook"
          },
          {
            "value": "SKILL_049",
            "label": "ЯЗЫК C#"
          },
          {
            "value": "SKILL_050",
            "label": "Big Data"
          },
          {
            "value": "SKILL_051",
            "label": "BI Analytics"
          },
          {
            "value": "SKILL_052",
            "label": "BPMN"
          },
          {
            "value": "SKILL_053",
            "label": "Cisco"
          },
          {
            "value": "SKILL_054",
            "label": "Data Science"
          },
          {
            "value": "SKILL_055",
            "label": "Аналитика"
          },
          {
            "value": "SKILL_056",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ TCP"
          },
          {
            "value": "SKILL_057",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ HTTP"
          },
          {
            "value": "SKILL_058",
            "label": "СЕТЕВЫЕ ПРОТОКОЛЫ IP"
          },
          {
            "value": "SKILL_059",
            "label": "ЯЗЫК KOTLIN"
          },
          {
            "value": "SKILL_060",
            "label": ".NET Framework"
          },
          {
            "value": "SKILL_061",
            "label": "Hibernate"
          },
          {
            "value": "SKILL_062",
            "label": "Java Database Connectivity (JDBC)"
          },
          {
            "value": "SKILL_063",
            "label": "Kubernetes"
          },
          {
            "value": "SKILL_064",
            "label": "Postman"
          },
          {
            "value": "SKILL_065",
            "label": "SPRING FRAMEWORK"
          },
          {
            "value": "SKILL_066",
            "label": "КОМПАС-3D"
          },
          {
            "value": "SKILL_067",
            "label": "ЯЗЫК JAVASCRIPT"
          },
          {
            "value": "SKILL_068",
            "label": "Pygame"
          },
          {
            "value": "SKILL_069",
            "label": "Django"
          },
          {
            "value": "SKILL_070",
            "label": "Apache Maven"
          },
          {
            "value": "SKILL_071",
            "label": "Битркис"
          },
          {
            "value": "SKILL_072",
            "label": "1С"
          },
          {
            "value": "SKILL_073",
            "label": "Altium Designer"
          },
          {
            "value": "SKILL_074",
            "label": "MicroCap"
          },
          {
            "value": "SKILL_075",
            "label": "Bootstrap"
          },
          {
            "value": "SKILL_076",
            "label": "CSS3"
          },
          {
            "value": "SKILL_077",
            "label": "Sass"
          },
          {
            "value": "SKILL_078",
            "label": "Adobe Illustrator"
          },
          {
            "value": "SKILL_079",
            "label": "Конструкторская документация"
          },
          {
            "value": "SKILL_080",
            "label": "3D"
          },
          {
            "value": "SKILL_081",
            "label": "MongoDB"
          },
          {
            "value": "SKILL_082",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_083",
            "label": "Autodesk Fusion 360"
          },
          {
            "value": "SKILL_084",
            "label": "САПР"
          },
          {
            "value": "SKILL_085",
            "label": "LabVIEW"
          },
          {
            "value": "SKILL_086",
            "label": "Микроконтроллеры"
          },
          {
            "value": "SKILL_087",
            "label": "Робототехника"
          },
          {
            "value": "SKILL_088",
            "label": "ЯЗЫК PHP"
          },
          {
            "value": "SKILL_089",
            "label": "Node.js"
          },
          {
            "value": "SKILL_090",
            "label": "NoSQL"
          },
          {
            "value": "SKILL_091",
            "label": "React.js"
          },
          {
            "value": "SKILL_092",
            "label": "TypeScript"
          },
          {
            "value": "SKILL_093",
            "label": "Vue js"
          },
          {
            "value": "SKILL_094",
            "label": "Mockito"
          },
          {
            "value": "SKILL_095",
            "label": "Ajax"
          },
          {
            "value": "SKILL_096",
            "label": "RISC-V"
          },
          {
            "value": "SKILL_097",
            "label": "Adobe InDesign"
          },
          {
            "value": "SKILL_098",
            "label": "БАЗОВЫЕ PIPELINE ДЛЯ СТЕКОВ В JS"
          },
          {
            "value": "SKILL_099",
            "label": "WordPress"
          },
          {
            "value": "SKILL_100",
            "label": "Simple DirectMedia Layer (SDL)"
          },
          {
            "value": "SKILL_101",
            "label": "GNU Octave"
          },
          {
            "value": "SKILL_102",
            "label": "P-Cad"
          },
          {
            "value": "SKILL_103",
            "label": "MATLAB"
          },
          {
            "value": "SKILL_104",
            "label": "ANSYS"
          },
          {
            "value": "SKILL_105",
            "label": "Язык C"
          },
          {
            "value": "SKILL_106",
            "label": "SQL Server"
          },
          {
            "value": "SKILL_107",
            "label": "Python"
          },
          {
            "value": "SKILL_108",
            "label": "PHP"
          },
          {
            "value": "SKILL_109",
            "label": "С++"
          },
          {
            "value": "SKILL_110",
            "label": "Java"
          },
          {
            "value": "SKILL_111",
            "label": "SQL"
          },
          {
            "value": "SKILL_112",
            "label": "C"
          },
          {
            "value": "SKILL_113",
            "label": "Не обладаю"
          },
          {
            "value": "SKILL_114",
            "label": "Kotlin"
          },
          {
            "value": "SKILL_115",
            "label": "JavaScript"
          },
          {
            "value": "SKILL_116",
            "label": "Visual Basic"
          },
          {
            "value": "SKILL_117",
            "label": "HTML"
          },
          {
            "value": "SKILL_118",
            "label": ".NET Core"
          },
          {
            "value": "SKILL_119",
            "label": "Angular"
          },
          {
            "value": "SKILL_120",
            "label": "Aura"
          },
          {
            "value": "SKILL_121",
            "label": "Backbone.JS"
          },
          {
            "value": "SKILL_122",
            "label": "Beego"
          },
          {
            "value": "SKILL_123",
            "label": "CakePHP"
          },
          {
            "value": "SKILL_124",
            "label": "CodeIgniter"
          },
          {
            "value": "SKILL_125",
            "label": "CSS"
          },
          {
            "value": "SKILL_126",
            "label": "Drupal"
          },
          {
            "value": "SKILL_127",
            "label": "ExpressJS"
          },
          {
            "value": "SKILL_128",
            "label": "FatFree"
          },
          {
            "value": "SKILL_129",
            "label": "Flask"
          },
          {
            "value": "SKILL_130",
            "label": "FuelPHP"
          },
          {
            "value": "SKILL_131",
            "label": "Gatsby"
          },
          {
            "value": "SKILL_132",
            "label": "Iris"
          },
          {
            "value": "SKILL_133",
            "label": "jQuery"
          },
          {
            "value": "SKILL_134",
            "label": "Koa"
          },
          {
            "value": "SKILL_135",
            "label": "Laravel"
          },
          {
            "value": "SKILL_136",
            "label": "Meteor"
          },
          {
            "value": "SKILL_137",
            "label": "NestJs"
          },
          {
            "value": "SKILL_138",
            "label": "Phalcon"
          },
          {
            "value": "SKILL_139",
            "label": "Ruby on Rails"
          },
          {
            "value": "SKILL_140",
            "label": "React js"
          },
          {
            "value": "SKILL_141",
            "label": "Slim"
          },
          {
            "value": "SKILL_142",
            "label": "Spring Boot"
          },
          {
            "value": "SKILL_143",
            "label": "Spring Framework"
          },
          {
            "value": "SKILL_144",
            "label": "Strapi"
          },
          {
            "value": "SKILL_145",
            "label": "Svelte"
          },
          {
            "value": "SKILL_146",
            "label": "Symfony"
          },
          {
            "value": "SKILL_147",
            "label": "Vue.js"
          },
          {
            "value": "SKILL_148",
            "label": "Yii"
          },
          {
            "value": "SKILL_149",
            "label": "Zend Framework"
          },
          {
            "value": "SKILL_150",
            "label": "PostgreSQL"
          },
          {
            "value": "SKILL_151",
            "label": "DB2"
          },
          {
            "value": "SKILL_152",
            "label": "Redis"
          },
          {
            "value": "SKILL_153",
            "label": "Microsoft Access"
          },
          {
            "value": "SKILL_154",
            "label": "Microsoft SQL Server"
          },
          {
            "value": "SKILL_155",
            "label": "Oracle"
          },
          {
            "value": "SKILL_156",
            "label": "Windows"
          },
          {
            "value": "SKILL_157",
            "label": "iOS"
          },
          {
            "value": "SKILL_158",
            "label": "MacOS"
          },
          {
            "value": "SKILL_159",
            "label": "CI/CD"
          },
          {
            "value": "SKILL_160",
            "label": "AWS"
          },
          {
            "value": "SKILL_161",
            "label": "Azure"
          },
          {
            "value": "SKILL_162",
            "label": "Anchore"
          },
          {
            "value": "SKILL_163",
            "label": "Ansible"
          },
          {
            "value": "SKILL_164",
            "label": "Argo CD"
          },
          {
            "value": "SKILL_165",
            "label": "Bamboo"
          },
          {
            "value": "SKILL_166",
            "label": "BitBucket"
          },
          {
            "value": "SKILL_167",
            "label": "Chef"
          },
          {
            "value": "SKILL_168",
            "label": "E2E"
          },
          {
            "value": "SKILL_169",
            "label": "GitHub"
          },
          {
            "value": "SKILL_170",
            "label": "GitLab"
          },
          {
            "value": "SKILL_171",
            "label": "integration"
          },
          {
            "value": "SKILL_172",
            "label": "Jenkins"
          },
          {
            "value": "SKILL_173",
            "label": "Octopus Deploy"
          },
          {
            "value": "SKILL_174",
            "label": "Puppet"
          },
          {
            "value": "SKILL_175",
            "label": "Spinnaker"
          },
          {
            "value": "SKILL_176",
            "label": "Sysdig"
          },
          {
            "value": "SKILL_177",
            "label": "TeamCity"
          },
          {
            "value": "SKILL_178",
            "label": "TwistLock"
          },
          {
            "value": "SKILL_179",
            "label": "Junit"
          },
          {
            "value": "SKILL_180",
            "label": "AssertJ"
          },
          {
            "value": "SKILL_181",
            "label": "Selenium"
          },
          {
            "value": "SKILL_182",
            "label": "JMeter"
          },
          {
            "value": "SKILL_183",
            "label": "SonarQube"
          },
          {
            "value": "SKILL_184",
            "label": "Битрикс"
          },
          {
            "value": "SKILL_185",
            "label": "padn"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "CLASSMATES",
            "label": "Однокурсники"
          },
          {
            "value": "UNIVERSITY_POST",
            "label": "Объявление/Пост в ВУЗе"
          },
          {
            "value": "CENTER_EMPLOYEE",
            "label": "Сотрудник НИЦ СПб ЭТУ"
          },
          {
            "value": "JOB_FAIR",
            "label": "Ярмарка вакансий"
          },
          {
            "value": "OTHER",
            "label": "Другое"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "HOBBY_001",
            "label": "Бег"
          },
          {
            "value": "HOBBY_002",
            "label": "Чтение"
          },
          {
            "value": "HOBBY_003",
            "label": "Шахматы"
          },
          {
            "value": "HOBBY_004",
            "label": "Видеоигры"
          },
          {
            "value": "HOBBY_005",
            "label": "Манга"
          },
          {
            "value": "HOBBY_006",
            "label": "Бассейн"
          },
          {
            "value": "HOBBY_007",
            "label": "Вышивка"
          },
          {
            "value": "HOBBY_008",
            "label": "Вязание"
          },
          {
            "value": "HOBBY_009",
            "label": "Йога"
          },
          {
            "value": "HOBBY_010",
            "label": "Настольные игры"
          },
          {
            "value": "HOBBY_011",
            "label": "Пилатес"
          },
          {
            "value": "HOBBY_012",
            "label": "Плавание"
          },
          {
            "value": "HOBBY_013",
            "label": "Бильярд"
          },
          {
            "value": "HOBBY_014",
            "label": "Велоспорт"
          },
          {
            "value": "HOBBY_015",
            "label": "Актерское мастерство"
          },
          {
            "value": "HOBBY_016",
            "label": "Боулинг"
          },
          {
            "value": "HOBBY_017",
            "label": "Кулинария"
          },
          {
            "value": "HOBBY_018",
            "label": "Танцы"
          },
          {
            "value": "HOBBY_019",
            "label": "Фитнес"
          },
          {
            "value": "HOBBY_020",
            "label": "Боевые искусства"
          },
          {
            "value": "HOBBY_021",
            "label": "Джиу-джитсу"
          },
          {
            "value": "HOBBY_022",
            "label": "Катание на доске"
          },
          {
            "value": "HOBBY_023",
            "label": "Сноубординг"
          },
          {
            "value": "HOBBY_024",
            "label": "Хоккей с шайбой"
          },
          {
            "value": "HOBBY_025",
            "label": "Брейк-данс"
          },
          {
            "value": "HOBBY_026",
            "label": "Езда на автомобиле"
          },
          {
            "value": "HOBBY_027",
            "label": "Езда на мотоцикле"
          },
          {
            "value": "HOBBY_028",
            "label": "Волейбол"
          },
          {
            "value": "HOBBY_029",
            "label": "Настольный теннис"
          },
          {
            "value": "HOBBY_030",
            "label": "Игра на музыкальном инструменте"
          },
          {
            "value": "HOBBY_031",
            "label": "Изучение иностранного языка"
          },
          {
            "value": "HOBBY_032",
            "label": "Баскетбол"
          },
          {
            "value": "HOBBY_033",
            "label": "Футбол"
          },
          {
            "value": "HOBBY_034",
            "label": "Борьба"
          },
          {
            "value": "HOBBY_035",
            "label": "Бодибилдинг"
          },
          {
            "value": "HOBBY_036",
            "label": "Конструирование из Lego"
          },
          {
            "value": "HOBBY_037",
            "label": "Анимация"
          },
          {
            "value": "HOBBY_038",
            "label": "Скалолазание"
          },
          {
            "value": "HOBBY_039",
            "label": "Дзюдо"
          },
          {
            "value": "HOBBY_040",
            "label": "Изготовление одежды"
          },
          {
            "value": "HOBBY_041",
            "label": "Изготовление ювелирных изделий"
          },
          {
            "value": "HOBBY_042",
            "label": "Киберспорт"
          },
          {
            "value": "HOBBY_043",
            "label": "Кинопроизводство"
          },
          {
            "value": "HOBBY_044",
            "label": "Коллекционирование"
          },
          {
            "value": "HOBBY_045",
            "label": "Лыжный спорт"
          },
          {
            "value": "HOBBY_046",
            "label": "Пауэрлифтинг"
          },
          {
            "value": "HOBBY_047",
            "label": "Скоростной бег"
          },
          {
            "value": "HOBBY_048",
            "label": "Бальные танцы"
          },
          {
            "value": "HOBBY_049",
            "label": "Пение"
          },
          {
            "value": "HOBBY_050",
            "label": "Караоке"
          },
          {
            "value": "HOBBY_051",
            "label": "Видеосъемка"
          },
          {
            "value": "HOBBY_052",
            "label": "3D-печать"
          },
          {
            "value": "HOBBY_053",
            "label": "Фотография"
          },
          {
            "value": "HOBBY_054",
            "label": "Макияж"
          },
          {
            "value": "HOBBY_055",
            "label": "Таро"
          },
          {
            "value": "HOBBY_056",
            "label": "Судоку"
          },
          {
            "value": "HOBBY_057",
            "label": "Раскрашивание"
          },
          {
            "value": "HOBBY_058",
            "label": "Езда на велосипеде"
          },
          {
            "value": "HOBBY_059",
            "label": "Путешествия"
          },
          {
            "value": "HOBBY_060",
            "label": "Ремонт автомобилей и строительство"
          },
          {
            "value": "HOBBY_061",
            "label": "Картинг"
          },
          {
            "value": "HOBBY_062",
            "label": "Теннис"
          },
          {
            "value": "HOBBY_063",
            "label": "Пешие прогулки/альпинизм"
          },
          {
            "value": "HOBBY_064",
            "label": "Автогонки"
          },
          {
            "value": "HOBBY_065",
            "label": "Хоккей на траве"
          },
          {
            "value": "HOBBY_066",
            "label": "Дизайн одежды"
          },
          {
            "value": "HOBBY_067",
            "label": "Волонтерство"
          },
          {
            "value": "HOBBY_068",
            "label": "Катание на коньках"
          },
          {
            "value": "HOBBY_069",
            "label": "Пляжный волейбол"
          },
          {
            "value": "HOBBY_070",
            "label": "Походы"
          },
          {
            "value": "HOBBY_071",
            "label": "Азартные игры"
          },
          {
            "value": "HOBBY_072",
            "label": "Пейнтбол"
          },
          {
            "value": "HOBBY_073",
            "label": "Ролевые игры"
          },
          {
            "value": "HOBBY_074",
            "label": "Покер"
          },
          {
            "value": "HOBBY_075",
            "label": "Гимнастика"
          },
          {
            "value": "HOBBY_076",
            "label": "Туризм"
          },
          {
            "value": "HOBBY_077",
            "label": "Выращивание цветов"
          },
          {
            "value": "HOBBY_078",
            "label": "Рукоделие"
          },
          {
            "value": "HOBBY_079",
            "label": "Поэзия"
          },
          {
            "value": "HOBBY_080",
            "label": "Рисование"
          },
          {
            "value": "HOBBY_081",
            "label": "Фехтование"
          },
          {
            "value": "HOBBY_082",
            "label": "Катание на роликовых коньках"
          },
          {
            "value": "HOBBY_083",
            "label": "Парфюмерия"
          },
          {
            "value": "HOBBY_084",
            "label": "Водное поло"
          },
          {
            "value": "HOBBY_085",
            "label": "Авиамоделирование"
          },
          {
            "value": "HOBBY_086",
            "label": "Бадминтон"
          },
          {
            "value": "HOBBY_087",
            "label": "Кузнечное дело"
          },
          {
            "value": "HOBBY_088",
            "label": "Нарды"
          },
          {
            "value": "HOBBY_089",
            "label": "Писательское творчество"
          },
          {
            "value": "HOBBY_090",
            "label": "Стрельба из лука"
          },
          {
            "value": "HOBBY_091",
            "label": "Пинбол"
          },
          {
            "value": "HOBBY_092",
            "label": "Растяжка"
          },
          {
            "value": "HOBBY_093",
            "label": "Каллиграфия"
          },
          {
            "value": "HOBBY_094",
            "label": "Рыбалка"
          },
          {
            "value": "HOBBY_095",
            "label": "Балетные танцы"
          },
          {
            "value": "HOBBY_096",
            "label": "Каратэ"
          },
          {
            "value": "HOBBY_097",
            "label": "Охота"
          },
          {
            "value": "HOBBY_098",
            "label": "Реставрация транспортных средств"
          },
          {
            "value": "HOBBY_099",
            "label": "Альпинизм"
          },
          {
            "value": "HOBBY_100",
            "label": "Пазлы"
          },
          {
            "value": "HOBBY_101",
            "label": "Медитация"
          },
          {
            "value": "HOBBY_102",
            "label": "Охота за грибами/микология"
          },
          {
            "value": "HOBBY_103",
            "label": "Dj (диджей)"
          },
          {
            "value": "HOBBY_104",
            "label": "Регби"
          },
          {
            "value": "HOBBY_105",
            "label": "Керамика"
          },
          {
            "value": "HOBBY_106",
            "label": "Лингвистика"
          },
          {
            "value": "HOBBY_107",
            "label": "Массаж"
          },
          {
            "value": "HOBBY_108",
            "label": "Бонсай"
          },
          {
            "value": "HOBBY_109",
            "label": "Садоводство"
          },
          {
            "value": "HOBBY_110",
            "label": "Верховая езда"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "PROFESSION_01",
            "label": "DevOps-инженер"
          },
          {
            "value": "PROFESSION_02",
            "label": "Frontend разработчик"
          },
          {
            "value": "PROFESSION_03",
            "label": "Fullstack-разработчик"
          },
          {
            "value": "PROFESSION_04",
            "label": "Fullstack-разработчик на JavaScript"
          },
          {
            "value": "PROFESSION_05",
            "label": "Fullstack-разработчик на Python"
          },
          {
            "value": "PROFESSION_06",
            "label": "QA-инженер"
          },
          {
            "value": "PROFESSION_07",
            "label": "UI-дизайнер"
          },
          {
            "value": "PROFESSION_08",
            "label": "UX-дизайнер"
          },
          {
            "value": "PROFESSION_09",
            "label": "Аналитик"
          },
          {
            "value": "PROFESSION_10",
            "label": "Архитектор информационных систем"
          },
          {
            "value": "PROFESSION_11",
            "label": "Специалист по Баллистике"
          },
          {
            "value": "PROFESSION_12",
            "label": "Бизнес-аналитик"
          },
          {
            "value": "PROFESSION_13",
            "label": "Бэкенд-разработчик (Back-end developer)"
          },
          {
            "value": "PROFESSION_14",
            "label": "Веб-программист"
          },
          {
            "value": "PROFESSION_15",
            "label": "Инженер по проектированию информационно-аналитических систем"
          },
          {
            "value": "PROFESSION_16",
            "label": "Инженер по разработке ТД"
          },
          {
            "value": "PROFESSION_17",
            "label": "Инженер-конструктор"
          },
          {
            "value": "PROFESSION_18",
            "label": "Инженер-программист"
          },
          {
            "value": "PROFESSION_19",
            "label": "Инженер-проектировщик"
          },
          {
            "value": "PROFESSION_20",
            "label": "Инженер-электроник"
          },
          {
            "value": "PROFESSION_21",
            "label": "Младший аналитик (программный/системный)"
          },
          {
            "value": "PROFESSION_22",
            "label": "Мобильный разработчик(mobile)"
          },
          {
            "value": "PROFESSION_23",
            "label": "Специалист по Навигации"
          },
          {
            "value": "PROFESSION_24",
            "label": "Программист C++"
          },
          {
            "value": "PROFESSION_25",
            "label": "Программист Java"
          },
          {
            "value": "PROFESSION_26",
            "label": "Программист JavaScript"
          },
          {
            "value": "PROFESSION_27",
            "label": "Программист Python"
          },
          {
            "value": "PROFESSION_28",
            "label": "Специалист по Радиолокации"
          },
          {
            "value": "PROFESSION_29",
            "label": "Разработчик 1С"
          },
          {
            "value": "PROFESSION_30",
            "label": "Системный администратор"
          },
          {
            "value": "PROFESSION_31",
            "label": "Системный аналитик"
          },
          {
            "value": "PROFESSION_32",
            "label": "Системный инженер"
          },
          {
            "value": "PROFESSION_33",
            "label": "Системный программист"
          },
          {
            "value": "PROFESSION_34",
            "label": "Специалист по защите информации"
          },
          {
            "value": "PROFESSION_35",
            "label": "Специалист по информационной безопасности"
          },
          {
            "value": "PROFESSION_36",
            "label": "Специалист по информационным системам"
          },
          {
            "value": "PROFESSION_37",
            "label": "Специалист по машинному обучению (ML-специалист)"
          },
          {
            "value": "PROFESSION_38",
            "label": "Тестировщик программного обеспечения (ПО)"
          },
          {
            "value": "PROFESSION_39",
            "label": "Специалист по Телеметрии"
          },
          {
            "value": "PROFESSION_40",
            "label": "Технический писатель"
          },
          {
            "value": "PROFESSION_41",
            "label": "Менеджер"
          },
          {
            "value": "PROFESSION_42",
            "label": "Менеджер по работе с клиентами"
          },
          {
            "value": "PROFESSION_43",
            "label": "Другое"
          },
          {
            "value": "PROFESSION_44",
            "label": "Программист"
          },
          {
            "value": "PROFESSION_45",
            "label": "Инженер по системам связи и передачи данных"
          },
          {
            "value": "PROFESSION_46",
            "label": "Тимлид (Team leader)"
          },
          {
            "value": "PROFESSION_47",
            "label": "Дизайнер компьютерной графики"
          },
          {
            "value": "PROFESSION_48",
            "label": "Tech Lead (техлид)"
          },
          {
            "value": "PROFESSION_49",
            "label": "Руководитель/Зам.рук. проекта"
          },
          {
            "value": "PROFESSION_50",
            "label": "Главный конструктор /Зам."
          },
          {
            "value": "PROFESSION_51",
            "label": "Инженер ОТК"
          },
          {
            "value": "PROFESSION_52",
            "label": "Юзабилити-специалист"
          },
          {
            "value": "PROFESSION_53",
            "label": "Специалист Телеметрии"
          }
        ]
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
        "isArray": false,
        "enumValues": [
          {
            "value": "YES",
            "label": "ДА"
          },
          {
            "value": "NO",
            "label": "НЕТ"
          }
        ]
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
        "isArray": true,
        "enumValues": [
          {
            "value": "PLAYER",
            "label": "Игрок"
          },
          {
            "value": "JUDGE",
            "label": "Судья"
          },
          {
            "value": "OBSERVER",
            "label": "Наблюдатель"
          }
        ]
      },
      {
        "name": "meetingDate",
        "label": "Meeting Date",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "DATE_2026_02_26",
            "label": "DATE_2026_02_26"
          },
          {
            "value": "DATE_2025_12_17",
            "label": "DATE_2025_12_17"
          },
          {
            "value": "DATE_2025_11_19",
            "label": "DATE_2025_11_19"
          }
        ]
      },
      {
        "name": "type",
        "label": "Type",
        "type": "string",
        "isArray": false,
        "enumValues": [
          {
            "value": "NEW_APPLICATION",
            "label": "НОВАЯ ЗАЯВКА"
          },
          {
            "value": "ATTENDED",
            "label": "Пришел"
          },
          {
            "value": "MISSED",
            "label": "Не пришел"
          }
        ]
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
