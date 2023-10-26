'use client';
import { Card, Image, Skeleton } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

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

function ProductCard() {
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
      {data.map((item) => {
        const prices = DiscountCalc(item.price, item.discount);
        return (
          <Card id={item.product_id} shadow="sm" radius="sm" className="align-middle my-2">
            <div className="flex p-2">
              <div className="w-1/4 h-full">
                <Image src={item.img_url} alt="image" radius='sm' className='h-full'/>
              </div>
              <div className='mx-2'>
                <div>{item.brand_name}</div>
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
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default ProductCard;
