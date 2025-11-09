export interface Passage {
  id?: string
  source_id?: string
  original_text?: string
  translation_en?: string
  created_at?: string
}

export interface Source {
  id?: string
  slug?: string
  title?: string
  title_en?: string
  author?: string
  created_at?: string
}
