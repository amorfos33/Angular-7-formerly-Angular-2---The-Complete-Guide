import { Component} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AcountService } from '../acount.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  

  constructor(private loggingService: LoggingService, private accountService : AcountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
