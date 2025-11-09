import { useState, useEffect } from 'react'

export function useModal() {
  const [showInstructions, setShowInstructions] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalFading, setModalFading] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    // Fade in the modal after a short delay
    setTimeout(() => setModalVisible(true), 100)
  }, [])

  const handleCloseModal = () => {
    setModalFading(true)
    setTimeout(() => {
      setShowInstructions(false)
      setModalVisible(false)
      setModalFading(false)
      setGameStarted(true)
    }, 300)
  }

  return {
    showInstructions,
    modalVisible,
    modalFading,
    gameStarted,
    handleCloseModal,
  }
}
