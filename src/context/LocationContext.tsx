import { useContext, useState } from "react";
import { createContext } from "react";

export const LocationContext = createContext<any>({});

export const LocationProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [selectedLocationId, setSelectedLocationId] = useState<any>();
  const [hoveredLocationId, setHoveredLocationId] = useState<any>();

  return (
    <LocationContext.Provider
      value={{
        selectedLocationId,
        setSelectedLocationId,
        hoveredLocationId,
        setHoveredLocationId,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationsContext = () => {
  return useContext(LocationContext);
};
