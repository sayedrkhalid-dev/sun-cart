import Link from "next/link";

const TipsCard = ({ tips }) => {
  return (
    <div className="p-6 w-full mx-auto bg-gray-50 border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0_4px_20px_rgba(245,158,11,0.2)] transition-all duration-300">
      <div>
        <h3 className="text-gray-900 text-base font-semibold dark:text-gray-50">
          {tips.icon} {tips.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed dark:text-gray-400">
          {tips.details}
        </p>
      </div>
      <Link
        href="#"
        className="inline-block mt-6 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-gray-50 border border-amber-600 bg-amber-600 hover:bg-amber-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        Read more
      </Link>
    </div>
  );
};

export default TipsCard;
