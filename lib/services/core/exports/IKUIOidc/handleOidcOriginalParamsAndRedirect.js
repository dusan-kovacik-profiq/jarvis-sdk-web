const { setOidcOriginalParams } = require("../../lib/storage");
const queryString = require("query-string");

/**
 * This function should be called after the user is redirected to the login application. The SDK extracts the login
 * challenge from the URL and other params and keeps.
 */
const handleOidcOriginalParamsAndRedirect = (redirectTo = "/login") => {
  const parsedQuery = queryString.parse(window.location.search);

  setOidcOriginalParams(parsedQuery);
  window.location.pathname = redirectTo;
};

module.exports = handleOidcOriginalParamsAndRedirect;
