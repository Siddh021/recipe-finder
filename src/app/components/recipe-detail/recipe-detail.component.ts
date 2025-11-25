import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const recipes = [
      { 
        id: 1, 
        name: 'Pasta Carbonara', 
        description: 'Creamy pasta with bacon and cheese', 
        ingredients: ['Pasta', 'Eggs', 'Bacon', 'Parmesan'],
        instructions: 'Cook pasta, mix with sauce, serve.',
        category: 'Main Course',
        time: '20 min',
        servings: '4 people',
        difficulty: 'Easy',
        imageUrl: 'assets/images/pasta-carbonara.jpg'
      },
      { 
        id: 2, 
        name: 'Chocolate Cake', 
        description: 'Rich chocolate dessert', 
        ingredients: ['Flour', 'Sugar', 'Cocoa', 'Eggs'],
        instructions: 'Mix ingredients, bake, cool, serve.',
        category: 'Dessert',
        time: '45 min',
        servings: '8 slices',
        difficulty: 'Easy',
        imageUrl: 'assets/images/choclate-cake.jpg'
      },
      { 
        id: 3, 
        name: 'Vegetable Stir Fry', 
        description: 'Healthy and quick stir fry', 
        ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce'],
        instructions: 'Stir fry vegetables, add sauce, serve.',
        category: 'Quick',
        time: '15 min',
        servings: '2 people',
        difficulty: 'Easy',
        imageUrl: 'assets/images/stir-fry-recipe.jpg'
      },
      { 
        id: 4, 
        name: 'Beef Tacos', 
        description: 'Spicy beef with fresh toppings', 
        ingredients: ['Ground Beef', 'Taco Shells', 'Lettuce', 'Tomato', 'Cheese'],
        instructions: 'Cook beef with seasonings, fill taco shells, add toppings.',
        category: 'Main Course',
        time: '25 min',
        servings: '4 people',
        difficulty: 'Medium',
        imageUrl: 'assets/images/beef-tacos.jpg'
      },
      { 
        id: 5, 
        name: 'Caesar Salad', 
        description: 'Fresh greens with creamy dressing', 
        ingredients: ['Romaine Lettuce', 'Caesar Dressing', 'Croutons', 'Parmesan'],
        instructions: 'Wash lettuce, add dressing, top with croutons and cheese.',
        category: 'Healthy',
        time: '10 min',
        servings: '2 people',
        difficulty: 'Easy',
        imageUrl: 'assets/images/caesar-salad.jpg'
      },
      { 
        id: 6, 
        name: 'Grilled Chicken', 
        description: 'Juicy chicken with herbs', 
        ingredients: ['Chicken Breast', 'Herbs', 'Olive Oil', 'Garlic'],
        instructions: 'Marinate chicken, grill until cooked through, serve.',
        category: 'Healthy',
        time: '35 min',
        servings: '4 people',
        difficulty: 'Medium',
        imageUrl: 'assets/images/grilled-chicken.jpg'
      },
      { 
        id: 7, 
        name: 'Spaghetti Bolognese', 
        description: 'Classic Italian pasta with meat sauce', 
        ingredients: ['Spaghetti', 'Ground Beef', 'Tomato Sauce', 'Onion', 'Garlic'],
        instructions: 'Cook sauce, boil pasta, combine and serve.',
        category: 'Main Course',
        time: '40 min',
        servings: '4 people',
        difficulty: 'Medium',
        imageUrl: 'assets/images/spaghetti-bolognese.jpg'
      },
      { 
        id: 8, 
        name: 'Fruit Smoothie', 
        description: 'Refreshing blend of fresh fruits', 
        ingredients: ['Banana', 'Berries', 'Milk', 'Honey'],
        instructions: 'Blend all ingredients until smooth, serve immediately.',
        category: 'Quick',
        time: '5 min',
        servings: '2 people',
        difficulty: 'Easy',
        imageUrl: 'assets/images/fruit-smoothie.jpg'
      },
      { 
        id: 9, 
        name: 'Apple Pie', 
        description: 'Traditional American dessert', 
        ingredients: ['Apples', 'Flour', 'Butter', 'Sugar', 'Cinnamon'],
        instructions: 'Prepare crust, fill with apples, bake until golden.',
        category: 'Dessert',
        time: '60 min',
        servings: '6 slices',
        difficulty: 'Hard',
        imageUrl: 'assets/images/apple-pie.jpg'
      }
    ];

    this.recipe = recipes.find(r => r.id === id);
  }

  getInstructionSteps() {
    if (!this.recipe?.instructions) return [];
    return [this.recipe.instructions];
  }
}