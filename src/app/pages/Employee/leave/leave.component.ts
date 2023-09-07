import { Component } from '@angular/core';
import { allowContextMenu } from '@fullcalendar/core/internal';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {
  dt = new Date()

leave:any = {
startdate: null,
enddate:null,
message:null,
days:0
}

startD(date:any){
  this.leave.startdate = date.target.value
}

endD(date:any){
  this.leave.enddate = date.target.value
}

}