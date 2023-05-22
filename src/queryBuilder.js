/**
 *  Creates a SQL INSERT statement.
 * ! This function is vulnerable to SQL injection attacks.
 * @param {string} tableName
 * @param {{
 *  [key: string]: value
 * }} data Key-value pair where the key is the table column and the value is the value to insert
 */

function jsToSqlType(value) {
  if (typeof value === "string") {
    return `'${value.replace("'", "''")}'`;
  }
  // for true or false values
  if (typeof value === "boolean") {
    return value ? "TRUE" : "FALSE";
  }
  // for dates
  if (typeof value === "object" && value instanceof Date) {
    // convert js iso string to sql iso string
    return `STR_TO_DATE('${value.toISOString()}', '%Y-%m-%dT%H:%i:%s.%fZ')`;
  }

  // for nulls or undefined
  if (value === null || value === undefined) {
    return "NULL";
  }
  return value;
}

function buildInsertStatement(tableName, data) {
  const columns = Object.keys(data);
  const values = Object.values(data);

  const columnString = columns.join(", ");
  const valueString = values.map(jsToSqlType).join(", ");

  const statement = `INSERT INTO ${tableName} (${columnString}) VALUES (${valueString});`;

  return statement;
}

function buildDeleteStatement(tableName, data) {
  const columns = Object.keys(data);
  const values = Object.values(data);

  const columnString = columns.join(", ");
  const valueString = values.map(jsToSqlType).join(", ");

  const statement = `DELETE FROM ${tableName} WHERE (${columnString}) = (${valueString});`;

  return statement;
}

module.exports = {
  buildInsertStatement,
  buildDeleteStatement,
};
