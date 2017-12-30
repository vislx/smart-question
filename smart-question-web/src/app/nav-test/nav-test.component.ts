import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nav-test',
  templateUrl: './nav-test.component.html',
  styleUrls: ['./nav-test.component.css']
})
export class NavTestComponent implements OnInit {
  
  @Input() total_questions_n: number;
  @Input() current_question_i: number;

  constructor() { }

  ngOnInit() {
  }

}
