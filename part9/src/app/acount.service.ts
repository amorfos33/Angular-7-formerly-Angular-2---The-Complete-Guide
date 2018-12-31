export class AcountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    addAcount(name: string, status: string){
        this.accounts.push({name: name , status: status});
    }
    updateAcount(id: number, status: string){
        this.accounts[id].status=status;
    }
}