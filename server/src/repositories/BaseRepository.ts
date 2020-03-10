import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export abstract class BaseRepository<T> {
  protected MongooseModel: mongoose.Model<any, {}>;
  constructor(private repositoryName: string, private mongooseScheme: Schema) {}

  public initializeSchema() {
    this.MongooseModel = mongoose.model(
      this.repositoryName,
      this.mongooseScheme,
    );
  }

  public async saveItem(item: T): Promise<void> {
    if (!item) {
      throw new Error('Invalid parameter');
    }
    await this.MongooseModel.create(item);
  }
}
