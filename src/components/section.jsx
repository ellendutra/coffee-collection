import Image from 'next/image';
import Detail from '../assets/vector.svg';
import ProductsList from './productsList';

export default function Section() {
  return (
    <section className="relative -top-32 max-w-mobile rounded-xl bg-backgroundSection lg:max-w-tablet xl:max-w-laptop">
      <div className="relative mt-10 h-60 w-full overflow-hidden lg:mx-auto lg:h-48 lg:max-w-content">
        <Image className="absolute right-[-63px] top-0 lg:right-0" src={Detail} alt="" />
        <div className="absolute space-y-3 px-8 pt-12 text-center font-semibold lg:max-w-content">
          <h1 className="text-4xl">Our Collection</h1>
          <p className="text-grey">
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
          </p>
        </div>
      </div>
      <ProductsList />
    </section>
  );
}
