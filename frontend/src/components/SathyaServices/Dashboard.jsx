// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Select from "react-select";
// import { 
//   Chart, 
//   CategoryScale, 
//   LinearScale, 
//   BarElement, 
//   ArcElement, 
//   Tooltip, 
//   Legend,
//   PointElement, 
//   LineElement,
//   PolarAreaController,
//   RadialLinearScale
// } from "chart.js";
// import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";

// Chart.register(
//   CategoryScale, 
//   LinearScale, 
//   BarElement, 
//   ArcElement, 
//   Tooltip, 
//   Legend, 
//   PointElement, 
//   LineElement,
//   PolarAreaController,
//   RadialLinearScale
// );

// // Smaller pastel gradient cards
// const cardColorStyles = [
//   "bg-gradient-to-br from-pink-500 to-rose-200 text-white shadow-lg",
//   "bg-gradient-to-br from-cyan-500 to-sky-200 text-white shadow-lg",
//   "bg-gradient-to-br from-emerald-500 to-teal-200 text-white shadow-lg",
//   "bg-gradient-to-br from-amber-500 to-yellow-200 text-white shadow-lg",
//   "bg-gradient-to-br from-purple-500 to-indigo-200 text-white shadow-lg",
// ];

// const cardCompletionStyle = "bg-gradient-to-br from-blue-200 to-indigo-100 text-indigo-900 shadow-lg";
// const card100Style = "bg-gradient-to-r from-green-500 to-emerald-300 text-white shadow-lg";

// const Dashboard = () => {
//   // --- State ---
//   const [companies, setCompanies] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [sites, setSites] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [selectedSite, setSelectedSite] = useState(null);
//   const [completionEntries, setCompletionEntries] = useState([]);
//   const [poTotals, setPoTotals] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState({
//     companies: false,
//     projects: false,
//     sites: false,
//     completionEntries: false,
//     poTotals: false,
//   });
//   const [chartType, setChartType] = useState({ value: "po_quantity", label: "PO Quantity" });
//   const [barChartType, setBarChartType] = useState({ value: "bar", label: "Bar" });
//   const [donutChartType, setDonutChartType] = useState({ value: "doughnut", label: "Doughnut" });
//   const [siteDetails, setSiteDetails] = useState({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });

//   // --- Effects/FETCHING ---
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         setLoading((p) => ({ ...p, companies: true }));
//         const response = await axios.get("http://localhost:5000/admin/companies");
//         const companiesData = response.data.data || [];
//         setCompanies(companiesData);
//         if (companiesData.length > 0) {
//           const lastCompany = companiesData[companiesData.length - 1];
//           setSelectedCompany({ value: lastCompany.company_id, label: lastCompany.company_name });
//         }
//       } catch (err) {
//         console.error("Failed to load companies", err);
//       } finally {
//         setLoading((p) => ({ ...p, companies: false }));
//       }
//     };
//     fetchCompanies();
//   }, []);

//   useEffect(() => {
//     if (selectedCompany) {
//       const fetchProjects = async () => {
//         try {
//           setLoading((p) => ({ ...p, projects: true }));
//           const response = await axios.get(`http://localhost:5000/admin/projects/${selectedCompany.value}`);
//           const projectsData = response.data.data || [];
//           setProjects(projectsData);
//           if (projectsData.length > 0) {
//             const lastProject = projectsData[projectsData.length - 1];
//             setSelectedProject({ value: lastProject.pd_id, label: lastProject.project_name });
//           }
//         } catch (err) {
//           console.error("Failed to load projects", err);
//         } finally {
//           setLoading((p) => ({ ...p, projects: false }));
//         }
//       };
//       fetchProjects();
//     } else {
//       setProjects([]);
//       setSelectedProject(null);
//       setSites([]);
//       setSelectedSite(null);
//       setCompletionEntries([]);
//       setPoTotals(null);
//       setSelectedCategory(null);
//       setSiteDetails({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });
//     }
//   }, [selectedCompany]);

//   useEffect(() => {
//     if (selectedProject) {
//       const fetchSites = async () => {
//         try {
//           setLoading((p) => ({ ...p, sites: true }));
//           const response = await axios.get(`http://localhost:5000/admin/sites/${selectedProject.value}`);
//           const sitesData = response.data.data || [];
//           setSites(sitesData);
//           if (sitesData.length > 0) {
//             const lastSite = sitesData[sitesData.length - 1];
//             setSelectedSite({ value: lastSite.site_id, label: `${lastSite.site_name} (PO: ${lastSite.po_number})` });
//           }
//         } catch (err) {
//           console.error("Failed to load sites", err);
//         } finally {
//           setLoading((p) => ({ ...p, sites: false }));
//         }
//       };
//       fetchSites();
//     } else {
//       setSites([]);
//       setSelectedSite(null);
//       setCompletionEntries([]);
//       setPoTotals(null);
//       setSelectedCategory(null);
//       setSiteDetails({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });
//     }
//   }, [selectedProject]);

//   useEffect(() => {
//     if (selectedSite) {
//       const fetchData = async () => {
//         try {
//           setLoading((p) => ({ ...p, completionEntries: true, poTotals: true }));
//           const [completionResponse, poTotalsResponse] = await Promise.all([
//             axios.get(`http://localhost:5000/admin/completion-entries-by-site/${selectedSite.value}`),
//             axios.get(`http://localhost:5000/admin/po-reckoner-totals/${selectedSite.value}`),
//           ]);
//           setCompletionEntries(completionResponse.data.data || []);
//           const poData = poTotalsResponse.data.data || null;
//           setPoTotals(poData);
//           if (completionResponse.data.data && completionResponse.data.data.length > 0) {
//             const lastCategory = completionResponse.data.data[completionResponse.data.data.length - 1].category_name;
//             setSelectedCategory({ value: lastCategory, label: lastCategory });
//           } else {
//             setSelectedCategory(null);
//           }
//           // Set site details
//           const currentSite = sites.find(s => s.site_id === selectedSite.value);
//           const totalArea = poData ? poData.total_po_quantity : 0;
//           setSiteDetails({
//             start_date: currentSite ? currentSite.start_date : null,
//             location_name: currentSite ? currentSite.location_name : null,
//             total_area: totalArea,
//             current_phase: 'In Progress' // Will be updated in calculateProgressData effect
//           });
//         } catch (err) {
//           console.error("Failed to load data", err);
//           setSiteDetails({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });
//         } finally {
//           setLoading((p) => ({ ...p, completionEntries: false, poTotals: false }));
//         }
//       };
//       fetchData();
//     } else {
//       setCompletionEntries([]);
//       setPoTotals(null);
//       setSelectedCategory(null);
//       setSiteDetails({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });
//     }
//   }, [selectedSite, sites]);

