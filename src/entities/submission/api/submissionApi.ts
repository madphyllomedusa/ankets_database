import api from '@shared/api/instance'
import type { Submission, SubmissionAnswer } from '../model/types'

export const submissionApi = {
  getByAnket: (anketId: string) =>
    api
      .get<Submission[]>('/submissions', { params: { anketId: Number(anketId) } })
      .then(res => res.data),
  update: (id: string, answers: SubmissionAnswer[]) =>
    api.patch<Submission>(`/submissions/${id}`, { answers }).then(res => res.data),
}
