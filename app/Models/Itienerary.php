<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Itienerary extends Model
{
    use HasFactory;

    protected $guarded = [
        'itenerary_id'
    ];

    public function wisata(){
        return $this->belongsTo(Wisata::class);
    }
}
