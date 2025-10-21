import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 bg-linear-to-br from-orange-50/20 via-gray-50/30 to-orange-50/15"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-5xl font-bold mb-8 mx-auto flex justify-center">
            <Image
              src="/logo_no_bg.png"
              alt="SSPPOS Logo"
              width={150}
              height={150}
            />
          </div>
          <h2 className="text-5xl md:text-5xl font-semibold text-gray-900 mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Join thousands of restaurants using SSPPOS
          </p>
        </div>
        <Card className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-4xl">
          <CardContent className="p-6">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl focus:border-2 transition-all text-lg"
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgb(255, 138, 5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgb(209, 213, 219)")
                    }
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:border-2 transition-all text-lg"
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgb(255, 138, 5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgb(209, 213, 219)")
                    }
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-4">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:border-2 transition-all text-lg"
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgb(255, 138, 5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgb(209, 213, 219)")
                  }
                  placeholder="Your Restaurant"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-4">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:border-2 transition-all text-lg"
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgb(255, 138, 5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgb(209, 213, 219)")
                  }
                  placeholder="john@example.com"
                />
              </div>
              <Button
                className="w-full text-white py-6 rounded-3xl font-bold text-2xl hover:scale-[1.02] transform transition-all"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                Start Your Free Trial
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
