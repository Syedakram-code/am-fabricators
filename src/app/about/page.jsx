"use client";
import Image from "next/image";
import useInView from "../customHooks/UseInView";

const AboutPage = () => {
  const [mdRef, mdVisible] = useInView(0.3);
  const [ceoRef, ceoVisible] = useInView(0.3);
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold primary-color">About Us</h1>
        <p className="text-white-600 leading-relaxed max-w-4xl mx-auto">
          Founded in <span className="font-semibold">2016</span>, A.M
          Fabricators and Engineering Works began with a small investment and
          has since grown to become one of the leading names in the fabrication
          and engineering industry. Over the years, we have successfully
          delivered high-quality projects and established trust with our
          clients.
        </p>
        <p className="text-white-600 leading-relaxed max-w-4xl mx-auto">
          Some of our recently completed or ongoing projects include
          <span className="font-semibold">
            {" "}
            K. Raheja Mindspace, Forbes Marshall, Vasavi Groups
          </span>
          , among others.
        </p>
        <p className="text-white-600 leading-relaxed max-w-4xl mx-auto">
          We specialize in a wide range of services including
          <span className="font-semibold">
            {" "}
            Steel Doors, Gates, Grills, Shutters, Balcony Railings, Metal Steel
            Railings, Channel Gates, Shed Works, Stainless Steel Works
          </span>
          , and even <span className="font-semibold">
            automobile bodies
          </span>{" "}
          such as trolley trucks and mini trucks. Our commitment to excellence
          extends to all types of
          <span className="font-semibold">
            {" "}
            metal and stainless steel works
          </span>
          .
        </p>
      </section>
      <section
        ref={mdRef}
        className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          mdVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold primary-color">
            Managing Director
          </h2>
          <p className="text-white-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            ligula nec purus feugiat volutpat. Sed commodo, lacus nec ultrices
            facilisis, nulla turpis tincidunt nulla, sit amet malesuada est
            massa non libero.
          </p>
          <p className="text-white-600">
            With years of experience in fabrication and engineering, the
            Managing Director ensures the company vision is aligned with client
            satisfaction and growth.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/MD_AM.png"
            alt="Managing Director"
            width={450}
            height={450}
            className="rounded-2xl shadow-lg object-cover"
          />
          <h2 className="mt-4 text-2xl font-semibold primary-color">
            Syed Ashraf Mehdi
          </h2>
          <h3 className="text-lg text-white-400">Managing Director</h3>
        </div>
      </section>

      <section
        ref={ceoRef}
        className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          ceoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="flex flex-col items-center text-center order-1 md:order-none">
          <Image
            src="/images/CEO_AM.png"
            alt="CEO"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
          <h2 className="mt-4 text-2xl font-semibold primary-color">
            Syed Raj Mohammad
          </h2>
          <h3 className="text-lg text-white-400">Chief Executive Officer</h3>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold primary-color">
            Chief Executive Officer
          </h2>
          <p className="text-white-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            venenatis, ligula ut facilisis sodales, nunc libero semper justo,
            sed posuere sem odio vitae nunc.
          </p>
          <p className="text-white-600">
            The CEO drives innovation and strategy, ensuring A.M Fabricators and
            Engineering Works continues to lead in quality and excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
