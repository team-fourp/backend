import { TransportType } from '@iti-tic/mystica';

export const loggerConfig = {
  transport: TransportType.DAILY_ROTATE_FILE,
  options: {
    filenamePattern: 'logs/%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: false,
    maxSize: '100m',
    maxFiles: '30d'
  }
};
