interface InstructionsModalProps {
  show: boolean
  visible: boolean
  fading: boolean
  onClose: () => void
}

export default function InstructionsModal({ show, visible, fading, onClose }: InstructionsModalProps) {
  if (!show) return null

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${visible ? 'opacity-100' : 'opacity-0'} ${fading ? 'animate-fade-out' : visible ? 'animate-fade-in' : ''} transition-opacity duration-300`}>
      <div className={`bg-[#f5f1e8] p-12 rounded-lg shadow-xl max-w-lg w-11/12 text-center border border-gray-300 ${visible ? 'scale-100 translate-y-0' : 'scale-75 translate-y-5'} ${fading ? 'animate-fade-out' : visible ? 'animate-fade-in' : ''} transition-all duration-300`}>
        <h2 className="text-2xl text-gray-800 mb-6 font-semibold">How To Play</h2>
        <p className="leading-7 text-gray-700 mb-8 text-base">
          Translate the provided English translation back into the original Literary Chinese. 
          Insert the correct characters until you've reconstructed the original sentence. 
          You can insert punctuation to assist with parsing your translation. 
          If needed, you can access surrounding sentences to aid with translation and context.
        </p>
        <button 
          onClick={onClose} 
          className="bg-blue-600 text-white px-8 py-2.5 rounded text-base font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Start Playing
        </button>
      </div>
    </div>
  )
}
