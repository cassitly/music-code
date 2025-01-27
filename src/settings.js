const { existsSync, writeFileSync, readFileSync } = require("fs")
const path = require("path");

const { assets } = require("./generator/bin.pkg");
const getContent = require('./generator/contents.pkg');

const templatePrompt = path.join(assets + "/template-prompt.txt");
const templateSyntax = path.join(assets + "/template-syntaxes.txt");
const settingStyle = path.join(assets + "/settings-style.txt");
const settingPrompt = path.join(assets + "/settings-prompt.txt");

const defaultPrompt = getContent("settings-prompt.txt");
const defaultStyle = getContent("settings-style.txt");

function writeConfig() {
    if (existsSync(templatePrompt)) return false;
    if (existsSync(templateSyntax)) return false;
    if (existsSync(settingStyle)) return false;
    if (existsSync(settingPrompt)) return false;

    writeFileSync(templatePrompt, getContent("template-prompt.txt"), "utf-8");
    writeFileSync(templateSyntax, getContent("template-syntaxes.txt"), "utf-8");
    writeFileSync(settingStyle, defaultStyle, "utf-8");
    writeFileSync(settingPrompt, defaultPrompt, "utf-8");
}

function configure() {
    const template = {
        prompt: readFileSync(templatePrompt, 'utf-8'),
        syntax: readFileSync(templateSyntax, 'utf-8')
    }

    const setting = {
        prompt: readFileSync(settingPrompt, 'utf-8'),
        style: readFileSync(settingStyle, 'utf-8')
    }

    const defaultConfig = {
        prompt: defaultPrompt,
        style: defaultStyle
    }

    const configured = setting.prompt !== defaultConfig.prompt || setting.style !== defaultConfig.style
    if (configured) {
        // pconfigured is for Prompt Configured
        const pconfigured = template.prompt + '\n' + template.syntax + '\nUser Requested:\n' + setting.prompt + '\n' + setting.style;
        return pconfigured
    } else {
        // nconfigured is for Non Configured
        const nconfigured = template.prompt + '\n' + template.syntax;
        return nconfigured
    }
}

module.exports = { writeConfig, configure }