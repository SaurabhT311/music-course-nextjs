import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <div className="py-12 bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="font-semibold tracking-wide uppercase text-xl text-teal-600">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course?.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center grow gap-4">
                  <p className="text-lg sm:text-xl mt-4 mb-2 dark:text-neutral-200 tracking-wide">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-400 tracking-wide">
                    {course.description}
                  </p>
                  <Link
                    className="px-4 py-2 text-sm rounded-3xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100"
                    href={`/courses/${course.slug}`}
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-6 py-4 rounded-3xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100"
        >
          {" "}
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
