import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Passage, Source } from '../_types'

export function useSupabaseData() {
  const [source, setSource] = useState<Source | null>(null)
  const [passage, setPassage] = useState<Passage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRandomPassage = async () => {
    try {
      setLoading(true)
      setError(null)
      setSource(null)
      setPassage(null)
      
      // First, get a random source
      const { data: sourceData, error: sourceError } = await supabase.rpc('get_random_source')
      
      if (sourceError) {
        throw sourceError
      }
      
      setSource(sourceData)
      
      // Then, get a random passage from that source
      const { data: passageData, error: passageError } = await supabase.rpc('get_random_passage_from_source', { src: sourceData?.id })
      
      if (passageError) {
        throw passageError
      }
      
      setPassage(passageData[0])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching passage:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomPassage()
  }, [])

  return {
    source,
    passage,
    loading,
    error,
    fetchRandomPassage,
  }
}
