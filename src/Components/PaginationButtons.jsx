/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
const PaginationButtons = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const showNextButton = currentPage !== totalPages + 0;
  const showPrevButton = currentPage !== 0;
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={paginationVariants}
        initial="hidden"
        className="caret-transparent select-none"
        animate="visible"
      >
        <ReactPaginate
          breakLabel={<span className="mr-4 ">...</span>}
          nextLabel={
            showNextButton ? (
              <span className="w-10  h-10 flex items-center justify-center bg-lightgray rounded-md ">
                <BsChevronRight />
              </span>
            ) : null
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel={
            showPrevButton ? (
              <span className="w-10 h-10 flex  items-center justify-center bg-lightgray rounded-md ">
                <BsChevronLeft />
              </span>
            ) : null
          }
          containerClassName="flex items-center justify-center mt-8 mb-4 mr-4"
          pageClassName="block border border-solid border-lightgray hover:bg-lightgray w-10 h-10 flex items-center justify-center rounded-md mr-2 ml-2 "
          activeClassName="bg-rose-400 text-white "
        />
      </motion.div>
    </>
  );
};

export default PaginationButtons;
