function handleFormSubmit() {
    // We want to get all the input values from the form
    const formInputNames = [
        "eventName",
        "eventDetails",
        "eventEmail",
        "eventDate"
    ]
    // For each input field, we want to validate that the value passes certain conditions
    const formData = formInputNames.map((inputName) => {
        // Fetch input value
        const inputElement = document.getElementById("eventForm")[inputName]
        const inputValue = inputElement.value;
        // Validate that the user typed a name in
        if (inputName == "eventName" && inputValue.length == 0) {
            alert("Please type a name for your event!");
            return null;
        }
        // Validate that the user typed in event details
        if (inputName == "eventDetails" && inputValue.length < 10) {
            alert("Please add more details about your event");
            return null;
        }
        // Validate that the user included an @ symbol for their email
        if (inputName == "eventEmail" && !DoesContainAt(inputValue)) {
            alert("Please input a valid Email!");
            return null;
        }
        // Validate that the user has scheduled the event for a future date
        if (inputName == "eventDate" && !IsFurtherThanNow(inputValue)) {
            alert("Event cannot be in the past");
            return null;
        }
    })
    // If an input value fails to meet a condition, we want to alert the user to re-fill the input correctly
    checkFormValidInputs(formData);
}

function checkFormValidInputs(formData) {
    formData.includes(null) ? "" : alert("Form is valid!");
}

function DoesContainAt(inputString) {
    // do it with forEach, for, for of
    for (letter in inputString) {
        if (inputString[letter] == "@") {
            return true;
        }
    }
    return false;
}

function IsFurtherThanNow(inputDate) {
    if (Date.parse(inputDate) >= Date.now()) {
        return true;
    } else {
        return false;
    }
}