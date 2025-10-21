import { Card, CardContent } from "@/components/ui/card";
import { QrCode, CreditCard, Store, Users, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-32 px-8 bg-linear-to-br from-orange-50/20 via-gray-50/30 to-orange-50/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-8">
            Complete Restaurant Solution
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four powerful products designed to streamline every aspect of your
            restaurant
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-full mx-auto">
          {/* Scan, Split, Pay */}
          <Card className="bg-white/95 border-2 border-gray-100 rounded-4xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 group h-full">
            <CardContent className="p-12 h-full flex flex-col">
              <div className="flex items-center justify-center mb-10">
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "rgb(255, 138, 5)" }}
                >
                  <QrCode className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Scan, Split, Pay
              </h3>
              <p className="text-gray-600 mb-10 text-center leading-relaxed text-lg grow">
                Complete customer experience from QR menu scanning to flexible
                bill splitting with multiple payment options.
              </p>
              <Button
                className="w-full text-white py-6 px-10 rounded-full text-xl font-semibold transition-all hover:scale-105 mt-auto"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                Explore Features
              </Button>
            </CardContent>
          </Card>
          {/* SSP Manager */}
          <Card className="bg-white/95 border-2 border-gray-100 rounded-4xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 group h-full">
            <CardContent className="p-12 h-full flex flex-col">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                <Store className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                SSP Manager
              </h3>
              <p className="text-gray-600 mb-10 text-center leading-relaxed text-lg grow">
                Comprehensive restaurant management dashboard with real-time
                analytics, inventory tracking, and staff oversight.
              </p>
              <Button
                className="w-full text-white py-6 px-10 rounded-full text-xl font-semibold transition-all hover:scale-105 mt-auto"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                Explore Features
              </Button>
            </CardContent>
          </Card>
          {/* SSP Waiter */}
          <Card className="bg-white/95 border-2 border-gray-100 rounded-4xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 group h-full">
            <CardContent className="p-12 h-full flex flex-col">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                SSP Waiter
              </h3>
              <p className="text-gray-600 mb-10 text-center leading-relaxed text-lg grow">
                Mobile-first order taking and table management system for
                efficient service delivery and customer satisfaction.
              </p>
              <Button
                className="w-full text-white py-6 px-10 rounded-full text-xl font-semibold transition-all hover:scale-105 mt-auto"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                Explore Features
              </Button>
            </CardContent>
          </Card>
          {/* SSP Kitchen - Coming Soon */}
          <Card className="bg-gray-100 border-2 border-gray-300 rounded-4xl relative overflow-hidden h-full">
            <CardContent className="p-12 relative h-full flex flex-col">
              <div className="w-24 h-24 bg-gray-400 rounded-3xl flex items-center justify-center mb-10 mx-auto">
                <ChefHat className="w-12 h-12 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center">
                SSP Kitchen
              </h3>
              <p className="text-gray-600 mb-10 text-center leading-relaxed text-lg grow">
                Smart kitchen display system with order queue management and
                preparation timing optimization.
              </p>
              <div
                className="text-white px-8 py-6 rounded-full text-center text-xl font-bold mt-auto"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                Coming Q3 2026
              </div>
              <div
                className="absolute top-6 right-6 text-white px-4 py-2 rounded-full text-sm font-bold"
                style={{ backgroundColor: "rgb(255, 138, 5)" }}
              >
                COMING SOON
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
