// interfaces/common-response.interface.ts
export interface CommonResponse<T> {
  statusCode: number;
  data: T;
  message: string;
}
