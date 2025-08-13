const db = require('../config/db');

exports.saveCompletionStatus = async (req, res) => {
  try {
    const { rec_id, area_completed, rate, value, created_by } = req.body;

    // Validate inputs (unchanged)
    if (!rec_id || typeof rec_id !== 'number') {
      return res.status(400).json({
        status: 'error',
        message: 'rec_id is required and must be a number',
      });
    }
    if (area_completed === undefined || typeof area_completed !== 'number' || area_completed < 0) {
      return res.status(400).json({
        status: 'error',
        message: 'area_completed is required and must be a non-negative number',
      });
    }
    if (rate === undefined || typeof rate !== 'number' || rate < 0) {
      return res.status(400).json({
        status: 'error',
        message: 'rate is required and must be a non-negative number',
      });
    }
    if (value === undefined || typeof value !== 'number' || value < 0) {
      return res.status(400).json({
        status: 'error',
        message: 'value is required and must be a non-negative number',
      });
    }
    if (!created_by || typeof created_by !== 'number') {
      return res.status(400).json({
        status: 'error',
        message: 'created_by is required and must be a number',
      });
    }

    // Check that rec_id exists in po_reckoner
    const [reckonerRecord] = await db.query(
      'SELECT rec_id FROM po_reckoner WHERE rec_id = ?',
      [rec_id]
    );
    if (reckonerRecord.length === 0) {
      return res.status(400).json({
        status: 'error',
        message: `Invalid rec_id (${rec_id}): record does not exist in po_reckoner`,
      });
    }

    // Check that created_by exists in users
    const [userRecord] = await db.query(
      'SELECT user_id FROM users WHERE user_id = ?',
      [created_by]
    );
    if (userRecord.length === 0) {
      return res.status(400).json({
        status: 'error',
        message: `Invalid created_by (${created_by}): user does not exist`,
      });
    }

    // Check if completion_status record exists
    const [completionRecord] = await db.query(
      'SELECT rec_id FROM completion_status WHERE rec_id = ?',
      [rec_id]
    );

    // Calculate server-side value (for consistency/security)
    const calculatedValue = parseFloat(area_completed) * parseFloat(rate);
    if (Math.abs(calculatedValue - value) > 0.01) {
      return res.status(400).json({
        status: 'error',
        message: `Invalid value: expected ${calculatedValue.toFixed(2)}, received ${value}`,
      });
    }

    // Prepare completion data
    const completionData = {
      rec_id,
      area_completed: parseFloat(area_completed),
      rate: parseFloat(rate),
      value: parseFloat(calculatedValue.toFixed(2)),
      created_by: parseInt(created_by),
      work_status: 'In Progress',
      billing_status: 'Not Billed',
    };

    let result;
    if (completionRecord.length === 0) {
      // If not exists: INSERT instead of returning 404
      [result] = await db.query(
        `
          INSERT INTO completion_status
          (rec_id, area_completed, rate, value, created_by, work_status, billing_status, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
        `,
        [
          completionData.rec_id,
          completionData.area_completed,
          completionData.rate,
          completionData.value,
          completionData.created_by,
          completionData.work_status,
          completionData.billing_status,
        ]
      );
      if (result.affectedRows === 0) {
        return res.status(500).json({
          status: 'error',
          message: `Failed to create completion status for rec_id (${rec_id})`,
        });
      }
      res.status(201).json({
        status: 'success',
        message: 'Completion status created successfully',
        data: completionData,
      });
    } else {
      // If exists: UPDATE
      [result] = await db.query(
        `
          UPDATE completion_status
          SET
            area_completed = ?,
            rate = ?,
            value = ?,
            created_by = ?,
            work_status = ?,
            billing_status = ?,
            updated_at = NOW()
          WHERE rec_id = ?
        `,
        [
          completionData.area_completed,
          completionData.rate,
          completionData.value,
          completionData.created_by,
          completionData.work_status,
          completionData.billing_status,
          completionData.rec_id,
        ]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({
          status: 'error',
          message: `Failed to update: no record found for rec_id (${rec_id})`,
        });
      }
      res.status(200).json({
        status: 'success',
        message: 'Completion status updated successfully',
        data: completionData,
      });
    }
  } catch (error) {
    console.error('Error in saveCompletionStatus:', error);
    if (error.code === 'ER_NO_REFERENCED_ROW_2') {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid rec_id or created_by: referenced record does not exist',
      });
    }
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    });
  }
};


