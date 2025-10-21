import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-32 px-8 bg-gradient-to-b from-white via-orange-50/10 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-6xl mx-auto">
          <div
            className="inline-flex items-center px-8 py-4 rounded-full mb-12 border-2"
            style={{
              backgroundColor: "rgba(255, 138, 5, 0.1)",
              borderColor: "rgba(255, 138, 5, 0.3)",
            }}
          >
            <Star
              className="w-6 h-6 mr-3"
              style={{ color: "rgb(255, 138, 5)" }}
            />
            <span
              className="text-base font-semibold"
              style={{ color: "rgb(200, 100, 0)" }}
            >
              Trusted by 1,000+ restaurants worldwide
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            <span className="font-bold" style={{ color: "rgb(255, 138, 5)" }}>
              Revolutionize
            </span>
            <br />
            <span className="text-gray-900 font-semibold">Your Restaurant</span>
          </h1>
          <p className="text-3xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Complete restaurant management solution with powerful products.
            <br className="hidden md:block" />
            Simple to use, built to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              className="text-white px-16 py-8 rounded-full text-2xl font-semibold transition-all hover:scale-105 transform min-w-[280px]"
              style={{ backgroundColor: "rgb(255, 138, 5)" }}
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-3 text-2xl px-16 py-8 rounded-full font-semibold transition-all hover:scale-105 transform min-w-[280px]"
              style={{
                borderColor: "rgb(255, 138, 5)",
                color: "rgb(255, 138, 5)",
              }}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
