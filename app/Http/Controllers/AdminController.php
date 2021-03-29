<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public function upload(Request $request){
        $this->validate($request,[
            'file'=>'required|mimes:jpeg,png,jpg'
        ]);
        $picName =  time().'.'.$request->file->extension();
        $request->file->move(public_path('uploads'),$picName);
    
        return $picName;
    }
    
}
