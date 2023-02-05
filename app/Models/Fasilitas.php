<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fasilitas extends Model
{
    use HasFactory;

    protected $guarded = [
        'fasilitas_id'
    ];

    public function wisata(){
        return $this->belongsTo(Wisata::class);
    }
}