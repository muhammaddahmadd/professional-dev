import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 flex flex-col justify-center text-center sm:my-16">
      <div className="text- mb-5 flex justify-center text-center font-semibold text-yellow-500 sm:mb-10">
        <h1 className=" text-xl text-stone-700">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
      </div>
      <CreateUser />
    </div>
  );
}

export default Home;
