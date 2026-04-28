export type FieldType = 'text' | 'number' | 'stars' | 'choice'

export interface AnketField {
  id: string
  anketId: number
  order: number
  type: FieldType
  label: string
  options: string[] | null
}
