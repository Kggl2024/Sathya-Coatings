const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController"); // Adjust path to your controller

// Routes for fetching companies, projects, sites, and po_reckoner totals
router.get("/companies", adminController.getCompanies);
router.get("/projects/:companyId", adminController.getProjectsByCompany);
router.get("/sites/:projectId", adminController.getSitesByProject);
router.get("/po-reckoner-totals/:siteId", adminController.getPoReckonerTotals);
router.get("/completion-entries-by-site/:site_id", adminController.getCompletionEntriesBySite);

module.exports = router;