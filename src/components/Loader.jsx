import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center>
      <div className="flex flex-col items-center justify-center">
        {/* Smooth Spinning Loader */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute w-full h-full border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin"></div>
          <span className="text-lg font-semibold text-blue-400 drop-shadow-lg">
            {progress.toFixed(0)}%
          </span>
        </div>

        <p className="mt-2 text-sm font-medium text-gray-400 tracking-wide">
          Loading experience...
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
