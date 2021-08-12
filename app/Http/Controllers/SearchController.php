<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $posts = DB::table('posts')
         ->when($request->get('address') !== "Trên cả nước", function ($query) use ($request) {
             return $query->where("address", $request->get('address'));
         }, function ($query, $request) {
             return $query->select('posts.*');
         })
         ->when($request->get('type_room') !== "Chưa xác định", function ($query) use ($request) {
             return $query->where("type_room", $request->type_room);
         }, function ($query) {
             return $query->select('posts.*');
         })
          ->when($request->cost, function ($query, $cost) {
              return $query->where('cost', '>=', $cost);
          })
         ->when($request->area, function ($query, $area) {
             return $query->where('area', '>=', $area);
         })
          ->get();

         return $posts; 
       
    }
}
