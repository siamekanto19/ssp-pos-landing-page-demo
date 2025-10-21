import { Button } from "@/components/ui/button";
import { Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-[18px] px-8 bg-gradient-to-r from-white via-orange-50/10 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-16">
              Built for Modern Restaurants
            </h2>
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255, 138, 5, 0.1)" }}
                >
                  <Zap
                    className="w-8 h-8"
                    style={{ color: "rgb(255, 138, 5)" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Process orders in seconds with optimized performance for
                    high-volume environments.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255, 138, 5, 0.1)" }}
                >
                  <Shield
                    className="w-8 h-8"
                    style={{ color: "rgb(255, 138, 5)" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Secure & Reliable
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Bank-level security with 99.9% uptime. Your data is always
                    protected and accessible.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255, 138, 5, 0.1)" }}
                >
                  <TrendingUp
                    className="w-8 h-8"
                    style={{ color: "rgb(255, 138, 5)" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Smart Analytics
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Data-driven insights to help you make better decisions and
                    grow revenue.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 flex lg:justify-start justify-center">
              <Button
                className="text-white px-14 py-7 rounded-full font-semibold text-xl hover:scale-105 transform transition-all"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                Explore All Features
              </Button>
            </div>
          </div>
          <div className="relative">
            <div
              className="rounded-4xl p-12 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(255, 138, 5, 0.05)" }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border-2"
                  style={{ borderColor: "rgba(255, 138, 5, 0.2)" }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "rgb(255, 138, 5)" }}
                  >
                    2.5s
                  </div>
                  <p className="text-gray-600 font-medium">Avg Order Time</p>
                </div>
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border-2"
                  style={{ borderColor: "rgba(255, 138, 5, 0.2)" }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "rgb(255, 138, 5)" }}
                  >
                    99.9%
                  </div>
                  <p className="text-gray-600 font-medium">Uptime</p>
                </div>
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border-2"
                  style={{ borderColor: "rgba(255, 138, 5, 0.2)" }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "rgb(255, 138, 5)" }}
                  >
                    24/7
                  </div>
                  <p className="text-gray-600 font-medium">Support</p>
                </div>
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border-2"
                  style={{ borderColor: "rgba(255, 138, 5, 0.2)" }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "rgb(255, 138, 5)" }}
                  >
                    1K+
                  </div>
                  <p className="text-gray-600 font-medium">Restaurants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
