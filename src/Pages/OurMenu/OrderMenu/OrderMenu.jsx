import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import coverImage from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import FoodCart from "../../../Components/FoodCart/FoodCart";
import useCategory from "../../../Hooks/useCategory";
import { useParams } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const OrderMenu = () => {
  const { categories, categoryNames } = useCategory();
  const { name } = useParams();

  const initialIdx = categoryNames.indexOf(name);
  const [tabIndex, setTabIndex] = useState(initialIdx !== -1 ? initialIdx : 0);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage =6;

  // Pagination logic
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Cover
        img={coverImage}
        name="Our Shop"
        para="WOULD YOU LIKE TO TRY A DISH?"
      />
      <div className="mt-6 lg:mt-24">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            setCurrentPage(1); // Reset page to 1 when switching tabs
          }}
          className="flex flex-col items-center text-[8px] md:text[10px] lg:text-base font-cinzel"
        >
          {/* Tabs for Categories */}
          <TabList className="flex justify-center space-x-6 mb-8 uppercase">
            {categoryNames.map((name, id) => (
              <Tab
                key={id}
                className="cursor-pointer border-b-2 border-b-purple-600 hover:text-primary focus:border-b-2 focus:border-t-slate-400 focus:border-t-2 focus:border-b-red-600 focus:shadow-lg"
              >
                {name}
              </Tab>
            ))}
          </TabList>

          {/* Tab content for each category */}
          {categories.map((category, i) => {
            // Pagination logic for each category
            const lastItemIdx=currentPage*itemsPerPage;
            const firstItemIdx=lastItemIdx-itemsPerPage;
            const currentItems=category.slice(firstItemIdx,lastItemIdx);
           const totalPages=Math.ceil(category.length/itemsPerPage);
            const pages=[...Array(totalPages).keys()].map((num)=>num+1)
            return (
              <TabPanel key={i} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                  {currentItems.map((item, idx) => (
                    <FoodCart key={idx} item={item} />
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-6 gap-4">
                  <IoIosArrowDropright  className="text-4xl bg-gray-800 border rounded-full shadow-lg text-white"/>
                  {pages.map((pageNum) => (
                    <button
                      className={`px-3 border  round shadow-lg py-1 ${
                        currentPage === pageNum ? "bg-blue-600" : "bg-gray-300"
                      }`}
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default OrderMenu;
