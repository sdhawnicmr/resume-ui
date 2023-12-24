import { Injectable } from '@angular/core';
// import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  check_user_session(){
    let session_obj:any = JSON.parse(localStorage.getItem('activetUser'));
    // console.log(session_obj);
    if(session_obj && (typeof session_obj == 'object') ){
      // if(session_obj.role == 'dVBsVEpLNlQ0UG4zVFByYXZwRk5kdz09'){ // role == 17
      //if(session_obj.length > 2){
        return true;
      //}else{
       // return false;
      //}
      
    }else{
      return false;
    }
  }

  set_user_session(data){
    localStorage.setItem('activetUser',JSON.stringify(data));
  }

  get_user_session(required_item=''){
    const session_obj:any = JSON.parse(localStorage.getItem('activetUser'));
    if(required_item == ''){
      return session_obj;
    }else{
      if(required_item in session_obj){
          return session_obj.required_item;
      }else{
        return '';
      }
    }
  }

  unset_user_session(item){
    let session_obj:any = JSON.parse(localStorage.getItem('activetUser'));
    if(item == ''){
      localStorage.removeItem('activetUser');
      localStorage.removeItem('ticket');
    }else{
      if(item in session_obj){
          delete session_obj.item;
          localStorage.setItem('activetUser',JSON.stringify(session_obj));
      }else{
        return '';
      }
    }
  }

  destroy_user_session(){
    localStorage.removeItem('activetUser');
    localStorage.removeItem('ticket');
  }

  get_payload_data(item){
    if(this.check_user_session()){
      // console.log(this._SessionService.get_user_session());
        // let session_obj:any = JSON.parse(this._SessionService.get_user_session());
        let session_obj:any = this.get_user_session();
        // const tokenPayload:any = decode(session_obj.token);
        // if(tokenPayload[item]){
        //   return tokenPayload[item];
        // }else{
        //   return '';
        // }
    }else{
      return '';
    }
  }
}
