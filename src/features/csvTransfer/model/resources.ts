export interface CsvResource {
  value: string
  label: string
  fileName: string
  folder: CsvFolderId
}

export type CsvFolderId =
  | 'freelance'
  | 'events'
  | 'os'
  | 'intern-resumes'
  | 'questionnaires'
  | 'surveys'

export interface CsvFolder {
  id: CsvFolderId
  label: string
}

export const csvFolders: CsvFolder[] = [
  { id: 'freelance', label: 'Freelance' },
  { id: 'events', label: 'Мероприятия' },
  { id: 'os', label: 'ОС' },
  { id: 'intern-resumes', label: 'Резюме стажеров' },
  { id: 'questionnaires', label: 'ЦРТРИС. Анкеты' },
  { id: 'surveys', label: 'Опросы' },
]

export const csvResources: CsvResource[] = [
  {
    value: 'candidate-questionnaires',
    label: 'Анкеты кандидатов',
    fileName: 'candidate-questionnaires.csv',
    folder: 'questionnaires',
  },
  {
    value: 'resume-profiles',
    label: 'Резюме',
    fileName: 'resume-profiles.csv',
    folder: 'intern-resumes',
  },
  {
    value: 'trainee-contacts',
    label: 'Контактные лица стажёров',
    fileName: 'trainee-contacts.csv',
    folder: 'intern-resumes',
  },
  {
    value: 'freelance-applications',
    label: 'Заявки на фриланс',
    fileName: 'freelance-applications.csv',
    folder: 'freelance',
  },
  {
    value: 'freelance-project-catalog',
    label: 'Каталог фриланс-проектов',
    fileName: 'freelance-project-catalog.csv',
    folder: 'freelance',
  },
  {
    value: 'battle-of-opinions-applications',
    label: 'Заявки на Батл мнений',
    fileName: 'battle-of-opinions-applications.csv',
    folder: 'events',
  },
  {
    value: 'battle-of-opinions-feedback',
    label: 'Отзывы Батла мнений',
    fileName: 'battle-of-opinions-feedback.csv',
    folder: 'events',
  },
  {
    value: 'negotiation-duel-applications',
    label: 'Заявки на Дуэль переговоров',
    fileName: 'negotiation-duel-applications.csv',
    folder: 'events',
  },
  {
    value: 'negotiation-duel-feedback',
    label: 'Отзывы Дуэли переговоров',
    fileName: 'negotiation-duel-feedback.csv',
    folder: 'events',
  },
  {
    value: 'welcome-training-feedback',
    label: 'Отзывы welcome-тренинга',
    fileName: 'welcome-training-feedback.csv',
    folder: 'events',
  },
  {
    value: 'trainee-three-sixty-reviews',
    label: '360 стажёра',
    fileName: 'trainee-three-sixty-reviews.csv',
    folder: 'os',
  },
  {
    value: 'curator-three-sixty-reviews',
    label: '360 куратора',
    fileName: 'curator-three-sixty-reviews.csv',
    folder: 'os',
  },
  {
    value: 'leadership-three-sixty-reviews',
    label: '360 руководителя',
    fileName: 'leadership-three-sixty-reviews.csv',
    folder: 'os',
  },
  {
    value: 'engagement-surveys',
    label: 'Опрос вовлечённости',
    fileName: 'engagement-surveys.csv',
    folder: 'surveys',
  },
  {
    value: 'satisfaction-surveys',
    label: 'Опрос удовлетворённости',
    fileName: 'satisfaction-surveys.csv',
    folder: 'surveys',
  },
  {
    value: 'loyalty-surveys',
    label: 'Опрос лояльности',
    fileName: 'loyalty-surveys.csv',
    folder: 'surveys',
  },
]
