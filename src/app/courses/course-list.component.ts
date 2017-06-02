import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { store, filterCourses } from '../store';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  filteredCourses = [];

  constructor(private _courseService: CourseService) { }

  
  // dispatches new event whenever filter search text is changed
  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    store.dispatch(filterCourses(searchText));
  }

  // this function receives observations from store after reducer applied
  updateFromState() {
    const  allState  = store.getState();
    this.filteredCourses = allState.filteredCourses; 
  }

  ngOnInit() {
    this.updateFromState();  //establish initial state
    store.subscribe( () => {
      this.updateFromState();  //process observation from store after reducer function has been applied. 
    })
  //  componentHandler.upgradeDom();
  }
}
