interface TranslationDisplayProps {
  translation: string
}

export default function TranslationDisplay({ translation }: TranslationDisplayProps) {
  return (
    <div className="text-center">
      <div className="text-base leading-relaxed text-gray-600 max-w-2xl mx-auto">
        {translation}
      </div>
    </div>
  )
}
