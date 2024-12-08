import Link from 'next/link';
import React from 'react';
import { expandMenuReducer } from '../../../../services/redux/slices/navbarSlice';
import { useAppDispatch, useAppSelector } from '../../../../services/redux/store/store';
import MenuDrawer from './MenuDrawer';
import { MdOutlineMenu } from 'react-icons/md'

const MobileNavbar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className='block lg:hidden  py-1 relative'>
      <div className='px-[.8rem]  flex items-center justify-between'>
        <div>
          <Link href='/'>
            <h2 className='text-navy'>Hekto</h2>
          </Link>
        </div>

        <div>
          <button
            onClick={() => dispatch(expandMenuReducer())}
            className='bg-transparent shadow-none p-0'
          >
            <MdOutlineMenu className='text-black text-4xl'/>
          </button>
        </div>
      </div>

      <MenuDrawer />
    </nav>
  );
};

export default MobileNavbar;