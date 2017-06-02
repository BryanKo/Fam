import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(reviews: any, usrn: any): any {
    // check if search term is undefined
    if (usrn === undefined) return reviews;
    // return updated review list
    return reviews.filter(function(review){
      return review.username.toLowerCase().includes(usrn.toLowerCase());
    })
  }

}
