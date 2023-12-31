import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex justify-between bg-stone-700 px-2 py-4 text-lg uppercase text-stone-100">
      <p className="space-x-3 text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
