import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Card,
  CardBody,
} from "@nextui-org/react";

import ArrowRightIcon from "../../assets/arrow-right.svg";
import DollarIcon from "../../assets/currency-dollar.svg";
import MedalIcon from "../../assets/medal-icon.svg";

const SectionInitial = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("3xl");

  const sizes = ["3xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <div className="w-full h-[580px] flex flex-col items-center">
      <div className="flex justify-center items-center mt-4">
        <h1 className="font-bold text-[50px] text-center">
          Use video to Impress 🔥, Show 📲, and Reply 👥. <br />
          Only Ribt boosts website sales on the fly!
        </h1>
      </div>
      {/* INITIAL CARD */}
      {/* <CardSection /> */}
      <span className="font-medium text-center mt-14 w-[990px] text-[30px] leading-9">
        4500+ Businesses use RibtBoots with a rating of 4.7 out of 5 <br /> Try
        Ribt Boots for your website today!
      </span>
      <div className="w-[650px] flex justify-between items-center mt-14">
        <Button className="capitalize gap-5 w-[297px] h-[65px] rounded-md border-[#00336C] border-2 bg-[#006FEE] text-white font-semibold text-[20px]">
          TRY FOR FREE
          <image
            className=""
            src={ArrowRightIcon}
            width={25}
            height={25}
            alt="Logotipo"
          />
        </Button>
        {sizes.map((size) => (
          <Button
            key={size}
            variant="flat"
            onPress={() => handleOpen(size)}
            className="gap-5 w-[297px] h-[65px] rounded-md border-[#730028] border-2 bg-[#F31260] text-white font-semibold text-[20px]"
          >
            SEE PRICING
            <image
              className=""
              src={DollarIcon}
              width={35}
              height={35}
              alt="Logotipo"
            />
          </Button>
        ))}
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <Card>
                  <CardBody>
                    <div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-3xl">Startup</h1>
                        <p>
                          All video features unlocked for leads and sales. Best
                          for small ventures, side-gigs, new websites, and
                          professional services..
                        </p>
                      </div>
                      <div className="mt-3 text-xs gap-2 flex">
                        <span>✅ 3,000 unique visitors</span>
                        <span>✅ Access to essential settings</span>
                        <span>✅ 3 videos</span>
                        <span>✅ 30 answers</span>
                        <span>✅ 30 threads</span>
                      </div>
                      <div className="mt-4 flex items-center gap-5">
                        <h1 className="font-bold text-3xl">$ 9 /mo</h1>
                        <Button className="rounded-none border-[#00336C] border-2 bg-[#006FEE] text-white font-semibold">
                          Start Plan Now
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-3xl">Business</h1>
                        <p>
                          Remove our branding, use our AI tools, and invite your
                          team. Best for ecommerce and relationship driven
                          businsses.
                        </p>
                      </div>
                      <div className="mt-3 text-xs gap-2 flex">
                        <span>✅ 3,000 unique visitors</span>
                        <span>✅ Access to essential settings</span>
                        <span>✅ 3 videos</span>
                        <span>✅ 30 answers</span>
                        <span>✅ 30 threads</span>
                      </div>
                      <div className="mt-4 flex items-center gap-5">
                        <h1 className="font-bold text-3xl">$ 19 /mo</h1>
                        <Button className="rounded-none border-[#00336C] border-2 bg-[#006FEE] text-white font-semibold">
                          Start Plan Now
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <div>
                      <div className="flex flex-col">
                        <h1 className="font-bold text-3xl">Commerce</h1>
                        <p>
                          The best plan for growing e-commerce stores and large
                          websites. Fast unlimited videos for PDP and high
                          volume pages.
                        </p>
                      </div>
                      <div className="mt-3 text-xs gap-2 flex">
                        <span>✅ 3,000 unique visitors</span>
                        <span>✅ Access to essential settings</span>
                        <span>✅ 3 videos</span>
                        <span>✅ 30 answers</span>
                        <span>✅ 30 threads</span>
                      </div>
                      <div className="mt-4 flex items-center gap-5">
                        <h1 className="font-bold text-3xl">$ 39 /mo</h1>
                        <Button className="rounded-none border-[#00336C] border-2 bg-[#006FEE] text-white font-semibold">
                          Start Plan Now
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Try for free
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex justify-center items-center gap-4 mt-14">
        <image
          className=""
          src={MedalIcon}
          width={35}
          height={35}
          alt="Logotipo"
        />
        <span className="font-semibold text-gray-500">
          Website plugin for sales, lead gen, and customer service.
        </span>
      </div>
    </div>
  );
};
export default SectionInitial;
