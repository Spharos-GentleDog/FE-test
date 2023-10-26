import SlideImage from '@/components/module/SlideImage';
import SlideCategories from '@/components/module/SlideCategories';
import SlideImage2 from '@/components/module/SlideImage2';
import ProductCard from '@/components/module/ProductCard';

export default function Home() {
  return (
    <>
      {/*<div className="flex w-full h-[600px]">*/}
      {/*  <Skeleton className="flex w-full h-full">asdf</Skeleton>*/}
      {/*</div>*/}
      {/* 베너 슬라이더 */}
      <div className="bannerslide relative">
        <SlideImage />
      </div>
      {/* 카테고리 */}
      <div className="categories py-5">
        <SlideCategories />
      </div>
      {/* 신상품 */}
      <div className="new_product py-5">
        <div className="flex justify-between items-baseline">
          <p className="text-lg font-semibold">New</p>
          <p className="text-gray-400 text-xs">View all</p>
        </div>
          <SlideImage2 />
      </div>
      {/* 베스트 */}
      <div className="popular py-5">
        <div className="flex justify-between items-baseline">
          <p className="text-lg font-semibold">Best</p>
          <p className="text-gray-400 text-xs">View all</p>
        </div>
        <ProductCard />
      </div>
      {/* 템플릿 이식 */}
      
    </>
  );
}
