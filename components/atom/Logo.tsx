import React from "react";
import logoImg from '/public/images/logo.svg'
import logoDarkImg from '/public/images/logo-dark.svg'
import logoFootImg from '/public/images/footprint.svg'
import logoFootDarkImg from '/public/images/footprint-dark.svg'
import Image from "next/image";

export interface LogoProps {
  img?: string;
  imgDark?: string;
  className?: string;
  isFootprint?: boolean;
  footimg?: string;
  footimgDark?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgDark = logoDarkImg,
  footimg = logoFootImg,
  footimgDark = logoFootDarkImg,
  className,
  isFootprint = false,
}) => {
  if (isFootprint) {
    return (
      <>
        {footimg ? (
          <Image
            className={`block ${className} h-8 sm:h-10 w-auto ${footimgDark ? "dark:hidden" : ""}`}
            src={footimg}
            alt="Logo"
            sizes="200px"
            priority
          />
        ) : (
          "Logo Here"
        )}
        {footimgDark && (
          <Image
            className={`hidden ${className} h-8 sm:h-10 w-auto dark:block`}
            src={footimgDark}
            alt="Logo-Light"
            sizes="200px"
            priority
          />
        )}
      </>
    );
  } else {
    return (
      <>
        {img ? (
          <Image
            className={`block ${className} h-8 sm:h-10 w-auto ${imgDark ? "dark:hidden" : ""}`}
            src={img}
            alt="Logo"
            sizes="200px"
            priority
          />
        ) : (
          "Logo Here"
        )}
        {imgDark && (
          <Image
            className={`hidden ${className} h-8 sm:h-10 w-auto dark:block`}
            src={imgDark}
            alt="Logo-Light"
            sizes="200px"
            priority
          />
        )}
      </>
    );
  }
};

export default Logo;
