import './App.css'
import TalkForm from "./components/TalkForm";
import TalkList from "./components/TalkList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-700 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-center text-white">
          Ajouter des Talks
        </h1>
      </header>

      <main className="flex flex-col lg:flex-row w-full gap-2 p-2">
        <div className="w-full lg:w-1/2 p-2 bg-white rounded-lg shadow-xs">
          <TalkForm />
        </div>
        
        <div className="w-full lg:w-1/2 p-2 bg-white rounded-lg shadow-xs">
          <TalkList />
        </div>
      </main>
    </div>
  );
}

export default App;