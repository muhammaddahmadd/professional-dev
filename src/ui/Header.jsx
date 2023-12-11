import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';
function Header() {
  return (
    <header className="flex justify-between space-x-5 border-b border-white bg-orange-400 px-2 py-5 text-stone-700">
      <Link to="/" className="tracking-widest">
        React Pizza App
      </Link>
      <SearchOrder />
      {/* <p>Muhammad</p> */}
      <UserName />
    </header>
  );
}

export default Header;
