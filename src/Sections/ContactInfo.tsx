import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="responsive grid grid-cols-2 gap-12 py-16">
      <div className="flex flex-col justify-center gap-2">
        <p className="font-semibold text-3xl">We'd love to hear from you</p>
        <p>
          Have any question in mind or want to enquire? Please feel free to
          contact us through the form or the following details.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div>
          <p className="font-bold text-base">Let's Talk!</p>
          <div className="w-auto flex flex-row gap-4 border-b border-brown/30 py-3">
            <p>+234 09012346514</p>
            <p>hello@qwerty.com</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-base">Head Office</p>
          <Link href="#">Ground Floor, Mirage Towers, Waiyaki Way</Link>
        </div>
        <div className="flex flex-row gap-3 py-3">
          <Link href="href">
            <Image
              className="w-4"
              src="/Facebook.svg"
              alt="alt"
              width={50}
              height={50}
            />
          </Link>
          <Link href="href">
            <Image
              className="w-4"
              src="/LinkedIn.svg"
              alt="alt"
              width={50}
              height={50}
            />
          </Link>
          <Link href="href">
            <Image
              className="w-4"
              src="/x.svg"
              alt="alt"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
