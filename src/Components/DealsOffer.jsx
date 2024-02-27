import React from "react";
import { useNavigate } from "react-router-dom";
import background from ""











function DealsOffer() {
  const nav = useNavigate();

  const gobookdeal = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/bookdeal");
  };

  return (
    <>
      <div className=" flex flex-col bg-white">
        <div className="self-stretch flex w-full flex-col max-md:max-w-full">
          <div className="self-stretch flex w-full flex-col px-5  max-md:max-w-full">
            <div className="self-center flex w-full max-w-[1356px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap"></div>
          </div>

          <div
            className="flex-col  flex md:h-[575px] w-full h-[200px]   max-md:max-w-full"
            style={{
              backgroundImage:
                'url("https://s3-alpha-sig.figma.com/img/38b2/72cf/6b1016209b87f7f8a1bdecf3989b7dec?Expires=1702252800&Signature=FlmCu-NjWL7HE~OPgUMG5P2ogRgyg0asfJaDDPSCzl7lSUwUe2jtoO04Lmu6jCq7CJyzLhWK5wgHLN-wcMEg0e5lK6sXvaqnqVQpqjlcs6blm3D-0bkYmzIbwnC5qWkE3862Y9--tV5cLp2BVmDKUSm4pyuegfPk4tPiiBd1bzi-jJRHRMdTnX63wdKqGqaQeAVlwCBC69gATflNGm-rLMSO7meXJgTxWw1~j49HUIuDCjNXgdoNXIB5T6f1p20MT7bFcxCZOslmA-1mZmCR~Brlm8W8vZCstBpXwiOwg2jvlzfmM5yxjTAEHviAbXhy6-vmGd-AAK126fKX1SBFkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "contain",
            }}
          >
            <p className="justify-center flex md:mt-[13%] mt-[18%] md:mx-auto text-white md:text-[40px]">
              Special deals for umrah pakkage
            </p>
            <p className="flex justify-center  text-white md:text-[24px] text-[12px]">
              20% of on 21day umrah package 2023-7-2
            </p>
          </div>
        </div>
        <div className="self-center  flex w-full max-w-[1326px] flex-col mt-20 px-5 max-md:max-w-full max-md:mt-10 ">
          <div className="text-black md:text-2xl text-xl  font-semibold  self-start max-md:max-w-full ">
            FAQ About deals for Umrah package
          </div>
          <div className="items-start self-stretch flex flex-col mt-11 max-md:max-w-full max-md:mt-10">
            <div className=" text-black md:text-xl text-[18px] font-medium ">
              Budget:
            </div>
            <div className="text-neutral-400 text-[16px] self-center ml-8 ">
              <ul className="list-disc">
                <li>
                  {" "}
                  Determine your budget for the Umrah trip. Packages can vary
                  widely in price, so having a clear budget in mind will help
                  you narrow down your options.
                </li>
              </ul>
            </div>
          </div>
          <div className="items-start self-stretch flex flex-col mt-10 max-md:max-w-full">
            <div className=" text-black md:text-xl text-[18px] font-medium ">
              Inclusions:
            </div>
            <div className="text-neutral-400 text-[16px] self-center ml-8 ">
              <ul className="list-disc">
                <li>
                  {" "}
                  Review what is included in the package. Typical inclusions are
                  flights, accommodation, transportation within Saudi Arabia,
                  and visa processing. Some packages may also include meals and
                  guided tours.
                </li>
              </ul>
            </div>
          </div>
          <div className="items-start self-stretch flex flex-col mt-8 max-md:max-w-full">
            <div className=" text-black md:text-xl text-[18px] font-medium ">
              Accommodation:
            </div>
            <div className="text-neutral-400 text-[16px] self-center ml-8 ">
              <ul className="list-disc">
                <li>
                  Check the quality and location of the hotels included in the
                  package. Consider your comfort and proximity to the holy sites
                  in Makkah and Madinah.
                </li>
              </ul>
            </div>
          </div>
          <div className="items-start self-stretch flex flex-col mt-12 max-md:max-w-full max-md:mt-10">
            <div className=" text-black md:text-xl text-[18px] font-medium ">
              Group Size:
            </div>
            <div className="text-neutral-400 text-[16px] self-center ml-8 ">
              <ul className="list-disc">
                <li>
                  Find out the size of the group you'll be traveling with.
                  Smaller groups may offer a more personalized experience, while
                  larger groups might be more cost-effective.
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="items-start self-stretch flex flex-col mt-12 max-md:max-w-full max-md:mt-10">
            <div className=" text-black md:text-xl text-[18px] font-medium ">
              Travel Dates:
            </div>{" "}
            <div className="text-neutral-400 text-[16px] self-center ml-8 ">
              <ul className="list-disc">
                <li>
                  Be flexible with your travel dates if possible. Prices can
                  vary depending on the time of year, so choosing off-peak times
                  may help you get a better deal.
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="items-start self-stretch flex flex-col mt-12 max-md:max-w-full max-md:mt-10">
            <div className=" text-black md:text-xl text-[18px] font-medium ">
              Visa Processing:
            </div>{" "}
            <div className="text-neutral-400 text-[16px] self-center ml-8 ">
              <ul className="list-disc">
                <li>
                  {" "}
                  Ensure that the package includes visa processing, as obtaining
                  an Umrah visa can be a complex process. Check if the agency
                  provides assistance with the visa application.
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="items-start self-stretch flex flex-col mt-8 max-md:max-w-full">
            <div className=" text-black md:text-xl text-[18px] font-medium ">
              Travel Agency Reputation:
            </div>{" "}
            <div className="text-neutral-400 text-[16px] self-center ml-8">
              <ul className="list-disc">
                <li>
                  Research the reputation and reviews of the travel agency or
                  tour operator offering the package. Look for testimonials and
                  feedback from previous customers.
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="items-start self-stretch flex flex-col mt-12 max-md:max-w-full max-md:mt-10">
            <div className=" text-black md:text-xl text-[18px] font-medium ">
              Customer Support:
            </div>{" "}
            <div className="text-neutral-400 text-[16px] self-center ml-8  mt-5 ">
              <ul className="list-disc">
                <li>
                  {" "}
                  Assess the level of customer support offered by the travel
                  agency. Consider how they handle inquiries, emergencies, and
                  support during your journey.
                </li>
              </ul>
            </div>
          </div>{" "}
          <div
            onClick={gobookdeal}
            className="justify-center items-center bg-[#699FC9] flex md:w-[250px] w-[200px]  grow flex-col mr-12 mt-28 px-5 md:py-3.5 py-2 rounded-xl self-end max-md:mr-2.5 max-md:mt-10"
          >
            <div className="text-white cursor-pointer md:text-[16px] text-[14px] font-medium self-center whitespace-nowrap">
              Continue with deals offer
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default DealsOffer;
