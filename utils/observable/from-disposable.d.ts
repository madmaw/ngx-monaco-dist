import { Observable } from 'rxjs/Observable';
/**
 * Create an observable from a disposable.
 */
export declare function fromDisposable<T>(source: (listener: (e: T) => void) => monaco.IDisposable): Observable<T>;
