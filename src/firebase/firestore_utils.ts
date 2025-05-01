
import {collection, getDocs, addDoc} from 'firebase/firestore';
import {db} from './firebase_config';


export async function getWebData() {

  return getAllDocumentsFromCollection("Fitnova");

}
export async function getAllDocumentsFromCollection(collectionName:string): Promise<any> {
  try {
    const colRef = collection(db, collectionName);
    const colSnap = await getDocs(colRef);

    const docs:any = [];
    colSnap.forEach(doc => {
      docs.push({id:doc.id, ...doc.data()});
    });
    return docs;
  }catch (error) {
    console.error("Error getAllDocumentsFromCollection:", error);
  }
}
const rawRecipes = [
  { name: "Avocado Toast • Breakfast, High Protein", type: "Healthy", imageUrl: "avocado_toast.jpg" },
  { name: "Oatmeal Pancakes • Breakfast, Low Fat", type: "Sweet", imageUrl: "oatmeal_pancakes.jpg" },
  { name: "Grilled Chicken Salad • High Protein", type: "Healthy", imageUrl: "grilled_chicken_salad.jpg" },
  { name: "Banana Protein Smoothie • Snack, High Protein", type: "Quick", imageUrl: "banana_smoothie.webp" },
  { name: "Dark Chocolate Energy Balls • Snack", type: "Sweet", imageUrl: "dark_chocolate_energy_balls.jpg" },
  { name: "Quinoa & Veggie Bowl • Low Calorie", type: "Healthy", imageUrl: "quinoa_veggie_bowl.jpg" },
  { name: "Peanut Butter & Banana Toast • Breakfast", type: "Quick", imageUrl: "peanut_butter_banana_toast.jpg" },
  { name: "Greek Yogurt Parfait • Snack, High Protein", type: "Sweet", imageUrl: "greek_yogurt_parfait.jpg" },
  { name: "Salmon & Asparagus • High Protein", type: "Healthy", imageUrl: "salmon_asparagus.jpg" },
  { name: "Chia Pudding • Breakfast, Low Calorie", type: "Sweet", imageUrl: "chia_pudding.avif" },
  { name: "Cottage Cheese & Berries • Snack", type: "Low Calorie", imageUrl: "cottage_cheese_berries.jpeg" },
  { name: "Egg Muffins • Breakfast, High Protein", type: "Quick", imageUrl: "egg_muffins.jpg" },
  { name: "Zucchini Noodles with Pesto • Low Calorie", type: "Healthy", imageUrl: "zucchini_noodles_pesto.webp" },
  { name: "Protein Brownies • Sweet, High Protein", type: "Sweet", imageUrl: "protein_brownies.jpg" },
  { name: "Tuna Salad Wrap • Quick", type: "Low Calorie", imageUrl: "tuna_salad_wrap.jpg" },
  { name: "Almond Butter Rice Cakes • Snack", type: "Quick", imageUrl: "almond_butter_rice_cakes.jpg" },
  { name: "Berry Smoothie Bowl • Breakfast, Low Calorie", type: "Sweet", imageUrl: "berry_smoothie_bowl.jpg" },
  { name: "Hummus & Veggies • Snack", type: "Healthy", imageUrl: "hummus_veggies.jpg" },
  { name: "Grilled Turkey Breast • High Protein", type: "Healthy", imageUrl: "grilled_turkey_breast.jpg" },
  { name: "Coconut Protein Bars • Snack, High Protein", type: "Sweet", imageUrl: "coconut_protein_bars.webp" }
];

export async function bulkCreateRecipes(): Promise<void> {
  try {
    const colRef = collection(db, 'recipes');

    for (const item of rawRecipes) {
      const [namePart, categoriesPart] = item.name.split(' • ');
      const name = namePart.trim();
      const categories = categoriesPart ? categoriesPart.split(',').map(s => s.trim()) : [];

      const doc = {
        name,
        description: "", // Puedes editar luego
        imageUrl: item.imageUrl,
        categories,
        type: item.type
      };

      await addDoc(colRef, doc);
      console.log(`Receta añadida: ${name}`);
    }

    console.log("Todas las recetas han sido creadas.");
  } catch (error) {
    console.error("Error al crear recetas:", error);
  }
}

const rawExercises = [
  { name: "Biceps Curl - Arms", type: "Strength", image: "biceps_curl.jpg" },
  { name: "Lat Pulldown - Back", type: "Hypertrophy", image: "lat_pulldown.webp" },
  { name: "Bench Press - Chest", type: "Strength", image: "bench_press.jpg" },
  { name: "Deadlift - Full Body", type: "Strength", image: "deadlift.jpg" },
  { name: "Squat - Legs", type: "Strength", image: "squat.webp" },
  { name: "Leg Press - Legs", type: "Hypertrophy", image: "leg_press.jpg" },
  { name: "Shoulder Press - Shoulders", type: "Strength", image: "shoulder_press.jpg" },
  { name: "Tricep Dips - Arms", type: "Hypertrophy", image: "tricep_dips.jpg" },
  { name: "Pull-ups - Back", type: "Strength", image: "pull_ups.webp" },
  { name: "Plank - Core", type: "Resistance", image: "plank.jpeg" },
  { name: "Jump Rope - Full Body", type: "Cardio", image: "jump_rope.webp" },
  { name: "Rowing Machine - Back", type: "Cardio", image: "rowing_machine.webp" },
  { name: "Lunges - Legs", type: "Hypertrophy", image: "lunges.png" },
  { name: "Russian Twists - Core", type: "Resistance", image: "russian-twist.jpg" },
  { name: "Burpees - Full Body", type: "Cardio", image: "burpees.avif" },
  { name: "Cable Fly - Chest", type: "Hypertrophy", image: "cable_fly.jpg" },
  { name: "Seated Calf Raise - Calves", type: "Hypertrophy", image: "seated-calf-raise.webp" },
  { name: "Face Pull - Shoulders", type: "Hypertrophy", image: "face-pull.webp" },
  { name: "Battle Ropes - Arms", type: "Cardio", image: "battle_ropes.avif" },
  { name: "Leg Curls - Hamstrings", type: "Hypertrophy", image: "leg_curls.jpeg" }
];

export async function bulkCreateExercises(): Promise<void> {
  try {
    const colRef = collection(db, 'exercises');

    for (const item of rawExercises) {
      const parts = item.name.split(' - ');
      const name = parts[0].trim();
      const muscleGroup = parts[1] ? parts[1].trim() : 'Unknown';

      const doc = {
        name,
        description: "", // Puedes completarlo después
        imageName: item.image,
        muscleGroups: [muscleGroup],
        type: item.type
      };

      await addDoc(colRef, doc);
      console.log(`Ejercicio añadido: ${name}`);
    }

    console.log("Todos los ejercicios han sido creados.");
  } catch (error) {
    console.error("Error al crear ejercicios:", error);
  }
}
