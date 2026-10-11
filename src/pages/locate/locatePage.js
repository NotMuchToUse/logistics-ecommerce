import { h } from "../../utils/dom.js";
import { getAllLocations, searchLocations } from "../../services/tracking.js";
import mapPinIcon from "lucide-static/icons/map-pin.svg";
import searchIcon from "lucide-static/icons/search.svg";

export const locatePage = () => {
  // 1. Khung chứa bản đồ và danh sách
  const mapContainer = h("div", {
    id: "map",
    class: "h-[500px] w-full rounded-xl border border-gray-200 shadow-sm z-0",
  });

  const listContainer = h("div", {
    class: "flex flex-col gap-3 max-h-[420px] overflow-y-auto pr-2",
  });

  const inputSearch = h("input", {
    type: "text",
    placeholder: "Nhập quận huyện, tên bưu cục...",
    class:
      "w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand-blue",
  });

  let mapInstance = null;
  let markersLayer = null;

  // 2. Hàm vẽ danh sách bưu cục ra cột bên trái
  const renderList = (locations) => {
    listContainer.innerHTML = "";

    if (!locations || locations.length === 0) {
      listContainer.appendChild(
        h(
          "p",
          { class: "text-sm text-gray-500 italic p-3 text-center" },
          "Không tìm thấy bưu cục nào phù hợp.",
        ),
      );
      return;
    }

    locations.forEach((loc) => {
      const item = h(
        "div",
        {
          class:
            "flex flex-col gap-1.5 p-3.5 rounded-lg border border-gray-200 bg-white hover:border-brand-blue/60 transition cursor-pointer shadow-sm hover:shadow",
          onclick: () => {
            // Khi bấm vào item, bản đồ tự bay tới tọa độ đó
            if (mapInstance && loc.lat && loc.lng) {
              mapInstance.flyTo([loc.lat, loc.lng], 16, { duration: 1.5 });
            }
          },
        },
        h(
          "div",
          {
            class:
              "flex items-center gap-2 font-bold text-sm text-brand-strong",
          },
          h("img", { src: mapPinIcon, class: "w-4 h-4 text-brand-blue" }),
          h("span", {}, loc.name),
        ),
        h("p", { class: "text-xs text-gray-600" }, loc.address),
        h(
          "div",
          {
            class:
              "flex justify-between items-center text-[11px] text-gray-400 mt-1",
          },
          h("span", {}, `Giờ mở cửa: ${loc.operatingHours || "07:30 - 18:00"}`),
          h(
            "span",
            { class: "font-semibold text-brand-blue hover:underline" },
            "Xem vị trí ➔",
          ),
        ),
      );

      listContainer.appendChild(item);
    });
  };

  // 3. Hàm cắm cờ (Markers) lên bản đồ Leaflet
  const updateMapMarkers = (locations) => {
    if (!mapInstance || !window.L) return;

    // Xóa các marker cũ nếu có
    if (markersLayer) {
      mapInstance.removeLayer(markersLayer);
    }
    markersLayer = window.L.layerGroup().addTo(mapInstance);

    locations.forEach((loc) => {
      if (loc.lat && loc.lng) {
        const marker = window.L.marker([loc.lat, loc.lng]).addTo(markersLayer);
        marker.bindPopup(`
          <div style="font-family: sans-serif; font-size: 13px;">
            <strong style="color: #c92a2a;">${loc.name}</strong>
            <p style="margin: 4px 0 2px 0;">${loc.address}</p>
            <small style="color: #666;">Giờ làm việc: ${loc.operatingHours || "Cả ngày"}</small>
          </div>
        `);
      }
    });

    // Tự động căn chỉnh khung hình bản đồ vừa vặn với các điểm
    if (locations.length > 0 && locations[0].lat) {
      mapInstance.setView([locations[0].lat, locations[0].lng], 13);
    }
  };

  // 4. Khởi tạo Bản Đồ sau khi DOM đã được gắn
  setTimeout(async () => {
    if (window.L && !mapInstance) {
      // Tâm ban đầu tại TP.HCM
      mapInstance = window.L.map(mapContainer).setView([10.7798, 106.699], 12);

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapInstance);

      // Tải dữ liệu ban đầu
      const initialData = await getAllLocations();
      renderList(initialData);
      updateMapMarkers(initialData);
    }
  }, 100);

  // 5. Sự kiện khi tìm kiếm
  const handleSearch = async () => {
    const keyword = inputSearch.value.trim();
    const data = keyword
      ? await searchLocations(keyword)
      : await getAllLocations();
    renderList(data);
    updateMapMarkers(data);
  };

  inputSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  const btnSearch = h(
    "button",
    {
      type: "button",
      class:
        "shrink-0 rounded-md bg-brand-blue px-4 py-2 text-sm font-bold text-white transition hover:opacity-90 flex items-center gap-1.5",
      onclick: handleSearch,
    },
    h("img", { src: searchIcon, class: "w-4 h-4" }),
    "Tìm",
  );

  // ==========================================
  // RETURN GIAO DIỆN 2 CỘT
  // ==========================================
  return h(
    "div",
    { class: "mx-auto w-full max-w-7xl px-4 py-8" },
    h(
      "h1",
      { class: "text-2xl font-extrabold text-brand-strong mb-6" },
      "Tìm bưu cục gần nhất",
    ),
    h(
      "div",
      { class: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" },

      // CỘT TRÁI (5 phần): Tìm kiếm & Danh sách
      h(
        "div",
        {
          class:
            "lg:col-span-5 flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50/50 p-4",
        },
        h("div", { class: "flex gap-2" }, inputSearch, btnSearch),
        listContainer,
      ),

      // CỘT PHẢI (7 phần): Bản đồ OpenStreetMap
      h("div", { class: "lg:col-span-7 sticky top-4" }, mapContainer),
    ),
  );
};
