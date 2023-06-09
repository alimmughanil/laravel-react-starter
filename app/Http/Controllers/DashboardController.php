<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $data = [
            'title' => 'Dashboard'
        ];
        return Inertia::render('Admin/Dashboard/Index', $data);
    }
}