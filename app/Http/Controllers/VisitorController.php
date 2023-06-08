<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class VisitorController extends Controller
{
    public function index(Request $request)
    {
        if ($request->show) {
            $data = collect(Visitor::all());
            $visitor = ['data' => $data];
        } else {
            $visitor = collect(Visitor::paginate(10));
        }

        $data = [
            'title' => 'Visitor',
            'visitor' => $visitor
        ];
        return Inertia::render('Admin/Visitor/Index', $data);
    }

    public function create()
    {
        $data = ['title' => 'Tambah Visitor'];
        return Inertia::render('Admin/Visitor/Create', $data);
    }
    public function edit(Visitor $visitor)
    {
        $data = [
            'title' => 'Edit Visitor',
            'visitor' => $visitor
        ];
        return Inertia::render('Admin/Visitor/Edit', $data);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'organization' => 'required',
            'position_title' => 'required',
            'country' => 'required',
            'attendance_type' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
        ]);

        DB::beginTransaction();
        try {
            $store = Visitor::create($validatedData);
            if (!$store) return redirect()->back()->with('message', 'Server Error. Registration Failed');

            DB::commit();
            return redirect()->back()->with('message', 'Registration was successful');
        } catch (Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('message', 'Server Error. Registration Failed');
        }
    }

    public function update($id, Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'organization' => 'required',
            'position_title' => 'required',
            'country' => 'required',
            'attendance_type' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
        ]);
        DB::beginTransaction();
        try {
            $visitor = Visitor::where('id', $id)->first();
            $visitor->update($validatedData);

            DB::commit();
            return redirect('/visitor')->with('message', 'Update data pengunjung berhasil');
        } catch (Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('message', 'Kesalahan Server. Update data pengunjung gagal');
        }
    }

    public function destroy(Visitor $visitor)
    {
        $delete = $visitor->delete();
        if (!$delete) return redirect()->back()->with('message', 'Kesalahan Server. Hapus data pengunjung gagal');

        return Inertia::location('/visitor');
    }
}