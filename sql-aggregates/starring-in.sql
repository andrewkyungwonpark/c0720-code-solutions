select "c"."name" as "category",
      count("filmCategory".*) as "numberOfMovies"
  from "categories" as "c"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa'
  group by "c"."categoryId";
