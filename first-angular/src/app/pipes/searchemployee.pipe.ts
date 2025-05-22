import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchemployee'
})
export class SearchemployeePipe implements PipeTransform {

  transform(employees: any[], searchEmployee: string): any[] {

      let findEmployee = searchEmployee?.toLowerCase() || '';
      return employees.filter((employee) => 
        employee && employee.eId.toString()?.toLowerCase().includes(findEmployee) || 
        employee && employee.name?.toLowerCase().includes(findEmployee) || 
        employee && employee.sal.toString()?.toLowerCase().includes(findEmployee) || 
        employee && employee.gender?.toLowerCase().includes(findEmployee)
      );
    }
}