//   // Update current_phase when progressData changes
//   useEffect(() => {
//     const progress = calculateProgressData();
//     setSiteDetails(prev => ({
//       ...prev,
//       current_phase: Number(progress.percentage) === 100 ? 'Completed' : 'In Progress'
//     }));
//   }, [completionEntries, poTotals]);

//   // --- DropDown Options ---
//   const companyOptions = companies.map((company) => ({
//     value: company.company_id,
//     label: company.company_name,
//   }));
//   const projectOptions = projects.map((project) => ({
//     value: project.pd_id,
//     label: project.project_name,
//   }));
//   const siteOptions = sites.map((site) => ({
//     value: site.site_id,
//     label: `${site.site_name} (PO: ${site.po_number})`,
//   }));

//   const categoryOptions = completionEntries
//     .map((category) => ({
//       value: category.category_name,
//       label: category.category_name,
//     }))
//     .filter((option, index, self) => index === self.findIndex((t) => t.value === option.value));

//   const chartTypeOptions = [
//     { value: "po_quantity", label: "PO Quantity" },
//     { value: "value", label: "Value" },
//   ];

//   const graphTypeOptions = [
//     { value: "bar", label: "Bar" },
//     { value: "line", label: "Line" },
//     { value: "pie", label: "Pie" },
//     { value: "doughnut", label: "Doughnut" },
//     { value: "polarArea", label: "Polar Area" },
//   ];

//   // --- Totals & Helpers ---
//   const getSubcategoryTotals = (subcategoryName) => {
//     let totalValueAdded = 0;
//     let totalPoQuantity = 0;
//     completionEntries.forEach((category) => {
//       if (category.category_name === selectedCategory?.value) {
//         const subcategory = category.subcategories.find((sc) => sc.subcategory_name === subcategoryName);
//         if (subcategory) {
//           subcategory.entries_by_date.forEach((dateEntry) => {
//             dateEntry.entries.forEach((entry) => {
//               totalValueAdded += entry.value_added || 0;
//             });
//           });
//         }
//       }
//     });
//     if (poTotals && poTotals.subcategory_totals) {
//       const categoryData = poTotals.subcategory_totals.find((cat) => cat.category_name === selectedCategory?.value);
//       if (categoryData) {
//         const subData = categoryData.subcategories.find((sc) => sc.subcategory_name === subcategoryName);
//         if (subData) {
//           totalPoQuantity = subData.po_quantity || 0;
//         }
//       }
//     }
//     return { totalValueAdded, totalPoQuantity };
//   };

//   // Project Completion percent based on po_quantity and area_added
//   const calculateProgressData = () => {
//     if (!poTotals || !completionEntries || completionEntries.length === 0)
//       return { percentage: 0, totalCompletedArea: 0, totalPoQuantity: 0 };
//     const totalCompletedArea = completionEntries
//       .flatMap((cat) => cat.subcategories)
//       .flatMap((subcat) => subcat.entries_by_date)
//       .flatMap((dateEntry) => dateEntry.entries)
//       .reduce((sum, entry) => sum + (entry.area_added || 0), 0);
//     const totalPoQuantity = poTotals.total_po_quantity || 0;
//     const percentage =
//       totalPoQuantity === 0
//         ? 0
//         : (totalCompletedArea / totalPoQuantity) * 100;
//     return {
//       percentage: Math.min(percentage, 100).toFixed(2),
//       totalCompletedArea: totalCompletedArea.toFixed(2),
//       totalPoQuantity: totalPoQuantity.toFixed(2),
//     };
//   };
//   const progressData = calculateProgressData();

//   // ---- Chart Data Preparation ----
//   const subcategories =
//     completionEntries.find((cat) => cat.category_name === selectedCategory?.value)?.subcategories || [];
//   const barLabels = subcategories.map((sub) => sub.subcategory_name);
//   const completedData = subcategories.map((sub) => {
//     let completedArea = 0;
//     let completedValue = 0;
//     sub.entries_by_date.forEach((dateEntry) => {
//       dateEntry.entries.forEach((e) => {
//         completedArea += e.area_added || 0;
//         completedValue += e.value_added || 0;
//       });
//     });
//     return chartType.value === "po_quantity" ? completedArea : completedValue;
//   });
//   const targetData = poTotals && poTotals.subcategory_totals
//     ? poTotals.subcategory_totals
//         .find((cat) => cat.category_name === selectedCategory?.value)
//         ?.subcategories.map((sc) => chartType.value === "po_quantity" ? sc.po_quantity : sc.value) || []
//     : [];

