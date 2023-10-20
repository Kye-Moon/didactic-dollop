import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://mongo:GLkRXGUN5LiA7hI5vHnx@containers-us-west-118.railway.app:6431',
      ),
  },
];
