import winston from "winston"


const customLevelsGradeLogger ={
    levels : {
        emerg : 0,
        fatal : 1,
        error : 2,
        warning :3,
        info : 4,
        debug : 5,
        http : 6
    },
    colors:{
        emerg : "red",
        fatal : "yellow",
        error : "black",
        warning : "magenta",
        info : "cyan",
        debug : "black",
        http : "green"

    }
}

const logger = winston.createLogger({
    levels: customLevelsGradeLogger.levels,
    transports: [
      new winston.transports.Console({
        level: process.env.NODE_ENV === "production" ? "info" : "debug",
  
        format: winston.format.combine(
          winston.format.colorize({ colors: customLevelsGradeLogger.colors }),
          winston.format.simple()
        ),
      }),
      new winston.transports.File({
        filename: "./errors.log",
        level: process.env.NODE_ENV === "production" ? "error" : "debug",
        format: winston.format.simple(),
      }),
    ],
  });
  
  export const addLogger = (req, res, next) => {
    req.logger = logger;
    req.logger.http(
      `${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`
    );
    next();
  };
  
  export { logger };