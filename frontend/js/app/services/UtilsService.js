'use strict';

angular.module('Rubikar').factory('UtilsService', 
[
  function(){
    return{
      /**
      * Getting current quarter from company's policy
      */
      getCurrentQuarter: function(){
        var nowDate = new Date();
        var nowYear = nowDate.getFullYear();
        var nowMonth = nowDate.getMonth();
        var nowQuarter = 'Q1';
        if ( nowMonth < 3 )
        {
          nowQuarter = 'Q3';
        }
        else if ( nowMonth < 6 )
        {
          nowQuarter = 'Q4';
        }
        else if ( nowMonth < 9 )
        {
          nowQuarter = 'Q1';
          nowYear++;
        }
        else if ( nowMonth < 12)
        {
          nowQuarter = 'Q2';
          nowYear++;
        }
        return nowYear.toString() + nowQuarter;
      }
    };
  }
]);