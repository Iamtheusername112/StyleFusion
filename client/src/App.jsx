import "./App.css";
import React from "react";

function App() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-green-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Style Fusion</h1>
          <nav className="flex items-center space-x-4">
            <ul className="flex items-center list-none p-0">
              <li className="mr-4">
                <a href="#" className=" hover:underline">
                  HomE
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className=" hover:underline">
                  Shop
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className=" hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-4 p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Product Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://imgs.search.brave.com/Yvb8pc8so1RwQ_bFkb4VaShWch2h6CNEXzEjuExMAIQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRiL2I2/LzBkLzRiYjYwZDY4/NDVkYzc2NjJmYzAz/ZmJiM2Q5MTIwMTYz/LmpwZw"
              alt="Product 1"
              className="w-full h-100 object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">
              The Quad father t-shirt
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Product description goes here.
            </p>
            <p className="text-blue-500 text-lg font-semibold mt-2">$49.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              Add to Cart
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://imgs.search.brave.com/Xbacw8ST1nmjnp5qcNuRg_bpFUtvm50pyPNjAV9WEaM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxTndXQUVENXJM/LmpwZw"
              alt="Product 2"
              className="w-full h-100 object-cover"
            />

            <h2 className="text-lg font-semibold mt-2">Custom t-shirt</h2>
            <p className="text-gray-600 text-sm mt-1">
              Product description goes here.
            </p>
            <p className="text-blue-500 text-lg font-semibold mt-2">$39.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              Add to Cart
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://imgs.search.brave.com/mHFNMwtBfcuoSA3HnCHU-LKr1w8xAhprNAotnes9O_M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUz/MjE3OTM1L3Bob3Rv/L3Qtc2hpcnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUNN/bWJsR0p6cUtvcnRn/RVp0VElLcmNlS0gw/NkRZRmMyNWRlVkZB/ZFA2dzA9"
              alt="Product 3"
              className="w-full h-100 object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">Product 3</h2>
            <p className="text-gray-600 text-sm mt-1">
              Product description goes here.
            </p>
            <p className="text-blue-500 text-lg font-semibold mt-2">$59.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              Add to Cart
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Style Fusion...</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
