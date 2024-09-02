import { FaUser } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";

const CourseCard = ({ course, className }) => {
    const { id, image, category, price, title, rating, enrollments_count } =
        course;

    return (
        <article
            className={`flex flex-col justify-center items-center pb-3.5 w-full bg-white border border-gray-200 border-solid ${className}`}
        >
            <img
                loading="lazy"
                src={`https://picsum.photos/seed/${id}/400`}
                alt={`Course thumbnail for ${title}`}
                className="object-cover w-full shadow-sm aspect-[1.33]"
            />
            <div className="flex flex-col gap-2 justify-center items-center  px-3 mt-3.5 w-full font-medium">
                <div className="flex gap-10 justify-between items-center w-full">
                    <div
                        className={`gap-2.5 self-stretch px-1.5 py-1 my-auto text-xs leading-tight uppercase $ bg-main-200 text-main-600`}
                    >
                        {category.name}
                    </div>
                    <div className="self-stretch my-auto text-lg leading-none text-orange-500">
                        $34
                    </div>
                </div>
                <h2 className="text-left text-neutral-800 w-full">{title}</h2>
            </div>
            <hr className="mt-3.5 w-full bg-gray-200 border-t border-gray-200 min-h-[1px]" />
            <div className="flex gap-10 justify-between items-center px-3 mt-3.5 w-full text-sm tracking-normal">
                <div className="flex gap-1.5 items-center text-gray-600">
                    <HiStar className="text-yellow-500 text-lg" />
                    <span>4.5</span>
                </div>
                <div className="flex gap-1.5 items-center ">
                    <FaUser className="text-indigo-400 text-lg" />
                    <div className="flex justify-center items-center gap-2">
                        <span className="font-medium text-gray-600">
                            {enrollments_count.toLocaleString()}
                        </span>
                        <span className="text-gray-400"> students</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CourseCard;
