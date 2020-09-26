select "c"."name" as "country",
       count("cities"."name") as "cities"
  from "countries" as "c"
  join "cities" using ("countryId")
  group by "c"."name";
