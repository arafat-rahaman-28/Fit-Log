import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkOutCard = ({ workout }) => {
  return (
    <Link href={`/workoutDetails/${workout.id}`}>
      <div className="w-full max-w-[430px] overflow-hidden rounded-[18px] border border-[#292c34] bg-[#15171d] text-white shadow-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}

        <div className="relative h-[210px] w-full">
          <Image
            src={workout.image}
            alt="Barbell bench press"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Categories */}
          <div className="mb-4 flex gap-2">
            <span className="rounded-full bg-[#baff00] px-3 py-1 text-[12px] font-bold tracking-wide text-black">
              {workout.muscleGroups[0]}
            </span>

            <span className="rounded-full bg-[#baff00] px-3 py-1 text-[12px] font-bold tracking-wide text-black">
              {workout.muscleGroups[1]}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[21px] font-extrabold tracking-wide">
            {workout.name}
          </h2>

          {/* Subtitle */}
          <p className="mt-1 text-[14px] text-[#9297a3]">{workout.equipment}</p>

          {/* Divider */}
          <div className="my-5 h-px bg-[#292c34]" />

          {/* Stats */}
          <div className="flex items-center gap-5 text-[14px] text-[#9da2ad]">
            {/* Duration */}
            <div className="flex items-center gap-2">
              {/* <Clock3 size={17} strokeWidth={1.8} /> */}
              <Clock size={17} strokeWidth={1.8} />
              <span>25 min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <Flame size={17} fill="currentColor" strokeWidth={1.5} />

              <span>180 kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star size={18} strokeWidth={1.7} />
              <span>4.8</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkOutCard;
