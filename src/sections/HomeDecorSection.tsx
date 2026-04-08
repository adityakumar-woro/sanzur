export const HomeDecorSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Home Decor Collection
          </h2>
          <p className="text-gray-500 mt-2">
            Elevate your space with modern and aesthetic decor pieces
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Item 1 */}
          <div className="rounded-xl overflow-hidden shadow hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
              alt="Decor 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">Minimal Vase</h3>
              <p className="text-sm text-gray-500">Elegant ceramic decor</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="rounded-xl overflow-hidden shadow hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Decor 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">Wall Art</h3>
              <p className="text-sm text-gray-500">Modern aesthetic frames</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="rounded-xl overflow-hidden shadow hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1598300053653-9f9c4f4c4a4f"
              alt="Decor 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">Table Lamp</h3>
              <p className="text-sm text-gray-500">Warm ambient lighting</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};