import { useTalkStore } from "../store/talkStore";

export default function TalkList() {
  const { talks, removeTalk, setTalkToEdit, toggleComplete } = useTalkStore();


  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-emerald-400 pb-2">
        Liste des Talks
      </h2>
      
      {talks.length === 0 ? (
        <div className="text-center py-4 bg-gray-50 rounded">
          <p className="text-gray-500 text-sm">Aucun talk enregistré</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {talks.sort((a, b) => a.title.localeCompare(b.title)).map((talk) => (
            <div 
              key={talk.id} 
              className={`
                border rounded-md p-3 transition-all
                ${talk.completed 
                  ? "bg-gray-50 border-gray-300" 
                  : "border-gray-200 hover:shadow-sm bg-white"}
              `}
            >
              <div className="flex justify-between items-start">
                <h3 className={`
                  text-base font-semibold 
                  ${talk.completed ? "text-gray-500 line-through" : "text-gray-800"}
                `}>
                  {talk.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-medium
                    ${talk.completed 
                      ? "bg-gray-200 text-gray-600" 
                      : "bg-emerald-100 text-emerald-800"}
                  `}>
                    {talk.duration} min
                  </span>
                  <button
                    onClick={() => toggleComplete(talk.id)}
                    className={`
                      text-xs px-2 py-1 rounded transition-colors
                      ${talk.completed 
                        ? "!bg-emerald-100 text-emerald-800 hover:bg-blue-200" 
                        : "!bg-red-100 text-red-800 hover:bg-orange-200"}
                    `}
                  >
                    {talk.completed ? "Réactiver" : "Terminer"}
                  </button>
                </div>
              </div>
              
              <div className={`
                mt-2 space-y-1 text-sm
                ${talk.completed ? "text-gray-500" : "text-gray-600"}
              `}>
                <p><span className="font-medium">Sujet:</span> {talk.subject}</p>
                <p><span className="font-medium">Présentateur:</span> {talk.speaker}</p>
                <p className="line-clamp-2"><span className="font-medium">Objectif:</span> {talk.objective}</p>
              </div>

              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => setTalkToEdit(talk)}
                  disabled={talk.completed}
                  className={`
                    flex-1 py-1.5 px-3 rounded-md text-xs font-medium 
                    flex items-center justify-center gap-1 transition-colors
                    ${talk.completed 
                      ? "!bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : "!bg-emerald-600 hover:bg-emerald-700 text-white"}
                  `}
                >
                  Modifier
                </button>

                <button
                  onClick={() => removeTalk(talk.id)}
                  disabled={talk.completed}
                  className={`
                    flex-1 py-1.5 px-3 rounded-md text-xs font-medium 
                    flex items-center justify-center gap-1 transition-colors
                    ${talk.completed 
                      ? "!bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : "!bg-red-600 hover:bg-red-700 text-white"}
                  `}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}