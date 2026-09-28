// import BookDetails from "@/app/components/BookDetails";
// import React from "react";
// const getBooks = async () => {
//   const response = await fetch(
//     `${process.env.NEXT_SERVER_BASE_URL}/booksData.json`,
//   );
//   const data = await response.json();
//   return data;
// };

// const page = async ({ params }) => {
//   const { bookId } = await params;
//   const booksData = await getBooks();
//   const book = booksData.find((book) => String(book.bookId) === String(bookId));
//   return (
//     <div>
//       <BookDetails key={book.bookId} book={book} />
//     </div>
//   );
// };

// export default page;

import WorkoutDetail from "@/app/components/WorkoutDetail";
import React from "react";
const getWorkoutData = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = res.json();
  return data;
};
const page = async ({ params }) => {
  const { id } = await params;
  const workOutData = await getWorkoutData();
  const workout = workOutData.find(
    (workout) => String(workout.id) === String(id),
  );
  return (
    <div>
      <div>
        <WorkoutDetail key={workOutData.id} workout={workout} />
      </div>
    </div>
  );
};

export default page;
