// 全局http请求封装

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private message: NzMessageService) { }

  // 示例方法：执行GET请求
  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options).pipe(
      catchError(this.handleError) // 捕获错误并处理
    );
  }

  // 示例方法：执行POST请求
  post(url: string, data: any, options?: any): Observable<any> {
    // 添加Token到请求头
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    options = { headers: headers, ...options };

    return this.http.post(url, data, options).pipe(
      map((response: any) => {
        // 处理正常返回结果
        return this.handleSuccess(response);
      }),
      catchError(this.handleError) // 捕获错误并处理
    );
  }
  // 处理请求正常时，异常code
  private handleSuccess=(response: any)=> {
    if (response.code === 500) {
      this.message.error(response.data || '系统错误!');
      return false;
    }
    return response
  }
  // 错误处理方法
  private handleError = (error: HttpErrorResponse): Observable<any> => {
  if (error.error instanceof ErrorEvent) {
    // 客户端或网络错误
    console.error('An error occurred:', error.error.message);
  } else {
    // 后端返回错误码
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  this.message.error('系统错误!');
  // 返回一个可观察对象，以传播错误
  return throwError('请求失败');
}
}
