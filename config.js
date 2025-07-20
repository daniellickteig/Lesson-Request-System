/**
 * Reads key-value pairs from the Config sheet into an object
 * Expected structure: Column A = key, Column B = value
 */
function getSettings() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Config");
  const data = sheet.getRange("A2:B").getValues();
  const settings = {};
  data.forEach(([key, value]) => {
    if (key) settings[key.trim()] = value;
  });
  return settings;
}

/**
 * Gets a single config value
 */
function getSetting(key) {
  return getSettings()[key] || "";
}
