export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px]">
      {/* iPhone frame */}
      <div className="rounded-[3rem] border-[6px] border-gray-900 bg-gray-900 p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

        {/* Screen area — replace the placeholder with an <img> later */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-rosa-100 to-rosa-50">
          {/* Placeholder content — remove this when adding a screenshot */}
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rosa-300 text-2xl font-bold text-white">
              F
            </div>
            <p className="text-sm font-medium text-rosa-700">FødeiNorge</p>
            <p className="text-xs text-rosa-500">Skjermbilde kommer</p>
          </div>
        </div>
      </div>

      {/* Side button (power) */}
      <div className="absolute -right-[8px] top-28 h-12 w-[3px] rounded-r-sm bg-gray-800" />
      {/* Side buttons (volume) */}
      <div className="absolute -left-[8px] top-24 h-8 w-[3px] rounded-l-sm bg-gray-800" />
      <div className="absolute -left-[8px] top-36 h-8 w-[3px] rounded-l-sm bg-gray-800" />
    </div>
  );
}
