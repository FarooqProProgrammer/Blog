import React from 'react'

export default function About() {
  return (
    <div className="w-auto lg:flex push lg:px-6 lg:pt-6">
  <div className="flex flex-col w-full">
    <div className="flex-auto px-3 lg:pr-6 lg:px-0">
      <div className="leading-normal page">
        <h1 className="uppercase md:text-5xl text-3xl font-black ft mb-3">
          About
        </h1>{" "}
        <p>
          MangoBaaz is an online platform that amplifies the voice of an
          alternative Pakistan. We create and handpick stories relevant to our
          young audience. Founded by Pakistanis around the globe, MangoBaaz’s
          goal is to publish content users love to read, share and discuss.
        </p>{" "}
        <h4>We’re trying to tell a different story</h4>{" "}
        <p>
          For young Pakistanis around the world, there is media content almost
          only consisting of mainstream news, politics, and melodramatic
          television shows (that our grandmothers enjoy). There really isn’t a
          great content platform that allows us to express our genius to an
          audience of like-minded individuals.
        </p>{" "}
        <p>And so, we’re just going to build it.</p>{" "}
        <p>
          Why the name MangoBaaz? Well, we wanted to publish content that was
          juicy and tasteful. There’s nothing in the world more juicy or tasty
          than a Pakistani Mango. In addition, we wanted our content to push
          boundaries, be edgy and to question that which isn’t questioned.
          So…MangoBaaz.
        </p>{" "}
        <p>
          Our mission is simple. We want to publish sharable content that shows
          an alternative Pakistan and provides a glimpse into our immensely
          diverse society.
        </p>{" "}
        <p>
          We can’t do this alone. Join us in our movement to save Pakistan from
          shitty and boring content.
        </p>
      </div>{" "}
      <div className="w-full pt-4 mb-6 text-center border-t-2 border-gl flinks">
        <p className="mb-2">
          <a href="/privacy-policy" className="">
            Privacy Policy
          </a>
          |
          <a href="/terms-conditions" className="">
            Terms of Use
          </a>
        </p>{" "}
        <p>© 2023 MangoBaaz. All Rights Reserved</p>
      </div>
    </div>
  </div>{" "}
  <div className="flex-col flex-shrink-0 w-full lg:w-sidebar" />
</div>

  )
}
