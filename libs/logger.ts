let logger: Logger

export class Logger {
  isActive: boolean
  constructor(isActive: boolean) {
    this.isActive = isActive
  }

  log(where: string, message: string, data?: any): void {
    if (!this.isActive) return
    if (data) {
      console.info(where, message, data)
    }
    console.info(where, message)
  }

  error(where: string, message: string, data?: any): void {
    if (!this.isActive) return
    if (data) {
      console.error(where, message, data)
    }
    console.error(where, message)
  }
}

export function getLogger(): Logger {
  if (logger) return logger
  return (logger = new Logger(true))
}
