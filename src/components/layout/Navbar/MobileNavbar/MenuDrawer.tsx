import clsx from 'clsx';
import React from 'react';
import { expandMenuReducer } from '../../../../services/redux/slices/navbarSlice'
import { useAppDispatch, useAppSelector } from '../../../../services/redux/store/store'
import { navdata as data } from '../navdata';
import Link from 'next/link';
import { AiFillCloseCircle } from 'react-icons/ai'

const MenuDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const expand = useAppSelector((state) => state.navbar.expand);
  return (
    <div
      className={clsx(
        'absolute h-screen w-screen text-navy bg-dark_sky_blue top-0 right-0 z-10 transition-all transform ease duration-500 overflow-hidden',
        expand
          ? 'w-full opacity-1  translate-x-0'
          : 'w-0 opacity-0 translate-x-full'
      )}
    >
      <div className='px-[.8rem] '>
        <button
          className='block ml-auto bg-transparent p-0 shadow-none text-[1.5rem] text-navy absolute top-4 right-[.8rem]'
          onClick={() => dispatch(expandMenuReducer())}
        >
          <AiFillCloseCircle/>
        </button>

        <div className='mt-4' onClick={() => dispatch(expandMenuReducer())}>
          <Link href='/'>
            <h2 className='text-navy'>Hekto</h2>
          </Link>

          <div className=' flex flex-col gap-y-[28px] mt-[14px] tracking-wide '>
            {data.map((item, index) => {
              return(
                <Link key={index} href={item.href}>
                  <a className='text-[1.1rem]' href="">{item.title}</a>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;