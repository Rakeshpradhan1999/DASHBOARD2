import { GiHamburgerMenu } from "react-icons/gi";

import EscrowToken from "../../assets/images/escrowtoken.png";
import Refferl from "../../assets/images/organization.png";
import Medal from "../../assets/images/medal.png";

let cardData = [
  {
    isProfit: true,
    price: "00",
    percentage: 3.5,
    name: "Escrow balance",
    img: EscrowToken,
  },
  {
    isProfit: true,
    price: "00",
    percentage: 11,
    name: "Rewards collected",
    img: Medal,
  },
  {
    isProfit: false,
    price: 0,
    percentage: 2.4,
    name: "Referral level",
    img: Refferl,
  },
  {
    isProfit: true,
    price: 0,
    percentage: 3.5,
    name: "Expense current",
  },
];
const Panel = ({ show, setShow }) => {
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
          <button className="border border-success-500 py-2 px-4">
            Connect Account
          </button>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 gap-8 mx-10 mt-10 ">
          {cardData.map((val, i) => (
            <div className="bg-dark-400 px-7 py-6 rounded-sm" key={i}>
              <div className="flex justify-between">
                <div className="flex items-center self-start">
                  <h3 className="text-white text-2xl font-bold">{val.price}</h3>
                </div>
                <div
                  className={` bg-opacity-20 rounded-md  h-9 w-10 flex justify-center items-center`}
                >
                  <span
                    className={` rotate-12 block text-2xl ${
                      val.isProfit ? " text-success" : "text-danger"
                    }`}
                  >
                    <img src={val.img} alt="" />
                  </span>
                </div>
              </div>
              <h3 className="text-muted text-base mb-2">{val.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Panel;
