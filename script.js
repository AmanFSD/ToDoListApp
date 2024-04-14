document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const input = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            const textSpan = document.createElement('span');
            textSpan.textContent = taskText;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '×'; // Using a cross symbol
            deleteBtn.classList.add('delete-btn'); // Add class for styling
            deleteBtn.setAttribute('aria-label', 'Delete task'); // Accessibility improvement

            // Append elements to list item
            listItem.appendChild(textSpan);
            listItem.appendChild(deleteBtn);

            // Add the whole item to the list
            taskList.appendChild(listItem);

            // Clear the input box
            input.value = '';

            // Event listener for the delete button
            deleteBtn.addEventListener('click', () => {
                listItem.remove();
            });

            // Optional: Toggle class "completed" on click (not on the button)
            listItem.addEventListener('click', (event) => {
                if (event.target === textSpan) { // Ensures clicking the text marks as complete
                    textSpan.classList.toggle('completed');
                }
            });
        }
    });
});
