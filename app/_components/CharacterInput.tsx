'use client';

import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';

interface CharacterInputProps {
  completedChars: string[]
  inputValue: string
  onInputChange: (value: string) => void
  onKeyDown: (e: React.KeyboardEvent) => void
}

export default function CharacterInput({ 
  completedChars, 
  inputValue, 
  onInputChange, 
  onKeyDown 
}: CharacterInputProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-8 mb-8 h-32 w-full relative overflow-x-visible">
      <div 
        className="absolute inset-0 pointer-events-none flex items-center"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0px, black 300px)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 300px)',
        }}
      >
        <LayoutGroup>
          {/* Completed Characters (stop just left of the centered input) */}
          <div
            className="flex items-center absolute right-[calc(50%+2.75rem)] font-han-brush whitespace-nowrap"
          >
            <AnimatePresence initial={false}>
              {completedChars.map((char, index) => (
                <motion.span
                  layout
                  key={`${char}-${index}`}
                  className="text-6xl text-black inline-block leading-none"
                  // spawn visually over the input, then slide left into place
                  initial={{ x: 70 }}
                  animate={{ x: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 34 }}
                >
                  {char}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
      
      <LayoutGroup>

        {/* Current Character Input (exact center) */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-20 h-20 text-6xl text-center bg-transparent pt-1
                      border-b-4 border-black rounded-lg outline-none
                      text-black font-han-brush leading-none"
          autoFocus
        />
      </LayoutGroup>
    </div>
  );
}
