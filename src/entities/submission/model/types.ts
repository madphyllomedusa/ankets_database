export interface SubmissionAnswer {
  fieldId: string
  value: string | number | string[]
}

export interface Submission {
  id: string
  anketId: string
  submittedAt: string
  answers: SubmissionAnswer[]
}
