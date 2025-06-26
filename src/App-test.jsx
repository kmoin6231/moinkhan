import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-x-hidden transition-all duration-500`}>
      {/* Simple Test Content */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-lg border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200/50'} transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Moin Khan - Test
            </div>
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-white/5' : 'bg-white/80'} ${isDarkMode ? 'border-white/10' : 'border-gray-200/50'} border transition-all duration-300 hover:scale-110`}
            >
              {isDarkMode ? (
                <span className="text-yellow-400 text-xl">☀️</span>
              ) : (
                <span className="text-purple-400 text-xl">🌙</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 overflow-hidden z-10">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-none">
            TEST PAGE
          </h1>
          
          <h2 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
            This should be visible!
          </h2>
          
          <p className={`text-lg sm:text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-16 max-w-4xl mx-auto`}>
            If you can see this text, then the basic structure is working correctly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-bold text-lg hover:scale-105 transition-all duration-300">
              Button Test
            </button>
          </div>
        </div>
      </section>

      {/* Simple Content Section */}
      <section className="py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Simple Test Section
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
            This is a simple test to verify that the basic layout and styling are working properly.
            If this is visible, we can gradually add back the advanced components.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200/50'} relative z-10`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Test Page - Debugging Portfolio
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
