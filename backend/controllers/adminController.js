const db = require("../config/db"); // Adjust path to your database configuration

// Fetch all companies
exports.getCompanies = async (req, res) => {
  try {
    const [companies] = await db.query("SELECT company_id, company_name FROM company");
    res.status(200).json({ success: true, data: companies });
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ success: false, message: "Failed to fetch companies" });
  }
};

// Fetch projects by company ID
exports.getProjectsByCompany = async (req, res) => {
  const { companyId } = req.params;
  try {
    const [projects] = await db.query(
      "SELECT pd_id, project_name FROM project_details WHERE company_id = ?",
      [companyId]
    );
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ success: false, message: "Failed to fetch projects" });
  }
};

// Fetch sites by project ID
// Updated backend module
exports.getSitesByProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    const [sites] = await db.query(
      "SELECT sd.site_id, sd.site_name, sd.po_number, sd.start_date, l.location_name " +
      "FROM site_details sd " +
      "LEFT JOIN location l ON sd.location_id = l.location_id " +
      "WHERE sd.pd_id = ?",
      [projectId]
    );
    res.status(200).json({ success: true, data: sites });
  } catch (error) {
    console.error("Error fetching sites:", error);
    res.status(500).json({ success: false, message: "Failed to fetch sites" });
  }
};
// exports.getPoReckonerTotals = async (req, res) => {
//   const { siteId } = req.params;
//   try {
//     const [totals] = await db.query(
//       "SELECT SUM(po_quantity) AS total_po_quantity, SUM(rate) AS total_rate FROM po_reckoner WHERE site_id = ?",
//       [siteId]
//     );
//     if (totals.length === 0 || totals[0].total_po_quantity === null) {
//       return res.status(404).json({ success: false, message: "No data found for the site" });
//     }
//     const total_po_quantity = parseFloat(totals[0].total_po_quantity) || 0;
//     const total_rate = parseFloat(totals[0].total_rate) || 0;
//     const total_value = total_po_quantity * total_rate;
//     res.status(200).json({ success: true, data: { total_po_quantity, total_rate, total_value } });
//   } catch (error) {
//     console.error("Error fetching po_reckoner totals:", error);
//     res.status(500).json({ success: false, message: "Failed to fetch po_reckoner totals" });
//   }
// };

exports.getPoReckonerTotals = async (req, res) => {
  const { siteId } = req.params;
  const { categoryId } = req.query; // Optional categoryId from frontend
  try {
    // Fetch overall totals
    const [totals] = await db.query(
      "SELECT SUM(po_quantity) AS total_po_quantity, SUM(rate) AS total_rate FROM po_reckoner WHERE site_id = ?",
      [siteId]
    );
    if (totals.length === 0 || totals[0].total_po_quantity === null) {
      return res.status(404).json({ success: false, message: "No data found for the site" });
    }
    const total_po_quantity = parseFloat(totals[0].total_po_quantity) || 0;
    const total_rate = parseFloat(totals[0].total_rate) || 0;
    const total_value = total_po_quantity * total_rate;

    // Fetch category and subcategory details with individual po_reckoner records
    let categoryQuery = `
      SELECT 
        ic.category_name,
        isc.subcategory_name,
        pr.po_quantity,
        pr.rate,
        pr.value
      FROM po_reckoner pr
      JOIN item_subcategory isc ON pr.subcategory_id = isc.subcategory_id
      JOIN item_category ic ON pr.category_id = ic.category_id
      WHERE pr.site_id = ?
    `;
    const queryParams = [siteId];

    if (categoryId) {
      categoryQuery += " AND pr.category_id = ?";
      queryParams.push(categoryId);
    }

    const [records] = await db.query(categoryQuery, queryParams);

    // Group records by category and subcategory
    const categoryMap = new Map();
    records.forEach(record => {
      const { category_name, subcategory_name, po_quantity, rate, value } = record;
      if (!categoryMap.has(category_name)) {
        categoryMap.set(category_name, {
          category_name,
          subcategories: []
        });
      }
      categoryMap.get(category_name).subcategories.push({
        subcategory_name,
        po_quantity: parseFloat(po_quantity) || 0,
        rate: parseFloat(rate) || 0,
        value: parseFloat(value) || 0
      });
    });

    // Convert Map to array for response
    const subcategoryTotals = Array.from(categoryMap.values());

    // Prepare the response
    const responseData = {
      total_po_quantity,
      total_rate,
      total_value,
      subcategory_totals: subcategoryTotals
    };

    res.status(200).json({ success: true, data: responseData });
  } catch (error) {
    console.error("Error fetching po_reckoner totals:", error);
    res.status(500).json({ success: false, message: "Failed to fetch po_reckoner totals" });
  }
};

