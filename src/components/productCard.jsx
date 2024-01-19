import PropTypes from 'prop-types';
import Image from 'next/image';

export default function ProductCard({ name, image, price, rating = null, votes, popular, available }) {
  return (
    <li className="relative mb-12 space-y-3 lg:mb-0">
      <Image className="rounded-2xl" src={image} alt={name} width={400} height={400} priority />
      {popular && <span className="absolute left-2 top-0 rounded-full bg-yellow px-3 py-1 text-caption font-medium text-black">Popular</span>}

      <div className="flex items-center justify-between">
        <h2 className="font-bold">{name}</h2>
        <span className="rounded-md bg-green px-2 py-1 text-xs font-medium text-black">{price}</span>
      </div>
      <div className="flex items-center">
        {rating !== null ? (
          <div className="flex justify-between gap-1">
            <Image src="/assets/star_fill.svg" alt="Filled Star" width={20} height={20} priority className="inline" />
            <div className="flex items-center justify-between space-x-1 text-sm">
              <span className="font-bold">{rating}</span>
              <span className="font-semibold text-grey"> ({votes} votes)</span>
            </div>
          </div>
        ) : (
          <div className="flex gap-1">
            <Image src="/assets/star.svg" alt="Empty Star" width={20} height={20} priority />
            <span className="text-sm font-semibold text-grey">No ratings</span>
          </div>
        )}

        {!available && <span className="ml-auto text-xs font-semibold text-red-400">Sold out</span>}
      </div>
    </li>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  // eslint-disable-next-line react/require-default-props
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  votes: PropTypes.number.isRequired,
  popular: PropTypes.bool.isRequired,
  available: PropTypes.bool.isRequired,
};
