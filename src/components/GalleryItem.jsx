export function GalleryItem({ img, view }) {
  if (view === "grid") {
    return (
      <div>
        <img
          src={img}
          className="w-full h-60 object-cover rounded"
          alt=""
        />

        <div className="mt-3">
          <p className="font-semibold">Today</p>
          <p className="text-sm text-gray-600">9-08-2016</p>

          <div className="flex gap-4 text-sm mt-2">
            <span>❤️ 128</span>
            <span>💬 31</span>
            <span>👁 67</span>
            <span>⬇ 22</span>
          </div>

          <p className="text-sm text-gray-600 mt-1">Image upload</p>
          <p className="text-xs text-gray-500">11-04-2016</p>
        </div>
      </div>
    );
  }

  // ---------------- LIST VIEW ----------------
  return (
    <div className="flex gap-6 items-center">

      {/* IMAGE */}
      <img
        src={img}
        className="w-28 h-28 object-cover rounded"
        alt=""
      />

      {/* TEXT BLOCKS: 3 columns */}
      <div className="flex justify-between flex-1">

        {/* BLOCK 1 */}
        <div>
          <p className="font-semibold">Today</p>

          <div className="flex gap-4 text-sm mt-2 text-gray-700">
            <span className="flex items-center gap-1">❤️ 128</span>
            <span className="flex items-center gap-1">💬 31</span>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div>
          <p className="font-semibold">9-08-2016</p>

          <div className="flex gap-4 text-sm mt-2 text-gray-700">
            <span className="flex items-center gap-1">❤️ 67</span>
            <span className="flex items-center gap-1">💬 22</span>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="text-right">
          <p className="font-semibold">Image upload</p>
          <p className="text-sm text-gray-500 mt-2">11-04-2016</p>
        </div>

      </div>
    </div>
  );
}
