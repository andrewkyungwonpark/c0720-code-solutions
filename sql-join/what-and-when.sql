select "f"."releaseYear",
       "f"."title",
       "c"."name" as "category"
  from "films" as "f"
  join "filmCategory" using ("filmId")
  join "categories" as "c" using ("categoryId")
  where "title" = 'Boogie Amelie';
