import Image from "next/image";
import React from "react";
import { ArrowLeft, Bookmark, CalendarPlus } from "lucide-react";
const WorkoutDetail = ({ workout }) => {
  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <button className="mb-5 flex items-center gap-1 text-sm text-gray-400 transition hover:text-white">
          <ArrowLeft size={16} />
          Back to workouts
        </button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[375px_1fr]">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#252932]  lg:top-6 lg:self-start">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 375px"
            />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
              {workout.name}
            </h1>

            <p className="mt-2 max-w-[650px] text-sm leading-6 text-[#9298a4]">
              {workout.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#baff00] px-3 py-1 text-[10px] font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#252932] bg-[#15181e]">
              <DetailRow label="EQUIPMENT" value={workout.equipment} />

              <DetailRow label="DIFFICULTY" value={workout.difficulty} />

              <DetailRow label="SETS" value={workout.sets} />

              <DetailRow label="REPS" value={workout.reps} />

              <DetailRow label="DURATION" value={`${workout.duration} min`} />

              <DetailRow
                label="CALORIES"
                value={`${workout.caloriesBurned} kcal`}
              />

              <DetailRow label="RATING" value={workout.rating} last />
            </div>

            <div className="mt-6">
              <h2 className="text-[11px] font-bold tracking-wide">
                INSTRUCTIONS
              </h2>

              <ol className="mt-3 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[11px] leading-5 text-[#a4a9b3]"
                  >
                    <span className="shrink-0 text-[#858b97]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-[#baff00] px-5 text-[11px] font-semibold text-black transition hover:bg-[#c7ff33] active:scale-[0.98]">
                <CalendarPlus size={14} />
                Add to today&#39;s plan
              </button>

              <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#343943] px-5 text-[11px] font-medium text-[#c3c6cd] transition hover:border-[#555b67] hover:text-white active:scale-[0.98]">
                <Bookmark size={14} />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const DetailRow = ({ label, value, last = false }) => {
  return (
    <div
      className={`
      flex
      min-h-[42px]
      items-center
      justify-between
      gap-4
      px-4
      py-2

      ${!last ? "border-b border-[#252932]" : ""}
    `}
    >
      <span className="text-[9px] font-semibold tracking-wider text-[#858b97]">
        {label}
      </span>

      <span className="text-right text-[11px] text-[#e1e3e7]">{value}</span>
    </div>
  );
};

export default WorkoutDetail;
