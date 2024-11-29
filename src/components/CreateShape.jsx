import React, { useState } from "react";
import { FaCircle, FaSquare, FaPlay } from "react-icons/fa";

function CreateShape() {
  const [shape, setShape] = useState("circle");
  const [height, setHeight] = useState(150);
  const [width, setWidth] = useState(150);
  const [borderRadius, setBorderRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });
  const [bgColor, setBgColor] = useState("#ffffff");
  const [generatedCode, setGeneratedCode] = useState("");

  const shapeIcons = {
    triangle: FaPlay,
    square: FaSquare,
    circle: FaCircle,
  };

  const generateCode = () => {
    let code;
    if (shape === "triangle") {
      code = `
<div style="
  width: 0;
  height: 0;
  border-left: ${width / 2}px solid transparent;
  border-right: ${width / 2}px solid transparent;
  border-bottom: ${height}px solid ${bgColor};
"></div>
      `.trim();
    } else {
      code = `
<div style="
  width: ${width}px;
  height: ${height}px;
  border-radius: ${borderRadius.topLeft}% ${borderRadius.topRight}% ${borderRadius.bottomRight}% ${borderRadius.bottomLeft}% ;
  background-color: ${bgColor};
"></div>
      `.trim();
    }
    setGeneratedCode(code);
  };

  const calculateGradient = (value, min, max) =>
    `linear-gradient(to right, #EC4899 ${(value - min) / (max - min) * 100}%, #164E63 0%)`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#101212] to-[#08201D] text-white flex flex-col items-center">
      <div className="text-center my-6">
        <h1 className="text-6xl font-bold mb-2 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-300 to-white">
          Shape Forge
        </h1>
        <p className="text-gray-400">Customize and craft your shape</p>
      </div>

      <div className="flex w-full px-6">
        <div className="w-1/2 pl-6 py-6 flex flex-col items-start space-y-6">
          <div className="space-y-6 w-full">
            <div>
              <label className="block text-sm mb-1">Height: {height}px</label>
              <input
                type="range"
                min={50}
                max={500}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full appearance-none h-2 rounded-lg focus:outline-none transition-all"
                style={{
                  background: calculateGradient(height, 50, 500),
                }}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Width: {width}px</label>
              <input
                type="range"
                min={50}
                max={500}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full appearance-none h-2 rounded-lg focus:outline-none transition-all"
                style={{
                  background: calculateGradient(width, 50, 500),
                }}
              />
            </div>
            {["topLeft", "topRight", "bottomLeft", "bottomRight"].map(
              (corner) => (
                <div key={corner}>
                  <label className="block text-sm mb-1">
                    {corner.replace(/([A-Z])/g, " $1")} Radius:{" "}
                    {borderRadius[corner]}%
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={borderRadius[corner]}
                    onChange={(e) =>
                      setBorderRadius({
                        ...borderRadius,
                        [corner]: Number(e.target.value),
                      })
                    }
                    className="w-full appearance-none h-2 rounded-lg focus:outline-none transition-all"
                    style={{
                      background: calculateGradient(
                        borderRadius[corner],
                        0,
                        100
                      ),
                    }}
                  />
                </div>
              )
            )}
            <div>
              <label className="block text-sm mb-1">Background Color</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 border rounded-md cursor-pointer"
              />
            </div>
          </div>
          <button
            onClick={generateCode}
            className="mt-auto px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
          >
            Generate Code
          </button>
        </div>

        <div className="w-1/2 pr-6 py-6 flex flex-col items-center space-y-6">
          <div className="flex space-x-6 mb-6">
            {Object.entries(shapeIcons).map(([shapeName, ShapeIcon]) => (
              <button
                key={shapeName}
                onClick={() => setShape(shapeName)}
                className={`p-5 rounded-lg transition-all duration-300 border ${
                  shape === shapeName
                    ? "bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 text-black border-white"
                    : "bg-black text-white border-gray-600 hover:bg-gray-800"
                }`}
              >
                <ShapeIcon className="w-8 h-8" />
              </button>
            ))}
          </div>

          <div
            style={{
              width: shape === "triangle" ? 0 : `${width}px`,
              height: shape === "triangle" ? 0 : `${height}px`,
              borderRadius: `${borderRadius.topLeft}% ${borderRadius.topRight}% ${borderRadius.bottomRight}% ${borderRadius.bottomLeft}%`,
              backgroundColor: shape === "triangle" ? "transparent" : bgColor,
              borderLeft:
                shape === "triangle"
                  ? `${width / 2}px solid transparent`
                  : "none",
              borderRight:
                shape === "triangle"
                  ? `${width / 2}px solid transparent`
                  : "none",
              borderBottom:
                shape === "triangle" ? `${height}px solid ${bgColor}` : "none",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      {generatedCode && (
        <div className="w-3/4 mt-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Generated Code:</h3>
          <pre className="bg-black text-green-400 p-4 rounded overflow-auto">
            {generatedCode}
          </pre>
        </div>
      )}
    </div>
  );
}

export default CreateShape;