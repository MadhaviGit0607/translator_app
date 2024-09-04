import React, {useState, useEffect} from 'react'
import Menu from './FrontEnd/Menu'
import Settings from './FrontEnd/Settings'

const App = () => {
  const [language, setLanguage] = useState('English') // Default language
  const [backendMessage, setBackendMessage] = useState('')

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api/hello')
      const data = await response.json()
      setBackendMessage(data.message)
    }

    fetchMessage()
  }, [])

  const handleLanguageChange = newLanguage => {
    setLanguage(newLanguage)
  }

  return (
    <div>
      <Settings
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
      />
      <Menu currentLanguage={language} />
      <div>{backendMessage}</div>
    </div>
  )
}

export default App
