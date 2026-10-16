const BASE_URL = "http://localhost:3000";

export const calculateRates = async ({
  scope = "DOMESTIC",
  itemType = "PACKAGE",
  weightKg = 1,
  size = "SMALL",
}) => {
  const weight = parseFloat(weightKg) || 0;
  if (weight <= 0) throw new Error("Khối lượng phải lớn hơn 0 kg!");

  const res = await fetch(`${BASE_URL}/shipping_rates/1`);
  if (!res.ok) throw new Error("Không thể tải bảng cước từ máy chủ!");

  const rates = await res.json();

  let basePrice = 0;
  let estimatedDays = "";

  if (itemType === "MAIL") {
    basePrice =
      scope === "DOMESTIC"
        ? rates.mailBasePrice
        : rates.mailBasePrice * rates.overseasMultiplier;
    estimatedDays = scope === "DOMESTIC" ? "1 - 2 ngày" : "5 - 7 ngày";
  } else {
    basePrice = rates.packages[size] || rates.packages.SMALL;

    if (weight > 1) {
      basePrice += Math.ceil(weight - 1) * rates.extraPerKg;
    }

    if (scope === "OVERSEAS") {
      basePrice = basePrice * rates.overseasMultiplier;
      estimatedDays = "5 - 10 ngày";
    } else {
      estimatedDays = "2 - 3 ngày";
    }
  }

  return {
    price: basePrice,
    formattedPrice: new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(basePrice),
    estimatedDays,
    scope: scope === "DOMESTIC" ? "Trong nước" : "Quốc tế",
    itemType: itemType === "PACKAGE" ? "Bưu kiện" : "Thư từ",
    weight: `${weight} kg`,
  };
};
