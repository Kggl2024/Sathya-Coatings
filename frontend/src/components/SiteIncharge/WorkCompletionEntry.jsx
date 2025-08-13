// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Search,
//   ChevronDown,
//   Edit,
//   Save,
//   X,
//   AlertCircle,
//   CheckCircle,
//   FileText,
//   BookCheck,        // <-- import BookCheck here
// } from "lucide-react";
// import { useParams } from "react-router-dom";

// const WorkCompletionEntry = () => {
//   const { encodedUserId } = useParams();
//   const [reckonerData, setReckonerData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loadingSites, setLoadingSites] = useState(true);
//   const [editingId, setEditingId] = useState(null);
//   const [editingData, setEditingData] = useState({
//     area_completed: "",
//     value: "",
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [siteOptions, setSiteOptions] = useState([]);
//   const [selectedSite, setSelectedSite] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     fetchSites();
//   }, []);

//   useEffect(() => {
//     if (selectedSite) {
//       fetchReckonerData();
//     }
//   }, [selectedSite]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const fetchSites = async () => {
//     try {
//       setLoadingSites(true);
//       const res = await axios.get("http://localhost:5000/reckoner/sites");
//       if (res.data.success && Array.isArray(res.data.data)) {
//         const options = res.data.data.map((site) => ({
//           site_id: site.site_id,
//           site_name: site.site_name,
//           po_number: site.po_number,
//           label: `${site.site_name} (PO: ${site.po_number})`,
//         }));
//         setSiteOptions(options);
//         if (options.length > 0 && !selectedSite) {
//           setSelectedSite(options[0].site_id);
//         }
//       } else {
//         toast.error("Failed to fetch site options: Invalid response");
//       }
//     } catch (error) {
//       console.error("Error fetching sites:", error);
//       toast.error("Failed to fetch site options");
//     } finally {
//       setLoadingSites(false);
//     }
//   };

//   const fetchReckonerData = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:5000/reckoner/reckoner/");
//       const data =
//         res.data.success && Array.isArray(res.data.data) ? res.data.data : [];
//       // Deduplicate by rec_id, keeping the last occurrence
//       const uniqueData = Array.from(
//         new Map(data.map((item) => [item.rec_id, item])).values()
//       );
//       setReckonerData(uniqueData);
//       if (selectedSite) {
//         setFilteredData(
//           uniqueData.filter((item) => item.site_id === selectedSite)
//         );
//       } else {
//         setFilteredData(uniqueData);
//       }
//     } catch (error) {
//       console.error("Error fetching reckoner data:", error);
//       toast.error("Failed to fetch reckoner data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSiteSelect = (siteId) => {
//     setSelectedSite(siteId);
//     setDropdownOpen(false);
//     setSearchQuery("");
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value.toLowerCase());
//   };

//   const handleEdit = (record) => {
//     setEditingId(record.rec_id);
//     setEditingData({
//       area_completed: record.area_completed || "",
//       value: record.completion_value || "",
//     });
//   };

//   // --- Restricts area_completed <= po_quantity and recalculates value ---
//   const handleEditChange = (field, value) => {
//     setEditingData((prev) => {
//       const newData = { ...prev, [field]: value };
//       if (field === "area_completed") {
//         const record = filteredData.find((item) => item.rec_id === editingId);
//         if (record) {
//           const poQty = parseFloat(record.po_quantity) || 0;
//           let area = parseFloat(value) || 0;
//           if (area > poQty) {
//             toast.error(
//               `Completed area cannot exceed PO quantity (${poQty})`
//             );
//             area = poQty;
//           }
//           const rate = parseFloat(record.rate) || 0;
//           newData.area_completed = area;
//           newData.value = (area * rate).toFixed(2);
//         }
//       }
//       return newData;
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingId(null);
//     setEditingData({ area_completed: "", value: "" });
//   };

//   const handleSubmit = async (rec_id) => {
//     try {
//       setSubmitting(true);
//       if (!encodedUserId) {
//         toast.error("User ID is missing from URL");
//         return;
//       }
//       let user_id;
//       try {
//         user_id = atob(encodedUserId);
//         if (!/^\d+$/.test(user_id)) {
//           throw new Error("Decoded user_id is not a valid number");
//         }
//       } catch (error) {
//         console.error("Error decoding user_id:", error);
//         toast.error("Invalid user ID in URL");
//         return;
//       }

//       const area = parseFloat(editingData.area_completed);
//       if (isNaN(area)) {
//         toast.error("Area completed must be a number");
//         return;
//       }
//       if (area < 0) {
//         toast.error("Area completed cannot be negative");
//         return;
//       }