//   const barChartData = {
//     labels: barLabels,
//     datasets: [
//       {
//         label: chartType.value === "po_quantity" ? "Completed Quantity (sqm)" : "Completed Value (₹)",
//         data: completedData,
//         backgroundColor: ["#fb7185", "#38bdf8", "#fde047", "#2dd4bf", "#c4b5fd"],
//         borderColor: "#e5e7eb",
//         borderWidth: 1,
//       },
//       {
//         label: chartType.value === "po_quantity" ? "Planned Quantity (sqm)" : "Planned Value (₹)",
//         data: targetData,
//         backgroundColor: "#e5e7eb",
//         borderColor: "#d1d5db",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieChartData = {
//     labels: subcategories.map((sub) => 
//       `${sub.subcategory_name} (PO: ${poTotals?.subcategory_totals?.find(cat => cat.category_name === selectedCategory?.value)?.subcategories.find(sc => sc.subcategory_name === sub.subcategory_name)?.po_quantity || 0}, Val: ${poTotals?.subcategory_totals?.find(cat => cat.category_name === selectedCategory?.value)?.subcategories.find(sc => sc.subcategory_name === sub.subcategory_name)?.value || 0})`
//     ),
//     datasets: [
//       {
//         label: chartType.value === "po_quantity" ? "Completed Quantity (sqm)" : "Completed Value (₹)",
//         data: completedData,
//         backgroundColor: ["#fb7185", "#38bdf8", "#fde047", "#2dd4bf", "#c4b5fd"],
//         borderColor: "#ffffff",
//         borderWidth: 2,
//       },
//     ],
//   };

//   // Line Chart (Daily progress for the selected category)
//   const prepareLineChartData = () => {
//     if (!selectedCategory || !completionEntries.length) return null;
    
//     const allDates = new Set();
//     completionEntries.forEach(category => {
//       if (category.category_name === selectedCategory.value) {
//         category.subcategories.forEach(subcategory => {
//           subcategory.entries_by_date.forEach(dateEntry => {
//             allDates.add(dateEntry.entry_date);
//           });
//         });
//       }
//     });
    
//     const sortedDates = Array.from(allDates).sort();
//     const datasets = [];
//     const colors = ["#fb7185", "#38bdf8", "#fde047", "#2dd4bf", "#c4b5fd"];
    
//     completionEntries.forEach(category => {
//       if (category.category_name === selectedCategory.value) {
//         category.subcategories.forEach((subcategory, index) => {
//           const cumulativeData = [];
//           let cumulativeTotal = 0;
          
//           sortedDates.forEach(date => {
//             const dateEntry = subcategory.entries_by_date.find(d => d.entry_date === date);
//             if (dateEntry) {
//               cumulativeTotal += dateEntry.entries.reduce((sum, entry) => sum + (entry.area_added || 0), 0);
//             }
//             cumulativeData.push(cumulativeTotal);
//           });
          
//           datasets.push({
//             label: subcategory.subcategory_name,
//             data: cumulativeData,
//             borderColor: colors[index % colors.length],
//             backgroundColor: colors[index % colors.length] + "20",
//             tension: 0.3,
//             fill: false,
//           });
//         });
//       }
//     });
    
//     return {
//       labels: sortedDates,
//       datasets: datasets
//     };
//   };

//   const lineChartData = prepareLineChartData();

//   // Render Chart based on selected type
//   const renderChart = (chartType, data, options) => {
//     switch (chartType) {
//       case "bar":
//         return <Bar data={data} options={options} />;
//       case "line":
//         return <Line data={data} options={options} />;
//       case "pie":
//         return <Pie data={data} options={options} />;
//       case "doughnut":
//         return <Doughnut data={data} options={options} />;
//       case "polarArea":
//         return <PolarArea data={data} options={options} />;
//       default:
//         return <Bar data={data} options={options} />;
//     }
//   };

//   // Format date
//   const formatDate = (dateStr) => {
//     if (!dateStr) return 'N/A';
//     const date = new Date(dateStr);
//     return date.toLocaleDateString();
//   };

//   // ---- UI Rendering ----
//   return (
//     <div className="p-4 sm:p-6 bg-slate-50 min-h-screen">
//       {/* --- Filter Controls --- */}
//       <div className="flex flex-col items-center mb-6">
//         <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
//           <div className="w-full sm:w-[200px]">
//             <Select
//               options={companyOptions}
//               value={selectedCompany}
//               onChange={setSelectedCompany}
//               placeholder="Company"
//               isLoading={loading.companies}
//               isClearable
//               className="text-sm"
//               styles={{ control: (base) => ({ ...base, minHeight: "36px", fontSize: "1rem" }) }}
//             />
//           </div>
//           <div className="w-full sm:w-[200px]">
//             <Select
//               options={projectOptions}
//               value={selectedProject}
//               onChange={setSelectedProject}
//               placeholder="Project"
//               isDisabled={!selectedCompany}
//               isClearable
//               className="text-sm"
//               styles={{ control: (base) => ({ ...base, minHeight: "36px", fontSize: "1rem" }) }}
//             />
//           </div>
//           <div className="w-full sm:w-[250px]">
//             <Select
//               options={siteOptions}
//               value={selectedSite}
//               onChange={setSelectedSite}
//               placeholder="Site"
//               isLoading={loading.sites}
//               isDisabled={!selectedProject}
//               isClearable
//               className="text-sm"
//               styles={{ control: (base) => ({ ...base, minHeight: "36px", fontSize: "1rem" }) }}
//             />
//           </div>
//           <div className="w-full sm:w-[200px]">
//             <Select
//               options={categoryOptions}
//               value={selectedCategory}
//               onChange={setSelectedCategory}
//               placeholder="Category"
//               isClearable
//               className="text-sm"
//               styles={{ control: (base) => ({ ...base, minHeight: "36px", fontSize: "1rem" }) }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* --- Site Details Section --- */}
//       <div className="flex flex-col items-center mb-8">
//         {selectedSite ? (
//           <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-4 gap-4">
//             <div className="text-center">
//               <h4 className="font-semibold text-gray-700">Start Date</h4>
//               <p className="text-gray-900">{formatDate(siteDetails.start_date) || 'No data found'}</p>
//             </div>
//             <div className="text-center">
//               <h4 className="font-semibold text-gray-700">Current Phase</h4>
//               <p className="text-gray-900">{siteDetails.current_phase || 'No data found'}</p>
//             </div>
//             <div className="text-center">
//               <h4 className="font-semibold text-gray-700">Location</h4>
//               <p className="text-gray-900">{siteDetails.location_name || 'No data found'}</p>
//             </div>
//             <div className="text-center">
//               <h4 className="font-semibold text-gray-700">Total Area (sqm)</h4>
//               <p className="text-gray-900">{siteDetails.total_area.toLocaleString() || 'No data found'}</p>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center text-gray-400 py-4 text-base w-full max-w-4xl">
//             Please select a site to view details.
//           </div>
//         )}
//       </div>

