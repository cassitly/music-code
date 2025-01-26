const { existsSync, mkdirSync, writeFileSync } = require("fs");
const path = require("path")

const assets = path.join(__dirname, "../../assets");
const packages = path.join(__dirname, "../../packages");

if (existsSync(assets)) return false;
if (existsSync(packages)) return false;

mkdirSync(assets);
mkdirSync(packages)

// Write Downloader for github repository: Animation-Creator
