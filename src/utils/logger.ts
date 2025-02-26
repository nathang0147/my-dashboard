export enum LOG_LEVELS {
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn",
    ERROR = "error",
}

// Get the current environment
const isProduction = process.env.NODE_ENV === "production";

// Function to format log messages with timestamp
const formatMessage = (level: string, ...args: unknown[]) => {
    const timestamp = new Date().toISOString();
    return [`${timestamp} ${level}`, ...args];
};

// Logger object with different levels
const logger = {
    debug: (...args: unknown[]) => {
        if (!isProduction) {
            console.debug(`🔹 [DEBUG]`, ...formatMessage(LOG_LEVELS.DEBUG, ...args));
        }
    },
    info: (...args: unknown[]) => {
        console.info(`ℹ️  [INFO]`, ...formatMessage(LOG_LEVELS.INFO, ...args));
    },
    warn: (...args: unknown[]) => {
        console.warn(`⚠️  [WARN]`, ...formatMessage(LOG_LEVELS.WARN, ...args));
    },
    error: (...args: unknown[]) => {
        console.error(`❌ [ERROR]`, ...formatMessage(LOG_LEVELS.ERROR, ...args));
    },
};

// Export logger and log levels
export { logger};
