/**
 * 응답값
 *
 * @export
 * @class ErrorDTO
 * @template ErrorDTO
 */
export class ErrorDTO {
  /**
   * 에러코드
   *
   * @type {string}
   * @memberof dtoResponse
   */
  errorCode: number;

  /**
   * 에러 메세지
   *
   * @type {string}
   * @memberof dtoResponse
   */
  errorMsg: string;

  /**
   * 상태 코드
   *
   * @type {number}
   * @memberof dtoResponse
   */
  statusCode: number;
}
