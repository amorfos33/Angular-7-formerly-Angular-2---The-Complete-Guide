import { Component,  Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AcountService } from '../acount.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 

  constructor(private loggingService: LoggingService, private accountService: AcountService){}
  onSetTo(status: string) {
    this.accountService.updateAcount(this.id,status);
    this.loggingService.logStatusChange(status);
  }
}
