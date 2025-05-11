import { resolve } from 'node:path';

const { createLogger, format, transports } = require('winston');
const { combine, printf, timestamp, colorize } = format;

const log = printf(({ level, message, _, timestamp }) => {
  return `${level} ${timestamp} : ${message}`;
});

const logFile = combine(timestamp(), log);
const logConsole = combine(colorize(), logFile);

const logger = createLogger({
  level: 'info',
  format: logFile,
  transports: [new transports.File({ filename: resolve(__dirname, '..', 'logs/winston.log') })],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({ format: logConsole }));
}

module.exports = logger;
