import { MapPinIcon } from "@heroicons/react/20/solid";

const Pin = () => {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 29 49"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m14.5.5c4 0 7.5028 1.49535 10.0037 3.99628 2.501 2.50093 3.9963 6.00372 3.9963 10.00372 0 4.3786-2.3969 7.7986-5.1195 11.7503-3.7142 5.391-8.0637 11.7263-8.3618 22.4575-1.3355-10.7312-5.68504-17.0665-9.39921-22.4575-2.72261-3.9517-5.11949-7.3717-5.11949-11.7503 0-4 1.49535-7.50279 3.99628-10.00372s6.00372-3.99628 10.00372-3.99628z"
        fill={"#0f70f0"}
        stroke="#000"
        strokeOpacity=".5"
      />
      <text
        x="50%"
        y="40%"
        fontSize="14px"
        fontWeight="bold"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={"#FFFFFF"}
      >
        H
      </text>
    </svg>
  );
};

export default Pin;
