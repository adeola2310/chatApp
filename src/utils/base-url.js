let baseURL;

/***
 *
 * Url specified for a particular mode eg staging, production, beta
 */

if (window.location.href.includes("localhost")) {
    baseURL = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0";
}
if (window.location.href.includes("netlify")) {
    baseURL = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0";
}

export  { baseURL };
