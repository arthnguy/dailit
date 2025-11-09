import type { Source } from '../_types'

interface GameHeaderProps {
  source: Source | null
}

export default function GameHeader({ source }: GameHeaderProps) {
  if (!source) return null

  return (
    <div className="text-center">
      {source.title && source.author && (
        <h2 className="font-han-brush text-3xl mb-3 text-gray-800 tracking-han">
          {'《' + source.title + '》' + source.author}
        </h2>
      )}
      {source.title_en && source.title !== source.title_en && (
        <h3 className="text-base text-gray-500 font-normal italic">{source.title_en}</h3>
      )}
    </div>
  )
}
