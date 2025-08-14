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
      const res = await axios.get("http://103.118.158.33/api/reckoner/sites");
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
      const res = await axios.get("http://103.118.158.33/api/reckoner/reckoner/");
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
        "http://103.118.158.33/api/site-incharge/completion-status",
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
                <div className="text-gray-700 mb-3 text-2xl">Value: {r.value}</div>

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