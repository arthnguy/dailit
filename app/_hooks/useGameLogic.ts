import { useState } from 'react'
import type { Passage } from '../_types'

export function useGameLogic(passage: Passage | null) {
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [completedChars, setCompletedChars] = useState<string[]>([])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim() && passage?.original_text) {
      const originalChars = Array.from(passage.original_text)
      const currentChar = originalChars[currentCharIndex]
      
      if (inputValue.trim() === currentChar) {
        // Correct character
        setCompletedChars(prev => [...prev, currentChar])
        setCurrentCharIndex(prev => prev + 1)
        setInputValue('')
        
        // Check if game is complete
        if (currentCharIndex + 1 >= originalChars.length) {
          alert('Congratulations! You completed the passage!')
        }
      } else {
        // Incorrect character
        setInputValue('')
      }
    }
  }

  const resetGame = () => {
    setCurrentCharIndex(0)
    setCompletedChars([])
    setInputValue('')
  }

  return {
    currentCharIndex,
    inputValue,
    completedChars,
    setInputValue,
    handleKeyPress,
    resetGame,
  }
}
