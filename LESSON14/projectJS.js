document.addEventListener('DOMContentLoaded', function() {
    
    let mealPlanningForm = document.getElementById('mealPlanningForm');

    mealPlanningForm.addEventListener('submit', function(event) {

        // Prevent Form from Actually Submitting
        event.preventDefault();

        let email = document.getElementById('emailInput').value.trim();

        if (isValidEmail(email)) {
            
            mealPlanWindow();

        } else {

            alert('Please Enter a Valid Email Address.');

        }

    });

    // Function to Make the Meal Plan and Open in a New Window
    function mealPlanWindow() {

        let name = document.getElementById('nameInput').value.trim();
        let email = document.getElementById('emailInput').value.trim();
        let goal = document.getElementById('goalInput').value.trim();
        let breakfast = document.getElementById('breakfastInput').value.trim();
        let snack1 = document.getElementById('snack1Input').value.trim();
        let lunch = document.getElementById('lunchInput').value.trim();
        let snack2 = document.getElementById('snack2Input').value.trim();
        let dinner = document.getElementById('dinnerInput').value.trim();

        let mealPlanWindow = window.open('', '_blank');
        mealPlanWindow.document.write('<!DOCTYPE html><html><head><title>Meal Plan Page</title>');
        mealPlanWindow.document.write('<link rel="stylesheet" type="text/css" href="projectStyles.css"></head>');
        mealPlanWindow.document.write('<body><div class="userInfo"><h1>Meal Plan</h1><h2>User Information</h2>');
        mealPlanWindow.document.write('<p><strong>Name: </strong>' + name + '</p><p><strong>Email: </strong>' + email + '</p><p><strong>Goal: </strong>' + goal + '</p>');
        mealPlanWindow.document.write('<h2>Your Personalized Plan</h2></div><table>');
        mealPlanWindow.document.write('<tr><th>Meal</th><th>Food</th></tr>');
        mealPlanWindow.document.write('<tr><td class="time1">Breakfast</td><td>' + breakfast + '</td></tr>');
        mealPlanWindow.document.write('<tr><td class="time2">Snack 1</td><td>' + snack1 + '</td></tr>');
        mealPlanWindow.document.write('<tr><td class="time3">Lunch</td><td>' + lunch + '</td></tr>');
        mealPlanWindow.document.write('<tr><td class="time4">Snack 2</td><td>' + snack2 + '</td></tr>');
        mealPlanWindow.document.write('<tr><td class="time5">Dinner</td><td>' + dinner + '</td></tr>');
        mealPlanWindow.document.write('</table></body></html>');
        mealPlanWindow.document.close();

    };

    // Function to Validate Email
    function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

});