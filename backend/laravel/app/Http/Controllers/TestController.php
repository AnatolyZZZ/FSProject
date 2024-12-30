<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function store(Request $request) {
        $request->validate([
                'moment' => 'required|integer',
        ]);
        $moment = $request->input('moment');
        $milliseconds = round(microtime(true) * 1000);
        $total = $milliseconds + $moment;
        $res = $total % 2;
        if ($res == 0) {
            return response()->json([ 
                'message' => 'Test successful', 
                'total_milliseconds' => $total
            ]);
        }
        else {
            return response()->json(['message' => 'Test failed'], 400);
        }
    }
}
