import React from "react";
import {
  Briefcase,
  Languages,
  TerminalSquare,
  SwatchBook,
  Lightbulb,
} from "lucide-react";

function CategoryCard({ icon, title, className = "" }) {
  return (
    <div
      className={`rounded-[28px] bg-[#eaf4fb] p-8 md:p-10 min-h-[250px] md:min-h-[300px] flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      <div className="text-blue-600">{icon}</div>

      <h3 className="text-2xl md:text-[28px] font-medium leading-snug text-black max-w-[220px]">
        {title}
      </h3>
    </div>
  );
}

function HomeSection2() {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Left Content */}
          <div className="lg:col-span-4 pt-2">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-black">
              Discover Our Full
              <br />
              <span className="text-blue-600">Categories</span>
            </h2>

            <p className="mt-8 text-gray-600 text-lg md:text-[22px] leading-relaxed max-w-md">
              Browse categories filled with exciting topics and new skills.
            </p>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
              {/* top row - shifted to the right on large screens */}
              <CategoryCard
                icon={<Briefcase size={62} strokeWidth={1.8} />}
                title={
                  <>
                    Business & <br />
                    Management
                  </>
                }
                className="sm:translate-y-0 lg:col-span-3"
              />

              <CategoryCard
                icon={<Languages size={62} strokeWidth={1.8} />}
                title={
                  <>
                    Language & <br />
                    Communication
                  </>
                }
                className="lg:col-span-3"
              />

              {/* bottom row */}
              <CategoryCard
                icon={<TerminalSquare size={62} strokeWidth={1.8} />}
                title={
                  <>
                    Technology & <br />
                    Programming
                  </>
                }
                className="lg:col-span-2"
              />

              <CategoryCard
                icon={<SwatchBook size={62} strokeWidth={1.8} />}
                title={
                  <>
                    Design & Creativity
                  </>
                }
                className="lg:col-span-2"
              />

              <CategoryCard
                icon={<Lightbulb size={62} strokeWidth={1.8} />}
                title={
                  <>
                    Personal Development
                  </>
                }
                className="sm:col-span-2 lg:col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection2;