<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
   public function register(Request $request)
   {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return $user;
   }
   // Login API from react E-comm
   public function login(Request $request)
   {  
      $user = User::where('email',$request->email)->first();
      if(!$user || !Hash::check($request->password,$user->password))
      {
         return response(['error'=>['User Credentials not matched']]);
      }
      else
      {
         return $user;
      }
   }
}
