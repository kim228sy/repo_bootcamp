import dns from "dns/promises";

const ipNaver = await dns.lookup("naver.com");
console.log("ipNaver", ipNaver);
const ipGoogle = await dns.lookup("google.com");
console.log("ipGoogle", ipGoogle);
