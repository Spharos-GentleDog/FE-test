'use client';

import React, { FC } from 'react';

export interface NextPrevProps {
  className?: string;
  currentPage?: number;
  totalPage?: number;
  btnClassName?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  onlyNext?: boolean;
  onlyPrev?: boolean;
}

const NextPrev: FC<NextPrevProps> = ({
  className = '',
  onClickNext = () => {},
  onClickPrev = () => {},
  btnClassName = 'w-10 h-10',
  onlyNext = false,
  onlyPrev = false,
}) => {
  const [focus, setFocus] = React.useState<'left' | 'right'>('right');

  return (
    <div
      className={`nc-NextPrev relative flex items-center text-slate-500 dark:text-slate-400 ${className}`}
      data-nc-id="NextPrev"
      data-glide-el="controls"
    >
      {!onlyNext && (
        <button
          className={`${btnClassName} ${
            !onlyPrev ? 'me-2' : ''
          } border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center ${
            focus === 'left' ? 'border-2' : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            onClickPrev();
          }}
          title="Prev"
          data-glide-dir="<"
          onMouseEnter={() => setFocus('left')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      {!onlyPrev && (
        <button
          className={`${btnClassName}  border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center ${
            focus === 'right' ? 'border-2' : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            onClickNext();
          }}
          title="Next"
          data-glide-dir=">"
          onMouseEnter={() => setFocus('right')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default NextPrev;
