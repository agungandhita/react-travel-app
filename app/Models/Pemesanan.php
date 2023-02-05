<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemesanan extends Model
{
    use HasFactory;

    protected $guarded = [
        'pemesanan_id',
     
    ];


    public function user(){
        return $this->belongsTo(User::class);
    }

    public function wisata(){
        return $this->hasMany(Wisata::class);
    }
}
