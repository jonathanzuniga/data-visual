<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		// $this->call('UserTableSeeder');

		$faker = Faker\Factory::create('es_ES');

	  foreach(range(1, 5000) as $index) {
	      $user = new User;
	      $user->email = $faker->email;
	      $user->first_name = $faker->firstName($gender = null);
	      $user->last_name = $faker->lastName;
	      $user->deleted_at = $faker->optional()->dateTimeBetween($startDate = 'now', $endDate = 'now');
	      $user->created_at = new DateTime;
	      $user->updated_at = new DateTime;
	      $user->save();
	  }
	}

}