exports.getCompletionEntriesBySite = async (req, res) => {
  try {
    const { site_id } = req.params;
    const { start_date, end_date } = req.query;

    if (start_date && !/^\d{4}-\d{2}-\d{2}$/.test(start_date)) {
      return res.status(400).json({
        status: "error",
        message: "start_date must be in YYYY-MM-DD format",
      });
    }
    if (end_date && !/^\d{4}-\d{2}-\d{2}$/.test(end_date)) {
      return res.status(400).json({
        status: "error",
        message: "end_date must be in YYYY-MM-DD format",
      });
    }
    if (start_date && end_date && start_date > end_date) {
      return res.status(400).json({
        status: "error",
        message: "start_date cannot be later than end_date",
      });
    }

    let query = `
      SELECT 
        ic.category_name,
        isc.subcategory_name,
        DATE_FORMAT(ceh.entry_date, '%Y-%m-%d') as entry_date,
        ceh.entry_id,
        ceh.area_added,
        ceh.rate,
        ceh.value_added,
        ceh.created_by,
        DATE_FORMAT(CONVERT_TZ(ceh.created_at, '+00:00', '+05:30'), '%Y-%m-%d') as created_date,
        DATE_FORMAT(CONVERT_TZ(ceh.created_at, '+00:00', '+05:30'), '%H:%i:%s') as created_time
      FROM completion_entries_history ceh
      JOIN po_reckoner pr ON ceh.rec_id = pr.rec_id
      JOIN item_category ic ON pr.category_id = ic.category_id
      JOIN item_subcategory isc ON pr.subcategory_id = isc.subcategory_id
      WHERE pr.site_id = ?
    `;
    const queryParams = [site_id];

    if (start_date) {
      query += ' AND ceh.entry_date >= ?';
      queryParams.push(start_date);
    }
    if (end_date) {
      query += ' AND ceh.entry_date <= ?';
      queryParams.push(end_date);
    }

    query += ' ORDER BY ic.category_name, isc.subcategory_name, ceh.entry_date, ceh.created_at';

    const [rows] = await db.query(query, queryParams);

    const groupedData = [];
    const categoryMap = new Map();

    rows.forEach(row => {
      const { category_name, subcategory_name, entry_date, created_date, created_time, ...entry } = row;

      let category = categoryMap.get(category_name);
      if (!category) {
        category = { category_name, subcategories: [] };
        categoryMap.set(category_name, category);
        groupedData.push(category);
      }

      let subcategory = category.subcategories.find(sc => sc.subcategory_name === subcategory_name);
      if (!subcategory) {
        subcategory = { subcategory_name, entries_by_date: [] };
        category.subcategories.push(subcategory);
      }

      let dateEntry = subcategory.entries_by_date.find(de => de.entry_date === entry_date);
      if (!dateEntry) {
        dateEntry = { entry_date, entries: [] };
        subcategory.entries_by_date.push(dateEntry);
      }

      dateEntry.entries.push({
        entry_id: row.entry_id,
        area_added: parseFloat(row.area_added),
        rate: parseFloat(row.rate),
        value_added: parseFloat(row.value_added),
        created_by: row.created_by,
        created_date: row.created_date,
        created_time: row.created_time
      });
    });

    res.status(200).json({
      status: "success",
      data: groupedData
    });
  } catch (error) {
    console.error("Error fetching completion entries:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch completion entries",
      error: error.message,
    });
  }
};