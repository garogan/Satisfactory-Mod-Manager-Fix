"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstalls = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const platform_folders_1 = require("platform-folders");
const logging_1 = require("../../logging");
const satisfactoryInstall_1 = require("../../satisfactoryInstall");
const EpicManifestsFolder = path_1.default.join(platform_folders_1.getDataFolders()[0], 'Epic', 'EpicGamesLauncher', 'Data', 'Manifests');
const UEInstalledManifest = path_1.default.join(platform_folders_1.getDataFolders()[0], 'Epic', 'UnrealEngineLauncher', 'LauncherInstalled.dat');
function getInstalls() {
    let foundInstalls = [];
    const invalidInstalls = [];
    foundInstalls.push(new satisfactoryInstall_1.SatisfactoryInstall("Satisfactory", "155350", "master", "D:\\Games\\Satisfactory", "start D:\\Games\\Satisfactory\\FactoryGame.exe"));
    
    return { installs: foundInstalls, invalidInstalls };
}
exports.getInstalls = getInstalls;
//# sourceMappingURL=epic.js.map
