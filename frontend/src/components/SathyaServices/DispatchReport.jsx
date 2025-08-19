// import React from 'react';
// import html2pdf from 'html2pdf.js';

// const DispatchReport = () => {
//   const handleDownloadPDF = () => {
//     const element = document.getElementById('report-content');
//     const opt = {
//       margin: 0.5,
//       filename: 'dispatch_report.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <div className="dispatch-report-container">
//       {/* Download Button */}
//       <div className="download-button-container">
//         <button
//           onClick={handleDownloadPDF}
//           className="download-button no-print"
//         >
//           Download as PDF
//         </button>
//       </div>

//       {/* Main Report Box */}
//       <div
//         id="report-content"
//         className="report-content-box"
//       >
//         {/* Company Header with Logo */}
//         <div className="company-header">
//           {/* Logo on the left */}
//           <div className="company-logo">
//             <img 
//               src="/sathyalogo.png" 
//               alt="Sathya Hitec Solutions Logo" 
//               className="logo-image"
//             />
//           </div>
          
//           {/* Company details on the right */}
//           <div className="company-details">
//             <h1 className="company-name">SATHYA HITEC SOLUTIONS LLP</h1>
//             <p className="company-address">
//               222, Chinnammal Nagar, Edayarpalayam, Vadavalli Road, Coimbatore - 641041
//             </p>
//             <p className="company-contact">
//               Ph.No. 0422 2401231, 9600555870 E-mail. sathyaec@gmail.com
//             </p>
//             <p className="company-factory">
//               FACTORY : BHAGAVATHIPALAYAM, KINATHUKADAVU, COIMBATORE 642 109
//             </p>
//             <p className="company-gst">GSTIN: 33ACJFS1582J1ZW</p>
//           </div>
//         </div>

//         {/* Delivery Challan Header */}
//         <div className="delivery-challan-header">
//           DELIVERY CHALLAN
//         </div>

//         {/* Address and DC Details */}
//         <div className="address-dc-container">
//           <div className="customer-address">
//             <div>
//               <span className="address-label">To</span> <span className="customer-name">Mr.Hari <span style={{ color: 'red',marginLeft:'50px' }}>PH.No.8248035440</span></span><br />
//               The Civil Department<br />
//               M/s. Chemplast Sanmar Limited - CC2<br />
//               315, Melavanjorre Village,<br />
//               Nagore Po.,<br />
//               Karaikal - 609606<br />
//               GSTIN: 34AAACC3000F1ZL
//             </div>
//           </div>
//           <table className="dc-details-table">
//             <thead>
//               <tr>
//                 <th colSpan={2} className="dc-details-header">
//                   Delivery challan
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="dc-label">DC No.</td>
//                 <td className="dc-value">010</td>
//               </tr>
//               <tr>
//                 <td className="dc-label">DC Date</td>
//                 <td className="dc-value">30.04.2024</td>
//               </tr>
//               <tr>
//                 <td className="dc-label">Your Order No.</td>
//                 <td className="dc-value">3600025256</td>
//               </tr>
//               <tr>
//                 <td className="dc-label">Your order date</td>
//                 <td className="dc-value">16.05.2023</td>
//               </tr>
//               <tr>
//                 <td className="dc-label">Vendore Code</td>
//                 <td className="dc-value text-left">DS1750</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Table Section */}
//         <div className="table-section">
//           <table className="main-table">
//             <thead>
//               <tr className="table-header-row">
//                 <th className="table-header slno">Sl.No</th>
//                 <th className="table-header particulars">Particulars</th>
//                 <th className="table-header qty">Qty</th>
//                 <th className="table-header uom">UOM</th>
//                 <th className="table-header remarks">Remarks</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* MTF Work Highlight */}
//               <tr>
//                 <td className="table-data empty-cell"></td>
//                 <td className="table-data mtf-work" colSpan={4}>
//                   MTF Work :
//                 </td>
//               </tr>
//               {/* Row 1 */}
//               <tr>
//                 <td className="table-data">1</td>
//                 <td className="table-data">
//                   SCPL Omegakoat 6000 (2:1)<br />
//                   <span className="component">Comp.A</span><br />
//                   <span className="component">Comp.B</span>
//                 </td>
//                 <td className="table-data qty-cell">
//                   20.00<br />10.00<br /><span className="total-qty">30.00</span>
//                 </td>
//                 <td className="table-data">
//                   Ltrs<br />Ltrs<br />Ltrs
//                 </td>
//                 <td className="table-data">
//                   20 Ltrs x 1 Plastic pail<br />
//                   5 Ltrs x 2 Plastic pails
//                 </td>
//               </tr>
//               {/* Row 2 */}
//               <tr>
//                 <td className="table-data">2</td>
//                 <td className="table-data">
//                   SCPL TCPU Silver Grey (8:1)<br />
//                   <span className="component">Comp.A</span><br />
//                   <span className="component">Comp.B</span>
//                 </td>
//                 <td className="table-data qty-cell">
//                   120.00<br />15.00<br /><span className="total-qty">135.00</span>
//                 </td>
//                 <td className="table-data">Ltrs<br />Ltrs<br />Ltrs</td>
//                 <td className="table-data">20 Ltrs x 6 Plastic pails<br />5 Ltrs x 3 cans</td>
//               </tr>
//               {/* Row 3 */}
//               <tr>
//                 <td className="table-data">3</td>
//                 <td className="table-data">
//                   SCPL TCPU Golden Yellow (3:1)<br />
//                   <span className="component">Comp.A</span><br />
//                   <span className="component">Comp.B</span>
//                 </td>
//                 <td className="table-data qty-cell">
//                   45.00<br />15.00<br />
//                   <span className="total-qty">60.00</span>
//                 </td>
//                 <td className="table-data">Ltrs<br />Ltrs<br />Ltrs</td>
//                 <td className="table-data">15 Ltrs x 3 Plastic pails<br />5 Ltrs x 3 cans</td>
//               </tr>
//               {/* Row 4 */}
//               <tr>
//                 <td className="table-data">4</td>
//                 <td className="table-data">
//                   SCPL TCPU Black (10:1)<br />
//                   <span className="component">Comp.A</span><br />
//                   <span className="component">Comp.B</span>
//                 </td>
//                 <td className="table-data qty-cell">
//                   40.00<br />4.00<br /><span className="total-qty">44.00</span>
//                 </td>
//                 <td className="table-data">Ltrs<br />Ltrs<br />Ltrs</td>
//                 <td className="table-data">20 Ltrs x 2 Plastic pails<br />4 Ltrs x 1 can</td>
//               </tr>
//               {/* Row 5 */}
//               <tr>
//                 <td className="table-data">5</td>
//                 <td className="table-data">Solvent</td>
//                 <td className="table-data qty-cell">60.00</td>
//                 <td className="table-data">Ltrs</td>
//                 <td className="table-data">30 Ltrs x 2 cans</td>
//               </tr>
//               {/* Row 6 */}
//               <tr>
//                 <td className="table-data">6</td>
//                 <td className="table-data">
//                   SCPL Omegakoat 6000 (2:1)<br />
//                   <span className="component">Comp.A</span><br />
//                   <span className="component">Comp.B</span>
//                 </td>
//                 <td className="table-data qty-cell">
//                   40.00<br />20.00<br /><span className="total-qty">60.00</span>
//                 </td>
//                 <td className="table-data">Ltrs<br />Ltrs<br />Ltrs</td>
//                 <td className="table-data">20 Ltrs x 2 Plastic pails<br />5 Ltrs x 4 Plastic pails</td>
//               </tr>
//               {/* Row 7 */}
//               <tr>
//                 <td className="table-data">7</td>
//                 <td className="table-data">
//                   Sathya EP MIO Brown (3:1)<br />
//                   <span className="component">Comp.A</span><br />
//                   <span className="component">Comp.B</span>
//                 </td>
//                 <td className="table-data qty-cell">
//                   225.00<br />75.00<br /><span className="total-qty">300.00</span>
//                 </td>
//                 <td className="table-data">Ltrs<br />Ltrs<br />Ltrs</td>
//                 <td className="table-data">15 Ltrs x 15 Drums<br />5 Ltrs x 15 Plastic pails</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Value and Note */}
//         <div className="value-note-container">
//           <span className="approximate-value">Approximate Value Rs.120000/-</span>
//           <span className="returnable-note">
//             The above materials sent for our works contract purpose on returnable basis
//           </span>
//         </div>

