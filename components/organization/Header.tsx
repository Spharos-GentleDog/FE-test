import React from 'react';
import Logo from '../atom/Logo';
import SideBar from './SideBar';
import Link from 'next/link';
import Icon from '../atom/Icon';

function Header({
  className
}:{
  className?: string;
}) {
  return (
    <div className={`flex justify-between h-auto ${className} fixed top-0 w-full z-50 p-5 bg-white`}>
      {/* 로고 */}
      <Link href="/" className="logo inline-block text-slate-600 align-middle">
        <Logo />
      </Link>
      {/* 메뉴바 */}
      <div className="flex items-center justify-between gap-3">
        <Link href="/User">
          <Icon shape="User" />
        </Link>
        <Link href="/Cart">
          <Icon shape="Cart" />
        </Link>
        <SideBar />
      </div>
    </div>
  );
}

export default Header;
