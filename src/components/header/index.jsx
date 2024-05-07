import Logo from "../../assets/logo-ribt.svg";
export default function Header() {
  return (
    <div>
      <div className="w-full h-36 flex">
        <div className="w-full flex justify-center items-center px-12">
          <img
            className=""
            src={Logo}
            width={130}
            height={170}
            alt="Logotipo"
          />
          <div className="w-full h-[2px] bg-black ml-8"></div>
        </div>
      </div>
    </div>
  );
}
