
function TaskCard({ task, onDelete, onCancel, onDetails }) {

  const statusColor = {
    TODO: "bg-red-500",
    IN_PROGRESS: "bg-orange-400",
    DONE: "bg-green-500",
    CANCELLED: "bg-gray-500"
  };

  return (

    <div className="bg-slate-800 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:scale-105 transition">

      <div className="flex justify-between items-center mb-2">

        <h3 className="text-lg font-semibold">
          {task.title}
        </h3>

        <span className={`text-xs px-2 py-1 rounded text-white ${statusColor[task.status]}`}>
          {task.status}
        </span>

      </div>

      <div className="flex gap-2">

        <button
          onClick={() => onDetails(task)}
          className="bg-blue-500 px-3 py-1 rounded"
        >
          Détails
        </button>

        <button
          onClick={() => onCancel(task.id)}
          className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded text-sm"
        >
          Annuler
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Supprimer
        </button>
       

      </div>

    </div>

  );
}

export default TaskCard;