//       const record = filteredData.find((item) => item.rec_id === rec_id);
//       if (!record) {
//         toast.error("Record not found");
//         return;
//       }

//       const payload = {
//         rec_id,
//         area_completed: area,
//         rate: parseFloat(record.rate) || 0,
//         value: parseFloat(editingData.value) || 0,
//         created_by: parseInt(user_id),
//       };

//       await axios.post(
//         "http://localhost:5000/site-incharge/completion-status",
//         payload
//       );
//       toast.success("Completion data updated successfully");
//       await fetchReckonerData();
//       setEditingId(null);
//       setEditingData({ area_completed: "", value: "" });
//     } catch (error) {
//       console.error("Error saving completion data:", error);
//       if (error.response?.status === 403) {
//         toast.error("Unauthorized: You are not allowed to update this record");
//       } else if (error.response?.status === 404) {
//         toast.error("Record not found for the given rec_id");
//       } else {
//         toast.error(
//           error.response?.data?.message || "Failed to update completion data"
//         );
//       }
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const filteredSiteOptions = siteOptions.filter(
//     (option) =>
//       option.site_name.toLowerCase().includes(searchQuery) ||
//       option.po_number.toLowerCase().includes(searchQuery)
//   );

//   // --- Helper to compare numbers as floats safely ---
//   const areFloatsEqual = (a, b) =>
//     Math.abs(Number(a) - Number(b)) < 0.01; // tolerant of minor float artifacts

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//           Work Completion Entry
//         </h1>

//         <div
//           className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end gap-4"
//           ref={dropdownRef}
//         >
//           <div className="flex-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Select Site
//             </label>
//             <div className="relative max-w-md">
//               {dropdownOpen ? (
//                 <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
//                   <div className="flex items-center px-3 py-2 border-b border-gray-200">
//                     <Search className="h-5 w-5 text-gray-400" />
//                     <input
//                       type="text"
//                       autoFocus
//                       value={searchQuery}
//                       onChange={handleSearchChange}
//                       placeholder="Search sites or PO numbers..."
//                       className="flex-1 py-2 px-3 text-sm focus:outline-none bg-transparent"
//                     />
//                     <button
//                       onClick={() => setDropdownOpen(false)}
//                       className="ml-2 text-gray-500 hover:text-gray-700"
//                     >
//                       <X className="h-5 w-5" />
//                     </button>
//                   </div>
//                   <div className="max-h-60 overflow-y-auto">
//                     {loadingSites ? (
//                       <div className="px-4 py-3 text-gray-500 text-sm flex items-center">
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600 mr-2"></div>
//                         Loading sites...
//                       </div>
//                     ) : siteOptions.length === 0 ? (
//                       <div className="px-4 py-3 text-gray-500 text-sm">
//                         No sites available
//                       </div>
//                     ) : filteredSiteOptions.length === 0 ? (
//                       <div className="px-4 py-3 text-gray-500 text-sm">
//                         No matching sites found
//                       </div>
//                     ) : (
//                       filteredSiteOptions.map((option) => (
//                         <div
//                           key={option.site_id}
//                           onClick={() => handleSiteSelect(option.site_id)}
//                           className={`px-4 py-3 text-sm cursor-pointer hover:bg-indigo-50 transition-colors ${
//                             selectedSite === option.site_id
//                               ? "bg-indigo-100 text-indigo-800"
//                               : "text-gray-700"
//                           }`}
//                         >
//                           <div className="font-medium">{option.site_name}</div>
//                           <div className="text-xs text-gray-500">
//                             PO: {option.po_number}
//                           </div>
//                         </div>
//                       ))
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setDropdownOpen(true)}
//                   className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-left hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
//                   disabled={loadingSites}
//                 >
//                   <div>
//                     {loadingSites ? (
//                       <span className="text-gray-500 text-sm sm:text-base">
//                         Loading sites...
//                       </span>
//                     ) : selectedSite ? (
//                       <>
//                         <div className="font-medium text-gray-900 text-sm sm:text-base">
//                           {siteOptions.find(
//                             (opt) => opt.site_id === selectedSite
//                           )?.site_name || "Select a site..."}
//                         </div>
//                         <div className="text-xs text-gray-500">
//                           PO:{" "}
//                           {siteOptions.find(
//                             (opt) => opt.site_id === selectedSite
//                           )?.po_number || ""}
//                         </div>
//                       </>
//                     ) : (
//                       <span className="text-gray-500 text-sm sm:text-base">
//                         Select a site...
//                       </span>
//                     )}
//                   </div>
//                   <ChevronDown className="h-5 w-5 text-gray-400" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center py-12">
//             <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-600"></div>
//           </div>
//         ) : filteredData.length === 0 ? (
//           <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 text-center text-gray-500">
//             No reckoner data found for the selected site.
//           </div>
//         ) : (
//           <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">
//                   <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
//                     Item
//                   </th>
//                   <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
//                     Description
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider" colSpan={3}>
//                     PO Details
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider" colSpan={2}>
//                     Completion
//                   </th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
//                     Action
//                   </th>
//                 </tr>
//                 <tr className="bg-indigo-500">
//                   <th className="px-2 py-2 text-center text-xs font-semibold text-white"></th>
//                   <th className="px-2 py-2 text-center text-xs font-semibold text-white"></th>
//                   <th className="px-2 py-2 text-center text-xs font-semibold text-white">
//                     Qty
//                   </th>
//                   <th className="px-2 py-2 text-center text-xs font-semibold text-white">
//                     Rate
//                   </th>
//                   <th className="px-2 py-2 text-center text-xs font-semibold text-white">
//                     Value
//                   </th>
//                   <th className="px-2 py-2 text-center text-xs font-semibold text-white">
//                     Area
//                   </th>
//                   <th className="px-2 py-2 text-center text-xs font-semibold text-white">
//                     Value
//                   </th>
//                   <th className="px-2 py-2 text-center text-xs font-semibold text-white"></th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredData.map((r) => (
//                   <tr
//                     key={r.rec_id}
//                     className="hover:bg-gray-50 transition-colors"
//                   >
//                     <td className="px-4 py-4 text-sm font-medium text-gray-900">
//                       <div>{r.item_id}</div>
//                       <div className="text-xs text-gray-500">
//                         {r.category_name} / {r.subcategory_name}
//                       </div>
//                     </td>
//                     <td className="px-4 py-4 max-w-xs text-sm text-gray-900">
//                       <div className="flex items-center">
//                         <FileText className="mr-2 h-4 w-4 text-indigo-600" />
//                         <span className="truncate">{r.work_descriptions}</span>
//                       </div>
//                     </td>
//                     <td className="px-2 py-4 text-center text-sm">
//                       {r.po_quantity} {r.uom}
//                     </td>
//                     <td className="px-2 py-4 text-center text-sm">{r.rate}</td>
//                     <td className="px-2 py-4 text-center text-sm">{r.value}</td>
//                     {editingId === r.rec_id ? (
//                       <>
//                         <td className="px-2 py-4 text-center">
//                           <input
//                             type="number"
//                             value={editingData.area_completed}
//                             onChange={(e) =>
//                               handleEditChange("area_completed", e.target.value)
//                             }
//                             className="w-20 p-1 border border-gray-300 rounded text-sm text-center"
//                             placeholder="Area"
//                           />
//                         </td>
//                         <td className="px-2 py-4 text-center text-sm">
//                           {editingData.value || "0.00"}
//                           {/* BookCheck icon logic for edit mode */}
//                           {(() => {
//                             const poVal =
//                               parseFloat(
//                                 (filteredData.find(
//                                   (item) => item.rec_id === editingId
//                                 ) || {}).value
//                               ) || 0;
//                             const compVal =
//                               parseFloat(editingData.value) || 0;
//                             return areFloatsEqual(poVal, compVal) && compVal > 0 ? (
//                               <BookCheck
//                                 className="inline ml-1 mb-1 text-green-600"
//                                 size={18}
//                                 strokeWidth={2}
//                               />
//                             ) : null;
//                           })()}
//                         </td>
//                       </>
//                     ) : (
//                       <>
//                         <td className="px-2 py-4 text-center text-sm">{r.area_completed || "-"}</td>
//                         <td className="px-2 py-4 text-center text-sm">
//                           {r.completion_value || "-"}
//                           {/* BookCheck icon when PO value = completion_value */}
//                           {areFloatsEqual(r.value, r.completion_value) && r.completion_value > 0 && (
//                             <BookCheck
//                               className="inline ml-1 mb-1 text-green-600"
//                               size={18}
//                               strokeWidth={2}
//                             />
//                           )}
//                         </td>
//                       </>
//                     )}
//                     <td className="px-4 py-4 text-right text-sm">
//                       {editingId === r.rec_id ? (
//                         <div className="flex gap-2 justify-end">
//                           <button
//                             onClick={() => handleSubmit(r.rec_id)}
//                             disabled={submitting}
//                             className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
//                           >
//                             <Save className="mr-1 h-4 w-4" /> Save
//                           </button>
//                           <button
//                             onClick={handleCancelEdit}
//                             className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700"
//                           >
//                             <X className="mr-1 h-4 w-4" /> Cancel
//                           </button>
//                         </div>
//                       ) : (
//                         <button
//                           onClick={() => handleEdit(r)}
//                           className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700"
//                         >
//                           <Edit className="mr-1 h-4 w-4" /> Edit
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         closeOnClick
//         pauseOnHover
//         draggable
//       />
//     </div>
//   );
// };

