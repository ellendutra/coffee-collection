'use client';

import { useEffect, useState } from 'react';
import ProductCard from './productCard';
import FilterButtons from './filterButtons';

export default function ProductsList() {
  const [productData, setProductData] = useState(null);
  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        throw new Error('Error fetching data: ', error);
      }
    }
    fetchData();
  }, []);

  const filteredProducts = showAvailable ? productData?.filter((item) => item.available) : productData;

  return (
    <div className="">
      {productData && (
        <div className="text-center">
          <FilterButtons showAvailable={showAvailable} setShowAvailable={setShowAvailable} />

          <ul className="mb-10 grid w-full grid-cols-1 gap-4 px-16 lg:grid-cols-2 lg:gap-10 lg:pb-16 xl:grid-cols-3">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                id={item.id}
                image={item.image}
                rating={item.rating}
                votes={item.votes}
                price={item.price}
                popular={item.popular}
                available={item.available}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
