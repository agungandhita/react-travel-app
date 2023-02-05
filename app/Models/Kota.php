<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kota extends Model
{
    use HasFactory;

    protected $guarded = [
        'kota_id',
        
    ];
    public function wisata(){
        return $this->hasMany(Wisata::class);
    }
}
