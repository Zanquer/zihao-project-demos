const desk = new URL("../", location.href);
desk.search = location.search;
const topic = location.hash.slice(1);
desk.hash = ["funding", "earnings", "macro"].includes(topic) ? "ai/" + topic : "ai";
location.replace(desk.href);
