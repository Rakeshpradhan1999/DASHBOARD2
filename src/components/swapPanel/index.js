import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown, FaArrowDown } from "react-icons/fa";
import ETH from "../../assets/images/ETH.png";
import USDC from "../../assets/images/USDC.png";
import DAI from "../../assets/images/DAI.png";
const coins = [
  {
    id: 1,
    name: "Ethereum",
    image: ETH,
    shortName: "ETH",
  },
  {
    id: 2,
    name: "USD Coin",
    image: USDC,
    shortName: "USDC",
  },
  {
    id: 3,
    name: "Dai Stablecoin",
    image: DAI,
    shortName: "DAI",
  },
];

const Panel = ({ show, setShow }) => {
  const [selected, setSelected] = useState(coins[0]);
  const [selected2, setSelected2] = useState(coins[1]);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  return (
    <>
      <div className="flex-1 bg-black mb-10">
        <div className="px-4 bg-dark-400 py-4 flex text-white justify-between lg:justify-end">
          <button
            className="lg:hidden"
            onClick={() => setShow((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </button>
          <button className="border border-success-500 py-2 px-4 ">
            Connect Account
          </button>
        </div>
        <div className=" mx-10 mt-10 flex justify-center items-center">
          <SwapForm
            selected={selected}
            setSelected={setSelected}
            active={active}
            setActive={setActive}
            selected2={selected2}
            setSelected2={setSelected2}
            active2={active2}
            setActive2={setActive2}
          />
        </div>
      </div>
    </>
  );
};

export default Panel;

const SwapForm = ({
  selected,
  selected2,
  setSelected,
  setSelected2,
  active,
  active2,
  setActive,
  setActive2,
}) => (
  <div className=" max-w-lg p-4 w-full bg-dark-600 rounded-xl text-white">
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <h2 className="font-bold text-lg">Swap</h2>
      <div className="mt-4">
        <CustomInput
          selected={selected}
          setSelected={setSelected}
          active={active}
          setActive={setActive}
        />
        <div className="text-center">
          <span className="my-4 text-center flex justify-center text-xl">
            <FaArrowDown />
          </span>
        </div>
        <CustomInput
          selected={selected2}
          setSelected={setSelected2}
          active={active2}
          setActive={setActive2}
          title={"You Receive"}
        />
        <button className="customButton block py-3 px-4 w-full mt-4 rounded-xl">
          Connect Wallet
        </button>
      </div>
    </form>
  </div>
);

const CustomInput = ({
  selected,
  setSelected,
  active,
  setActive,
  title = "You Pay",
}) => (
  <div>
    <p className="text-sm text-graish">{title}</p>
    <div className="bg-dark-700  py-2 px-3 rounded-lg mt-1 relative">
      <p className="text-graish">{selected.name}</p>
      <div className="flex items-center mt-2">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setActive((prev) => !prev)}
        >
          <img src={selected.image} alt="" className=" w-7" />
          <p className="font-medium ml-2 text-base">{selected.shortName}</p>
          <span className="text-graish ml-2">
            <FaChevronDown />
          </span>
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none text-right text-lg"
          defaultValue={0}
        />
      </div>
      <div
        className={`rounded-md absolute top-full left-0 border-t-0 border-2 border-darKGary w-full shadow-xl bg-gray transition-all duration-300 z-50 ${
          active
            ? " max-h-96 opacity-100"
            : "max-h-0 overflow-y-hidden opacity-0"
        }`}
      >
        <div className="pt-4 p-2">
          {coins.map((coin, i) => (
            <div
              className="mb-4 flex justify-between items-center hover:bg-dark-600 p-2 cursor-pointer rounded-md transition-all duration-300 "
              onClick={() => {
                setSelected(coin);
                setActive((prev) => !prev);
              }}
            >
              <div className=" flex items-center flex-1">
                <img src={coin.image} className="w-7" alt={coin.name} />
                <p className="ml-2">{coin.shortName}</p>
              </div>
              <p>{coin.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
