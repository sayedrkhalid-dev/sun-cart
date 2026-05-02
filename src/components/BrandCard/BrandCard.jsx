import Image from "next/image";

const BrandCard = ({ brand }) => {
  return (
    <div className="w-full mx-auto bg-gray-50 border border-gray-200 shadow-sm rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-center items-center p-4 text-center mx-auto">
        <div className="relative w-full h-full">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={100}
            height={100}
            className="object-center object-contain rounded-2xl"
          />
        </div>

        <h3 className="mt-5 text-slate-900 text-base font-semibold dark:text-slate-50">
          {brand.name}
        </h3>
      </div>
    </div>
  );
};

export default BrandCard;
