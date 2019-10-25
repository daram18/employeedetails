import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
    editField: string;
    employeeList: Array<any> = [
      { id: 1, firstname: 'Naresh', lastname: 'daram', email: 'vega@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000' },
      { id: 2, firstname: 'Hari ', lastname: 'Gadela', email: 'cortez@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000'  },
      { id: 3, firstname: 'Ramaraju', lastname: 'USS', email: 'Isotronic@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000'  },
      { id: 4, firstname: 'Raja ', lastname: 'Shekar', email: 'Dee@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000'  },
      { id: 5, firstname: 'Santhosh ', lastname: 'Dandaveni', email: 'Port@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000' },
      
    ];
  
    awaitingemployeeList: Array<any> = [
      { id: 6, firstname: 'Bharat ', lastname: 'Ch', email: 'Cla@gmail.com', job: 'Developer', hiringdate: '18/06/2011' , department:'Development', salary:'40000' },
      { id: 7, firstname: 'Ananda ', lastname: 'A', email: 'Lou@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000' },
      { id: 8, firstname: 'John ', lastname: 'Derp', email: 'Dping@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000'  },
      { id: 9, firstname: 'Anastasia ', lastname: 'John', email: 'Aj@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000'  },
      { id: 10, firstname: 'John ', lastname: 'Maklowicz', email: 'Make@gmail.com', job: 'Developer', hiringdate: '18/06/2011', department:'Development', salary:'40000'  },
    ];
  
    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.employeeList[id][property] = editField;  
    }
  
    remove(id: any) {
      this.awaitingemployeeList.push(this.employeeList[id]);
      this.employeeList.splice(id, 1);
    }
  
    add() {
      if (this.awaitingemployeeList.length > 0) {
        const employee = this.awaitingemployeeList[0];
        this.employeeList.push(employee);
        this.awaitingemployeeList.splice(0, 1);
      }
    }
  
    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }
  }
 