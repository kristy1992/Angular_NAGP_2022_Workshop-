import { Component } from '@angular/core';
import { distinctUntilChanged, filter, from, map, Observable, of, reduce, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RoutingDemo';

  sub: Subscription = new Subscription();

  obs = new Observable<any>((observer) => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
  });

  data = [];

  ngOnInit() {
    // // of 
    // const observable = of(10,20,30,40);
    // observable.subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => console.error(e),
    //   complete: () => console.log('complete'),
    // });

    // // from 
    // const array = [10,20,30,40];
    // const observable2 = from(array);
    // observable2.subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => console.error(e),
    //   complete: () => console.log('complete'),
    // });

    // filter 
    const observable3 = from([10,20,30,40]);
    observable3.pipe(filter(value=>value%3 ==0)).subscribe(x=> console.log(x));

    // map 
    const observable4 = from([10,20,30,40]);
    observable3.pipe(map(value=>value*10)).subscribe(x=> console.log(x));

    
    // // reduce 
    // const observable4 = from([10,20,30,40]);
    // observable4.pipe(reduce((acc, value) => acc+value, 0)).subscribe(x=> console.log(x));

    // // reduce 
    // const observable4 = from([10,20,30,40]);
    // observable4.pipe(reduce((acc, value) => acc+value, 0)).subscribe(x=> console.log(x));

    // // distinctUntilChanged
    // of(1, 1, 1, 2, 2, 2, 1, 1, 3, 3)
    //   .pipe(distinctUntilChanged()).subscribe(console.log);

    this.sub = this.obs.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.log('complete'),
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
