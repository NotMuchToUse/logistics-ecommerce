// const BASE_URL = "http://localhost:3000";

// export const trackingItemService = async (code) => {
//   try {
//     let parcels = await fetch(`${BASE_URL}/parcels?trackingCode=${code}`);
//     let trackings = await fetch(`${BASE_URL}/trackings?trackingCode=${code}`);

//     parcels = await parcels.json();
//     trackings = await trackings.json();

//     return {
//       parcel: parcels[0] || null,
//       timeline: trackings || [],
//     };
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

const BASE_URL = "http://localhost:3000";

export const trackingItemService = async (code) => {
  try {
    const res = await fetch(`${BASE_URL}/shipments?id=${code}`);
    const data = await res.json();

    return data[0] || null;
  } catch (error) {
    console.error("Lỗi trackingItemService:", error);
    return null;
  }
};

export const getAllLocations = async () => {
  try {
    const res = await fetch(`${BASE_URL}/locations`);
    return await res.json();
  } catch (error) {
    console.error("Lỗi getAllLocations:", error);
    return [];
  }
};

export const searchLocations = async (keyword) => {
  try {
    const res = await fetch(
      `${BASE_URL}/locations?q=${encodeURIComponent(keyword)}`,
    );
    return await res.json();
  } catch (error) {
    console.error("Lỗi searchLocations:", error);
    return [];
  }
};
