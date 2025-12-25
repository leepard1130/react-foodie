import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate delay
    return db.prepare('select * from meals').all();
}

export function getMealBySlug(mealSlug) {
    return db.prepare('select * from meals where slug = ?').get(mealSlug);
}