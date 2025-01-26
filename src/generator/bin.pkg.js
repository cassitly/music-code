const { existsSync, mkdirSync, writeFileSync } = require("fs");
const path = require("path")

const assets = path.join(__dirname, "../../assets");
const packages = path.join(__dirname, "../../packages");

if (existSync(assets)) return false;
if (existSync(packages)) return false;

mkdirSync(assets);
mkdirSync(packages)

// Write Downloader for github repository: Animation-Creator
