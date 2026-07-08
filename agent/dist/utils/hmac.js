"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHmac = generateHmac;
exports.verifyPlatformSignature = verifyPlatformSignature;
const crypto_1 = __importDefault(require("crypto"));
const config_1 = require("../config");
function generateHmac(signable) {
    return crypto_1.default.createHmac('sha256', config_1.config.agentToken).update(signable).digest('hex');
}
function verifyPlatformSignature(signable, signature) {
    if (!signature || !signable) {
        return false;
    }
    const expected = generateHmac(signable);
    try {
        return crypto_1.default.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
    }
    catch (e) {
        return false;
    }
}
