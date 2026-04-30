export interface SubmissionAnswer {
  fieldId: string
  value: string | number
}

export interface Submission {
  id: string
  anketId: string
  submittedAt: string
  answers: SubmissionAnswer[]
}
