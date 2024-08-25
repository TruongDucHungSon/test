import Image from "next/image";
import Link from "next/link";
import IconSvg5 from "../assets/svgs/ic5.svg";
import { DATA_FOOTER, DATA_SERVICE } from "../utils/constans";
export default function Home() {
  return (
    <main>
      {/* description */}
      <section className="py-12 bg-[#a60f2d]">
        <div className="text-center container">
          <h4 className="py-1 text-[12px] md:text-[14px] leading-5 px-[10px] rounded-2xl text-white bg-[#b4354f] w-fit mx-auto">
            Team Name
          </h4>
          <h2 className="text-[24px] md:text-[42px] lg:text-[60px] font-montserrat font-semibold text-white leading-[32px] md:leading-[48px] lg:leading-[72px] mt-2 mb-3 lg:mt-4 lg:mb-6 w-full lg:w-[1024px] mx-auto">
            High-performing teams.<p>The future of work.</p>
          </h2>
          <p className="w-full lg:w-[768px] text-[#e6bcc4] mx-auto text-sm md:text-base lg:leading-[30px] lg:text-xl font-normal">
            Powerful, self-serve team engagement tools and analytics.
            Supercharge your managers & keep employees engaged from anywhere.
          </p>
        </div>
      </section>
      {/* List Card */}
      <section className="bg-[#f9fafb] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container">
          {DATA_SERVICE.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-6 p-6 rounded-2xl bg-white shadow-card cursor-pointer group hover:bg-[#faf1f3] transition-all duration-300 ease-in-out"
            >
              <Image
                width={48}
                height={48}
                src={item.icon}
                alt="image"
                loading="lazy"
                className="object-cover"
              />
              <div className="">
                <Link href="/" className="text-base lg:text-xl font-semibold ">
                  {item.title}
                </Link>
                <p className="mt-2 mb-5 text-[#475467] text-sm lg:text-base">
                  {item.description}
                </p>
                <Link
                  href="/"
                  className="text-sm lg:text-base text-[#A60F2D] font-semibold flex items-center gap-2"
                >
                  Learn more
                  <Image
                    width={20}
                    height={20}
                    src={IconSvg5}
                    alt="image"
                    loading="lazy"
                    className="object-cover group-hover:translate-x-2 transition-all duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* footer */}
      <footer className="py-12 container">
        <h3 className="text-center text-3xl lg:text-4xl tracking-[-2%] font-semibold mb-5 lg:mb-8">
          How to request the service
        </h3>
        {/* list footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DATA_FOOTER.map((item) => (
            <div key={item.id}>
              <h6 className="text-base lg:text-20 lg:leading-[30px] font-semibold">
                {item.title}
              </h6>
              <p className="my-2 text-sm lg:text-base text-[#475467] w-full max-w-full lg:max-w-[400px]">
                {item.description}
              </p>
              <div>
                <div className="flex items-center gap-1">
                  <Image
                    width={20}
                    height={20}
                    src={item.iconPhone}
                    alt="image"
                    loading="lazy"
                    className="object-cover"
                  />
                  <p className="text-sm lg:text-base text-[#475467]">
                    {item.phone}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    width={20}
                    height={20}
                    src={item.iconEmail}
                    alt="image"
                    loading="lazy"
                    className="object-cover"
                  />
                  <p className="text-sm lg:text-base text-[#475467]">
                    {item.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
