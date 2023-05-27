import React from "react";
import Seatimg from "./assets/armchair.png"
import Sound_img from "./assets/sound-system.png"
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import BookForm from "./Components/BookForm"
import { Carousel, IconButton } from "@material-tailwind/react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Ac_img from "./assets/air-conditioner.png";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Bookingform() {
  return (
    <>
      <Nav />

      <div className=" mt-4 w-full h-full">
        <div className=" w-full h-[20rem]">
          <Carousel
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-4"
              >
                <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 -translate-y-2/4 !right-4"
              >
                <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
              </IconButton>
            )}
          >
            <img
              src="https://c1.wallpaperflare.com/preview/489/885/196/room-conferences-seminar-presentations.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://c1.wallpaperflare.com/preview/845/761/210/classroom-business-meeting-parliament-of-europe-business.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://c0.wallpaperflare.com/preview/94/762/572/austria-wien-austrian-parliament-building-parliament.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>

        <div>
          <p className="pt-4 text-2xl  font-semibold">
            Viswaraya hall, ground floor, KSR
          </p>
          <div className="mt-6 flex justify-between">
            <div className="flex  flex-wrap ">
              <CardBody className="h-40  rounded-xl  border mt-2 me-3">
                <img
                  src={Ac_img}
                  alt="img"
                  width={40}
                  height={30}
                  className="top-0"
                />
                <p className=" ">AC / non-AC</p>
              </CardBody>
              <CardBody className="h-40   rounded-xl  border mt-2 me-3">
                <img
                  src={Seatimg}
                  alt="img"
                  width={40}
                  height={30}
                  className="top-0"
                />
                <p className=" ">Comfortable chairs</p>
              </CardBody>
              <CardBody className="h-40 rounded-xl  border mt-2 me-3">
                <img
                  src={Sound_img}
                  alt="img"
                  width={40}
                  height={30}
                  className="top-0"
                />
                <p className=" ">High Quality audio system</p>
              </CardBody>
            </div>

            <div className="w-[20rem] h-[20rem]">
            <CardBody className=" h-full w-full shadow bg-white text-center bottom-10 left-72 right-10 top-96 "><p className=" text-lg">
            No grand idea was ever born in a conference, but a lot of foolish ideas have died there.

<span className=" block  text-cyan-800 font-medium text-lg">F. Scott Fitzgerald</span>
            </p></CardBody></div>
          </div>
        </div>
        <hr className="mt-4  bg-orange-900 z-[10]" />

 <p className="pt-4 text-2xl  font-bold text-red-600">
            Venue Booking Form
          </p>
<div className="mt-5 flex justify-center">
<BookForm />
</div>

      </div>
      <Footer />
    </>
  );
}
