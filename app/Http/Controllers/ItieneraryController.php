<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItieneraryRequest;
use App\Http\Requests\UpdateItieneraryRequest;
use App\Models\Itienerary;

class ItieneraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreItieneraryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreItieneraryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Itienerary  $itienerary
     * @return \Illuminate\Http\Response
     */
    public function show(Itienerary $itienerary)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Itienerary  $itienerary
     * @return \Illuminate\Http\Response
     */
    public function edit(Itienerary $itienerary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateItieneraryRequest  $request
     * @param  \App\Models\Itienerary  $itienerary
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateItieneraryRequest $request, Itienerary $itienerary)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Itienerary  $itienerary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Itienerary $itienerary)
    {
        //
    }
}
