"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import picture from "@/assets/background.png";
import google from "@/assets/google.png";
import emailIcon from "@/assets/Iconly/Bold/Message.png";
import app from "../../config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Home from "./home/page";
import logo from "@/assets/logo.png";

const Page = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        router.push("/home");
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/home");
    } catch (error) {
      console.log("Error Signing in with google", error.message);
    }
  };

  const signUpWithEmail = async () => {
    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error) {
      setError(error.message);
      console.log("Error Signing up with email", error.message);
    }
  };

  return (
    <div className="flex lg:flex-row flex-col h-screen bg-custom-black">
      <div className="flex basis-1/2 min-w-screen">
        <Image src={picture} alt="a boy on a cliff viewing the sea" />
      </div>
      <div className="flex flex-col basis-1/2 text-white items-center bg-custom-black">
        <div className="flex flex-col items-center mt-8 lg:tracking-wide -translate-y-36 lg:translate-y-0">
          <div className="block lg:hidden mb-1">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </div>
          <p>Journey to a trillion miles starts from here!!</p>
        </div>

        <div className="flex flex-col w-full h-full lg:w-auto lg:h-auto  bg-custom-black justify-center items-center lg:mt-44 -translate-y-32 lg:translate-y-0 lg:rounded-3xl rounded-xl lg:border-custom-white lg:border border-t ">
          <div className="flex flex-col justify-center items-center pt-8">
            <h1 className="font-semibold text-3xl">Sign up</h1>
            <p className="pt-3">Choose a sign up method</p>
          </div>
          <div className="flex flex-col justify-center align-center mt-16 ml-10 mr-10">
            {user ? (
              <Home />
            ) : (
              <>
                {!showEmailForm ? (
                  <>
                    <button
                      onClick={signInWithGoogle}
                      className="flex flex-row border-2  bg-custom-black rounded-lg border-custom-gray pt-3  pb-3 lg:pl-16 lg:pr-16 sm:pl-16 sm:pr-16 pl-12 pr-12"
                    >
                      <Image
                        src={google}
                        alt="Google Image"
                        width={24}
                        height={24}
                        className="pt-1 lg:pt-0"
                      />
                      <p className="pl-3 pt-1 lg:pt-0 lg:text-lg sm:text-lg ">
                        Sign up with Google
                      </p>
                    </button>
                    <button
                      onClick={() => setShowEmailForm(true)}
                      className="flex flex-row border-2 mt-5 bg-custom-black rounded-lg border-custom-gray pt-3 pb-3 lg:pl-16 lg:pr-16 sm:pl-16 sm:pr-16 pl-12 pr-12"
                    >
                      <Image
                        src={emailIcon}
                        alt="Email Image"
                        width={25}
                        height={25}
                        className="pt-1 "
                      />
                      <p className="pl-3 lg:text-lg pt-1 lg:pt-0 sm:text-lg ">
                        Sign up with Email
                      </p>
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col mt-5">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2 rounded-lg border-custom-gray p-3 bg-custom-black text-white mb-3"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-2 rounded-lg border-custom-gray p-3 bg-custom-black text-white mb-3"
                    />
                    <button
                      onClick={signUpWithEmail}
                      className="flex flex-row border-2 bg-custom-black rounded-lg border-custom-gray pt-3 pb-3 pl-16 pr-16"
                    >
                      <Image
                        src={emailIcon}
                        alt="Email Image"
                        width={26}
                        height={26}
                      />
                      <p className="pl-3 text-lg">Sign up with Email</p>
                    </button>
                    {error && (
                      <p className="text-red-500 mt-2 ml-24">
                        Already Registered!
                      </p>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
          <p className="lg:mt-24 mt-20 lg:mb-4 translate-y-24 lg:translate-y-0 font-normal text-base">
            Already a user?{" "}
            <span className="text-custom-blue cursor-pointer">Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
