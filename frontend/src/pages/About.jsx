import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsBox from "../components/NewsBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutions the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore and purchase a wide range of products from the
            comfort of their homes
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essential, we offer an extensive collection sourced from trusted
            brands
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to create clothing that empowers individuals through
            timeless design and sustainable practices. We are committed to
            high-quality, ethically made apparel that celebrates diversity and
            promotes responsible fashion choices. With every piece, we aim to
            inspire confidence and contribute positively to the world around us.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We are committed to delivering impeccable quality in every product
            through thorough inspections and dedicated craftsmanship. Our goal
            is to ensure every piece meets the highest standards for lasting
            durability and customer satisfaction
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Our mission is to deliver superior quality in every garment through
            meticulous craftsmanship and rigorous standards. We are committed to
            ensuring each piece meets and exceeds customer expectations for
            lasting satisfaction.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our mission is to provide exceptional customer service that
            prioritizes responsiveness, trust, and satisfaction. We aim to
            create a seamless experience where each customer feels valued and
            supported at every step.
          </p>
        </div>
      </div>
      <NewsBox />
    </div>
  );
};

export default About;
