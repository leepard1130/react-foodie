import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate delay
    return db.prepare('select * from meals').all();
}

export function getMealBySlug(mealSlug) {
    return db.prepare('select * from meals where slug = ?').get(mealSlug);
}

export function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true});
    meal.instructions = xss(meal.instructions);
}