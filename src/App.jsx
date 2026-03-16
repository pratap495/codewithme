import './App.css'
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen bg-blue-600">
        <h1 className="text-5xl text-white font-bold">
          Tailwind is Working 🚀
        </h1>
      </div>
    </div>
  )
}

export default App
