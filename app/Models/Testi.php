<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testi extends Model
{
    use HasFactory;

    protected $guarded = [
        'testi_id'
    ];

    public function wisata(){
        return $this->belongsTo(Wisata::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    
}
