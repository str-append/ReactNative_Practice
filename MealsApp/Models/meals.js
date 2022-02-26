class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageurl,
    duration,
    steps,
    isGlutenFree,
    isVegan,
    isVegeterain,
    isLactosFree,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageurl = imageurl;
    this.duration = duration;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegeterain = isVegeterain;
    this.isLactosFree = isLactosFree;
  }
}
export default Meal;