//       {/* --- Cards Section --- */}
//       {(loading.completionEntries || loading.poTotals) ? (
//         <div className="text-center text-gray-500 py-10">Loading...</div>
//       ) : (
//         selectedSite && selectedCategory && poTotals && completionEntries.length > 0 ? (
//           <>
//             <div className="flex flex-wrap items-stretch gap-6 justify-center mb-8 pt-3">
//               {/* Subcategory Cards */}
//               {subcategories.map((subcategory, i) => {
//                 const { totalValueAdded, totalPoQuantity } = getSubcategoryTotals(subcategory.subcategory_name);
//                 let completedArea = 0;
//                 let completedValue = 0;
//                 subcategory.entries_by_date.forEach((dateEntry) => {
//                   dateEntry.entries.forEach((e) => {
//                     completedArea += e.area_added || 0;
//                     completedValue += e.value_added || 0;
//                   });
//                 });
//                 const totalValue = poTotals.subcategory_totals
//                   .find((cat) => cat.category_name === selectedCategory.value)
//                   ?.subcategories.find((sc) => sc.subcategory_name === subcategory.subcategory_name)?.value || 0;
//                 return (
//                   <div
//                     key={subcategory.subcategory_name}
//                     className={`bg-gradient-to-br from-gray-50 to-gray-100 w-full sm:w-[250px] rounded-xl p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 shadow-lg`}
//                   >
//                     <h3 className="text-lg font-bold text-gray-800 mb-3">{subcategory.subcategory_name}</h3>
//                     <div className="bg-gray-200 bg-opacity-20 p-3 rounded-lg w-full">
//                       <div className="flex justify-between text-sm text-gray-800">
//                         <span>Completed Area (sqm):</span>
//                         <span className="font-semibold">{completedArea.toLocaleString()}</span>
//                       </div>
//                       <div className="flex justify-between text-sm text-gray-800 mt-1">
//                         <span>Total (sqm):</span>
//                         <span className="font-semibold">{totalPoQuantity.toLocaleString()}</span>
//                       </div>
//                       <div className="flex justify-between text-sm text-gray-800 mt-2">
//                         <span>Completed Value:</span>
//                         <span className="font-semibold">₹{completedValue.toLocaleString()}</span>
//                       </div>
//                       <div className="flex justify-between text-sm text-gray-800 mt-1">
//                         <span>Total Value:</span>
//                         <span className="font-semibold">₹{totalValue.toLocaleString()}</span>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//               {/* Project Completion Card */}
//               <div
//                 className={`${Number(progressData.percentage) === 100 ? 'bg-gradient-to-r from-cyan-500 to-teal-300 text-gray-800 shadow-lg' : 'bg-gradient-to-br from-blue-200 to-cyan-100 text-gray-800 shadow-lg'} w-full sm:w-[250px] rounded-xl p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105`}
//                 style={{ minHeight: "150px" }}
//               >
//                 <h3 className="text-lg font-bold text-gray-800 mb-2">Project Completion</h3>
//                 <div className="flex-1 flex items-center justify-center w-full">
//                   <span className="text-5xl font-extrabold text-gray-800">{progressData.percentage}%</span>
//                 </div>
//               </div>
//             </div>

