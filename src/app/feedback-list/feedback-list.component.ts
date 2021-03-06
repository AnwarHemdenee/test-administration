import { Component, OnInit } from '@angular/core';
import {FeedbackService} from './../services/feedback.service';
import {Feedback} from '../models/feedback.model';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {
  feedbackList: Feedback[];
  reponse: string;
  constructor(private feedbackService: FeedbackService,
    private toastr: ToastrService) { }

  ngOnInit() {
    var x = this.feedbackService.getData();
    x.snapshotChanges().subscribe(item => {
      this.feedbackList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$userkey"] = element.key;
        this.feedbackList.push(y as Feedback);
      });
    });
  }

  addResponse(key: string){
    // console.log(this.feedbackList.splice);
    this.feedbackService.updateFeedback(key,this.reponse);
    this.toastr.info("Reponse Ajouté avec succes ", "Feedback envoyé");
    this.reponse="Repondre...";
  }


  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.feedbackService.deleteFeedback(key);
      this.toastr.warning("Deleted Successfully", "Feedback deleted");
    }
  }

}
