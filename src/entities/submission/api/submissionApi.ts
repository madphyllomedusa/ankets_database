import api from '@shared/api/instance'
import type { Submission } from '../model/types'

export const submissionApi = {
  getByAnket: (anketId: string) =>
    api
      .get<Submission[]>('/submissions', { params: { anketId: Number(anketId) } })
      .then(res => res.data),
}
