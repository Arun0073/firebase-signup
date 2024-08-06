"use client";
import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../../config";
import logo from "@/assets/logo.png";
import right from "@/assets/right.png";
import left from "@/assets/left.png";
import rocket from "@/assets/rocket.png";
import ai from "@/assets/ai.png";
import atom from "@/assets/atom.png";
import Image from "next/image";

const home = () => {
  const auth = getAuth();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log("error in signing out:", error.message);
    }
  };
  return (
    <div className="min-h-screen bg-custom-black">
      <div className="flex flex-row justify-between lg:pl-20 lg:pr-20 pt-5 pl-4 pr-4 border-b-2 border-custom-gray pb-2">
        <Image src={logo} alt="comapnys logo" width={80} height={37} />
        <button
          onClick={handleSignOut}
          className="text-custom-blue text-xl font-semibold"
        >
          Sign out
        </button>
      </div>
      <div className="flex flex-col mt-6 lg:pl-20 lg:pr-20 pl-4 pr-4 ">
        <div className="flex flex-row justify-between ">
          <p className="text-white font-semibold text-xl">
            Popular Topics <span>&#128293;</span>
          </p>
          <div className="flex flex-row ">
            <Image src={left} width={30} height={30} className="mr-4" />
            <Image src={right} width={30} height={30} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col mt-12 ">
          <div className="border-custom-gray border flex flex-col rounded-lg ">
            <div className="flex flex-row pt-3 pl-4 pr-10">
              <Image
                src={rocket}
                alt="rocket image"
                width={120}
                height={120}
                className="pt-3 pr-4"
              />
              <div className="flex flex-col ">
                <h2 className="text-white font-semibold text-xl">
                  Introduction to Rocket Science
                </h2>
                <p className="text-custom-text pt-3">
                  Covers fundamentals, design, construction, operation and
                  programming of robots. Covers fundamentals, design,
                  construction, operation and{" "}
                </p>
              </div>
            </div>
            <button className="text-white border-custom-gray border ml-4 mt-4 mr-4 mb-4 rounded-md pt-2 pb-2 font-bold text-base">
              Read
            </button>
          </div>
          <div className="border-custom-gray border flex flex-col rounded-lg lg:ml-4 lg:mr-4 lg:mt-0 mt-4 ">
            <div className="flex flex-row pt-3 pl-4 pr-10 ">
              <Image
                src={atom}
                alt="atom image"
                width={120}
                height={120}
                className="pt-3 pr-4"
              />
              <div className="flex flex-col">
                <h2 className="text-white font-semibold text-xl">
                  Astro Physics
                </h2>
                <p className="text-custom-text pt-3">
                  Covers fundamentals, design, construction, operation and
                  programming of robots. Covers fundamentals, design,
                  construction, operation and{" "}
                </p>
              </div>
            </div>
            <button className="text-white border-custom-gray border ml-4 mr-4 mb-4 mt-11 rounded-md pt-2 pb-2 font-bold text-base">
              Read
            </button>
          </div>
          <div className="border-custom-gray border flex flex-col rounded-lg lg:mt-0 mt-4 ">
            <div className="flex flex-row pt-3 pl-4 pr-10">
              <Image
                src={ai}
                width={120}
                height={120}
                alt="ai chip image"
                className="pt-3 pr-4"
              />
              <div className="flex flex-col ">
                <h2 className="text-white font-semibold text-xl">
                  Artificial Intelligence
                </h2>
                <p className="text-custom-text text-md  pt-3">
                  Covers fundamentals, design, construction, operation and
                  programming of robots. Covers fundamentals, design,
                  construction, operation and{" "}
                </p>
              </div>
            </div>
            <button className="text-white border-custom-gray border ml-4 mr-4 mb-4 mt-11 rounded-md pt-2 pb-2 font-bold text-base">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
