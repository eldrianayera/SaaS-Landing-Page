export const TrustedBy = () => {
  const brands = ["discord", "binance", "adijaya", "visa", "barcelona"];

  return (
    <div className="mt-20 relative">
      <h2 className="text-3xl font-bold text-center">
        Trusted by Industry Leaders
      </h2>
      <div className="w-full mt-5 flex flex-col items-center gap-6 lg:flex-row lg:justify-center flex-wrap">
        {brands.map((brand, key) => (
          <img
            key={key}
            src={`/${brand}.png`}
            width="100"
            height="60"
            alt={brand}
            className="object-contain grayscale opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};
