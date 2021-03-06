export default interface IRead<T> {

  find(): Promise<T[]>;

  findById(id: string): Promise<T>;
}