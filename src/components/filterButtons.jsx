import PropTypes from 'prop-types';

export default function FilterButtons({ showAvailable, setShowAvailable }) {
  return (
    <div className="mb-9 mt-2 space-x-3 text-sm font-semibold lg:mt-0">
      <button type="button" onClick={() => setShowAvailable(false)} className={`btn ${!showAvailable ? 'bg-backgroundButton' : 'text-white'} `}>
        All Products
      </button>
      <button type="button" onClick={() => setShowAvailable(true)} className={`btn ${showAvailable ? 'bg-backgroundButton' : 'text-white'}`}>
        Available Now
      </button>
    </div>
  );
}

FilterButtons.propTypes = {
  showAvailable: PropTypes.bool.isRequired,
  setShowAvailable: PropTypes.func.isRequired, 
};