// export default WorkCompletionEntry;








import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Search, Save, X, FileText, BookCheck } from "lucide-react";
import { useParams } from "react-router-dom";

const WorkCompletionEntry = () => {
  const { encodedUserId } = useParams();
  const [reckonerData, setReckonerData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSites, setLoadingSites] = useState(true);
  const [newWorkData, setNewWorkData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [siteOptions, setSiteOptions] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [itemSearch, setItemSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchSites();
  }, []);

  useEffect(() => {
    if (selectedSite) fetchReckonerData();
  }, [selectedSite]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchSites = async () => {
    try {
      setLoadingSites(true);
      const res = await axios.get("http://localhost:5000/reckoner/sites");
      if (res.data.success && Array.isArray(res.data.data)) {
        const options = res.data.data.map((site) => ({
          site_id: site.site_id,
          site_name: site.site_name,
          po_number: site.po_number,
        }));
        setSiteOptions(options);
        if (options.length > 0 && !selectedSite) {
          setSelectedSite(options[0].site_id);
        }
      } else {
        toast.error("Failed to load sites");
      }
    } catch {
      toast.error("Site fetch error");
    } finally {
      setLoadingSites(false);
    }
  };

  const fetchReckonerData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/reckoner/reckoner/");
      const data =
        res.data.success && Array.isArray(res.data.data) ? res.data.data : [];
      const uniqueData = Array.from(
        new Map(data.map((item) => [item.rec_id, item])).values()
      ).filter((item) => item.site_id === selectedSite);
      setReckonerData(uniqueData);
      setFilteredData(uniqueData);
    } catch {
      toast.error("Failed to fetch reckoner data");
    } finally {
      setLoading(false);
    }
  };

  const handleSiteSelect = (siteId) => {
    setSelectedSite(siteId);
    setDropdownOpen(false);
    setSearchQuery("");
  };

  const handleSearchChange = (e) =>
    setSearchQuery(e.target.value.toLowerCase());

  const handleItemSearchChange = (e) => {
    setItemSearch(e.target.value.toLowerCase());
    setFilteredData(
      reckonerData.filter((item) =>
        item.item_id.toString().toLowerCase().includes(e.target.value)
      )
    );
  };

  const handleNewWorkChange = (rec_id, value) => {
    setNewWorkData((prev) => ({
      ...prev,
      [rec_id]: value
    }));
  };

  const handleSubmit = async (rec_id) => {
    try {
      setSubmitting(true);
      if (!encodedUserId) {
        toast.error("User ID is missing from URL");
        return;
      }
      let user_id;
      try {
        user_id = atob(encodedUserId);
        if (!/^\d+$/.test(user_id)) throw new Error();
      } catch {
        toast.error("Invalid User ID in URL");
        return;
      }

      const record = filteredData.find((item) => item.rec_id === rec_id);
      if (!record) {
        toast.error("Record not found");
        return;
      }

      const alreadyCompleted = parseFloat(record.area_completed) || 0;
      const addition = parseFloat(newWorkData[rec_id]) || 0;
      const total = alreadyCompleted + addition;

      if (addition < 0) {
        toast.error("Area cannot be negative");
        return;
      }
      if (total > parseFloat(record.po_quantity)) {
        toast.error(`Completed area cannot exceed PO qty (${record.po_quantity})`);
        return;
      }

      const rate = parseFloat(record.rate) || 0;
      const value = parseFloat((total * rate).toFixed(2));

      const payload = {
        rec_id,
        area_completed: total,
        rate,
        value,
        created_by: parseInt(user_id, 10),
      };

      await axios.post(
        "http://localhost:5000/site-incharge/completion-status",
        payload
      );

      toast.success("Updated successfully");
      await fetchReckonerData();
      setNewWorkData((prev) => ({ ...prev, [rec_id]: "" }));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update");
    } finally {
      setSubmitting(false);
    }
  };

  const isCompleted = (r) =>
    parseFloat(r.completion_value) > 0 &&
    parseFloat(r.completion_value).toFixed(2) ===
    parseFloat(r.value).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-4">
          Work Completion Entry
        </h1>

        {/* Site Selection */}
        <div ref={dropdownRef} className="mb-4 text-lg">
          {dropdownOpen ? (
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="flex items-center px-3 py-2 border-b">
                <Search size={20} className="text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search site/PO..."
                  className="flex-1 px-2 py-1 text-lg bg-transparent outline-none"
                />
                <X
                  onClick={() => setDropdownOpen(false)}
                  size={20}
                  className="text-gray-500 cursor-pointer"
                />
              </div>
              <div className="max-h-56 overflow-y-auto text-lg">
                {loadingSites ? (
                  <div className="p-3 text-gray-500">Loading...</div>
                ) : (
                  siteOptions
                    .filter(
                      (o) =>
                        o.site_name.toLowerCase().includes(searchQuery) ||
                        o.po_number.toLowerCase().includes(searchQuery)
                    )
                    .map((opt) => (
                      <div
                        key={opt.site_id}
                        onClick={() => handleSiteSelect(opt.site_id)}
                        className={`p-3 cursor-pointer hover:bg-gray-100 ${
                          selectedSite === opt.site_id ? "bg-gray-200" : ""
                        }`}
                      >
                        <div className="font-semibold">{opt.site_name}</div>
                        <div className="text-sm text-gray-500">
                          PO: {opt.po_number}
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={() => setDropdownOpen(true)}
              className="w-full flex justify-between px-4 py-3 bg-white border rounded-lg shadow-sm text-lg"
            >
              <span>
                {selectedSite
                  ? `${siteOptions.find(
                    (o) => o.site_id === selectedSite
                  )?.site_name} (PO: ${
                    siteOptions.find((o) => o.site_id === selectedSite)
                      ?.po_number
                  })`
                  : "Select a site"}
              </span>
              <Search size={20} className="text-gray-500" />
            </button>
          )}
        </div>

        {/* Search by Item No */}
        <div className="flex items-center bg-white border rounded-lg px-3 py-2 mb-4 text-lg">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by Item No..."
            value={itemSearch}
            onChange={handleItemSearchChange}
            className="flex-1 ml-2 outline-none text-lg"
          />
        </div>

        {/* Cards */}
        {loading ? (
          <div className="text-center py-6 text-lg text-gray-500">Loading...</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-6 text-lg text-gray-500">No records found</div>
        ) : (
          filteredData.map((r) => {
            const alreadyCompleted = parseFloat(r.area_completed) || 0;
            const addition = parseFloat(newWorkData[r.rec_id]) || 0;
            const totalCompleted = alreadyCompleted + addition;

            return (
              <div
                key={r.rec_id}
                className="bg-white border rounded-lg p-4 mb-4 text-lg"
              >
                <div className="font-bold text-2xl text-gray-800 mb-1">
                  Item: {r.item_id} ({r.category_name}/{r.subcategory_name})
                </div>
                <div className="flex items-center mb-2 text-2xl">
                  <FileText size={18} className="text-indigo-500 mr-2" />
                  {r.work_descriptions}
                </div>
                <div className="text-gray-700 mb-1 text-2xl">
                  Qty: {r.po_quantity} {r.uom}
                </div>
                <div className="text-gray-700 mb-1 text-2xl">Rate: {r.rate}</div>
                <div className="text-gray-700 mb-3 text-2xl">PO Value: {r.value}</div>

                {/* Progress */}
                <div className="mb-3">
                  <span className="font-semibold">Progress So Far:</span> Area{" "}
                  <b>{alreadyCompleted}</b> | Value{" "}
                  <b>{r.completion_value || 0}</b>
                </div>

                {isCompleted(r) ? (
                  <div className="p-2 border rounded-lg text-green-700 flex items-center">
                    Completed
                    <BookCheck size={18} className="ml-2 text-green-600" />
                  </div>
                ) : (
                  <div className="flex items-center justify-between space-x-3">
                    <input
                      type="number"
                      value={newWorkData[r.rec_id] || ""}
                      onChange={(e) =>
                        handleNewWorkChange(r.rec_id, e.target.value)
                      }
                      placeholder="New work area"
                      className="flex-1 p-2 border rounded-lg text-lg"
                    />
                    <div className="text-base text-blue-700 whitespace-nowrap">
                      Total: <b>{totalCompleted}</b>
                    </div>
                    <button
                      onClick={() => handleSubmit(r.rec_id)}
                      disabled={submitting}
                      className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      <Save size={18} />
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
};

export default WorkCompletionEntry;
