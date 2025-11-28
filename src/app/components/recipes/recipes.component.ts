import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes = [
    { 
      id: 1, 
      name: 'Pasta Carbonara', 
      description: 'Creamy pasta with bacon and cheese', 
      category: 'Main Course',
      time: '20 min',
      servings: '4 people',
      difficulty: 'Medium',
      imageUrl: 'assets/images/pasta-carbonara.jpg'
    },
    { 
      id: 2, 
      name: 'Chocolate Cake', 
      description: 'Rich chocolate dessert', 
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
      category: 'Dessert',
      time: '60 min',
      servings: '6 slices',
      difficulty: 'Hard',
      imageUrl: 'assets/images/apple-pie.jpg'
    }
  ];

  searchTerm: string = '';
  selectedCategory: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 6;

  clearSearch() {
    this.searchTerm = '';
  }

  filteredRecipes() {
    let filtered = this.recipes;

    if (this.searchTerm) {
      filtered = filtered.filter(recipe => 
        recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        recipe.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(recipe => 
        recipe.category.toLowerCase().includes(this.selectedCategory.toLowerCase())
      );
    }

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  totalPages() {
    const totalFiltered = this.getAllFilteredRecipes().length;
    return Math.ceil(totalFiltered / this.itemsPerPage);
  }

  getAllFilteredRecipes() {
    let filtered = this.recipes;

    if (this.searchTerm) {
      filtered = filtered.filter(recipe => 
        recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        recipe.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(recipe => 
        recipe.category.toLowerCase().includes(this.selectedCategory.toLowerCase())
      );
    }

    return filtered;
  }

  getPages() {
    const pages = [];
    const total = this.totalPages();
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
    return pages;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }
}