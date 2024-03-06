import { CardProps } from "@yext/search-ui-react";
import { BsClock, BsGlobe, BsPin } from "react-icons/bs";
import { CiPhone } from "react-icons/ci";
import { LiaDirectionsSolid } from "react-icons/lia";
import Location from "../types/locations";
import HoursText from "./HoursText";
import AboutUs from "./AboutUs";

const LocationCard = ({ result }: CardProps<Location>) => {


  const { name } = result;
  const {
    description,
    slug,
    landingPageUrl,
    address,
    id,
    hours,
    timezone,
    mainPhone,
  } = result.rawData;

  const getDirectionsUrl = (addr?: any) => {
    const region = addr.region ? ` ${addr.region}` : ``;
    const rawQuery = `${addr.line1},${addr.city},${region} ${addr.postalCode} ${addr.countryCode}`;
    const query = encodeURIComponent(rawQuery);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}&output=classic`;
    return url;
  };

  return (
    <div

      className={`flex justify-between border-y p-4 hover:cursor-pointer  `}
    >
      <div className="flex flex-col ">
        <div className="flex w-full  text-sm">
          <div className="flex flex-col justify-between gap-2 ">
            <a
              href={landingPageUrl}
              className="text-base font-bold text-[#348daf] flex gap-4 items-center hover:underline"
            >
              {name}
            </a>
            <div className="flex items-center gap-2">
              <div>
                <BsClock />
              </div>
              <div>
                {hours ? (
                  <HoursText timezone={timezone} hours={hours} />
                ) : (
                  <>Add hours</>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div>
                <CiPhone />
              </div>
              <div>
                {mainPhone &&
                  mainPhone
                    .replace("+1", "")
                    .replace(/\D+/g, "")
                    .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
              </div>
            </div>
            <div className="flex items-base gap-2 text-gray-600 ">
              <div>
                <BsPin className="mt-2" />
              </div>
              <div className="flex flex-col ">
                <div>{address?.line1}</div>
                <div>
                  {address?.city}, {address?.region} {address?.postalCode}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex flex-col justify-between gap-4">
            {description && <div className="text-sm"><AboutUs description={description} /></div>}
            <div className="flex gap-4  items-center justify-between w-full">
              <div className="m-auto flex flex-col gap-6">
                <a
                  target="_blank"
                  href={`${getDirectionsUrl(address)}`}
                  className="w-52 uppercase bg-[#027da5] flex justify-center items-center gap-2  text-sm text-white hover:text-white border-2 border-[#027da5] hover:bg-[#027da5] hover:cursor-pointer font-bold text-center rounded-sm px-4 py-2"
                >
                  <LiaDirectionsSolid className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
              <div className="m-auto flex flex-col gap-6">
                <a
                  href={`/${slug}`}
                  className="w-52 mx-auto uppercase bg-[#027da5] flex justify-center items-center gap-2  text-sm text-white hover:text-white border-2 border-[#027da5] hover:bg-[#027da5] hover:cursor-pointer font-bold text-center rounded-sm px-4 py-2"
                >
                  <BsGlobe className="w-4 h-4" />
                  Visit page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
