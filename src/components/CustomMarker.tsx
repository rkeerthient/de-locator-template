import { Marker, useMapContext } from "@yext/pages-components";
import type { Coordinate } from "@yext/types";

type CustomMarkerProps = {
  coordinate: Coordinate;
  id: string;
  index: number;
};

const CustomMarker = (props: CustomMarkerProps) => {
  const { coordinate, id, index } = props;

  const map = useMapContext();

  return (
    <Marker coordinate={coordinate} id={id}>
      <MapPin index={index} height={57} width={43} />
    </Marker>
  );
};

type MapPinProps = {
  backgroundColor?: string;
  height: number;
  index: number;
  textColor?: string;
  width: number;
};

const MapPin = (props: MapPinProps) => {
  const { backgroundColor, height, index, textColor, width } = props;
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 29 49"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m14.5.5c4 0 7.5028 1.49535 10.0037 3.99628 2.501 2.50093 3.9963 6.00372 3.9963 10.00372 0 4.3786-2.3969 7.7986-5.1195 11.7503-3.7142 5.391-8.0637 11.7263-8.3618 22.4575-1.3355-10.7312-5.68504-17.0665-9.39921-22.4575-2.72261-3.9517-5.11949-7.3717-5.11949-11.7503 0-4 1.49535-7.50279 3.99628-10.00372s6.00372-3.99628 10.00372-3.99628z"
        fill={backgroundColor ? backgroundColor : "#0f70f0"}
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
        fill={textColor ? textColor : "#FFFFFF"}
      >
        {index}
      </text>
    </svg>
  );
};

export default CustomMarker;
