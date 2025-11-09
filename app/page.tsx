'use client'

import InstructionsModal from './_components/InstructionsModal'
import GameHeader from './_components/GameHeader'
import CharacterInput from './_components/CharacterInput'
import TranslationDisplay from './_components/TranslationDisplay'
import { useModal } from './_hooks/useModal'
import { useSupabaseData } from './_hooks/useSupabaseData'
import { useGameLogic } from './_hooks/useGameLogic'

export default function Home() {
  const { showInstructions, modalVisible, modalFading, gameStarted, handleCloseModal } = useModal()
  const { source, passage, loading, error } = useSupabaseData()
  const { inputValue, completedChars, setInputValue, handleKeyPress } = useGameLogic(passage)

  return (
    <main className="min-h-screen">
      {/* App Header */}
      <div className="text-center py-6 border-b border-gray-300">
        <h1 className="text-4xl font-semibold text-blue-600">Dailit</h1>
      </div>

      {/* Instructions Modal */}
      <InstructionsModal
        show={showInstructions}
        visible={modalVisible}
        fading={modalFading}
        onClose={handleCloseModal}
      />

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-md mb-8 max-w-4xl mx-auto">
          <p>Error: {error}</p>
        </div>
      )}

      {/* Loading Message */}
      {loading && !error && (
        <div className="text-center py-8 text-gray-500">
          <p>Loading your daily passage...</p>
        </div>
      )}

      {/* Game Interface */}
      {!loading && (
        <div className="flex flex-col min-h-[calc(100vh-80px)] max-w-3xl mx-auto px-8">
          {/* Title and Author */}
          <div className="pt-12 pb-8">
            <GameHeader source={source} />
          </div>

          {/* Character Input Area */}
          {passage?.original_text && (
            <div className="flex-1 flex items-center justify-center">
              <CharacterInput
                completedChars={completedChars}
                inputValue={inputValue}
                onInputChange={setInputValue}
                onKeyDown={handleKeyPress}
              />
            </div>
          )}

          {/* English Translation */}
          {passage?.translation_en && (
            <div className="pb-16">
              <TranslationDisplay translation={passage.translation_en} />
            </div>
          )}
        </div>
      )}
    </main>
  )
}
