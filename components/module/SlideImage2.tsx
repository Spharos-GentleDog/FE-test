'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Skeleton } from '@nextui-org/skeleton';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Card, CircularProgress } from '@nextui-org/react';
import { Image } from '@nextui-org/image';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export async function fetchSlideImage() {
  const res = await fetch(
    'https://6535d1a2c620ba9358ecaf38.mockapi.io/banner1',
    {
      method: 'GET',
    }
  );
  const data = await res.json();
  return data;
}

// 할인율 계산, 소수점 없애기
function DiscountCalc(price, discountRate) {
  const discountPrice = price * (1 - discountRate / 100);
  return {
    original: price.toLocaleString(undefined, { maximumFractionDigits: 0 }),
    discounted: discountPrice.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    }),
  };
}

function SlideImage2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const images = await fetchSlideImage();
      setData(images);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[600px]">
        <Skeleton></Skeleton>
      </div>
    );
  }
  
  return (
    <>
      <Swiper loop={true} slidesPerView={3} centeredSlides spaceBetween={15}>
        {data.map((item) => {
          const prices = DiscountCalc(item.price, item.discount);
          return (
            <div>
              <SwiperSlide id={item.product_id}>
                <Card isBlurred shadow="sm" radius="sm">
                  <div
                    className=''
                    >
                    <Image
                      className=""
                      src={item.img_url}
                      alt="image"
                    />
                  </div>
                  <div className={`brand${item.product_id}`}>
                    {item.brand_name}
                  </div>
                  <div className="flex gap-1">
                    <div>
                      <Image
                        className="w-3 h-3 inline-block align-baseline"
                        src="star.svg"
                      />
                    </div>
                    <div className={`rate${item.product_id}`}>
                      {item.total_rating}
                    </div>
                  </div>
                  <div
                    className={`price${item.product_id} text-gray-300 line-through`}
                  >
                    {prices.original}원
                  </div>
                  <div className={`discount${item.product_id} text-purple-500`}>
                    {item.discount}%
                  </div>
                  <div className={`discountPrice${item.product_id}`}>
                    {prices.discounted}원
                  </div>
                </Card>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
}

export default SlideImage2;
