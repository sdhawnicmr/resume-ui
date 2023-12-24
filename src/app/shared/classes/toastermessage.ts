//import { ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
export class Toastermessage {

    constructor(public toastr: ToastrService) {
        //constructor(private router: Router,private _formBuilder: FormBuilder,private _UserService:UserService) {
        
          //this.toastr.setRootViewContainerRef(vcr);
    }
       
    showSuccess(msg:any) {
        this.toastr.success(msg, 'Success!');
    }
    
    showError(msg:any) {
        this.toastr.error(msg, 'Oops!');
    }
    
    showWarning(msg:any) {
    this.toastr.warning(msg, 'Alert!');
    }
    
    showInfo(msg:any) {
    this.toastr.info(msg);
    }
    
    showCustom(msg:any) {
    //this.toastr.custom('<span style="color: red">'+msg+'</span>', null, {enableHTML: true});
    }
}
