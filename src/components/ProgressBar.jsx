function ProgressBar({ tasks }) {

  const total = tasks.length;
  let color = "bg-red-500";

  const done = tasks.filter(
    (task) => task.status === "DONE"
  ).length;

  const percentage = total === 0
    ? 0
    : Math.round((done / total) * 100);

  return (

    <div className="bg-slate-800 text-white p-5 rounded-xl shadow-lg mb-6">

      <div className="flex justify-between mb-2">

        <span className="font-semibold">
          Progression des tâches
        </span>

        <span>
          {percentage}%
        </span>

      </div>

      <div className="w-full bg-slate-700 rounded-full h-4">

        <div
            className={`${color} h-4 rounded-full transition-all duration-500`}
            style={{ width: `${percentage}%` }}
        />

      </div>

      <p className="text-xs text-gray-400 mt-2">
        {done} tâches terminées sur {total}
      </p>

    </div>
  );
}

export default ProgressBar;