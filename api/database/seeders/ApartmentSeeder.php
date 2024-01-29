<?php

namespace Database\Seeders;

use App\Models\Apartment;
use App\Models\Flat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApartmentSeeder extends Seeder
{
    private $flats = [
        '101',
        '102',
        '201',
        '202',
        '301',
        '302',
        '401',
        '402',
    ];
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $northPark = Apartment::create(['name' => 'North Park Manor']);

        foreach ($this->flats as $flat) {
            Flat::create(['name' => $flat, 'apartment_id' => $northPark->id]);
        }

        $fisGuard = Apartment::create(['name' => 'Fisgard House']);
        //        $flat->apartment->attach($northPark);

        foreach ($this->flats as $flat) {
            Flat::create(['name' => $flat, 'apartment_id' => $fisGuard->id]);
        }
    }
}
