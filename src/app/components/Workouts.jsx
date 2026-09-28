import React from "react";
import WorkOutCard from "./WorkOutCard";
const getWorkoutData = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = res.json();
  return data;
};
const Workouts = async () => {
  const workoutData = await getWorkoutData();
  return (
    <div className="mt-20">
      <h1 className="text-[30px] font-bold">WORKOUT LIBRARY</h1>
      <p className="text-[14px] text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>
      <div className=" mt-10 grid grid-cols-3 gap-12 container mx-auto">
        {workoutData.map((workout) => (
          // <div key={book.bookId}>{book.bookName}</div>
          // <div key={workout.id}>{workout.name}</div>
          <WorkOutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Workouts;
