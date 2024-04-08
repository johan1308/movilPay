import { Image } from "@nextui-org/react";
import { FormAuth } from "./components/FormAuth";
import { PLayouts } from "../../core/layout/PLayouts";
import { World } from "./components/World";
import { dataWorld } from "../data/dataWorld";

export const AuthPage = () => {
  return (
    <>
      <section
        className="min-h-screen flex items-stretch text-white bg-black z-20 "
        style={{ overflowY: "hidden" }}
      >
        <div
          className="lg:flex w-1/2 hidden bg-black bg-cover relative items-center"
          style={{ overflowY: "hidden" }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0">
            <AuthWorld />
          </div>
          <div className="w-full px-32 z-10">
            <h1 className="text-5xl font-bold text-secondary text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex lg:mt-[-100px] items-center bg-black justify-center text-center md:px-16 px-0 z-0"
          style={{ overflowY: "hidden" }}
        >
          <div className="absolute lg:hidden z-10 inset-0 bg-black  bg-cover items-center">
            <div className="absolute bg-black opacity-60 inset-0 z-0">
              <AuthWorld />
            </div>
          </div>
          <div className="w-full  z-20 ">
            {/* logo */}
            <div className="my-6  flex justify-center">
              <Image
                src={require("../../../assets/img/logotipo_letras_blancas_movil_play_23x14cm.png")}
                className=" h-36 "
              />
            </div>

            <PLayouts message="Introduce las credenciales" />
            <FormAuth />
          </div>
        </div>
      </section>
    </>
  );
};

const AuthWorld = () => {
  return (
    <World
      globeConfig={{
        pointSize: 5,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 2000,
        arcLength: 0.2,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
      }}
      data={dataWorld}
    />
  );
};