//             {/* --- Charts Area (below cards) --- */}
//             <div className="flex flex-col gap-6 items-stretch justify-center pt-2">
//               {/* First row: Bar and Doughnut charts */}
//               <div className="flex flex-col sm:flex-row gap-6">
//                 {/* Chart 1 (Bar/Line/Pie/Doughnut/PolarArea) */}
//                 <div className="bg-white rounded-lg shadow-lg p-4 flex-1 min-w-[340px]">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="font-semibold text-lg text-gray-800">
//                       {chartType.value === "po_quantity" ? "Area" : "Value"} Completion Overview
//                     </h3>
//                     <div className="flex gap-2">
//                       <div className="w-[140px]">
//                         <Select
//                           options={chartTypeOptions}
//                           value={chartType}
//                           onChange={setChartType}
//                           placeholder="Data Type"
//                           isClearable={false}
//                           className="text-xs"
//                           styles={{ control: (base) => ({ ...base, minHeight: "32px", fontSize: "0.90rem" }) }}
//                         />
//                       </div>
//                       <div className="w-[140px]">
//                         <Select
//                           options={graphTypeOptions}
//                           value={barChartType}
//                           onChange={setBarChartType}
//                           placeholder="Chart Type"
//                           isClearable={false}
//                           className="text-xs"
//                           styles={{ control: (base) => ({ ...base, minHeight: "32px", fontSize: "0.90rem" }) }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="w-full h-[320px]">
//                     {renderChart(barChartType.value, barChartData, {
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       scales: barChartType.value === "bar" || barChartType.value === "line" ? {
//                         y: {
//                           beginAtZero: true,
//                           title: { display: true, text: chartType.value === "po_quantity" ? "Area (sqm)" : "Value (₹)" },
//                         },
//                         x: {
//                           title: { display: true, text: "Stage" },
//                         },
//                       } : {},
//                       plugins: {
//                         legend: {
//                           position: "bottom",
//                           labels: { font: { size: 12 } },
//                         },
//                         title: { display: false },
//                       },
//                     })}
//                   </div>
//                 </div>
//                 {/* Chart 2 (Pie/Doughnut/PolarArea) */}
//                 <div className="bg-white rounded-lg shadow-lg p-4 flex-1 min-w-[340px]">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="font-semibold text-lg text-gray-800">
//                       {chartType.value === "po_quantity" ? "Area" : "Value"} Progress Comparison
//                     </h3>
//                     <div className="w-[140px]">
//                       <Select
//                         options={graphTypeOptions}
//                         value={donutChartType}
//                         onChange={setDonutChartType}
//                         placeholder="Chart Type"
//                         isClearable={false}
//                         className="text-xs"
//                         styles={{ control: (base) => ({ ...base, minHeight: "32px", fontSize: "0.90rem" }) }}
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full h-[320px]">
//                     {renderChart(donutChartType.value, pieChartData, {
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       plugins: {
//                         legend: {
//                           position: "bottom",
//                           labels: { font: { size: 12 } },
//                         },
//                         title: { display: false },
//                       },
//                     })}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Second row: Line Chart */}
//               {lineChartData && (
//                 <div className="bg-white rounded-lg shadow-lg p-4">
//                   <h3 className="font-semibold text-center mb-2 text-lg text-gray-800">
//                     Daily Progress Trend
//                   </h3>
//                   <div className="w-full h-[400px]">
//                     <Line
//                       data={lineChartData}
//                       options={{
//                         responsive: true,
//                         maintainAspectRatio: false,
//                         scales: {
//                           y: {
//                             beginAtZero: true,
//                             title: { display: true, text: "Cumulative Area (sqm)" },
//                           },
//                           x: {
//                             title: { display: true, text: "Date" },
//                           },
//                         },
//                         plugins: {
//                           legend: {
//                             position: "bottom",
//                             labels: { font: { size: 12 } },
//                           },
//                           title: { display: false },
//                         },
//                       }}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </>
//         ) : (
//           <div className="text-center text-gray-400 py-12 text-base">
//             Please select all options to view dashboard.
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default Dashboard;


















import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { 
  Chart, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  ArcElement, 
  Tooltip, 
  Legend,
  PointElement, 
  LineElement,
  PolarAreaController,
  RadialLinearScale
} from "chart.js";
import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";

Chart.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  ArcElement, 
  Tooltip, 
  Legend, 
  PointElement, 
  LineElement,
  PolarAreaController,
  RadialLinearScale
);

// Smaller pastel gradient cards
const cardColorStyles = [
  "bg-gradient-to-br from-pink-500 to-rose-200 text-white shadow-lg",
  "bg-gradient-to-br from-cyan-500 to-sky-200 text-white shadow-lg",
  "bg-gradient-to-br from-emerald-500 to-teal-200 text-white shadow-lg",
  "bg-gradient-to-br from-amber-500 to-yellow-200 text-white shadow-lg",
  "bg-gradient-to-br from-purple-500 to-indigo-200 text-white shadow-lg",
];

const cardCompletionStyle = "bg-gradient-to-br from-blue-200 to-indigo-100 text-indigo-900 shadow-lg";
const card100Style = "bg-gradient-to-r from-green-500 to-emerald-300 text-white shadow-lg";

const Dashboard = () => {
  // --- State ---
  const [companies, setCompanies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [sites, setSites] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [completionEntries, setCompletionEntries] = useState([]);
  const [poTotals, setPoTotals] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState({
    companies: false,
    projects: false,
    sites: false,
    completionEntries: false,
    poTotals: false,
  });
  const [chartType, setChartType] = useState({ value: "po_quantity", label: "PO Quantity" });
  const [barChartType, setBarChartType] = useState({ value: "bar", label: "Bar" });
  const [donutChartType, setDonutChartType] = useState({ value: "doughnut", label: "Doughnut" });
  const [siteDetails, setSiteDetails] = useState({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });

  // --- Effects/FETCHING ---
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading((p) => ({ ...p, companies: true }));
        const response = await axios.get("http://localhost:5000/admin/companies");
        const companiesData = response.data.data || [];
        setCompanies(companiesData);
        if (companiesData.length > 0) {
          const lastCompany = companiesData[companiesData.length - 1];
          setSelectedCompany({ value: lastCompany.company_id, label: lastCompany.company_name });
        }
      } catch (err) {
        console.error("Failed to load companies", err);
      } finally {
        setLoading((p) => ({ ...p, companies: false }));
      }
    };
    fetchCompanies();
  }, []);

  useEffect(() => {
    if (selectedCompany) {
      const fetchProjects = async () => {
        try {
          setLoading((p) => ({ ...p, projects: true }));
          const response = await axios.get(`http://localhost:5000/admin/projects/${selectedCompany.value}`);
          const projectsData = response.data.data || [];
          setProjects(projectsData);
          if (projectsData.length > 0) {
            const lastProject = projectsData[projectsData.length - 1];
            setSelectedProject({ value: lastProject.pd_id, label: lastProject.project_name });
          }
        } catch (err) {
          console.error("Failed to load projects", err);
        } finally {
          setLoading((p) => ({ ...p, projects: false }));
        }
      };
      fetchProjects();
    } else {
      setProjects([]);
      setSelectedProject(null);
      setSites([]);
      setSelectedSite(null);
      setCompletionEntries([]);
      setPoTotals(null);
      setSelectedCategory(null);
      setSiteDetails({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });
    }
  }, [selectedCompany]);

  useEffect(() => {
    if (selectedProject) {
      const fetchSites = async () => {
        try {
          setLoading((p) => ({ ...p, sites: true }));
          const response = await axios.get(`http://localhost:5000/admin/sites/${selectedProject.value}`);
          const sitesData = response.data.data || [];
          setSites(sitesData);
          if (sitesData.length > 0) {
            const lastSite = sitesData[sitesData.length - 1];
            setSelectedSite({ value: lastSite.site_id, label: `${lastSite.site_name} (PO: ${lastSite.po_number})` });
          }
        } catch (err) {
          console.error("Failed to load sites", err);
        } finally {
          setLoading((p) => ({ ...p, sites: false }));
        }
      };
      fetchSites();
    } else {
      setSites([]);
      setSelectedSite(null);
      setCompletionEntries([]);
      setPoTotals(null);
      setSelectedCategory(null);
      setSiteDetails({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });
    }
  }, [selectedProject]);

  useEffect(() => {
    if (selectedSite) {
      const fetchData = async () => {
        try {
          setLoading((p) => ({ ...p, completionEntries: true, poTotals: true }));
          const [completionResponse, poTotalsResponse] = await Promise.all([
            axios.get(`http://localhost:5000/admin/completion-entries-by-site/${selectedSite.value}`),
            axios.get(`http://localhost:5000/admin/po-reckoner-totals/${selectedSite.value}`),
          ]);
          setCompletionEntries(completionResponse.data.data || []);
          const poData = poTotalsResponse.data.data || null;
          setPoTotals(poData);
          if (completionResponse.data.data && completionResponse.data.data.length > 0) {
            const lastCategory = completionResponse.data.data[completionResponse.data.data.length - 1].category_name;
            setSelectedCategory({ value: lastCategory, label: lastCategory });
          } else {
            setSelectedCategory(null);
          }
          // Set site details
          const currentSite = sites.find(s => s.site_id === selectedSite.value);
          const totalArea = poData ? poData.total_po_quantity : 0;
          setSiteDetails({
            start_date: currentSite ? currentSite.start_date : null,
            location_name: currentSite ? currentSite.location_name : null,
            total_area: totalArea,
            current_phase: 'In Progress' // Will be updated in calculateProgressData effect
          });
        } catch (err) {
          console.error("Failed to load data", err);
          setSiteDetails({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });
        } finally {
          setLoading((p) => ({ ...p, completionEntries: false, poTotals: false }));
        }
      };
      fetchData();
    } else {
      setCompletionEntries([]);
      setPoTotals(null);
      setSelectedCategory(null);
      setSiteDetails({ start_date: null, location_name: null, total_area: 0, current_phase: 'In Progress' });
    }
  }, [selectedSite, sites]);

  // Update current_phase when progressData changes
  useEffect(() => {
    const progress = calculateProgressData();
    setSiteDetails(prev => ({
      ...prev,
      current_phase: Number(progress.percentage) === 100 ? 'Completed' : 'In Progress'
    }));
  }, [completionEntries, poTotals]);

  // --- DropDown Options ---
  const companyOptions = companies.map((company) => ({
    value: company.company_id,
    label: company.company_name,
  }));
  const projectOptions = projects.map((project) => ({
    value: project.pd_id,
    label: project.project_name,
  }));
  const siteOptions = sites.map((site) => ({
    value: site.site_id,
    label: `${site.site_name} (PO: ${site.po_number})`,
  }));

  const categoryOptions = completionEntries
    .map((category) => ({
      value: category.category_name,
      label: category.category_name,
    }))
    .filter((option, index, self) => index === self.findIndex((t) => t.value === option.value));

  const chartTypeOptions = [
    { value: "po_quantity", label: "PO Quantity" },
    { value: "value", label: "Value" },
  ];

  const graphTypeOptions = [
    { value: "bar", label: "Bar" },
    { value: "line", label: "Line" },
    { value: "pie", label: "Pie" },
    { value: "doughnut", label: "Doughnut" },
    { value: "polarArea", label: "Polar Area" },
  ];

  // --- Totals & Helpers ---
  const getSubcategoryTotals = (subcategoryName) => {
    let totalValueAdded = 0;
    let totalPoQuantity = 0;
    completionEntries.forEach((category) => {
      if (category.category_name === selectedCategory?.value) {
        const subcategory = category.subcategories.find((sc) => sc.subcategory_name === subcategoryName);
        if (subcategory) {
          subcategory.entries_by_date.forEach((dateEntry) => {
            dateEntry.entries.forEach((entry) => {
              totalValueAdded += entry.value_added || 0;
            });
          });
        }
      }
    });
    if (poTotals && poTotals.subcategory_totals) {
      const categoryData = poTotals.subcategory_totals.find((cat) => cat.category_name === selectedCategory?.value);
      if (categoryData) {
        const subData = categoryData.subcategories.find((sc) => sc.subcategory_name === subcategoryName);
        if (subData) {
          totalPoQuantity = subData.po_quantity || 0;
        }
      }
    }
    return { totalValueAdded, totalPoQuantity };
  };

  // Project Completion percent based on po_quantity and area_added
  const calculateProgressData = () => {
    if (!poTotals || !completionEntries || completionEntries.length === 0)
      return { percentage: 0, totalCompletedArea: 0, totalPoQuantity: 0 };
    const totalCompletedArea = completionEntries
      .flatMap((cat) => cat.subcategories)
      .flatMap((subcat) => subcat.entries_by_date)
      .flatMap((dateEntry) => dateEntry.entries)
      .reduce((sum, entry) => sum + (entry.area_added || 0), 0);
    const totalPoQuantity = poTotals.total_po_quantity || 0;
    const percentage =
      totalPoQuantity === 0
        ? 0
        : (totalCompletedArea / totalPoQuantity) * 100;
    return {
      percentage: Math.min(percentage, 100).toFixed(2),
      totalCompletedArea: totalCompletedArea.toFixed(2),
      totalPoQuantity: totalPoQuantity.toFixed(2),
    };
  };
  const progressData = calculateProgressData();

  // ---- Chart Data Preparation ----
  const subcategories =
    completionEntries.find((cat) => cat.category_name === selectedCategory?.value)?.subcategories || [];
  const barLabels = subcategories.map((sub) => sub.subcategory_name);
  const completedData = subcategories.map((sub) => {
    let completedArea = 0;
    let completedValue = 0;
    sub.entries_by_date.forEach((dateEntry) => {
      dateEntry.entries.forEach((e) => {
        completedArea += e.area_added || 0;
        completedValue += e.value_added || 0;
      });
    });
    return chartType.value === "po_quantity" ? completedArea : completedValue;
  });
  const targetData = poTotals && poTotals.subcategory_totals
    ? poTotals.subcategory_totals
        .find((cat) => cat.category_name === selectedCategory?.value)
        ?.subcategories.map((sc) => chartType.value === "po_quantity" ? sc.po_quantity : sc.value) || []
    : [];

  const barChartData = {
    labels: barLabels,
    datasets: [
      {
        label: chartType.value === "po_quantity" ? "Completed Quantity (sqm)" : "Completed Value (₹)",
        data: completedData,
        backgroundColor: ["#fb7185", "#38bdf8", "#fde047", "#2dd4bf", "#c4b5fd"],
        borderColor: "#e5e7eb",
        borderWidth: 1,
      },
      {
        label: chartType.value === "po_quantity" ? "Planned Quantity (sqm)" : "Planned Value (₹)",
        data: targetData,
        backgroundColor: "#e5e7eb",
        borderColor: "#d1d5db",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: subcategories.map((sub) => 
      `${sub.subcategory_name} (PO: ${poTotals?.subcategory_totals?.find(cat => cat.category_name === selectedCategory?.value)?.subcategories.find(sc => sc.subcategory_name === sub.subcategory_name)?.po_quantity || 0}, Val: ${poTotals?.subcategory_totals?.find(cat => cat.category_name === selectedCategory?.value)?.subcategories.find(sc => sc.subcategory_name === sub.subcategory_name)?.value || 0})`
    ),
    datasets: [
      {
        label: chartType.value === "po_quantity" ? "Completed Quantity (sqm)" : "Completed Value (₹)",
        data: completedData,
        backgroundColor: ["#fb7185", "#38bdf8", "#fde047", "#2dd4bf", "#c4b5fd"],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  // Line Chart (Daily progress for the selected category)
  const prepareLineChartData = () => {
    if (!selectedCategory || !completionEntries.length) return null;
    
    const allDates = new Set();
    completionEntries.forEach(category => {
      if (category.category_name === selectedCategory.value) {
        category.subcategories.forEach(subcategory => {
          subcategory.entries_by_date.forEach(dateEntry => {
            allDates.add(dateEntry.entry_date);
          });
        });
      }
    });
    
    const sortedDates = Array.from(allDates).sort();
    const datasets = [];
    const colors = ["#fb7185", "#38bdf8", "#fde047", "#2dd4bf", "#c4b5fd"];
    
    completionEntries.forEach(category => {
      if (category.category_name === selectedCategory.value) {
        category.subcategories.forEach((subcategory, index) => {
          const cumulativeData = [];
          let cumulativeTotal = 0;
          
          sortedDates.forEach(date => {
            const dateEntry = subcategory.entries_by_date.find(d => d.entry_date === date);
            if (dateEntry) {
              cumulativeTotal += dateEntry.entries.reduce((sum, entry) => sum + (entry.area_added || 0), 0);
            }
            cumulativeData.push(cumulativeTotal);
          });
          
          datasets.push({
            label: subcategory.subcategory_name,
            data: cumulativeData,
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length] + "20",
            tension: 0.3,
            fill: false,
          });
        });
      }
    });
    
    return {
      labels: sortedDates,
      datasets: datasets
    };
  };

  const lineChartData = prepareLineChartData();

  // Render Chart based on selected type
  const renderChart = (chartType, data, options) => {
    switch (chartType) {
      case "bar":
        return <Bar data={data} options={options} />;
      case "line":
        return <Line data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      case "polarArea":
        return <PolarArea data={data} options={options} />;
      default:
        return <Bar data={data} options={options} />;
    }
  };

  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  // ---- UI Rendering ----
  return (
    <div className="p-4 sm:p-6 bg-slate-50 min-h-screen">
      {/* --- Filter Controls --- */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
          <div className="w-full sm:w-[200px]">
            <Select
              options={companyOptions}
              value={selectedCompany}
              onChange={setSelectedCompany}
              placeholder="Company"
              isLoading={loading.companies}
              isClearable
              className="text-sm"
              styles={{ control: (base) => ({ ...base, minHeight: "36px", fontSize: "1rem" }) }}
            />
          </div>
          <div className="w-full sm:w-[200px]">
            <Select
              options={projectOptions}
              value={selectedProject}
              onChange={setSelectedProject}
              placeholder="Project"
              isDisabled={!selectedCompany}
              isClearable
              className="text-sm"
              styles={{ control: (base) => ({ ...base, minHeight: "36px", fontSize: "1rem" }) }}
            />
          </div>
          <div className="w-full sm:w-[250px]">
            <Select
              options={siteOptions}
              value={selectedSite}
              onChange={setSelectedSite}
              placeholder="Site"
              isLoading={loading.sites}
              isDisabled={!selectedProject}
              isClearable
              className="text-sm"
              styles={{ control: (base) => ({ ...base, minHeight: "36px", fontSize: "1rem" }) }}
            />
          </div>
          <div className="w-full sm:w-[200px]">
            <Select
              options={categoryOptions}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="Category"
              isClearable
              className="text-sm"
              styles={{ control: (base) => ({ ...base, minHeight: "36px", fontSize: "1rem" }) }}
            />
          </div>
        </div>
      </div>

      {/* --- Site Details Section --- */}
      {selectedSite && (
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <h4 className="font-semibold text-gray-700">Start Date</h4>
              <p className="text-gray-900">{formatDate(siteDetails.start_date) || 'No data found'}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-700">Current Phase</h4>
              <p className="text-gray-900">{siteDetails.current_phase || 'No data found'}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-700">Location</h4>
              <p className="text-gray-900">{siteDetails.location_name || 'No data found'}</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-700">Total Area (sqm)</h4>
              <p className="text-gray-900">{siteDetails.total_area.toLocaleString() || 'No data found'}</p>
            </div>
          </div>
        </div>
      )}

      {/* --- Cards Section --- */}
      {(loading.completionEntries || loading.poTotals) ? (
        <div className="text-center text-gray-500 py-10">Loading...</div>
      ) : (
        selectedSite && selectedCategory && poTotals && completionEntries.length > 0 ? (
          <>
            <div className="flex flex-wrap items-stretch gap-6 justify-center mb-8 pt-3">
              {/* Subcategory Cards */}
              {subcategories.map((subcategory, i) => {
                const { totalValueAdded, totalPoQuantity } = getSubcategoryTotals(subcategory.subcategory_name);
                let completedArea = 0;
                let completedValue = 0;
                subcategory.entries_by_date.forEach((dateEntry) => {
                  dateEntry.entries.forEach((e) => {
                    completedArea += e.area_added || 0;
                    completedValue += e.value_added || 0;
                  });
                });
                const totalValue = poTotals.subcategory_totals
                  .find((cat) => cat.category_name === selectedCategory.value)
                  ?.subcategories.find((sc) => sc.subcategory_name === subcategory.subcategory_name)?.value || 0;
                return (
                  <div
                    key={subcategory.subcategory_name}
                    className={`bg-gradient-to-br from-gray-50 to-gray-100 w-full sm:w-[250px] rounded-xl p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 shadow-lg`}
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{subcategory.subcategory_name}</h3>
                    <div className="bg-gray-200 bg-opacity-20 p-3 rounded-lg w-full">
                      <div className="flex justify-between text-sm text-gray-800">
                        <span>Completed Area (sqm):</span>
                        <span className="font-semibold">{completedArea.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-800 mt-1">
                        <span>Total (sqm):</span>
                        <span className="font-semibold">{totalPoQuantity.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-800 mt-2">
                        <span>Completed Value:</span>
                        <span className="font-semibold">₹{completedValue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-800 mt-1">
                        <span>Total Value:</span>
                        <span className="font-semibold">₹{totalValue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Project Completion Card */}
              <div
                className={`${Number(progressData.percentage) === 100 ? 'bg-gradient-to-r from-cyan-500 to-teal-300 text-gray-800 shadow-lg' : 'bg-gradient-to-br from-blue-200 to-cyan-100 text-gray-800 shadow-lg'} w-full sm:w-[250px] rounded-xl p-4 flex flex-col items-center text-center transform transition duration-300 hover:scale-105`}
                style={{ minHeight: "150px" }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">Project Completion</h3>
                <div className="flex-1 flex items-center justify-center w-full">
                  <span className="text-5xl font-extrabold text-gray-800">{progressData.percentage}%</span>
                </div>
              </div>
            </div>

            {/* --- Charts Area (below cards) --- */}
            <div className="flex flex-col gap-6 items-stretch justify-center pt-2">
              {/* First row: Bar and Doughnut charts */}
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Chart 1 (Bar/Line/Pie/Doughnut/PolarArea) */}
                <div className="bg-white rounded-lg shadow-lg p-4 flex-1 min-w-[340px]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {chartType.value === "po_quantity" ? "Area" : "Value"} Completion Overview
                    </h3>
                    <div className="flex gap-2">
                      <div className="w-[140px]">
                        <Select
                          options={chartTypeOptions}
                          value={chartType}
                          onChange={setChartType}
                          placeholder="Data Type"
                          isClearable={false}
                          className="text-xs"
                          styles={{ control: (base) => ({ ...base, minHeight: "32px", fontSize: "0.90rem" }) }}
                        />
                      </div>
                      <div className="w-[140px]">
                        <Select
                          options={graphTypeOptions}
                          value={barChartType}
                          onChange={setBarChartType}
                          placeholder="Chart Type"
                          isClearable={false}
                          className="text-xs"
                          styles={{ control: (base) => ({ ...base, minHeight: "32px", fontSize: "0.90rem" }) }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[320px]">
                    {renderChart(barChartType.value, barChartData, {
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: barChartType.value === "bar" || barChartType.value === "line" ? {
                        y: {
                          beginAtZero: true,
                          title: { display: true, text: chartType.value === "po_quantity" ? "Area (sqm)" : "Value (₹)" },
                        },
                        x: {
                          title: { display: true, text: "Stage" },
                        },
                      } : {},
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: { font: { size: 12 } },
                        },
                        title: { display: false },
                      },
                    })}
                  </div>
                </div>
                {/* Chart 2 (Pie/Doughnut/PolarArea) */}
                <div className="bg-white rounded-lg shadow-lg p-4 flex-1 min-w-[340px]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {chartType.value === "po_quantity" ? "Area" : "Value"} Progress Comparison
                    </h3>
                    <div className="w-[140px]">
                      <Select
                        options={graphTypeOptions}
                        value={donutChartType}
                        onChange={setDonutChartType}
                        placeholder="Chart Type"
                        isClearable={false}
                        className="text-xs"
                        styles={{ control: (base) => ({ ...base, minHeight: "32px", fontSize: "0.90rem" }) }}
                      />
                    </div>
                  </div>
                  <div className="w-full h-[320px]">
                    {renderChart(donutChartType.value, pieChartData, {
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: { font: { size: 12 } },
                        },
                        title: { display: false },
                      },
                    })}
                  </div>
                </div>
              </div>
              
              {/* Second row: Line Chart */}
              {lineChartData && (
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="font-semibold text-center mb-2 text-lg text-gray-800">
                    Daily Progress Trend
                  </h3>
                  <div className="w-full h-[400px]">
                    <Line
                      data={lineChartData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                            title: { display: true, text: "Cumulative Area (sqm)" },
                          },
                          x: {
                            title: { display: true, text: "Date" },
                          },
                        },
                        plugins: {
                          legend: {
                            position: "bottom",
                            labels: { font: { size: 12 } },
                          },
                          title: { display: false },
                        },
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-400 py-12 text-base">
            Please select all options to view dashboard.
          </div>
        )
      )}
    </div>
  );
};

export default Dashboard;