// eslint-disable-next-line react/prop-types
const WhishCount = ({ count = 0 }) => {
  return (
    <>
      <div className="absolute bg-red-600 text-white text-xs w-[15px] h-[15px] -right-2 -top-1 rounded-full flex items-center justify-center">
        {count > 9 ? "9+" : count}
      </div>
    </>
  );
};

export default WhishCount;
