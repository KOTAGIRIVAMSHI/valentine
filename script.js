document.getElementById('submitButton').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      // Generate a personalized link
      const personalizedLink = `valentine.html?name=${encodeURIComponent(name)}`;
      document.getElementById('personalLink').href = personalizedLink;
      document.getElementById('linkMessage').classList.remove('hidden');
    } else {
      alert('Please enter your name!');
    }
  });