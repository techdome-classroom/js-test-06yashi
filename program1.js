const getTotalIsles = function (grid) {
  const exploreIsland = (grid, i, j) => {
    // Check if coordinates are out of bounds or if cell is water
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
        return;
    }

    // Mark current cell as visited
    grid[i][j] = 'W';

    // Explore adjacent cells (up, down, left, right)
    exploreIsland(grid, i - 1, j); // up
    exploreIsland(grid, i + 1, j); // down
    exploreIsland(grid, i, j - 1); // left
    exploreIsland(grid, i, j + 1); // right
};

let count = 0;

// Traverse the grid
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        // If current cell is land, explore the island
        if (grid[i][j] === 'L') {
            exploreIsland(grid, i, j);
            count++;
        }
    }
}

return count;


  
  };
  
  module.exports = getTotalIsles;


