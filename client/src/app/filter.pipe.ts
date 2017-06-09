import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {

  transform(reviews: any, usrn: any): any {
    // Check if search term is undefined
    if (usrn === undefined) return reviews;
    if (reviews === undefined) return [];

    // Return updated review list
    return reviews.filter(function(review){
      return review.username.toLowerCase().includes(usrn.toLowerCase());
    })
  }

}
