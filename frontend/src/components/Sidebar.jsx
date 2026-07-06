import { useState } from "react";
import dropdown_icon from'../assets/dropdown_icon.png'
function Sidebar({toggleCategory,toggleSubCategory}) {

  const [showFilter, setShowFilter] = useState(false);

  return (

    <div className='min-w-60'>

      {/* comp 1 */}
      <p
        onClick={() => setShowFilter(!showFilter)}
        className='my-2 text-xl flex items-center cursor-pointer gap-2'
      >
        FILTERS

        <img
          className={`h-3 sm:hidden rotate-90 transition-transform ${
            showFilter ? "rotate-[-90]" : ""
          }`}
          src={dropdown_icon}
          alt=''
        />
      </p>

      {/* comp 2 */}
      <div className={`${showFilter ? "block" : "hidden"} sm:block border border-gray-300 pl-5 py-3 mt-6`}>

        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value='Men' onChange={toggleCategory} />
            Men
          </p>

          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value='Women' onChange={toggleCategory} />
            Women
          </p>

          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value='Kids' onChange={toggleCategory} />
            Kids
          </p>

        </div>

      </div>

      {/* comp 3 */}
      <div className={`${showFilter ? "block" : "hidden"} sm:block border border-gray-300 pl-5 py-3 mt-6`}>

        <p className='mb-3 text-sm font-medium'>TYPE</p>

        <div className='flex flex-col gap-2 text-sm text-gray-700'>

          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value='Topwear' onChange={toggleSubCategory} />
            Topwear
          </p>

          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value='Bottomwear' onChange={toggleSubCategory}/>
            Bottomwear
          </p>

          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value='Winterwear' onChange={toggleSubCategory} />
            Winterwear
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;
