<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;

class ProductController extends Controller
{
    function addproduct(Request $request)
    {

        $product = new Product;
        $product->name = $request->input('name');
        $product->file_path = $request->file('file')->store('products');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->save();
        return $product;
    }
    function getlist()
    {
        return Product::all();
    }
    function delete($id)
    {
        $product = Product::where('id', $id)->delete();
        if ($product == true)
            return response(['Success' => ['Product Deleted']]);
        else
            return response(['Error' => ['Error Occured while deleting']]);
    }

    function getproduct($id)
    {
        return Product::find($id);
    }

    function updproduct($id, Request $request)
    {
        // return $request->input();
        $product = Product::find($id);
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        if ($request->file('file')) {
            $product->file_path = $request->file('file')->store('products');
        }
        $product->price = $request->input('price');
        $product->save();
        return $product;
    }

    function search($key)
    {
        $product = Product::where('name','LIKE',"%$key%")->get();
        return $product;
    }
}
