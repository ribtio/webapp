import ArrowRightIcon from "../../assets/arrow-right.svg";
import DollarIcon from "../../assets/currency-dollar.svg";
import { Button, Card } from "@nextui-org/react";

const SectionContent = () => {
  return (
    <div className="w-full h-[800px] mt-40 flex-col flex items-center justify-center">
      <div className="flex justify-center items-center gap-8">
        <div className="font-bold text-lg h-[250px] bg-white shadow-md w-[700px] text-center flex items-center justify-center">
          <div className="w-[600px]">
            <span>
              It will make your website far more personal and interactive and
              help you stand out from all the competition. Its very easy to
              install and intuitive to use plus the customer service is 5 star.
              I cannot rave about this product enough.
            </span>
          </div>
        </div>
        <Card className="col-span-12 sm:col-span-4 h-[450px] w-[255px]">
          <div
            className="relative w-full"
            style={{ paddingBottom: "177.165%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              allow="fullscreen"
              allowFullScreen
              src="https://streamable.com/e/r69gyb?autoplay=1&loop=1&muted=1&controls=0"
              style={{ border: "none" }}
              title="Embedded Video"
            ></iframe>
          </div>
        </Card>
      </div>
      <div className="w-[650px] flex justify-between items-center mt-14">
        <Button className="gap-5 w-[297px] h-[65px] rounded-md border-[#00336C] border-2 bg-[#006FEE] text-white font-semibold text-lg">
          TRY FOR FREE
          <img
            className=""
            src={ArrowRightIcon}
            width={25}
            height={25}
            alt="Logotipo"
          />
        </Button>
        <Button className="gap-5 w-[297px] h-[65px] rounded-md border-[#730028] border-2 bg-[#F31260] text-white font-semibold text-lg">
          SEE PRICING
          <img
            className=""
            src={DollarIcon}
            width={35}
            height={35}
            alt="Logotipo"
          />
        </Button>
      </div>
      <div className="mt-14 font-bold text-4xl w-1/2 text-center text-gray-500">
        <span>We serve 56,000,000 visits from 4,500+ websites</span>
      </div>
    </div>
  );
};
export default SectionContent;
