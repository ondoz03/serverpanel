"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.logger = {
    info(message, ...meta) {
        console.log(`[${new Date().toISOString()}] [INFO] ${message}`, ...meta);
    },
    warn(message, ...meta) {
        console.warn(`[${new Date().toISOString()}] [WARN] ${message}`, ...meta);
    },
    error(message, ...meta) {
        console.error(`[${new Date().toISOString()}] [ERROR] ${message}`, ...meta);
    },
    debug(message, ...meta) {
        if (process.env.NODE_ENV !== 'production') {
            console.log(`[${new Date().toISOString()}] [DEBUG] ${message}`, ...meta);
        }
    }
};
