"use client";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Noise Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="noise-bg w-full h-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tight">
          ENTAZO
        </h1>
        <span className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
          página oficial próximamente
        </span>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

      <style jsx>{`
        .noise-bg {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.15) 1px,
            transparent 0
          );
          background-size: 20px 20px;
          animation: noise 0.2s infinite;
        }

        @keyframes noise {
          0% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -5%);
          }
          20% {
            transform: translate(-10%, 5%);
          }
          30% {
            transform: translate(5%, -10%);
          }
          40% {
            transform: translate(-5%, 15%);
          }
          50% {
            transform: translate(-10%, 5%);
          }
          60% {
            transform: translate(15%, 0%);
          }
          70% {
            transform: translate(0%, 15%);
          }
          80% {
            transform: translate(-15%, 10%);
          }
          90% {
            transform: translate(10%, 5%);
          }
          100% {
            transform: translate(5%, 0%);
          }
        }

        h1 {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
