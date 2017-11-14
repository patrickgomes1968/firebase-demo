import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms/src/model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: AngularFireList<any>;
  courses$: Observable<any[]>;
  // courses: any[];
  // subscription: Subscription;

  constructor(private db: AngularFireDatabase) {
    this.courses = db.list('/courses');
    this.courses$ = this.courses.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    // this.subscription = db.list('/courses').valueChanges()
    //   .subscribe(courses => { //     this.courses = courses; //     console.log(this.courses);
    //   });
  }

  addCourse(formObject) {
    this.courses.push(formObject);
    console.log(formObject);
  }

  deleteCourse(course) {
    console.log(course.$key);
    // this.courses.remove(course);
    this.db.object('/courses/' + course.$key).remove();
  }

  touchedAndInvalid(control: FormControl) {
    return (!control.valid && control.touched);
  }

  
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