//         {/* Bottom Balance Panel */}
//         <div className="bottom-panel">
//           <div className="gst-panel">
//             <div className="gst-header">GSTIN NO.</div>
//             <div className="gst-number">33ACJFS1582J1ZW</div>
//             <div>JK Groups</div>
//             <div className="gst-subtext">GSTIN NO : 33BPIPJ0960C1ZC</div>
//           </div>
//           <div className="signature-panel">
//             <span className="signature-label">for Sathya Hitec Solutions LLP</span>
//             <span className="signature-image">
//               <img src="./signature.png" alt="Authorised Signatory" className="signature-img" />
//             </span>
//             <span className="signature-text">Authorised Signatory</span>
//           </div>
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style jsx>{`
//         .dispatch-report-container {
//           min-height: 100vh;
//           background-color: #f1f5f9;
//           padding: 24px;
//         }
        
//         .download-button-container {
//           text-align: right;
//           margin-bottom: 24px;
//         }
        
//         .download-button {
//           background-color: #2563eb;
//           color: white;
//           padding: 8px 24px;
//           border-radius: 4px;
//           border: none;
//           cursor: pointer;
//           font-size: 14px;
//           font-weight: 500;
//         }
        
//         .download-button:hover {
//           background-color: #1d4ed8;
//         }
        
//         .report-content-box {
//           max-width: 56rem;
//           margin-left: auto;
//           margin-right: auto;
//           background-color: white;
//           padding: 32px;
//           border-radius: 8px;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           border: 1px solid #d1d5db;
//         }
        
//         .company-header {
//           display: flex;
//           align-items: flex-start;
//           margin-bottom: 16px;
//         }
        
//         .company-logo {
//           margin-right: 16px;
//         }
        
//         .logo-image {
//           height: 80px;
//           width: auto;
//           object-fit: contain;
//         }
        
//         .company-details {
//           text-align: center;
//           flex: 1;
//         }
        
//         .company-name {
//           color: #0369a1;
//           font-weight: 800;
//           font-size: 1.5rem;
//           letter-spacing: 0.05em;
//           margin-bottom: 4px;
//         }
        
//         .company-address {
//           color: #075985;
//           font-size: 0.875rem;
//           margin-top: 4px;
//           font-weight: 600;
//         }
        
//         .company-contact {
//           color: #0c4a6e;
//           font-size: 0.75rem;
//         }
        
//         .company-factory {
//           color: #0c4a6e;
//           font-size: 0.75rem;
//         }
        
//         .company-gst {
//           color: #075985;
//           font-size: 0.75rem;
//           font-weight: bold;
//         }
        
//         .delivery-challan-header {
//           padding: 8px;
//           text-align: center;
//           font-weight: bold;
//           font-size: 1.125rem;
//           color: #1f2937;
//           border: 1px solid #d1d5db;
//         }
        
//         .address-dc-container {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 24px;
//           border-color: #d1d5db;
//         }
        
//         .customer-address {
//           font-size: 0.875rem;
//           line-height: 1.25;
//         }
        
//         .address-label {
//           font-weight: 600;
//         }
        
//         .customer-name {
//           color: black;
//           font-weight: bold;
//         }
        
//         .dc-details-table {
//           width: 100%;
//           border: 1px solid #d1d5db;
//           font-size: 1rem;
//         }
        
//         .dc-details-header {
//           background-color: #75aad6;
//           text-align: left;
//           font-weight: bold;
//           border: 1px solid #d1d5db;
//           padding: 8px;
//         }
        
//         .dc-label {
//           font-weight: 600;
//           border: 1px solid #d1d5db;
//           padding: 8px;
//         }
        
//         .dc-value {
//           border: 1px solid #d1d5db;
//           padding: 8px;
//         }
        
//         .text-left {
//           text-align: left;
//         }
        
//         .table-section {
//           overflow-x: auto;
//           margin-bottom: 24px;
//         }
        
//         .main-table {
//           width: 100%;
//           border: 1px solid #d1d5db;
//           font-size: 1rem;
//         }
        
//         .table-header-row {
//           background-color: #4aa0d6;
//           color: black;
//           border-top: 1px solid #9ca3af;
//           border-bottom: 1px solid #9ca3af;
//         }
        
//         .table-header {
//           border: 1px solid #d1d5db;
//           padding: 4px 8px;
//         }
        
//         .slno {
//           width: 40px;
//         }
        
//         .qty {
//           width: 65px;
//         }
        
//         .uom {
//           width: 50px;
//         }
        
//         .table-data {
//           border: 1px solid #d1d5db;
//           padding: 4px 8px;
//           vertical-align: top;
//         }
        
//         .empty-cell {
//           background-color: white;
//         }
        
//         .mtf-work {
//           font-weight: 600;
//           color: #b91c1c;
//         }
        
//         .component {
//           padding-left: 16px;
//         }
        
//         .qty-cell {
//           font-weight: bold;
//           background-color: #f3f4f6;
//           vertical-align: top;
//         }
        
//         .total-qty {
//           display: block;
//           border-top: 1px solid black;
//           margin-top: 2px;
//           padding-top: 2px;
//           background-color: #fde047;
//         }
        
//         .value-note-container {
//           display: flex;
//           flex-direction: column;
//           margin-top: 8px;
//           margin-bottom: 8px;
//         }
        
//         .approximate-value {
//           font-weight: 600;
//         }
        
//         .returnable-note {
//           color: #dc2626;
//           font-weight: bold;
//           font-size: 0.875rem;
//           text-decoration: underline;
//         }
        
//         .bottom-panel {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 16px;
//           margin-top: 24px;
//           border-top: 1px solid #d1d5db;
//           padding-top: 16px;
//           font-size: 0.875rem;
//         }
        
//         .gst-panel {
//           display: flex;
//           flex-direction: column;
//         }
        
//         .gst-header {
//           background-color: #bae6fd;
//           padding: 8px;
//           border-radius: 4px;
//           margin-bottom: 8px;
//           font-weight: bold;
//         }
        
//         .gst-number {
//           font-weight: 800;
//           font-size: 1.125rem;
//           letter-spacing: 0.05em;
//           color: #1e40af;
//           margin-bottom: 8px;
//         }
        
//         .gst-subtext {
//           font-size: 0.75rem;
//         }
        
//         .signature-panel {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-end;
//         }
        
//         .signature-label {
//           margin-bottom: 24px;
//           padding-right: 16px;
//           margin-top: 8px;
//         }
        
//         .signature-image {
//           margin-bottom: 4px;
//         }
        
//         .signature-img {
//           height: 48px;
//         }
        
//         .signature-text {
//           font-size: 0.75rem;
//           padding-right: 48px;
//         }
        
//         @media print {
//           .no-print {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DispatchReport;





// import React from 'react';
// import html2pdf from 'html2pdf.js';

// const DispatchReport = ({ commonDispatchDetails = {}, dispatchedMaterials = [] }) => {
//   // Fallback static data for dispatch details
//   const defaultDispatchDetails = {
//     recipient_name: 'Mr.Hari',
//     recipient_phone: '8248035440',
//     recipient_department: 'The Civil Department',
//     recipient_company: 'M/s. Chemplast Sanmar Limited - CC2',
//     recipient_address: '315, Melavanjorre Village, Nagore Po., Karaikal - 609606',
//     recipient_gstin: '34AAACC3000F1ZL',
//     dc_no: '010',
//     dispatch_date: '30.04.2024',
//     order_no: '3600025256',
//     order_date: '16.05.2023',
//     vendor_code: 'DS1750',
//     approximate_value: '120000'
//   };

//   // Merge dynamic data with static defaults
//   const dispatchDetails = {
//     ...defaultDispatchDetails,
//     ...commonDispatchDetails,
//     recipient_address: commonDispatchDetails.destination || defaultDispatchDetails.recipient_address,
//     dc_no: commonDispatchDetails.dc_no || defaultDispatchDetails.dc_no,
//     dispatch_date: commonDispatchDetails.dispatch_date || defaultDispatchDetails.dispatch_date,
//     order_no: commonDispatchDetails.order_no || defaultDispatchDetails.order_no,
//     vendor_code: commonDispatchDetails.vendor_code || defaultDispatchDetails.vendor_code
//   };

//   // Use dynamic materials if available, otherwise fall back to static data
//   const materials = dispatchedMaterials.length > 0 ? dispatchedMaterials : [
//     {
//       id: 1,
//       item_name: 'SCPL Omegakoat 6000 (2:1)',
//       comp_a_qty: '20.00',
//       comp_b_qty: '10.00',
//       total_qty: '30.00',
//       uom_name: 'Ltrs',
//       comp_a_remarks: '20 Ltrs x 1 Plastic pail',
//       comp_b_remarks: '5 Ltrs x 2 Plastic pails'
//     },
//     {
//       id: 2,
//       item_name: 'SCPL TCPU Silver Grey (8 : 1)',
//       comp_a_qty: '120.00',
//       comp_b_qty: '15.00',
//       total_qty: '135.00',
//       uom_name: 'Ltrs',
//       comp_a_remarks: '20 Ltrs x 6 Plastic pails',
//       comp_b_remarks: '5 Ltrs x 3 cans'
//     },
//     {
//       id: 3,
//       item_name: 'SCPL TCPU Golden Yellow (3:1)',
//       comp_a_qty: '45.00',
//       comp_b_qty: '15.00',
//       total_qty: '60.00',
//       uom_name: 'Ltrs',
//       comp_a_remarks: '15 Ltrs x 3 Plastic pails',
//       comp_b_remarks: '5 Ltrs x 3 cans'
//     },
//     {
//       id: 4,
//       item_name: 'SCPL TCPU Black (10:1)',
//       comp_a_qty: '40.00',
//       comp_b_qty: '4.00',
//       total_qty: '44.00',
//       uom_name: 'Ltrs',
//       comp_a_remarks: '20 Ltrs x 2 Plastic pails',
//       comp_b_remarks: '4 Ltrs x 1 can'
//     },
//     {
//       id: 5,
//       item_name: 'Solvent',
//       dispatch_qty: '60.00',
//       uom_name: 'Ltrs',
//       comp_a_remarks: '30 Ltrs x 2 cans'
//     },
//     {
//       id: 6,
//       item_name: 'SCPL Omegakoat 6000 (2:1)',
//       comp_a_qty: '40.00',
//       comp_b_qty: '20.00',
//       total_qty: '60.00',
//       uom_name: 'Ltrs',
//       comp_a_remarks: '20 Ltrs x 2 Plastic pails',
//       comp_b_remarks: '5 Ltrs x 4 Plastic pails'
//     },
//     {
//       id: 7,
//       item_name: 'Sathya EP MIO Brown (3:1)',
//       comp_a_qty: '225.00',
//       comp_b_qty: '75.00',
//       total_qty: '300.00',
//       uom_name: 'Ltrs',
//       comp_a_remarks: '15 Ltrs x 15 Drums',
//       comp_b_remarks: '5 Ltrs x 15 Plastic pails'
//     }
//   ];

//   const handleDownloadPDF = () => {
//     console.log('Download button clicked');
//     const element = document.getElementById('report-content');
//     if (!element) {
//       console.error('Element with ID "report-content" not found');
//       return;
//     }
//     console.log('Element found, generating PDF...');
//     const opt = {
//       margin: 0.5,
//       filename: `dispatch_report_${dispatchDetails.dc_no}.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: {
//         scale: 2,
//         onclone: (clonedDoc) => {
//           const images = clonedDoc.querySelectorAll('img');
//           const promises = Array.from(images).map(img => {
//             if (!img.complete) {
//               return new Promise((resolve) => {
//                 img.onload = resolve;
//                 img.onerror = resolve;
//               });
//             }
//             return Promise.resolve();
//           });
//           return Promise.all(promises);
//         }
//       },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
//     html2pdf().set(opt).from(element).save().then(() => {
//       console.log('PDF generation complete');
//     }).catch(err => {
//       console.error('PDF generation failed:', err);
//     });
//   };

//   return (
//     <div className="dispatch-report-container">
//       <div className="download-btn-container">
//         <button
//           onClick={handleDownloadPDF}
//           className="download-btn no-print"
//         >
//           Download as PDF
//         </button>
//       </div>
//       <div id="report-content" className="report-content">
//         <table className="main-table">
//           <tbody>
//             <tr>
//               <td colSpan={6} className="header-logo">
//                 <img src="/logo_abstract.png" alt="Logo" className="logo-img" />
//                 <span className="company-name">
//                   SATHYA HITEC SOLUTIONS LLP
//                 </span>
//               </td>
//             </tr>
//             <tr>
//               <td colSpan={6} className="company-address">
//                 222, Chinnammal Nagar, Edayarpalayam, Vadavalli Road, Coimbatore - 641041<br />
//                 Ph.No. 0422 2401231, 9600555870 E-mail: sathyaec@gmail.com<br />
//                 FACTORY : BHAGAVATHIPALAYAM, KINATHUKADAVU, COIMBATORE 642 109<br />
//                 GSTIN: 33ACJFS1582J1ZW
//               </td>
//             </tr>
//             <tr>
//               <td colSpan={6} className="document-title">
//                 DELIVERY CHALLAN
//               </td>
//             </tr>
//             <tr>
//               <td colSpan={3} className="address-section">
//                 <div>
//                   <span className="address-label">To </span>
//                   <span className="recipient-name">{dispatchDetails.recipient_name}</span> 
//                   <span className="recipient-phone">(PH.No.{dispatchDetails.recipient_phone})</span><br />
//                   {dispatchDetails.recipient_department}<br />
//                   {dispatchDetails.recipient_company}<br />
//                   {dispatchDetails.recipient_address}<br />
//                   GSTIN: {dispatchDetails.recipient_gstin}
//                 </div>
//               </td>
//               <td colSpan={3} className="details-section">
//                 <table className="details-table">
//                   <tbody>
//                     <tr>
//                       <td className="details-label">Delivery challan</td>
//                       <td className="details-value"></td>
//                     </tr>
//                     <tr>
//                       <td className="details-label-bold">DC NO.</td>
//                       <td className="details-value-bold">{dispatchDetails.dc_no}</td>
//                     </tr>
//                     <tr>
//                       <td className="details-label-bold">DC Date</td>
//                       <td className="details-value-bold">{dispatchDetails.dispatch_date}</td>
//                     </tr>
//                     <tr>
//                       <td className="details-label-bold">Your Order No.</td>
//                       <td className="details-value">{dispatchDetails.order_no}</td>
//                     </tr>
//                     <tr>
//                       <td className="details-label-bold">Your order date</td>
//                       <td className="details-value">{dispatchDetails.order_date}</td>
//                     </tr>
//                     <tr>
//                       <td className="details-label-bold">Vendor Code</td>
//                       <td className="details-value">{dispatchDetails.vendor_code}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </td>
//             </tr>
//             <tr>
//               <td className="table-header" width="5%">Sl.No</td>
//               <td className="table-header" width="32%">Particulars</td>
//               <td className="table-header" width="9%">Qty</td>
//               <td className="table-header" width="8%">UOM</td>
//               <td className="table-header" width="30%">Remarks</td>
//             </tr>
//             <tr>
//               <td className="empty-cell"></td>
//               <td className="mtf-work-label" colSpan={5}>MTF Work :</td>
//             </tr>
//             {materials.map((material, index) => (
//               <tr key={material.id || index}>
//                 <td className="cell-center">{index + 1}</td>
//                 <td className="cell-left">
//                   {material.item_name || 'N/A'}
//                   {material.comp_a_qty !== null && <><br /><span className="component">Comp.A</span></>}
//                   {material.comp_b_qty !== null && <><br /><span className="component">Comp.B</span></>}
//                   {material.comp_c_qty !== null && <><br /><span className="component">Comp.C</span></>}
//                 </td>
//                 <td className="cell-left-bold">
//                   {material.comp_a_qty !== null && <>{material.comp_a_qty}<br /></>}
//                   {material.comp_b_qty !== null && <>{material.comp_b_qty}<br /></>}
//                   {material.comp_c_qty !== null && <>{material.comp_c_qty}<br /></>}
//                   <span className="highlighted-qty">{material.total_qty || material.dispatch_qty || material.assigned_quantity || '0'}</span>
//                 </td>
//                 <td className="cell-left">
//                   {material.comp_a_qty !== null && <>{material.uom_name || 'Ltrs'}<br /></>}
//                   {material.comp_b_qty !== null && <>{material.uom_name || 'Ltrs'}<br /></>}
//                   {material.comp_c_qty !== null && <>{material.uom_name || 'Ltrs'}<br /></>}
//                   {material.uom_name || 'Ltrs'}
//                 </td>
//                 <td className="cell-left">
//                   {material.comp_a_remarks && <>{material.comp_a_remarks}<br /></>}
//                   {material.comp_b_remarks && <>{material.comp_b_remarks}<br /></>}
//                   {material.comp_c_remarks && <>{material.comp_c_remarks}<br /></>}
//                 </td>
//               </tr>
//             ))}
//             <tr>
//               <td colSpan={6} className="approximate-value">
//                 Approximate Value Rs.{dispatchDetails.approximate_value}/-
//               </td>
//             </tr>
//             <tr>
//               <td colSpan={6} className="returnable-note">
//                 The above materials sent for our works contract purpose on returnable basis
//               </td>
//             </tr>
//             <tr>
//               <td colSpan={3} className="footer-left">
//                 <div className="gst-label">GSTIN NO.</div>
//                 <div className="gst-number">33ACJFS1582J1ZW</div>
//                 <div>JK Groups</div>
//                 <div className="jk-gst">GSTIN NO : 33BPIPJ0960C1ZC</div>
//               </td>
//               <td colSpan={3} className="footer-right">
//                 <div className="signature-label">for Sathya Hitec Solutions LLP</div>
//                 <div className="signature-img-container">
//                   {/* <img src="./signature.png" alt="Authorised Signatory" className="signature-img" /> */}
//                 </div>
//                 <div className="signature-text">Authorised Signatory</div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <style>{`
//         .dispatch-report-container {
//           background-color: #f1f5f9;
//           min-height: 100vh;
//           padding: 24px;
//         }
//         .download-btn-container {
//           text-align: right;
//           margin-bottom: 24px;
//         }
//         .download-btn {
//           background-color: #2563eb;
//           color: white;
//           padding: 8px 24px;
//           border-radius: 4px;
//           border: none;
//           cursor: pointer;
//           font-size: 14px;
//         }
//         .download-btn:hover {
//           background-color: #1d4ed8;
//         }
//         .report-content {
//           max-width: 56rem;
//           margin-left: auto;
//           margin-right: auto;
//           background-color: white;
//           padding: 16px;
//           border-radius: 8px;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           border: 1px solid #d1d5db;
//         }
//         .main-table {
//           width: 100%;
//           border: 1px solid black;
//           font-size: 14px;
//           border-collapse: collapse;
//         }
//         .header-logo {
//           text-align: center;
//           padding-bottom: 8px;
//           border: none;
//         }
//         .logo-img {
//           height: 50px;
//           display: inline-block;
//           vertical-align: middle;
//           margin-right: 12px;
//         }
//         .company-name {
//           font-size: 24px;
//           font-weight: 800;
//           letter-spacing: 0.025em;
//           color: #0369a1;
//           vertical-align: middle;
//         }
//         .company-address {
//           text-align: center;
//           font-size: 12px;
//           padding-top: 4px;
//           padding-bottom: 4px;
//           border: none;
//         }
//         .document-title {
//           text-align: center;
//           font-size: 16px;
//           font-weight: bold;
//           color: #1f2937;
//           border: 1px solid black;
//           padding-top: 4px;
//           padding-bottom: 4px;
//           background-color: #e0f2fe;
//         }
//         .address-section {
//           vertical-align: top;
//           border: 1px solid black;
//           padding: 8px;
//           width: 60%;
//         }
//         .address-label {
//           font-weight: 600;
//         }
//         .recipient-name {
//           color: black;
//           font-weight: bold;
//           margin-left: 8px;
//         }
//         .recipient-phone {
//           font-weight: bold;
//           font-size: 12px;
//           color: #ef4444;
//           padding-left: 50px;
//         }
//         .details-section {
//           vertical-align: top;
//           border: 1px solid black;
//           padding: 0;
//           width: 40%;
//         }
//         .details-table {
//           width: 100%;
//           font-size: 12px;
//           border: 1px solid black;
//           border-collapse: collapse;
//         }
//         .details-label {
//           font-weight: 600;
//           border: 1px solid black;
//           padding-left: 8px;
//           padding-right: 8px;
//           padding-top: 4px;
//           padding-bottom: 4px;
//         }
//         .details-label-bold {
//           font-weight: bold;
//           border: 1px solid black;
//           padding-left: 8px;
//           padding-right: 8px;
//           padding-top: 4px;
//           padding-bottom: 4px;
//         }
//         .details-value {
//           border: 1px solid black;
//           padding-left: 8px;
//           padding-right: 8px;
//           padding-top: 4px;
//           padding-bottom: 4px;
//         }
//         .details-value-bold {
//           font-weight: bold;
//           border: 1px solid black;
//           padding-left: 8px;
//           padding-right: 8px;
//           padding-top: 4px;
//           padding-bottom: 4px;
//         }
//         .table-header {
//           border: 1px solid black;
//           text-align: center;
//           font-weight: bold;
//           padding: 8px;
//           background-color: #7dd3fc;
//         }
//         .empty-cell {
//           padding: 8px;
//         }
//         .mtf-work-label {
//           border: 1px solid black;
//           font-size: 14px;
//           font-weight: 600;
//           color: #dc2626;
//         }
//         .cell-center {
//           border-left: 1px solid black;
//           border-right: 1px solid black;
//           text-align: center;
//           padding: 8px;
//         }
//         .cell-left {
//           border-left: 1px solid black;
//           border-right: 1px solid black;
//           text-align: left;
//           padding: 8px;
//           vertical-align: top;
//         }
//         .cell-left-bold {
//           border-left: 1px solid black;
//           border-right: 1px solid black;
//           text-align: left;
//           padding: 8px;
//           font-weight: bold;
//           vertical-align: top;
//         }
//         .component {
//           padding-left: 10px;
//         }
//         .highlighted-qty {
//           background-color: #f8e71c;
//           display: inline-block;
//           min-width: 40px;
//           text-align: center;
//         }
//         .approximate-value {
//           border: 1px solid black;
//           text-align: left;
//           font-weight: 600;
//           padding-left: 8px;
//         }
//         .returnable-note {
//           border: 1px solid black;
//           text-align: left;
//           padding-left: 8px;
//           color: #dc2626;
//           font-weight: bold;
//           text-decoration: underline;
//         }
//         .footer-left {
//           vertical-align: top;
//           width: 60%;
//           padding: 8px;
//         }
//         .gst-label {
//           background-color: #bae6fd;
//           padding-left: 8px;
//           padding-right: 8px;
//           padding-top: 4px;
//           padding-bottom: 4px;
//           border-radius: 4px;
//           font-weight: bold;
//           display: inline-block;
//           margin-bottom: 4px;
//         }
//         .gst-number {
//           font-weight: 800;
//           font-size: 18px;
//           letter-spacing: 0.05em;
//           color: #1e40af;
//           margin-bottom: 4px;
//         }
//         .jk-gst {
//           font-size: 12px;
//         }
//         .footer-right {
//           vertical-align: top;
//           width: 40%;
//           padding: 8px;
//           text-align: right;
//         }
//         .signature-label {
//           margin-bottom: 24px;
//           margin-top: 8px;
//           padding-right: 8px;
//         }
//         .signature-text {
//           font-size: 12px;
//           padding-right: 32px;
//         }
//         .signature-img-container {
//           margin-bottom: 4px;
//         }
//         .signature-img {
//           height: 48px;
//           display: inline-block;
//         }
//         @media print {
//           .no-print {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DispatchReport;













import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';

const DispatchReport = ({ commonDispatchDetails = {}, dispatchedMaterials = [] }) => {
  // State to store API data
  const [inchargeData, setInchargeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use dynamic dispatch details with static GSTIN
  const dispatchDetails = {
    recipient_name: commonDispatchDetails.recipient_name || 'N/A',
    recipient_phone: commonDispatchDetails.recipient_phone || 'N/A',
    recipient_department: commonDispatchDetails.recipient_department || 'N/A',
    recipient_company: commonDispatchDetails.recipient_company || 'N/A',
    recipient_address: commonDispatchDetails.destination || 'N/A',
    recipient_gstin: '34AAACC3000F1ZL', // Static GSTIN
    dc_no: commonDispatchDetails.dc_no || 'N/A',
    dispatch_date: commonDispatchDetails.dispatch_date || 'N/A',
    order_no: commonDispatchDetails.order_no || 'N/A',
    order_date: commonDispatchDetails.order_date || 'N/A',
    vendor_code: commonDispatchDetails.vendor_code || 'N/A',
    approximate_value: commonDispatchDetails.approximate_value || 'N/A'
  };

  // Fetch incharge data from API
  useEffect(() => {
    const fetchInchargeData = async () => {
      try {
        const response = await fetch('http://localhost:5000/material/assigned-incharges');
        const result = await response.json();
        if (result.status === 'success') {
          // Convert dispatch_date to a comparable format (assuming dispatch_date is in DD.MM.YYYY format)
          const dcDateParts = dispatchDetails.dispatch_date.split('.');
          const dcDate = new Date(`${dcDateParts[2]}-${dcDateParts[1]}-${dcDateParts[0]}`);
          
          // Find matching incharge data where dcDate is between from_date and to_date
          const matchingIncharge = result.data.find(item => {
            const fromDate = new Date(item.from_date);
            const toDate = new Date(item.to_date);
            return dcDate >= fromDate && dcDate <= toDate;
          });

          setInchargeData(matchingIncharge || null);
        } else {
          setError('Failed to fetch incharge data');
        }
      } catch (err) {
        setError('Error fetching data from API');
      } finally {
        setLoading(false);
      }
    };

    if (dispatchDetails.dispatch_date !== 'N/A') {
      fetchInchargeData();
    } else {
      setLoading(false);
      setInchargeData(null);
    }
  }, [dispatchDetails.dispatch_date]);

  // Use dynamic materials only
  const materials = dispatchedMaterials;

  const handleDownloadPDF = () => {
    console.log('Download button clicked');
    const element = document.getElementById('report-content');
    if (!element) {
      console.error('Element with ID "report-content" not found');
      return;
    }
    console.log('Element found, generating PDF...');
    const opt = {
      margin: 0.5,
      filename: `dispatch_report_${dispatchDetails.dc_no}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        onclone: (clonedDoc) => {
          const images = clonedDoc.querySelectorAll('img');
          const promises = Array.from(images).map(img => {
            if (!img.complete) {
              return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              });
            }
            return Promise.resolve();
          });
          return Promise.all(promises);
        }
      },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save().then(() => {
      console.log('PDF generation complete');
    }).catch(err => {
      console.error('PDF generation failed:', err);
    });
  };

  // Determine what to display in the address section
  const renderAddressSection = () => {
    if (loading) {
      return <div>Loading incharge data...</div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    if (!inchargeData) {
      return <div>No site incharges assigned for this date</div>;
    }
    return (
      <div>
        <span className="address-label">To </span>
        <span className="recipient-name">{inchargeData.full_name}</span> 
        <span className="recipient-phone">(PH.No.{inchargeData.mobile})</span><br />
        {inchargeData.department}<br />
         {/* {inchargeData.site_name}<br /> */}
        {inchargeData.current_address}<br />
        GSTIN: {dispatchDetails.recipient_gstin}
      </div>
    );
  };

  return (
    <div className="dispatch-report-container">
      <div className="download-btn-container">
        <button
          onClick={handleDownloadPDF}
          className="download-btn no-print"
        >
          Download as PDF
        </button>
      </div>
      <div id="report-content" className="report-content">
        <table className="main-table">
          <tbody>
            <tr>
              <td colSpan={6} className="header-logo">
                <img src="/logo_abstract.png" alt="Logo" className="logo-img" />
                <span className="company-name">
                  SATHYA HITEC SOLUTIONS LLP
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="company-address">
                222, Chinnammal Nagar, Edayarpalayam, Vadavalli Road, Coimbatore - 641041<br />
                Ph.No. 0422 2401231, 9600555870 E-mail: sathyaec@gmail.com<br />
                FACTORY : BHAGAVATHIPALAYAM, KINATHUKADAVU, COIMBATORE 642 109<br />
                GSTIN: 33ACJFS1582J1ZW
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="document-title">
                DELIVERY CHALLAN
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="address-section">
                {renderAddressSection()}
              </td>
              <td colSpan={3} className="details-section">
                <table className="details-table">
                  <tbody>
                    <tr>
                      <td className="details-label">Delivery challan</td>
                      <td className="details-value"></td>
                    </tr>
                    <tr>
                      <td className="details-label-bold">DC NO.</td>
                      <td className="details-value-bold">{dispatchDetails.dc_no}</td>
                    </tr>
                    <tr>
                      <td className="details-label-bold">DC Date</td>
                      <td className="details-value-bold">{dispatchDetails.dispatch_date}</td>
                    </tr>
                    <tr>
                      <td className="details-label-bold">Your Order No.</td>
                      <td className="details-value">{dispatchDetails.order_no}</td>
                    </tr>
                    <tr>
                      <td className="details-label-bold">Your order date</td>
                      {/* <td className="details-value">{dispatchDetails.order_date}</td> */}
                      <td className="details-value">16.05.2025</td>
                    </tr>
                    <tr>
                      <td className="details-label-bold">Vendor Code</td>
                      <td className="details-value">{dispatchDetails.vendor_code}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="table-header" width="5%">Sl.No</td>
              <td className="table-header" width="32%">Particulars</td>
              <td className="table-header" width="9%">Qty</td>
              <td className="table-header" width="8%">UOM</td>
              <td className="table-header" width="30%">Remarks</td>
            </tr>
            <tr>
              <td className="empty-cell"></td>
              <td className="mtf-work-label" colSpan={5}>MTF Work :</td>
            </tr>
            {materials.length > 0 ? materials.map((material, index) => (
              <tr key={material.id || index}>
                <td className="cell-center">{index + 1}</td>
                <td className="cell-left">
                  {material.item_name || 'N/A'}
                  {material.comp_a_qty !== null && <><br /><span className="component">Comp.A</span></>}
                  {material.comp_b_qty !== null && <><br /><span className="component">Comp.B</span></>}
                  {material.comp_c_qty !== null && <><br /><span className="component">Comp.C</span></>}
                </td>
                <td className="cell-left-bold">
                  <span className="highlighted-qty">{material.total_qty || material.dispatch_qty || material.assigned_quantity || '0'}</span>
                  {material.comp_a_qty !== null && <><br /><span className="component-qty">{material.comp_a_qty}</span></>}
                  {material.comp_b_qty !== null && <><br /><span className="component-qty">{material.comp_b_qty}</span></>}
                  {material.comp_c_qty !== null && <><br /><span className="component-qty">{material.comp_c_qty}</span></>}
                </td>
                <td className="cell-left">
                  {material.uom_name || 'N/A'}
                  {material.comp_a_qty !== null && <><br /><span className="component-uom">{material.uom_name || 'N/A'}</span></>}
                  {material.comp_b_qty !== null && <><br /><span className="component-uom">{material.uom_name || 'N/A'}</span></>}
                  {material.comp_c_qty !== null && <><br /><span className="component-uom">{material.uom_name || 'N/A'}</span></>}
                </td>
                <td className="cell-left">
                  {material.comp_a_remarks && <>{material.comp_a_remarks}<br /></>}
                  {material.comp_b_remarks && <>{material.comp_b_remarks}<br /></>}
                  {material.comp_c_remarks && <>{material.comp_c_remarks}<br /></>}
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="cell-left">No materials available</td>
              </tr>
            )}
            <tr>
              {/* <td colSpan={6} className="approximate-value">
                Approximate Value Rs.{dispatchDetails.approximate_value}/-
              </td> */}
            </tr>
            <tr>
              <td colSpan={6} className="returnable-note">
                The above materials sent for our works contract purpose on returnable basis
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="footer-left">
                <div className="gst-label">GSTIN NO.</div>
                <div className="gst-number">33ACJFS1582J1ZW</div>
                <div>JK Groups</div>
                <div className="jk-gst">GSTIN NO : 33BPIPJ0960C1ZC</div>
              </td>
              <td colSpan={3} className="footer-right">
                <div className="signature-label">for Sathya Hitec Solutions LLP</div>
                <div className="signature-img-container">
                  {/* <img src="./signature.png" alt="Authorised Signatory" className="signature-img" /> */}
                </div>
                <div className="signature-text">Authorised Signatory</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <style>{`
        .dispatch-report-container {
          background-color: #f1f5f9;
          min-height: 100vh;
          padding: 24px;
        }
        .download-btn-container {
          text-align: right;
          margin-bottom: 24px;
        }
        .download-btn {
          background-color: #2563eb;
          color: white;
          padding: 8px 24px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }
        .download-btn:hover {
          background-color: #1d4ed8;
        }
        .report-content {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
          background-color: white;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid #d1d5db;
        }
        .main-table {
          width: 100%;
          border: 1px solid black;
          font-size: 14px;
          border-collapse: collapse;
        }
        .header-logo {
          text-align: center;
          padding-bottom: 8px;
          border: none;
        }
        .logo-img {
          height: 50px;
          display: inline-block;
          vertical-align: middle;
          margin-right: 12px;
        }
        .company-name {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 0.025em;
          color: #0369a1;
          vertical-align: middle;
        }
        .company-address {
          text-align: center;
          font-size: 12px;
          padding-top: 4px;
          padding-bottom: 4px;
          border: none;
          color: #0369a1;
        }
        .document-title {
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          color: #1f2937;
          border: 1px solid black;
          padding-top: 4px;
          padding-bottom: 4px;
          background-color: #e0f2fe;
        }
        .address-section {
          vertical-align: top;
          border: 1px solid black;
          padding: 8px;
          width: 60%;
        }
        .address-label {
          font-weight: 600;
        }
        .recipient-name {
          color: black;
          font-weight: bold;
          margin-left: 8px;
        }
        .recipient-phone {
          font-weight: bold;
          font-size: 12px;
          color: #ef4444;
          padding-left: 50px;
        }
        .details-section {
          vertical-align: top;
          border: 1px solid black;
          padding: 0;
          width: 40%;
        }
        .details-table {
          width: 100%;
          font-size: 12px;
          border: 1px solid black;
          border-collapse: collapse;
        }
        .details-label {
          font-weight: 600;
          border: 1px solid black;
          padding-left: 8px;
          padding-right: 8px;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .details-label-bold {
          font-weight: bold;
          border: 1px solid black;
          padding-left: 8px;
          padding-right: 8px;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .details-value {
          border: 1px solid black;
          padding-left: 8px;
          padding-right: 8px;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .details-value-bold {
          font-weight: bold;
          border: 1px solid black;
          padding-left: 8px;
          padding-right: 8px;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .table-header {
          border: 1px solid black;
          text-align: center;
          font-weight: bold;
          padding: 8px;
          background-color: #7dd3fc;
        }
        .empty-cell {
          padding: 8px;
        }
        .mtf-work-label {
          border: 1px solid black;
          font-size: 14px;
          font-weight: 600;
          color: #dc2626;
        }
        .cell-center {
          border-left: 1px solid black;
          border-right: 1px solid black;
          text-align: center;
          padding: 8px;
        }
        .cell-left {
          border-left: 1px solid black;
          border-right: 1px solid black;
          text-align: left;
          padding: 8px;
          vertical-align: top;
        }
        .cell-left-bold {
          border-left: 1px solid black;
          border-right: 1px solid black;
          text-align: left;
          padding: 8px;
          font-weight: bold;
          vertical-align: top;
        }
        .component {
          padding-left: 10px;
        }
        .component-qty {
          padding-left: 10px;
          display: inline-block;
        }
        .component-uom {
          
          display: inline-block;
        }
        .highlighted-qty {
          background-color: #f8e71c;
          display: inline-block;
          min-width: 40px;
          text-align: center;
        }
        .approximate-value {
          border: 1px solid black;
          text-align: left;
          font-weight: 600;
          padding-left: 8px;
        }
        .returnable-note {
          border: 1px solid black;
          text-align: left;
          padding-left: 8px;
          color: #dc2626;
          font-weight: bold;
          text-decoration: underline;
        }
        .footer-left {
          vertical-align: top;
          width: 60%;
          padding: 8px;
        }
        .gst-label {
          background-color: #bae6fd;
          padding-left: 8px;
          padding-right: 8px;
          padding-top: 4px;
          padding-bottom: 4px;
          border-radius: 4px;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 4px;
        }
        .gst-number {
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 0.05em;
          color: #1e40af;
          margin-bottom: 4px;
        }
        .jk-gst {
          font-size: 12px;
        }
        .footer-right {
          vertical-align: top;
          width: 40%;
          padding: 8px;
          text-align: right;
        }
        .signature-label {
          margin-bottom: 24px;
          margin-top: 8px;
          padding-right: 8px;
        }
        .signature-text {
          font-size: 12px;
          padding-right: 32px;
        }
        .signature-img-container {
          margin-bottom: 4px;
        }
        .signature-img {
          height: 48px;
          display: inline-block;
        }
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DispatchReport;