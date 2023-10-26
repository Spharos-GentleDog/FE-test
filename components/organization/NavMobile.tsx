'use client';

import React from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { NAVIGATION_DEMO_2 } from '@/app/data/navigation';
import Logo from '../atom/Logo';
import ButtonClose from '../module/ButtonClose';
import Icon from '../atom/Icon';
import { NavItemType } from '../module/NavigationItem';

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = NAVIGATION_DEMO_2,
  onClickClose,
}) => {
  const _renderMenuChild = (
    item: NavItemType,
    itemClass = ' pl-3 text-neutral-900 dark:text-neutral-200 font-medium '
  ) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={index} as="li">
            <Link
              href={{
                pathname: i.href || undefined,
              }}
              className={`flex text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-0.5 pr-4 ${itemClass}`}
            >
              <span
                className={`py-2.5 ${!i.children ? 'block w-full' : ''}`}
                onClick={onClickClose}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="flex items-center flex-grow"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  >
                    <Icon
                      shape={'ChevronDown'}
                      className="ml-2 h-4 w-4 text-neutral-500"
                      // aria-hidden="true"
                    />
                  </Disclosure.Button>
                </span>
              )}
            </Link>
            {i.children && (
              <Disclosure.Panel>
                {_renderMenuChild(
                  i,
                  'pl-3 text-slate-600 dark:text-slate-400 '
                )}
              </Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    
    return (
      <Disclosure
        key={index}
        as="li"
        className="text-slate-900 dark:text-white"
      >
        <Link
          className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          href={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={!item.children ? 'block w-full' : ''}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <Icon
                  shape={'ChevronDown'}
                  className="ml-2 h-4 w-4 text-neutral-500"
                  // aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </Link>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="py-6 px-5">
        <Logo isFootprint />
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col py-4 px-2 space-y-1">
        {data.map(_renderItem)}
      </ul>
    </div>
  );
};

export default NavMobile;
