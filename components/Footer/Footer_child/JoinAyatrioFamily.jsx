import "../../Dropitems/Styles";
// import Image from '../../../assets/ayatriologo.png';

const JoinAyatrioFamily = () => {
  return (
    <div className="filter_item">
      <h4 className="filter_heading sm:text-base text-xl">
        Join Ayatrio Family
      </h4>
      <div className="footer_tcon">
        <img className="w-[200px] h-[40px]" src="/images/ayatriologo.webp" alt="" />
      </div>
      <div className="foter-info">
        <p>
          Enjoy member-only discounts & offers, early access to Ayatrio sale,
          delicious gift offers and much more. Join for free.​
        </p>
      </div>
      <p className="sm:w-[150px] sm:h-[50px] w-[150px] h-[50px] bg-black py-3 sm:px-4 px-1 rounded-full flex justify-center items-center text-white cursor-pointer">
        Join the club
      </p>
    </div>
  );
};

export default JoinAyatrioFamily;
