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
    
    public function delete_image(Request $request){
        $fileName = $request->imageName;
        $this->deleteFileFromServer($fileName);
        return 'done';
    }
    public function deleteFileFromServer($fileName){
        $filePath =public_path()."\uploads\\".$fileName;
        if(file_exists($filePath)){
            unlink($filePath);
        }
    }
}
