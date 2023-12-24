import { Injectable } from '@angular/core';
import { CallApiService } from '../../shared/services/call-api.service';
import * as constants from '../../shared/helpers/constants';
@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private _CallApiService:CallApiService) { }  
}
