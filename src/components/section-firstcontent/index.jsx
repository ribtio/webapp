import ImageArrowLeft from "../../assets/arrow-2.png";
import ImageChatBotOne from "../../assets/image-chatbot1.png";
import ImageChatBotTwo from "../../assets/image-chatbot2.png";
import ImageChatBotThree from "../../assets/image-chatbot3.png";
import ImageArrowRight from "../../assets/arrow-1.jpg";

const SectionFirstContent = () => {
  return (
    <div className="w-full h-[2000px] mt-16 b-2 flex flex-col items-center">
      <div className="flex items-center justify-center gap-24">
        <img
          className=""
          src={ImageChatBotOne}
          width={600}
          height={400}
          alt="Logotipo"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Engage with Video</h1>
          <span className="w-[400px] text-xl">
            Interact with customers and clients instantly. Show them who you are
            and why youre different.
          </span>
          <div className="flex gap-9">
            <div className="bg-[#C3FFE6] text-[#00A30D] mt-6 w-[170px] h-[44px] flex justify-center items-center">
              <span>More Leads</span>
            </div>
            <div className="bg-[#C3FFE6] text-[#00A30D] mt-6 w-[170px] h-[44px] flex justify-center items-center">
              <span>Faster Checkouts</span>
            </div>
          </div>
        </div>
      </div>
      <img
        className="mt-14"
        src={ImageArrowRight}
        width={600}
        height={400}
        alt="Logotipo"
      />
      <div className="mt-14 flex items-center justify-center gap-24">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Sell with Live Chat</h1>
          <span className="w-[400px] text-xl">
            Get a mobile notification when a customer wants to talk to you over
            live chat and close the sale.
          </span>
          <div className="flex gap-9">
            <div className="bg-[#C3FFE6] text-[#00A30D] mt-6 w-[170px] h-[44px] flex justify-center items-center">
              <span>Close Sales</span>
            </div>
            <div className="bg-[#C3FFE6] text-[#00A30D] mt-6 w-[170px] h-[44px] flex justify-center items-center">
              <span>Mobile Reply</span>
            </div>
          </div>
        </div>
        <img
          className=""
          src={ImageChatBotTwo}
          width={600}
          height={400}
          alt="Logotipo"
        />
      </div>
      <img
        className="mt-14"
        src={ImageArrowLeft}
        width={600}
        height={400}
        alt="Logotipo"
      />
      <div className="mt-14 flex items-center justify-center gap-24">
        <img
          className=""
          src={ImageChatBotThree}
          width={600}
          height={400}
          alt="Logotipo"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Automate Support</h1>
          <span className="w-[400px] text-xl">
            Make it easy for customers to find details about your product and
            service with a help desk.
          </span>
          <div className="flex gap-9">
            <div className="bg-[#C3FFE6] text-[#00A30D] mt-6 w-[170px] h-[44px] flex justify-center items-center">
              <span>AI Content</span>
            </div>
            <div className="bg-[#C3FFE6] text-[#00A30D] mt-6 w-[170px] h-[44px] flex justify-center items-center">
              <span>Catch-All Help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionFirstContent;
