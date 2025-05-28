import Image from "next/image";
import React from "react";

const DigitalFreedom = () => {



  return (
    <section className="bg-[#BBE4D7] py-12">
    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 max-w-[1450px] px-4 w-full mx-auto">
      <div className="col-span-1">
        <iframe
          src="https://link.jbenquet.com/widget/form/H7JLnG7Yp5NzB9ZvQdKX"
          // style="width:100%;height:100%;border:none;border-radius:36px"
          id="inline-H7JLnG7Yp5NzB9ZvQdKX"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Noma Collective Booking Form 2"
          data-height="1628"
          data-layout-iframe-id="inline-H7JLnG7Yp5NzB9ZvQdKX"
          data-form-id="H7JLnG7Yp5NzB9ZvQdKX"
          title="Noma Collective Booking Form 2"
          width="100%"
        ></iframe>
        <script src="https://link.jbenquet.com/js/form_embed.js"></script>
      </div>

      <div className="grid-span-2">
        {" "}
        <article className="w-full mt-4">
          <h3 className="text-[#070707] font-sergio-trendy 2xl:text-[48px] xl:text-[48px] text-3xl lg:text-5xl 2xl:text-start xl:text-start lg:text-start md:text-center text-center font-normal leading-[106%] capitalize">
            Experience Digital Freedom
          </h3>
          <p className="text-[#070707] w-[90%] font-Montserrat lg:text-base font-normal leading-[115%] flex flex-col gap-1 pt-4 lg:pt-6 2xl:text-start xl:text-start lg:text-start md:text-center text-center">
            <span>
              We specialize in curating exceptional experiences for remote
              workers across the globe, complete with a like-minded community
              of nomads, co-working spaces and quality accommodation. If you
              can work from anywhere, make anywhere work for you.
            </span>
          </p>
        </article>
        <article>
          {" "}
          <Image
            className="mt-7 2xl:mx-0 xl:mx-0 lg:mx-0 mx-auto"
            src="/img/digital-freedom.png"
            width={618}
            height={380}
            alt="digital-freedom"
          />
        </article>
        <article className="w-[95%] mt-10">
          <h3 className="text-[#070707] font-sergio-trendy 2xl:text-[48px] xl:text-[48px] text-3xl lg:text-5xl font-normal leading-[106%] capitalize 2xl:text-start xl:text-start lg:text-start md:text-center text-center">
            Embrace the nomadic Way Of Life
          </h3>
          <p className="text-[#070707] 2xl:w-[95%] xl:w-[95%] lg:w-[95%] w-full font-Montserrat text-base font-normal leading-[115%] flex flex-col gap-1 pt-4 lg:pt-6 2xl:text-start xl:text-start lg:text-start md:text-center text-center">
            <span className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] w-full">
              At Noma Collective, we make the nomadic lifestyle achievable and
              enjoyable. Join us and discover the perfect blend of work,
              travel, and global community.
            </span>
          </p>
          <div>
            <ul className="text-[#070707] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] w-full flex 2xl:justify-start xl:justify-start lg:justify-start justify-center font-Montserrat text-base font-normal leading-[115%] flex flex-col gap-6 pt-4 pl-3 lg:pt-6">
              <li className="list-disc">
                <b>Live Freely, Work Effectively:</b> At Noma Collective, we
                provide everything you need to embrace the nomadic lifestyle.
                Enjoy remote-work-ready comfortable accommodations and curated
                activities to tick off that bucket list.
              </li>
              <li className="list-disc">
                <b>Join a Global Community:</b> Connect, collaborate and grow
                with other remote professionals from around the world as you
                live, work and explore together.
              </li>
              <li className="list-disc">
                <b>Unique destinations:</b> Choose from our wide range of
                unique 'off the beaten path' destinations across the globe..
              </li>
              <li className="list-disc">
                <b>Handpicked Accommodations:</b> Enjoy comfortable living in
                our carefully selected, work-friendly accommodations.
              </li>
            </ul>
          </div>
        </article>
        <article>
          {" "}
          <Image
            className="mt-7 2xl:w-[608px] 2xl:h-[390px] xl:w-[608px] xl:h-[390px] lg:w-[608px] lg:h-[360px] w-[380px] h-[300px] 2xl:mx-0 xl:mx-0 lg:mx-0 mx-auto"
            src="/img/WayToLiveCard.png"
            width={608}
            height={400}
            alt="way-to-live-card"
          />
        </article>
      </div>
    </div>
  </section>
  );
};

export default DigitalFreedom;
